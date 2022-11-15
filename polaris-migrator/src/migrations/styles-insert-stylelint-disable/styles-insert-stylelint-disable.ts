import type {FileInfo} from 'jscodeshift';
import postcss, {Node, Comment, Plugin} from 'postcss';
import stylelint from 'stylelint';

const crossPlatformNewlineRegExp = /\r\n?|\n/;

const plugin = (): Plugin => {
  const polarisContextMsg =
    '-- polaris: generated by polaris-migrator DO NOT COPY';

  return {
    postcssPlugin: 'insert-stylelint-disable',
    Once(_, {result}) {
      result.messages.forEach(({node, text: failureMsg, line, endLine}) => {
        // If a polaris ignore comment exists above the node already,
        // do nothing
        if (node.prev()?.text?.includes(`-- polaris:`)) {
          return;
        }

        // If the node is disable comment missing a polaris context message,
        // append a generated context message
        if (failureMsg.includes('-- polaris:')) {
          node.text = `${node.text} ${polarisContextMsg}`;
          return;
        }

        const isMultiline =
          crossPlatformNewlineRegExp.test(node.value) ||
          crossPlatformNewlineRegExp.test(node.text) ||
          line < endLine;

        const commentText = `${
          isMultiline ? 'stylelint-disable' : 'stylelint-disable-next-line'
        } ${polarisContextMsg}`;

        const comment = createDisableComment(commentText, node.prev());

        node.before(comment);

        if (isMultiline) {
          node.type === 'atrule'
            ? node.prepend(createCommentNode('stylelint-enable'))
            : node.after(createCommentNode('stylelint-enable'));
        }

        deleteExtraNewlinesBeforeNode(node);
      });
    },
  };
};

export default async function insertStylelintDisable(file: FileInfo) {
  return postcss([
    stylelint({
      config: {
        extends: ['@shopify/stylelint-polaris'],
      },
    }) as Plugin,
    plugin(),
  ])
    .process(file.source, {
      from: file.path,
      syntax: require('postcss-scss'),
    })
    .then((result) => {
      return result.css;
    });
}

/**
 * Create a postcss comment node in the style:
 * `// ${text}`
 */
function createCommentNode(text: string): Comment {
  return new postcss.Comment({
    text,
    raws: {
      left: ' ',
      right: '',
      inline: true,
    },
  });
}

/**
 * Create a new disable comment with the given text.
 * If the prevNode and the text are both disable-next-line
 * comments, they are combined into a single comment with their
 * description texts seperated by a comma.
 */
function createDisableComment(text: string, prevNode: Comment): Comment {
  if (
    prevNode?.type !== 'comment' ||
    !prevNode.text.includes('stylelint-disable-next-line') ||
    !text.includes('stylelint-disable-next-line')
  ) {
    return createCommentNode(text);
  }

  const prevText = prevNode.text?.split('stylelint-disable-next-line ')?.[1];
  const commentText = prevText.length ? [text, prevText].join(', ') : text;

  prevNode.remove();

  return createCommentNode(commentText);
}

/**
 * Reduces the number of newline characters in a node's before
 * raws to just one. This is helpful to ensure that there is
 * only one newline between a disable-next-line comment and
 * the warning node.
 *
 */
function deleteExtraNewlinesBeforeNode(node: Node) {
  node.raws.before = `\n${node.raws.before.replace(
    new RegExp(crossPlatformNewlineRegExp, 'g'),
    '',
  )}`;
}
