import React, {useState} from 'react';
import './Login.css';
import { FaUser, FaLock} from "react-icons/fa";
import { Link } from 'react-router-dom';

const LoginReg = () => {
  return (
    <div className='wrapper'>
        <div className='form-box login'>
            <form action=''>
                <h1>Login</h1>
                <div className='input-box'>
                    <input type='text' placeholder='Username' required/>
                    <FaUser className='icon'/>
                </div>
                <div className='input-box'>
                    <input type='Password' placeholder='Password' required/>
                    <FaLock className='icon'/>
                </div>
                <div className='remember-me'>
                    <label><input type='checkbox'/>
                    Remember Me</label>
                    <a href='#'>Forgot Password?</a>
                </div>
                <button type='submit'>Login</button>

                <div className='register-link'>
                    <p>Don't have an account?<Link to='Reg'>Register Now</Link></p>
                </div>
            </form>    
        </div>
    </div>
  );
};

export default LoginReg;