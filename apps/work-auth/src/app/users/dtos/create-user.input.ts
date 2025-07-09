// src/app/users/dtos/create-user.input.ts
import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsStrongPassword } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @Field()
  @IsNotEmpty()
  @IsStrongPassword()
  password!: string;
}
