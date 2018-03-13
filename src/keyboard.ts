import { Handler, Context, Callback } from 'aws-lambda';

interface IResponseBody {
  statusCode: number;
  body: string;
}

export const main: Handler = (event: any, context: Context, callback: Callback) => {
  const response: IResponseBody = {
    statusCode: 200,
    body: JSON.stringify({
      type: 'text'
    })
  }
  callback(undefined, response)
}