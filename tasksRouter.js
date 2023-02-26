import {Router} from "express";
import TasksController from './TasksController.js'


const tasksRouter = new Router();

tasksRouter.get('/tasks', TasksController.getTasks)
tasksRouter.get('/tasks/:id', TasksController.getOneTask)
tasksRouter.get('/find_task/:article', TasksController.getTaskByArticle)
tasksRouter.post('/tasks', TasksController.addTask)
tasksRouter.put('/tasks', TasksController.updateTask)
tasksRouter.delete('/tasks/:id', TasksController.deleteTask)


export default tasksRouter;