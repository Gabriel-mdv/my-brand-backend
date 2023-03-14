import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        validate: {
            validator:(value) =>{
                return value && value.length> 0
            },
            message: "name must be longer than 0"
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator:(value) =>{
                return value && value.length> 0
            },
            message: "name must be longer than 0"
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 3    
    },
    isOwner:{
        type: Boolean,
        required: true
    }

   
})


const User = mongoose.model("Visitor", userSchema)

export default User