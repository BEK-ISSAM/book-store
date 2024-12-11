// Import required modules
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { PORT, mongoDBURL } from "./config.js";
import booksRoute from "./routes/booksRoute.js";


// Create an Express application
const app = express();

app.use(express.json());

// Middleware for handling CORS POLICY
//Option 1: Allow all Origins wiith Default of cors(*)
app.use(cors());

// Option 2: Allow custom Origins
// app.use(
//     cors({
//         origin: 'http://localhost:5173',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// )

// Define a route for the root URL ("/") that sends a response with status 200 and a message
app.get("/", (req, res) => {
    console.log(req);
    return res.status(234).send("Message to display - updated to check whether the pipeline really works");
});

app.use("/books", booksRoute)

// Connect to the MongoDB database using the provided URL
mongoose
    .connect(mongoDBURL)
    .then(() => {
        // If the connection is successful, start the Express application and listen on the specified port
        app.listen(PORT, () => {
            console.log(`App is listening on port: ${PORT}`);
        });
        // Log a message indicating successful connection to the database
        console.log("App connected to database");
    })
    .catch((error) => {
        // If an error occurs during database connection, log the error
        console.log(error);
    });
