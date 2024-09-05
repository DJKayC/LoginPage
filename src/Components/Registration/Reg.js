import React, {useState} from 'react';
import './Reg.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Reg = () => {
  return (
    <div className='wrapper'>
        <div className='form-box register'>
            <form action=''>
                <h1>Registration</h1>
                <div className='input-box'>
                    <input type='text' placeholder='Username' required/>
                    <FaUser className='icon'/>
                </div>
                <div className='input-box'>
                    <input type='email' placeholder='Email' required/>
                    <FaEnvelope className='icon'/>
                </div>
                <div className='input-box'>
                    <input type='Password' placeholder='Password' required/>
                    <FaLock className='icon'/>
                </div>
                <div className='remember-me'>
                    <label><input type='checkbox'/>
                    I agree to the terms & conditions</label>
                </div>
                <button type='submit'>Register</button>

                <div className='register-link'>
                    <p>Already have an account?<Link to='/login'>Login Now</Link></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Reg;