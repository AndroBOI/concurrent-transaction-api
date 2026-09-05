import { Router } from "express";
import {
  hello,
  hey,
  greet,
  createAccount,
  getAccounts,
  getAccountById,
} from "../controllers/controller.js";

const router = Router();

router.get("/hello", hello);
router.get("/hey", hey);
router.get("/accounts", getAccounts);
router.get("/get-account/:id", getAccountById);

router.post("/greet", greet);
router.post("/create-account", createAccount);

export default router;
