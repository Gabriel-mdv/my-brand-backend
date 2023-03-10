import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import dotenv from "dotenv"
import morgan from "morgan"
import session from "express-session"
import mongodbSession from "connect-mongodb-session" 
import allRoutes from "./routes/allRoutes.js"
import Article from "../../demonstrate coockies/models/Article.js"



// ___ initialize our app ___ 
const app = express()


if(process.env.NODE_ENV === "development") app.use(morgan())
// ____ set the view engine ___ 
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: false}))


// ___ configure dotenv __  
dotenv.config()

// __ use cors and bodyParser ___ 
app.use(cors())
app.use(bodyParser.json())



// host and port
const host = process.env.HOST 
const port  = process.env.PORT 


// ____ routes ___ 

app.get("/", (req,res) => {
    res.render('blogs/allBlogs')
})


app.use("/api/v1", allRoutes)


// ___ start our session _____ 
app.use(session({
    secret: "this is my secret",
    resave: false,
    saveUninitialized: false,
}))

// ___ start our all routes ____ 




const con = () => mongoose.connect(process.env.MONGOOSE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const startServer = () => app.listen(port)


Promise.all([con(), startServer()])
    .then(() => {
        console.log("mongodb Connected")
        console.log(`server listening at http://${host}:${port}`)
    })
    .catch((error) => {
        console.log(error)
    })