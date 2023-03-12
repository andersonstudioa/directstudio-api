import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int, { description: 'ID of user' })
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
