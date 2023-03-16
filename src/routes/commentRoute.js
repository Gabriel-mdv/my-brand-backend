import commentController from "../controllers/commentController.js";
import express from "express"

const router = express.Router()

router.get("/:blogId", commentController.readComments)
router.post("/", commentController.createComment)

export default router