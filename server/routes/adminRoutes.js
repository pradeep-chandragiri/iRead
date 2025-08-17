import express from 'express';
import { addBook, updateRoleAdmin } from '../controllers/adminController.js';
import upload from '../configs/multer.js';
import { protectAuthor } from '../middlewares/authMiddleware.js';

const adminRouter = express.Router();

//add admin role
adminRouter.get('/add-admin', updateRoleAdmin);
adminRouter.post(
    "/add-book",
    upload.fields([
        { name: "thumbnail", maxCount: 1 },
        { name: "bookFile", maxCount: 1 }
    ]),
    protectAuthor,
    addBook
);
export default adminRouter;