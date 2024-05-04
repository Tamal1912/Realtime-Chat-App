import jwt from "jsonwebtoken"

const generateTokenAndSetCookie=(userId,res)=>{

      const token=jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"30d"
      })

      res.cookie("jwt",token,{
        maxAge:30*24*60*60*1000, // miliseconds format
        httpOnly:true,   // save from XSS attacks which known as cross-site scripting attacks
        sameSite:"strict", // CSRF attacks crosssite request forgery attacks 
        secure: process.env.NODE_ENV || "developement"
      });
}
export default generateTokenAndSetCookie;