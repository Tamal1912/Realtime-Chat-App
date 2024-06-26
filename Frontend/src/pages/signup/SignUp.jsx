import React, { useState } from 'react';
import GenderCheckbox from './GenderCheckbox';
import { Link } from "react-router-dom";
import useSignup from '../../hooks/useSignup';


const SignUp = () => {
    const [input, setInput] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: ""
    }); 

    const {loading,signup}=useSignup()
    


    const handleCheckboxChange = (gender) => {
        setInput({ ...input, gender });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(input);
    };

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <span className='flex items-center justify-center text-4xl font-semibold text-lime-400 p-4'>Cypher</span>
                <h1 className='text-xl font-semibold text-center text-gray-300'>Sign Up</h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="" className='label p-2'>
                            <span className='text-base label-text text-slate-300'>Fullname</span>
                        </label>
                        <input
                            type="text"
                            placeholder='Enter Your Fullname'
                            className='w-full h-10 input input-bordered'
                            value={input.fullName}
                            onChange={(e) => setInput({ ...input, fullName: e.target.value })}
                        />
                    </div>

                    <div className='mt-2'>
                        <label htmlFor="" className='label'>
                            <span className='text-base label-text text-slate-300'>Username</span>
                        </label>
                        <input
                            type="text"
                            placeholder='Enter Username'
                            className='w-full input input- h-10'
                            value={input.username}
                            onChange={(e) => setInput({ ...input, username: e.target.value })}
                        />
                    </div>

                    <div className='mt-2'>
                        <label className='label'>
                            <span className='text-base label text-slate-300'>Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder='Enter Password'
                            className='w-full input input-bordered h-10'
                            value={input.password}
                            onChange={(e) => setInput({ ...input, password: e.target.value })}
                        />
                    </div>

                    <div className='mt-2'>
                        <label htmlFor="" className='text-base label-text text-slate-300'>
                            <span>Confirm Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder='Confirm Password'
                            className='w-full h-10 input input-bordered'
                            value={input.confirmPassword}
                            onChange={(e) => setInput({ ...input, confirmPassword: e.target.value })}
                        />
                    </div>

                    <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={input.gender} />

                    <Link to="/login" href="#" className='text-sm text-lime-300 font-mono font-semibold tracking-wide hover:underline hover:text-slate-300 inline-block mt-2'>
                        Already Have An Account ?
                    </Link>

                    <div>
                        <button className="btn btn-block transition duration-300 ease-in-out btn-sm mt-3 hover:bg-lime-400 hover:text-black">
                            Sign Up
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default SignUp;
