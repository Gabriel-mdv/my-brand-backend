import jwt from "jsonwebtoken";

// ___ get the authorization header ___ 

const verififyIsOwner = async (req, res, next) => {

    const authHeader = req.headers.authorization

    if (! authHeader)return res.status(400).json({message: "No token provided"})

    // ___ if the token is available extract the token from it ____ 
    
    const token = authHeader.split(" ")[1]


    // __ get information from the token ___  
    const tokenUser = jwt.verify(token, process.env.SECRET_KEY)

    if (! tokenUser) return res.status(400).json({message: "Invalid token"})
 

    if(! tokenUser.isOwner) return res.status(401).json({message: "Oops!! Unauthorized path taken!"})

    next()

    
}


export default verififyIsOwner;