import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';


const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form >
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="" id="" required />

                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="" id="" required/>
                    
                </div>
                <input type="submit" value="Login"  className='form-submit' />
                </form>
                <p>
                    New to Ema Jhon? <Link className='form-link' to='/signup'>Create an account...</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;