import { ApolloServer } from "@apollo/server";
import { schema } from "./schema.js";
import { resolver } from "./resolvers.js";
import { startStandaloneServer } from "@apollo/server/standalone";
const port = 5000;

// createing GRaphQl Server
export const connectGraphQl = () => {
  
   const server = new ApolloServer({
    typeDefs: schema,
    resolvers: resolver,
  });

  startStandaloneServer(server, {
    listen: {
      port,
    },
  })
    .then(() => console.log(`server is working on http://localhost:${port}`))
    .catch(() => console.log("error while connecting startStandaloneServer"));

};
