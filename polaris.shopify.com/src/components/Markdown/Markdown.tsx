import ReactMarkdown from "react-markdown";
import React from "react";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { Language } from "prism-react-renderer";

import { slugify } from "../../utils/various";

import Code from "../Code";

interface Props {
  text: string;
  skipH1?: boolean;
}

function Markdown({ text, skipH1 }: Props) {
  return (
    <ReactMarkdown
      remarkPlugins={[[remarkGfm, { tablePipeAlign: true }]]}
      rehypePlugins={[rehypeRaw]}
      components={{
        h1: ({ children }) => {
          return skipH1 ? <></> : <h1>{children}</h1>;
        },
        h2: ({ children }) => {
          if (children.length === 1 && typeof children[0] === "string") {
            return <h2 id={slugify(children[0])}>{children}</h2>;
          } else {
            return <h2>{children}</h2>;
          }
        },
        h3: ({ children }) => {
          if (children.length === 1 && typeof children[0] === "string") {
            return <h3 id={slugify(children[0])}>{children}</h3>;
          } else {
            return <h3>{children}</h3>;
          }
        },
        code: ({ inline, children, className }) => {
          const match = /language-(\w+)/.exec(className || "");
          const lang = match ? (match[1] as Language) : undefined;
          return inline ? (
            <code>{children}</code>
          ) : (
            <Code language={lang}>{children}</Code>
          );
        },
        table: ({ children }) => (
          <div className="table-wrapper">
            <table>{children}</table>
          </div>
        ),
      }}
    >
      {text}
    </ReactMarkdown>
  );
}

export default Markdown;
