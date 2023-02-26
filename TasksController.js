import TasksService from "./TasksService.js";

class TasksController {
    async getTasks(req, res) {
        try {
            const tasks = await TasksService.getTasks()
            res.status(200).json(tasks)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOneTask(req, res) {
        try {
            const task = await TasksService.getOneTask(req.params.id)
            res.status(200).json(task)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getTaskByArticle(req, res) {
        try {
            const task = await TasksService.getTaskByArticle(req.params.article)
            res.status(200).json(task)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async addTask(req, res) {
        try {
            const newTask = await TasksService.addTask(req.body)
            res.status(200).json(newTask)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async updateTask(req, res) {
        try {
            const updatedTask = await TasksService.updateTask(req.body)
            res.status(200).json(updatedTask)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async deleteTask(req, res) {
        try {
            const deletedTask = await TasksService.deleteTask(req.params.id)
            res.status(200).json(deletedTask)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new TasksController();