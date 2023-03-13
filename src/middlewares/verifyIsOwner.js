import jwt from "jsonwebtoken";

// ___ get the authorization header ___ 

const verififyIsOwner = async (req, res, next) => {

    const cookie = req.headers.credentials;
    console.log(cookie)

    if (! cookie) return res.status(400).json({message: "No token provided"})

    // __ get information from the token ___  
    const tokenUser = jwt.verify(cookie, process.env.SECRET_KEY)

    if (! tokenUser) return res.status(400).json({message: "Invalid token"})
 

    if(! tokenUser.isOwner) return res.status(401).json({message: "Oops!! You are not authorized!"})

    next()

    
}


export default verififyIsOwner;