import { clerkClient } from '@clerk/express';
import Book from '../models/BookModel.js';
import { v2 as cloudinary } from 'cloudinary';

//Update user role to admin
//This function updates the user's role to admin in Clerk's user metadata
export const updateRoleAdmin = async (req, res) => {
    try {
        const userId = req.auth.userId;

        await clerkClient.users.updateUserMetadata(userId, {
            publicMetadata: {
                role: 'admin',
            }
        })

        res.json({  success: true, message: 'User role updated to admin.' });

    } catch (error) {
        res.json({  success: false, message: error.message });
    }
}

//Add Book
//This function adds a new book to the database
export const addBook = async (req, res) => {
  try {
    const { BookData } = req.body;
    const files = req.files;
    const authorId = req.auth.userId; // Clerk userId

    if (!files || !files.thumbnail || !files.bookFile) {
      return res.status(400).json({ 
        success: false, 
        message: "Book thumbnail and book file are required." 
      });
    }

    // Parse book data
    let parsedBookData;
    try {
      parsedBookData = JSON.parse(BookData);
    } catch (err) {
      return res.status(400).json({ success: false, message: "Invalid book data format." });
    }

    // Upload files to Cloudinary
    const [thumbnailUpload, bookFileUpload] = await Promise.all([
      cloudinary.uploader.upload(files.thumbnail[0].path, { folder: "iread/thumbnails" }),
      cloudinary.uploader.upload(files.bookFile[0].path, { folder: "iread/books", resource_type: "raw" }) // raw for PDF/epub
    ]);

    // Construct book object
    const bookToSave = {
      ...parsedBookData,
      authorId,
      bookThumbnail: thumbnailUpload.secure_url,
      bookFileUrl: bookFileUpload.secure_url,   // new field
    };

    // Save to DB
    const newBook = await Book.create(bookToSave);

    res.status(201).json({
      success: true,
      message: "Book added successfully.",
      bookId: newBook._id,
    });
  } catch (error) {
    console.error("Error adding book:", error);
    res.status(500).json({ success: false, message: "Server error: " + error.message });
  }
};
