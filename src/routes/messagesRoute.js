import messageController from "../controllers/messagesController.js";
import express from "express"

const router = express.Router()

router.get("/", messageController.readMessages)
router.post("/", messageController.createMessage)

export default router