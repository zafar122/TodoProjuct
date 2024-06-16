import TodoModel from "../models/todoModels.js";

const getTodo= async(req,res)=>{
const todo= await TodoModel.find()
res.json(todo)  

}


export default getTodo

