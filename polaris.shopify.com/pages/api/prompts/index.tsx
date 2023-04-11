import type {NextApiResponse, NextApiRequest} from 'next';
import {createChatCompletion, generateEmbedding, getSimilarBits} from 'synapse';
import allBits from '../../../scripts/synapse/bits/allBits.json' assert {type: 'json'};
import type {Bit, TemplateArgs, Message} from 'synapse';

const messagesTemplate = (args: TemplateArgs, similarBits?: Bit[]) => {
  const context = similarBits?.map((bit) => bit.text).join('\n');

  return [
    {
      role: 'system',
      // content: `Answer the question as accurately and thoroughly as possible using the provided context, and if you don't have the answer, say "I don't know".
      // If you have the answer, always start your answer with a { and end your answer with a }`,
      content: `Answer the question as accurately and thoroughly as possible using the provided context, and if you don't have the answer, say "I don't know".
      If you have the answer, respond using markdown. If the prompt starts with ~ui return only the Polaris react and css code that I can take and render on the page.`,
    },
    {
      role: 'user',
      content: `
        Context: ${context}
        Question: ${args.input}
      `,
    },
    {
      role: 'assistant',
      content: 'Answer:',
    },
  ] as Message[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const input = Array.isArray(req.query.p)
    ? req.query.p.join(' ')
    : req.query.p;

  // const input = 'What does the Alpha Stack component do?';

  if (!input) return res.status(400).send('A question must be provided');

  try {
    // const aiResponse = await createContextualChatCompletion(
    //   {input},
    //   messagesTemplate,
    //   [...context.bits],
    // );

    // need to handle if it fails
    // console.log(allContext.bits);
    const embeddedInput = await generateEmbedding(input);
    // console.log(allBits.bits);
    // throw 'eh';
    const similarBits = getSimilarBits(embeddedInput, allBits.bits, 1500);
    // console.log(similarBits);
    const messages = messagesTemplate({input}, similarBits);
    const completion = await createChatCompletion(messages);

    let mostSimilar = [];

    for (let i = 0; i <= 4; i++) {
      mostSimilar.push(similarBits[i]?.slug);
    }

    return res.send({messages, completion, mostSimilar});
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
}