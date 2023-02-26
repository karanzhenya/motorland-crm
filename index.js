import express from "express";
import mongoose from "mongoose";
import tasksRouter from "./tasksRouter.js";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(cors({                       //снимаем cors политику. Обязательно вверху кода!
    origin: '*'
}));
app.use(express.json());
app.use(tasksRouter);
dotenv.config();
mongoose.set("strictQuery", false);
const DB_URL=`mongodb+srv://karanzhenya:qwerty123@motorland-db.sx4wtw9.mongodb.net/?retryWrites=true&w=majority`

async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(process.env.PORT || 5005, () => {
            console.log(process.env.PORT)
        })
    } catch (e) {
        console.log(e)
    }
}

startApp();
