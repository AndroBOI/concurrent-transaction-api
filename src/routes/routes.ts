import { Router } from "express";
import { hello, hey } from "../controllers/controller.js";

const router = Router();

router.get("/hello", hello);
router.get("/hey", hey);

export default router;