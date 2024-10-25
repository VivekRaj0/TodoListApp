import express from "express";
import  { signup,signin, logOutUser,createTodo,deleteTodo,updateTodo}  from "./controller.js";
import { verifyToken } from "./utils/auth.js";

const router = express.Router();


router.post("/signup", signup );
router.post("/signin", signin );
router.get("/logout", logOutUser );
router.post("/createTodo",createTodo)
router.post("/deleteTodo",deleteTodo)
router.post("/updateTodo",updateTodo)


export default router;