import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';


// this is used primarily for rendering. This is a functional component. The 'component' // method is used for more complex work including axios calls and Map to State components.

export default function Nav() {
    return (
        <div className="navbar navbar-light">
            <Link to="/" className="nav navbar-nav">
                <div className="nav-item" > Home </div>
            </Link>
            <Link to="/Works"className="nav navbar-nav">
                <div className="nav-item" > How This Works</div>
            </Link>
            <Link to="/Stuff"className="nav navbar-nav">
                <div className="nav-item" > My Account</div>
            </Link>
            <Link to="/Search"className="nav navbar-nav">
                <div className="nav-item" > Search </div>
            </Link>
            <Link to="/About"className="nav navbar-nav">
                <div className="nav-item" > About Us </div>
            </Link>
            <a className="nav navbar-nav" href={process.env.REACT_APP_LOGIN}>
                <button className="nav-item" > Sign In </button></a>
        </div> 
    )
}