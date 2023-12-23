import React, { useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
const SignUp = () => {
    const [error, setError] = useState('')

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email,password, confirm);

        if(confirm !== password){
            setError("Passwords dont match");
            return;
        }
        else if(password.length < 6){
            setError("Password must be more than 6 characters long");
            return;
        }
        setError('');
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSignUp}>

                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>

                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>

                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" required />
                </div>

                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <p className='form-text'><small>Already have an account? <Link to="/login" className='form-redirect'>Login</Link> </small></p>
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default SignUp;