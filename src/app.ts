import express from "express";
import helloRouter from "./routes/routes.js";

const app = express();

app.use(express.json());

app.use("/", helloRouter);

export default app;
