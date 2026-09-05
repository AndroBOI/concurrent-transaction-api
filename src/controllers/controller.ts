import { db } from "../db/index.js";
import { accounts } from "../db/schema.js";
import { eq } from "drizzle-orm";
import { createAccountSchema } from "../schemas/account.schemas.js";
import z from "zod";
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
  const result = createAccountSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      message: "Invalid request body",
      errors: z.treeifyError(result.error),
    });
  }

  const { name, balance } = result.data;

  try {
    const newAccount = await db
      .insert(accounts)
      .values({
        name,
        balance,
      })
      .returning();

    return res.status(201).json(newAccount);
  } catch (error: any) {
    console.error(error);

    if (error.cause?.code === "23505") {
      return res.status(409).json({
        message: "Account name already exists",
      });
    }

    return res.status(500).json({
      message: "Something went wrong while creating the account",
    });
  }
};

export const getAccounts = async (req: Request, res: Response) => {
  const allAccounts = await db.select().from(accounts);
  res.status(200).json(allAccounts);
};

export const getAccountById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const account = await db
    .select()
    .from(accounts)
    .where(eq(accounts.id, Number(id)));

  if (account.length === 0) {
    return res.status(404).json({ message: "Account not found" });
  }

  return res.json(account);
};
