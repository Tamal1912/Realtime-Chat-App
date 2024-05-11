import { set } from 'mongoose';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

export const useSignup = () => {
    const [loading,setLoading]=useState(false);
    
    const signup= async({fullName,username,password,confirmPassword,gender})=>{
       const success = handleInputErrors({fullName,username,password,confirmPassword,gender})
       if(!success) return;
       
       setLoading(true);

       try {
        const res=await fetch("http://localhost:5000/api/auth/signup",{
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({fullName,username,password,confirmPassword,gender}),
        })

        let data = await res.json();
        console.log(data);
       } catch (error) {
        toast.error(error.message);
       }finally{
        setLoading(false);
       }
      
    }

    return {loading,signup}
  
}

export default useSignup;

function handleInputErrors({fullName,username,password,confirmPassword,gender}){
    if(!fullName || !username || !password || !confirmPassword || !gender){
        toast.error("please fill all the fields");
        return false;
    }

    if(password !== confirmPassword){
        toast.error("password dont match, try again");
        return false;
    }
    
    if(password.length < 4){
        toast.error("password length must be 4 characters")
        return false;
    }

 return true;   
}