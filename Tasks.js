import mongoose from "mongoose";

const Tasks = new mongoose.Schema({
    task_number: {type: Number, require: true},
    article: {type: Number, require: true},
    task_creator: {type: String, require: true},
    executor: {type: String, require: true},
    create_date: {type: String, require: true},
    execution_date: {type: String, require: true}
})

export default mongoose.model('Tasks', Tasks)