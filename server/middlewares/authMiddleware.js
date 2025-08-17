import { clerkClient } from "@clerk/express";

//Middleware (Protect Admin Route)
export const protectAuthor = async (req, res, next) => {
    try {
        const userId = req.auth.userId;
        const response = await clerkClient.users.getUser(userId);

        if(response.publicMetadata.role !== 'admin') {
            return res.json({ success: false, message: 'Access denied. You are not an author.' });
        }

        next();
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}