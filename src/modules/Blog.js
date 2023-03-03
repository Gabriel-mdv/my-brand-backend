import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value) => {
                return value && value.length > 0
            },
            // to show this message in result
            message: "title should not be empty"
        }
    },
    description: {
        type: String,
        required: true,
        minLength: 20
    },
    content: {
        type: String,
        required: true,
        minLength: 100
    },
    image_url: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Blog = mongoose.model("Blog",blogSchema)

export default Blog