import { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const query = req.query.q as string;
  const language = req.query.lang as string || 'English';
  const queryType = req.query.type as string || 'text';
  const metadata = req.query.metadata as string || '';

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai: OpenAIApi = new OpenAIApi(configuration);

  /*  const translateResponse = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `translate ${query} from ${language} to English`,
    });

    const translatedQuery = translateResponse.data.choices[0].text;*/

  let q = '';
  switch (queryType) {
    case 'symptom':
      q = `Highlight the symptoms from this text: ${query}`;
      break;
    case 'mood':
      q = 'A short quote to lift your spirits';
      break;
    case 'question':
      q = `What to ask a person who has: ${query}. Write answers to these questions`;
      break;
    default:
      q = query;
      break;
  }

  let resp = '';

  let response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: q,
  });
  const meta = response.data.choices[0].text;

  response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `I am a highly intelligent bot answering questions. I have to compose a leading question to a sick person to know his diangoosis in more detail. Sick person's symptoms:  ${meta}`,
  });

  resp = response.data.choices[0].text || 'No answer found';

  return res.status(200).json(resp);
}