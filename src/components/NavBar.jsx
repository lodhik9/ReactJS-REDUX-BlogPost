import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav-wrapper red darken-3">
        <div className="container">
            <a  className="brand-logo">Website Name</a>
            <ul className = "right">
                <li><Link to = "/">Home</Link></li>
                <li><NavLink to = "/about">About</NavLink></li>
                <li><NavLink to = "/contact">Contact</NavLink></li>
            </ul>
        </div>
    </nav>
    )
}
// withRouter is higher order component which just wraps the NavBar component
// And give more props to the NavBar example history
export default withRouter( Navbar);