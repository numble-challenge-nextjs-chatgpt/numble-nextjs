import type { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: 'Hello world',
  });

  console.log(completion.data.choices[0].text);

  return res
    .status(200)
    .json({ message: completion.data.choices[0].text || 'no response' });
}
