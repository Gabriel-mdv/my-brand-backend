import express from "express"
import projectController from "../controllers/projectController.js"



const router = express.Router()


router.get("/", projectController.showProjects)
router.get("/single/:id", projectController.singleProject)
router.post("/", projectController.createProject)
router.delete("/single/:id", projectController.deleteProject)





export default router