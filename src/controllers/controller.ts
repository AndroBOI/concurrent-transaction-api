import { db } from "../db/index.js";
import { accounts } from "../db/schema.js";

import type { Request, Response } from "express";

export const hello = (req: Request, res: Response) => {
  res.send("Hello!");
};

export const hey = (req: Request, res: Response) => {
  res.send("Hey!");
};

export const greet = (req: Request, res: Response) => {
  const { name, age } = req.body;

  res.send(`Hello, ${name}! your age is ${age}`);
};

export const createAccount = async (req: Request, res: Response) => {
  const { name, balance } = req.body;

  const newAccount = await db
    .insert(accounts)
    .values({
      name,
      balance,
    })
    .returning();

  res.status(201).json(newAccount);
};
