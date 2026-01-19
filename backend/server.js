import express from "express";
import cors from "cors";
import studentRoutes from "./routes/studentRoutes.js";
import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';
import executecode from './services/executecode.js';
import autograde from './services/autograde.js';
import recommendation from './routes/recommendationRoute.js';
import hint from './routes/hintRoute.js';

dotenv.config();

//An Express application instance is created.
const app = express();

// PostgreSQL connection pool - using Neon DATABASE_URL
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true
});  

//adds the middleware to parse JSON bodies of incoming requests. Without this, request.body will be undefined
app.use(express.json());

//Cross origin resource sharing is a browser security feature that restricts 
//web pages from making requests to a different domain than the one that served the web page
app.use(cors({
    origin: "https://e-learning-platform-client.onrender.com", // Allow only requests from this origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow only these methods
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
    allowedHeaders: "Content-Type" //specifies the media type of the resource or the data being sent. 
}))

app.use('/students', studentRoutes);

app.use('/api', executecode);

app.use('/api', autograde);

app.use('/api', recommendation);

app.use('/api', hint);

app.use("/uploads", express.static("uploads"));


pool.connect()
.then(() => {
    console.log("Connected to PostgreSQL database");
    app.listen(process.env.PGPORT, () => {
        console.log(`App is listening to port: ${process.env.PGPORT}`);
    });
})
.catch(error => {
    console.error("Database connection error:", error);
});


//The pool is exported so other files (like route handlers) can reuse the same database connection pool
export {pool};
