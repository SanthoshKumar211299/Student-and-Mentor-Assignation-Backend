import cors from 'cors'
import express from 'express'
import dotenv from 'dotenv'
import { assignRouter } from "./Routers/assign.js";
import { mentorRouter } from "./Routers/mentor.js";
import { studentRoutes } from "./Routers/students.js";
import { dbConnect } from './db.js';





// Initializing the server
const app = express();

// config dotenv
dotenv.config();

const PORT = process.env.PORT ;

// connecting to Data Base
dbConnect();

// middlewares
app.use(express.json());
app.use(cors());

// application router
app.use('/mentor', mentorRouter);
app.use('/student', studentRoutes);
app.use('/assign', assignRouter);



// listening to server
app.listen(PORT, () => {
    console.log(`Server is running on Port`);
})