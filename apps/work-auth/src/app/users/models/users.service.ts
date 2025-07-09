import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
//import { Prisma } from '@prisma-clients/work-auth';
import { hash } from 'bcryptjs';
import { CreateUserInput } from '../dtos/create-user.input';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(data: CreateUserInput){
    console.log('Received data in service:', data);
  console.log(' Received password:', data.password);
    if (!data.password) {
      throw new BadRequestException('Password is required');
    }

    const hashedPassword = await hash(data.password, 10);

    return this.prismaService.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });
  }
}
