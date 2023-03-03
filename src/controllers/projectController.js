import Project from '../modules/project.js'

class projectController  {
    static async createProject(req, res){

        try{
            const {name, description} = req.body
            const project = await Project.create({name, description})


            return res.status(201).json({
                message: "project created",
                data: project
            })

        }

        catch (error){
            console.log(error)
            return res.status(500).json({
                message: error.message
            })

        }

    }

    static async showProjects (req, res){

        try{
            const projects = await Project.find()

            if(! projects){
                return res.status(400).json({
                    message: "porjects were not found"
                })
            }

            return res.status(200).json({
                message: "projects were successfully found",
                data: projects
            })
        }
        catch(error){
            console.log(error)
            return res.status(400).json({
                    message: "server error"
                })
            
        }

    }

    static async deleteProject(req, res){
        try {
            const {id} = req.params

            const projectToDelet = await Project.findOne({_id: id})
            if (! projectToDelet){
                return res.status(400).json({
                    message: `project with id ${id} does not exist`
                })
            }

            const deletedProject = await Project.findByIdAndDelete({_id: id})

            if (! deletedProject){
                return res.status(404).json({
                    message: "project was not deleted", 
                    data: deletedProject
                })
            }

            return res.status(200).json({
               message: "we have an error in deletinon"
            })


        }
        catch(error){
            console.log(error)
            return res.status(404).json({
                 message: error.message
            })
        }
    }


    // ________ single project display _________ 

    static async singleProject(req, res){
        try{
            const {id} = req.params
            const project1 =await Project.findById({_id: id})

            if(!project1){
                return res.status(300).json({
                    message: `project with id: ${id} was not found`,
                })
            }
            
            return res.status(200).json({
                message: "project found",
                data: project1
            })

        }
        catch(error){
            console.log(error)
            return res.status(400).json({
                message: "The display of a single project failed in the server",
                error: error.message
            })
        }
    }

}


export default projectController