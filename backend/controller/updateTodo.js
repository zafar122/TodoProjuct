

import TodoModel from "../models/todoModels.js";

const updateTodo = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    try {

        const updatedTodo = await TodoModel.findByIdAndUpdate(
            id,
            { title, description },
            { new: true }
        );

        if (!updatedTodo) {
            return res.status(404).send("Todo not found");
        }
        res.send("Updated Successfully....");

    } catch (error) {

        console.log(error + "todo is not updateTodo");
        res.send("todo is not updateTodo");
    }


}

export default updateTodo