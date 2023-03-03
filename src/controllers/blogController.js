import Blog from "../modules/Blog.js"

class blogController {
    static async createBlog(req, res) {
        try{
            const {title, description, content, category, image_url} = req.body
            const createdBlog = await Blog.create({title, description, content, category, image_url})

            return res.status(201).json({
                message: "Blog Created successfully",
                data: createdBlog
            })

        }
        catch(error){
            console.log(error)
            return res.status(500).json({
                message: error.message,
                code: error.code,             
            })
        }
    }

    // ___ GET ALL BLOGS ___  
    static async getBlogs (req, res){
        try{
            const allBlogs =await Blog.find()
            
            return res.status(302).json({
                message: "All Blogs successfully found",
                data: allBlogs
            })

        }
        catch(error){
            console.log(error)
            return res.status(500).json({
                message: error.message,
                code: error.code,             
            })
        }
    }

    // ___SINGLE BLOG ____   
    static async singleBlog (req, res){
        try{
            const {id} = req.params
            const single = await Blog.findById({_id: id})

            return res.status(302).json({
                message: "Read Your blog. It is shown below",
                data: single
            })

        }
        catch(error){
            console.log(error)
            return res.status(500).json({
                message: error.message,
                code: error.code,             
            })
        }
        
    }

    // ___ UPDATE BLOG ____ 
    static async updateBlog(req, res){
        try{
            const {id} = req.params
            const {description, content} = req.body

            const updatedBlog = await Blog.findByIdAndUpdate({_id: id}, {description, content}, {new: true})

            if(! updatedBlog){
                return res.status(404).json({
                    message: `Blog with id: ${id} is not found`
                })
            }
            
            return res.status(302).json({
                message: "Blog successfully updated",
                data: updatedBlog
            })


        }
        catch(error){
            console.log(error)
            return res.status(500).json({
                message: error.message,
                code: error.code,             
            })
        }
    }

// -----DELETE _____ 
static async deleteBlog(req, res){
    try{
        const {id} = req.params
        const deletedBlog = await Blog.findByIdAndDelete({_id: id})

        if(! deletedBlog){
            return res.status(402).json({
                message: `blog with id: ${id} is not avilable in our collection`
            })
        }

        return res.status(202).json({
            message: "Blog was successuly deleted",
            data: deletedBlog
        })

    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            message: error.message,
            code: error.code,             
        })
    }
    
}

static async viewByCategory(req, res){
    try{
        const {category} = req.paramas
        const allBlogs = Blog.find({category})

        return res.status(302).json({
            message: `blogs in category ${category} are listed below`,
            data: allBlogs
        })

    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            message: error.message,
            code: error.code,             
        })
    }
}
}

export default blogController