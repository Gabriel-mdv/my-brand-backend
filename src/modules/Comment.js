import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true
    },
    content: {
        type: String,
    },
    blogId: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date
    }
})

const Comment = mongoose.model("Comment", commentSchema)


export default Comment

