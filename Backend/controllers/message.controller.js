
import Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js"

export const sendMessage= async (req,res)=>{
try {
    const {message}=req.body;
    const {id:recieverId}=req.params;
    const senderId= req.user._id;

    let conversation = await Conversation.findOne({
        participants:{ $all : [ senderId , recieverId ]}
    })
    
  if(!conversation){
    conversation = await Conversation.create({
        participants: [ senderId , recieverId ]
    })
  }

  const newMessage = new Message({
    senderId,
    recieverId,
    message
  })

  if(newMessage){
    conversation.message.push(newMessage._id);
  }
  
  // **This will not run parallaly, will run one after another, for this its time consuming

//   await conversation.save();
//   await newMessage.save();

// ** (Optimised) This will run parallal, cause its using promise

 await Promise.all([conversation.save(),newMessage.save()]);

  res.status(201).json(newMessage);

} catch (error) {
    console.log("Error in sendMessage controller",error.message);
    res.status(500).json({error:"Internal Server Error"});
}
}

export const getMessages = async (req,res)=>{

    try {

        const {id:userToChatId}=req.params;
        const senderId=req.user._id;

        const conversation=await Conversation.findOne({
            participants:{$all : [ senderId , userToChatId ]}
        }).populate('message') // NOT REFERENCE BUT ACTUAL MESSAGES
        
        if(!conversation){
            return res.status(200).json([]);
        }

        const messages=conversation.message;
        
        res.status(200).json(messages)
    

    } catch (error) {
    console.log("Error in getMessage controller",error.message);
    res.status(500).json({error:"Internal Server Error"});
    }
}