import Message from '../modules/Message.js'


class messageController  {
    static async createMessage(req, res){

        try{
            const {name, email, content} = req.body
            const project = await Message.create({name, email, content})


            return res.status(201).json({
                message: "Message Sent",
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


    static async readMessages (req, res){

        try{
            const messages = await Message.find()

            if(! messages){
                return res.status(400).json({
                    message: "messages were not found"
                })
            }

            return res.status(200).json({
                message: "messages were successfully found",
                data: messages
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


export default messageController