import express from "express"
import blogController from "../controllers/blogController.js"
import verififyIsOwner from "../middlewares/verifyIsOwner.js"
const router = express.Router()

router.post("/", blogController.createBlog)
router.get("/", blogController.getBlogs)
router.put("/:id",verififyIsOwner, blogController.updateBlog)
router.delete("/:id",verififyIsOwner, blogController.deleteBlog)
router.get("/single/:id", blogController.singleBlog)
router.get("/category/:category", blogController.viewByCategory)

export default router