import express from 'express';
import { Book } from "../models/bookModel.js"

const router = express.Router();

// Route for adding books
router.post("/", async (req, res) => {
    try{
        if(
            // Validate required fields
            !req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({
                message: "Send all required fields: title, author, publishYear",
            });
        }

        // Create a new book using data from request body
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        };

        const book = await Book.create(newBook);

        // Send back the created book as a response
        return res.status(201).send(book);
    } catch(error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
});

// Route for getting all books
router.get("/", async (req, res) => {
    try {
        // Find the book by ID`
        const books = await Book.find({});
        if (!books) {
            return res.status(404).send({ message: "Book not found" });
        }
        // Send back the title of the found book as a response
        return res.status(200).json({
            count: books.length,
            data: books
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
});

// Route for getting one book by Id
router.get("/:id", async (req, res) => {
    try {
        // Find the book by ID
        const { id } = req.params;
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).send({ message: "Book not found" });
        }
        // Send back the found book as a response
        return res.status(200).json(book);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
});

// Route for updating a book
router.put("/:id", async (req, res) => {
    try{
        if(!req.body.title || !req.body.author || !req.body.publishYear){
            return res.status(400).send({
                message: "Send all required fields: title, author, publishYear",
            });
        }

        const { id } = req.params
        const result = await Book.findByIdAndUpdate(id, req.body);

        if(!result){
            return res.status(404).json({ message: "Book not found!" });
        }

        return res.status(200).send({ message: `Book updated successfully!` });
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);
    }
});

// Route for deleting a book
router.delete("/:id", async (req, res) => {
    try{
        const { id } = req.params;
        const result = await Book.findByIdAndDelete(id);

        if(!result){
            return res.status(400)
            .json({ message: `Book with id ${id} not found` });
        }
        
        return res.status(200).send({ message: `Book with id ${id} has been deleted` });

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

export default router;