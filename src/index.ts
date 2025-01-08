import { expressMiddleware } from "@apollo/server/express4";
import bodyParser from "body-parser"; // For parsing JSON
import express from "express";
import { connectGraphQl } from "./graphql/server";
import { connectToDatabase } from "./config/database";
const PORT = process.env.PORT || 4000;

const startServer = async () => {
  const app = express();

  app.use(bodyParser.json());

  connectToDatabase()
  const server = connectGraphQl();
  await server.start();

  app.use("/graphql", expressMiddleware(server));

  app.get("/", (req, res) => {
    res.status(200).json({
      success: true,
      message: "Server is working fine",
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

startServer().catch((err) => {
  console.error("Error starting server:", err);
});
