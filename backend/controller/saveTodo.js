import TodoModel from "../models/todoModels.js";

const saveTodo=async (req,res)=>{

    const {title,description}= req.body
    const newTodo= new TodoModel({title,description})
    
    try {
        const savedTodo=await newTodo.save()
        console.log(savedTodo +"todo is save successfully");
        res.send(savedTodo +"todo is save successfully")
        
    } catch (error) {

        console.log(error +"todo is not save");
        res.send(error +"todo is not save")
    }


}

export default saveTodo