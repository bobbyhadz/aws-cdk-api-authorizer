/* eslint-disable @typescript-eslint/require-await */
import {APIGatewayProxyEventV2, APIGatewayProxyResultV2} from 'aws-lambda';

export async function main(
  event: APIGatewayProxyEventV2,
): Promise<APIGatewayProxyResultV2> {
  console.log('This function can only be invoked by authorized users');
  console.log('event', JSON.stringify(event, null, 2));

  return {body: JSON.stringify({message: 'SUCCESS'}), statusCode: 200};
}
