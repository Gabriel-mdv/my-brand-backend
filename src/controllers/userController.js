import User from "../modules/User.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"



class userController{
    static async signup(req, res) {
        try{
            const {username, email, password} = req.body
            const isOwner = false

            const thereAreUsers = await User.find()
        
            if(!thereAreUsers){
                isOwner = true;
            }

            const hashedPassword = await bcrypt.hash(password, 10)
            const createdUser = await User.create({username, email, password: hashedPassword, isOwner})

            return res.status(201).json({
                message: "user Created successfully",
                data: createdUser
            })

        }
        catch(error){
            console.log(error)
            return res.status(500).json({
                message: error.message,
                code: error.code,             
            })
        }
    }

    // ___ VIEW USERS___  
    static async viewUsers (req, res){
        try{
            const allUsers =await User.find().maxTimeMS(50000)
            
            return res.status(302).json({
                message: "All Users successfully found",
                data: allUsers
            })

        }
        catch(error){
            console.log(error)
            return res.status(500).json({
                message: error.message,
                code: error.code,             
            })
        }
    }

    // _____login____ 

    static async login (req, res){
        try{
            const {email, password} = req.body

            const currentUser = await User.findOne({email})

            if(! currentUser){
                return res.status(402).json({
                    message: "invalid credentials",
                    
                })
            }

            // ___ conmpare password ____ \

            const checkpassword = await bcrypt.compare(password, currentUser.password)

            if (!checkpassword){
                return res.status(402).json({
                    message: "invalid credentiasl"
                })
            }


            // ____ if he still passes give hime a token ____ 
        const token = await jwt.sign({isOwner: currentUser.isOwner}, process.env.SECRET_KEY)

            return res.status(302).json({
                message: "User was found",
                data: {
                    email: currentUser.email
                }
,
                token: token
            })
            
            

        }
        catch(error){
            console.log(error)
            return res.status(500).json({
                message: error.message,
                code: error.code,             
            })
        }
        
    }
}


export default userController;