import { getModelForClass, prop as Property } from "@typegoose/typegoose";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Comment {
  @Field()
  _id!: string;

  @Field()
  creatorId!: number;

  @Field()
  postId!: number;

  @Field()
  @Property()
  description: string;

  @Property({ type: () => [String] })
  likes: string[];
}

const CommentModel = getModelForClass(Comment);

export default CommentModel;
