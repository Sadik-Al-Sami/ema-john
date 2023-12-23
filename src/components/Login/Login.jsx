import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input type="password" name="Password" id="" required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p className='form-text'><small>Don't have an account? <Link to="/signup" className='form-redirect'>Sign Up</Link> </small></p>
        </div>
    );
};

export default Login;