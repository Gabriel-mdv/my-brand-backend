import express from 'express'
import blogRoute from "./blogRoute.js"
import userRoute from './userRoute.js'
import projectRoute from "./projectRoute.js"
// import messageRoute from "./messagesRoute.js"
const router = express.Router()


router.use("/blogs", blogRoute)
router.use("/users", userRoute)
router.use("/projects", projectRoute)
// router.use("/messages", messageRoute)


export default router