import Comment from '../modules/Comment.js'


class commentController  {
    static async createComment(req, res){

        try{
            const {name, email, content, blogId} = req.body
            const comment = await Comment.create({name, email, content, blogId})

            // ______ check is if the email is already commented ____ 


            return res.status(201).json({
                ok: true,
                message: "comment Added",
                data: comment
            })

        }

        catch (error){
            console.log(error)
            return res.status(500).json({
                message: error.message
            })

        }

    }


    static async readComments (req, res){

        try{
            const  {blogId} = req.params
            const comments = await Comment.find({blogId})

            if(comments.length === 0){
                return res.status(400).json({
                    message: "Be the first to comment"
                })
            }

            return res.status(200).json({
                message: "commets were successfully found",
                data: comments
            })
        }
        catch(error){
            console.log(error)
            return res.status(400).json({
                    message: "server error happend sorry"
                })
            
        }

    }

}


export default commentController