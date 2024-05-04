import mongoose  from "mongoose";

const messageSchema= new mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    recieverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    message:{
        type:String,
        required:true
    }
}, //created at, updated at timings => EX => message.createdAt will give 12.34 pm
{timestamps:true}
)

const Message=mongoose.model("Message",messageSchema);

export default Message;