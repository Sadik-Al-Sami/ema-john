import React, { useContext } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
const Header = () => {
    const {signOut, user} = useContext(AuthContext);
    const handleLogOut = () => {
        signOut
    }
    return (
        <nav className='header'>
            <img src={logo} alt="logo" />
            <div>
                <NavLink to="/">Shop</NavLink>
                <NavLink to="/orders">Orders</NavLink>
                <NavLink to="/inventory">Inventory</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">SignUp</NavLink>
                {user && <span>welcome {user.displayName} <button onClick={handleLogOut}>Sign Out</button> </span> }
            </div>
        </nav>
    );
};

export default Header;