import PostModel, { Post } from "../models/Post";
import { Context } from "src/types";
import { Ctx, Query, Resolver } from "type-graphql";

@Resolver()
export class PostResolver {
  @Query(() => [Post])
  posts() {
    return PostModel.find({});
  }
}
