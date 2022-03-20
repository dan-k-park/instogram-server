import { PostResolver } from "./resolvers/post";
import "reflect-metadata";
import express from "express";
import session from "express-session";
import cors from "cors";
import mongoose from "mongoose";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

const main = async () => {
  mongoose.connect(
    "mongodb+srv://admin:eiViJt8qLt75hndH@instogramcluster.eafv1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    () => {
      console.log("COnnected to MongoDB");
    }
  );

  const app = express();

  app.use(
    cors({
      origin: process.env.CORS_ORIGIN,
      credentials: true,
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PostResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({
      req,
      res,
    }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app, cors: false });

  app.listen(4000, () => {
    console.log("Server started on port 4000");
  });
};

main().catch((err) => {
  console.error(err);
});
