import User from "../models/user.model.js";



export const getUserForSidebar= async (req,res)=>{
  
    try {
        const loggedInUserId=req.user._id;
        const filteredUsers= await User.find( { _id:{ $ne : loggedInUserId} } ).select("-password").select("-username")
        res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("Error In user Side Controller\n",error.messsage);
        res.status(500).json({error:"Internal Server Error"});
    }
}