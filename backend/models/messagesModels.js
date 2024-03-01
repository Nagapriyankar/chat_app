import mongoose from "mongoose";

const messagesSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message: {
        type: String,
        required: true
    },
}, { timestamps: true })
//contains createdAt, updatedAt

//const Message = mongoose.model("Message", messageSchema)



export default
    mongoose.models.Messages || mongoose.model("Messages", messagesSchema)
