import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const from = location.state?.from?.pathname || '/'

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("signed in");
                form.reset();
                navigate(from, { replace: true });
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSignIn}>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">password</label>
                    <input type={show ? "text" : "password"} name="password" required />
                    <p onClick={() => setShow(!show)}>
                        {
                            show ? <span>Hide Password</span> : <span>Show Password</span>
                        }
                    </p>
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p className='form-text'><small>Don't have an account? <Link to="/signup" className='form-redirect'>Sign Up</Link> </small></p>
        </div>
    );
};

export default Login;