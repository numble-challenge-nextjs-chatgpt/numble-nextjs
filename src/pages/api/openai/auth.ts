import { AxiosError } from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, Model, OpenAIApi } from 'openai';

type RequestData = {
  apiKey: string;
};

type ResponseData = {
  success: boolean;
  message?: string;
  modelList: Model[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  if (req.method === 'POST') {
    const apiKey = JSON.parse(req.body).apiKey;

    const configuration = new Configuration({
      apiKey,
    });

    try {
      const openai = new OpenAIApi(configuration);
      const response = await openai.listModels();

      return res.status(200).json({
        success: response.status === 200,
        modelList: response.data.data,
      });
    } catch (e) {
      // TODO: Handle error properly!
      const error = e as AxiosError;

      const statusCode = error.response?.status || 500;
      const message = error.response?.data?.error?.message || 'Unknown error';

      return res.status(statusCode).json({
        success: false,
        message: message,
        modelList: [],
      });
    }
  }
}
