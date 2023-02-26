import Tasks from './Tasks.js';

class TasksService {
    async getTasks() {
        const tasks = await Tasks.find()
        return tasks
    }

    async getOneTask(id) {
        if (!id) {
            throw new Error('id missed!')
        }
        const task = await Tasks.findById(id)
        return task
    }

    async getTaskByArticle(article) {
        if (!article) {
            throw new Error('article missed!')
        }
        const findedTask = await Tasks.find({article: article})
        return findedTask
    }

    async addTask(newTask) {
        const createdTask = await Tasks.create(newTask)
        return createdTask
    }

    async updateTask(task) {
        const updatedTask = await Tasks.findByIdAndUpdate(task._id, task, {new: true})
        return updatedTask
    }

    async deleteTask(id) {
        const deletedTask = await Tasks.findByIdAndDelete(id)
        return deletedTask
    }
}

export default new TasksService();