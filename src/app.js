import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

//import

const app = express();

app.use(cors())
app.use(express.json())

//app.use

const port = process.env.port

app.listen(port, () => console.log(`Server running in port: ${port}`));