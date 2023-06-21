import { applyDecorators } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
  ApiProperty,
  ApiUnauthorizedResponse,
  ApiOperation,
} from '@nestjs/swagger';

export const ApiOperationBase = ({
  summary,
  descriptionText,
}: ApiOperationBaseArgs) => {
  return ApiOperation({
    summary,
    description: descriptionText,
  });
};

interface ApiOperationBaseArgs {
  summary: string;
  descriptionText?: string;
}

export const AppHelloWorlApi = () => {
  return applyDecorators(
    ApiOperationBase({
      summary: 'Hello World',
      descriptionText: 'Hello World endpoint',
    }),
    ApiOkResponse({
      status: 200,
      description: 'The found record',
      type: String,
    }),
  );
};
