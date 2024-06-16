import { Router } from "express";
import getTodo from "../controller/todoController.js"
import saveTodo from "../controller/saveTodo.js"
import updateTodo from "../controller/updateTodo.js"
import deleteTodo from "../controller/deleteTodo.js"


const router = Router();

router.get("/get",getTodo);

router.post("/post",saveTodo);

router.put("/put/:id",updateTodo);

router.delete("/delete/:id",deleteTodo);



export default router;