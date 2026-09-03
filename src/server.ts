import express, { type Response } from "express";

const app = express();

app.get("/", (req, res: Response) => {
  res.send("Hello, World!");
});

app.get("/about", (req, res: Response) => {
  res.send("About!");
});

app.post("/submit", (req: any, res: Response) => {
  const data = req.body;
  res.send(`Data received: ${JSON.stringify(data)}`);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
