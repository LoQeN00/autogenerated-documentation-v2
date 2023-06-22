import { UserDto } from './dtos/create-user.dto';
import { applyDecorators } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
  ApiProperty,
  ApiUnauthorizedResponse,
  ApiOperation,
  ApiResponse,
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
      descriptionText: 'Hello World endpoint description asd',
    }),
    ApiOkResponse({
      status: 200,
      description: 'The found record TEST TEST',
      type: String,
    }),
  );
};

export const UsersApi = () => {
  return applyDecorators(
    ApiOperationBase({
      summary: 'Get Users',
      descriptionText: 'Endpoint for getting all users',
    }),
    ApiOkResponse({
      status: 200,
      description: 'All users',
      type: String,
    }),
  );
};

export const CreateUserApi = () => {
  return applyDecorators(
    ApiOperationBase({
      summary: 'Create User',
      descriptionText: 'Endpoint for creating a user',
    }),
    ApiOkResponse({
      status: 200,
      description: 'The created user',
      type: UserDto,
    }),
  );
};

export const TestApi = () => {
  return applyDecorators(
    ApiOperationBase({
      summary: 'Test',
      descriptionText: 'test',
    }),
    ApiOkResponse({
      status: 200,
      description: 'test',
      type: String,
    }),
  );
};
