import { getModelForClass, prop as Property } from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class User extends TimeStamps {
  @Field()
  _id!: string;

  @Field()
  @Property({ required: true, unique: true })
  username!: string;

  @Property({ required: true, unique: true })
  email: string;

  @Field()
  @Property({ required: true })
  password!: string;

  @Field()
  @Property()
  avatar?: string;

  @Property()
  bio: string;

  @Property({ type: () => [String] })
  followers: string[];

  @Property({ type: () => [String] })
  following: string[];
}

const UserModel = getModelForClass(User);

export default UserModel;
