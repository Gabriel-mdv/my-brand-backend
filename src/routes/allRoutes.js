import express from 'express'
import blogRoute from "./blogRoute.js"
// import userRoute from "./usersRoute.js"
import projectRoute from "./projectRoute.js"

const router = express.Router()


router.use("/blogs", blogRoute)
// router.use("/users", userRoute)
router.use("/projects", projectRoute)


export default router