import { Handler, Context, Callback } from 'aws-lambda';

interface IResponseBody {
  statusCode: number;
  body: string;
}

export const main: Handler = (event: any, context: Context, callback: Callback) => {
  console.log(`메시지가 수신되었습니다: ${JSON.stringify(event)}`)
  
  const response: IResponseBody = {
    statusCode: 200,
    body: JSON.stringify({
      type: 'text'
    })
  }
  callback(undefined, response)
}