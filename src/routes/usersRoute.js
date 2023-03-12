import express from "express"


import usersController from "../controllers/usersController.js"
// import verififyIsOwner from "../middlewares/verifyIsOwner.js"

const router = express.Router()

router.post("/signup", usersController.signup)
router.post("/login", usersController.login)
router.get("/", usersController.viewUsers)

export default router
