import React from 'react';
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword,
        user,
        error,
        loading] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    if (user) {
        navigate('/shop');
    }
    const handleSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="" id="" required />

                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="" id="" required />

                    </div>
                    <p>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input type="submit" value="Login" className='form-submit' />



                </form>
                <p>
                    New to Ema Jhon? <Link className='form-link' to='/signup'>Create an account...</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;