import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <header>
            <div>Logo</div>
            <div>
                <Link to='/'>Home</Link>
            </div>
            <div>
                <Link to='/cool-couches'>Cool Couches</Link>
            </div>
            <div>
                <Link to='/profile'>Profile</Link>
            </div>
        </header>
    )
}

export default Navbar