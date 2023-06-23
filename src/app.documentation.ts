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
  ApiBody,
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

export const GetUserByIdApi = () => {
  return applyDecorators(
    ApiOperationBase({
      summary: 'Get User By Id',
      descriptionText: 'Endpoint for getting a user by id',
    }),
    ApiOkResponse({
      status: 200,
      description: 'The found user',
      type: UserDto,
    }),
    ApiNotFoundResponse({
      status: 404,
      description: 'User not found',
    }),
    ApiParam({
      name: 'id',
      type: 'number',
      description: 'Id of the user',
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

export const UpdateUserApi = () => {
  return applyDecorators(
    ApiOperationBase({
      summary: 'Update User',
      descriptionText: 'Endpoint for updating a user',
    }),
    ApiBody({
      type: UserDto,
      examples: {
        user: {
          value: {
            name: 'John Doe',
            age: 30,
            email: 'asd@o2.pl',
            password: '123',
            address: 'Warsaw',
          },
        },
      },
    }),
    ApiOkResponse({
      status: 200,
      description: 'The updated user',
      type: UserDto,
    }),
    ApiNotFoundResponse({
      status: 404,
      description: 'User not found',
    }),
    ApiParam({
      name: 'id',
      type: 'number',
      description: 'Id of the user',
    }),
  );
};

export const DeleteUserApi = () => {
  return applyDecorators(
    ApiOperationBase({
      summary: 'Delete User',
      descriptionText: 'Endpoint for delete a user',
    }),
    ApiOkResponse({
      status: 200,
      description: 'Ok',
    }),
    ApiNotFoundResponse({
      status: 404,
      description: 'User not found',
    }),
    ApiParam({
      name: 'id',
      type: 'number',
      description: 'Id of the user',
    }),
  );
};
