import React from 'react';
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import auth from '../../firebase.init'
// import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event =>{
        setConfirmPassword(event.target.value);
    }

    if(user){
        navigate('/shop');
    }
    const handleCreateUser = event =>{
        event.preventDefault();
        if(password !== confirmPassword){
            setError("Passwords didn't match");
            return;
        }

        createUserWithEmailAndPassword(email, password);
    }



    return (
        <div className='form-container'>
        <div>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleCreateUser}>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input onBlur={handleEmailBlur} type="email" name="" id="" required/>

            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input onBlur={handlePasswordBlur} type="password" name="" id="" required/>
                
            </div>
            <div className="input-group">
                <label htmlFor="password">Confirm Password</label>
                <input onBlur={handleConfirmPasswordBlur} type="password" name="" id="" required/>
                
            </div>
            <p>{error }</p>
            <input type="submit" value="Sign Up"  className='form-submit' />
            </form>
            <p>
                Already Have an account? <Link className='form-link' to='/login'>Login here...</Link>
            </p>
        </div>
    </div>
    );
};

export default Signup;