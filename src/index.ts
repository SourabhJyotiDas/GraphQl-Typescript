import express from "express";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { connectToDatabase } from "./config/database";
import { getAllUsers, getUserById } from "./controllers/user";
import { schema } from "./graphql/schema";
import { getAllPosts, getPostById } from "./controllers/post";

const app = express();
const port = 5000;

connectToDatabase();

app.use(express.json());

// createing GRaphQl Server
const server = new ApolloServer({
  typeDefs: schema,
  resolvers: {
    Query: {
      users: getAllUsers,
      posts: getAllPosts,
      post: getPostById,
    },
    // Post: {
    //   owner: async (parent) => {
    //     return await getUserById(parent.owner._id);
    //   },
    // },
  },
});

startStandaloneServer(server, {
  listen: {
    port,
  },
})
  .then(() => console.log(`server is working on http://localhost:${port}`))
  .catch(() => console.log("error while connecting startStandaloneServer"));

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Working fine",
  });
});
