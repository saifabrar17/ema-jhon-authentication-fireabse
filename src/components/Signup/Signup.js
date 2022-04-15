import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
const Signup = () => {
    return (
        <div className='form-container'>
        <div>
            <h2 className='form-title'>Sign Up</h2>
            <form >
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="" id="" required/>

            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="" id="" required/>
                
            </div>
            <div className="input-group">
                <label htmlFor="password">Confirm Password</label>
                <input type="password" name="" id="" required/>
                
            </div>
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