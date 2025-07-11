import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { User } from '../users/models/user.model';
import { LoginInput } from './dtos/login.input';
import type { GqlContext } from '@work-pack/nestjs';
import { AuthService } from './auth.service';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}
  @Mutation(() => User)
  async login(
    @Args('loginInput') loginInput: LoginInput,
    @Context() context: GqlContext
  ) {
    return this.authService.login(loginInput, context.res);
  }
}
