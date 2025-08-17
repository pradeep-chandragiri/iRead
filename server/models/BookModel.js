import mongoose from "mongoose";

//Book Schema
const bookSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        author: { type: String, required: true },
        genre: { type: [String], required: true },
        coverImageUrl: { type: String, required: true },
        fileUrl: { type: String, required: true },
        totalPages: { type: Number, required: true },
    }
)

const Book = mongoose.model("Book", bookSchema);

export default Book;