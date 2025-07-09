import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { User } from './user.model';
import { UsersService } from './users.service';
import { CreateUserInput } from '../dtos/create-user.input';

@Resolver(()=> User)
export class UsersResolver {
    constructor(private readonly usersService: UsersService){}

    @Mutation(()=> User)
    async createUser(@Args('createUserInput', { type: () => CreateUserInput }) createUserInput:CreateUserInput){
        console.log('🚀 Reached resolver with input:', createUserInput);
        return this.usersService.createUser(createUserInput)
    }
     @Query(()=> [User], {name: 'users'})
    // eslint-disable-next-line @typescript-eslint/no-empty-function
     async getUsers(){}
}
