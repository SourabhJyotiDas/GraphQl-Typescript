import express from "express";
import { connectToDatabase } from "./config/database.js";
import { connectGraphQl } from "./graphql/server.js";

const app = express();

connectToDatabase();
connectGraphQl();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Working fine",
  });
});
