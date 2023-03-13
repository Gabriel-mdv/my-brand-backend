import express from "express"
import blogController from "../controllers/blogController.js"
import verififyIsOwner from "../middlewares/verifyIsOwner.js"
const router = express.Router()
// import multer from 'multer'
// import path from 'path'

// const storage = multer.diskStorage({
// 	destination: (req, file, callback) => {
// 		callback(null, '../assets');
// 	},
// 	filename: (req, file, callback) => {
// 		const extension = path.extname(file.originalname);
// 		const basename = path.basename(file.originalname, extension);
// 		callback(null, `${basename}-${Date.now()}${extension}`);
// 	}
// });


// const upload = multer({storage: storage});
// const upload = multer({dest: '../assets'})


// router.post("/",upload.single('url_image'),  (req, res) => {
//     console.log(req.file)
// })

router.post("/", blogController.createBlog)
router.get("/", blogController.getBlogs)
router.put("/:id", blogController.updateBlog)
router.delete("/:id", blogController.deleteBlog)
router.get("/single/:id", blogController.singleBlog)
router.get("/category/:category", blogController.viewByCategory)

export default router