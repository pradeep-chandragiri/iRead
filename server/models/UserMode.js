import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        _id: { type: String, required: true },
        name: { type: String, required: true },
        email: { type: String, required: true },
        imageURL: { type: String, required: true },
        role: { type: String, required: true, default: 'user' },
    }, { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;