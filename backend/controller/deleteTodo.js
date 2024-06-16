import TodoModel from "../models/todoModels.js";

const deleteTodo =async (req, res) => {
    const { id } = req.params;
    try {
        const deletedTodo = await TodoModel.findByIdAndDelete(id);

        if (!deletedTodo) {
            return res.status(404).send("Todo not found");
        }
     res.send("deleteTodo Successfully....");

    } catch (error) {

        console.log(error + "todo is not delete");
        res.send("todo is not delete");
    }


}

export default deleteTodo