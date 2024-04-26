import Conversation from "../models/conversationModels.js"
import Messages from "../models/messagesModels.js"
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
    try {

        const { id: receiverId } = req.params   //from req params
        const senderId = req.user._id     //from protectMiddleware
        const { message } = req.body      //frm req body

        //check if conversation between two user is already availale
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        })

        //if not, create new conversation
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            })
        }

        //create new message
        const newMessage = new Messages({
            senderId: senderId,
            receiverId: receiverId,
            message: message
        })

        //add new message id to conversation
        if (newMessage) {
            conversation.messages.push(newMessage._id)
        }

        //save to dtabase
        await conversation.save()
        await newMessage.save()

        //SOCKET FUNCTIONALITY HERE
        const ReceiverSocketId = getReceiverSocketId(receiverId)
        if (ReceiverSocketId) {
            //io.to(socketid).emit only send event to this specific client
            io.to(ReceiverSocketId).emit("newMessage", newMessage)

            //receive thee same in front end next - in client
        }


        res.status(200).json(newMessage)

    } catch (error) {
        console.log("Error in Send Message Controller", error.message);
        res.status(500).json({
            error: error.message
        })
    }
}

export const getMessages = async (req, res) => {
    try {
        const { id: userToChatId } = req.params
        const senderId = req.user._id
        
        //get conversation by participants : senderId, userToChatId
        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] }, 
        }).populate("messages")  //this will populate actual message itself , not just ref id

        if (!conversation) return res.status(200).json([])

        res.status(200).json(conversation.messages)

    } catch (error) {
        console.log("Error in get Message Controller", error.message);
        res.status(500).json({
            error: error.message
        })
    }
}