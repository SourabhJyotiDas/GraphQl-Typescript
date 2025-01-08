import { ApolloServer } from "@apollo/server";
import { resolver } from "./resolvers";
import { schema } from "./schema.js";
const port = 5000;

// createing GRaphQl Server
export const connectGraphQl = () => {
  
   const server = new ApolloServer({
    typeDefs: schema,
    resolvers: resolver,
  });

 return server;

};
