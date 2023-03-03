import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        minLength: 12
    },
    createdAt: {
        type: Date,
        default: Date.now 
    }
})

const Project = mongoose.model("Project", projectSchema)


export default Project

