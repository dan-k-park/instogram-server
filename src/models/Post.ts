import { getModelForClass, prop as Property } from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { Field, ObjectType } from "type-graphql";

// Object type lets graphql know it's a graphql type
// Timestamps should give updatedat and createdat
@ObjectType()
export class Post extends TimeStamps {
  @Field()
  _id!: string;

  @Field()
  @Property()
  creatorId!: number;

  @Field()
  @Property()
  imgUrl!: string;

  @Field()
  @Property()
  description: string;

  @Field(() => [String])
  @Property({ type: () => [String] })
  likes: string[];

  @Field(() => [String])
  @Property({ type: () => [String] })
  comments: string[];
}

const PostModel = getModelForClass(Post);

export default PostModel;
