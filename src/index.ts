import express from "express";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { connectToDatabase } from "./config/database";
import { getAllUsers } from "./controllers/user";
import { userSchema } from "./graphql/user";
import { productSchema } from "./graphql/product";
import { getAllProducts, getProductById } from "./controllers/product";

const app = express();
const port = 5000;

connectToDatabase();

app.use(express.json());

// createing GRaphQl Server
const server = new ApolloServer({
  typeDefs: [userSchema, productSchema],
  resolvers: {
    Query: {
      users: getAllUsers,
      products: getAllProducts,
      product:getProductById
    },
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
