import { Router } from "express";
import { hello, hey, greet, createAccount } from "../controllers/controller.js";

const router = Router();

router.get("/hello", hello);
router.get("/hey", hey);
router.post("/greet", greet);
router.post("/create-account", createAccount);

export default router;
