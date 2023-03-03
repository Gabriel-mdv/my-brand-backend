import express from "express"
import userscontroller from "../controllers/usersController.js"
import verififyIsOwner from "../middlewares/verifyIsOwner.js"

const router = express.Router()

router.post("/signup", userscontroller.signup)
router.post("/login", userscontroller.login)
router.get("/",verififyIsOwner, userscontroller.viewUsers)


export default router
