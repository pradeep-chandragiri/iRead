import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        _Id: { type: String, required: true },
        email: { type: String, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        role: { type: String, required: true, default: 'user' },
        interestedGenres: { type: [String], default: [] },
        profilePicture: { type: String, required: true },
    }, { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;