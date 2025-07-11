import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaModule } from './prisma/prisma.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersModule } from './users/models/users.module';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { Request, Response } from 'express';

@Module({
  imports: [
    ConfigModule,
    PrismaModule,
    UsersModule,
    AuthModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      context: ({ req, res }: { req: Request; res: Response }) => ({
        req,
        res,
      }),
      autoSchemaFile: true,
      include: [UsersModule, AuthModule],
      playground: {
        settings: {
          'request.credentials': 'include',
          'schema.polling.enable': false,
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
