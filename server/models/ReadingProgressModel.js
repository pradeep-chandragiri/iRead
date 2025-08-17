import mongoose from "mongoose";

// Reading Progress Schema
const readingProgressSchema = new mongoose.Schema(
    {
        userId: { type: String, ref: 'User', required: true },
        bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
        currentPage: { type: Number, required: true, default: 0 },
        totalPages: { type: Number, required: true },
        progressPercent: { type: Number, required: false, default: 0 },
        lastReadDate: { type: Date, required: true, default: Date.now },
    }, 
    { timestamps: true }
)

readingProgressSchema.pre('save', function (next) {
    if (this.totalPages > 0) {
        this.progressPercent = (this.currentPage / this.totalPages) * 100;
    }
    next();
});

const ReadingProgress = mongoose.model("ReadingProgress", readingProgressSchema);

export default ReadingProgress;