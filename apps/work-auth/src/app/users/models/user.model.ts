import { Field, ObjectType } from "@nestjs/graphql";
import { AbstractModel } from "@work-pack/nestjs";

@ObjectType()
export class User extends AbstractModel{
    @Field()
     override email!: string;
}