import express from "express";
import cors from 'cors'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from "morgan";
import connectDatabase from "./config/db.js";
const app = express();

dotenv.config();

app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
connectDatabase();

const PORT = 5050 || process.env.PORT;
app.listen(PORT,()  =>{
    console.log(`Server Started At PORT ${PORT || process.env.PORT}`.bgBlue);
})