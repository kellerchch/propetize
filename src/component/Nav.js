import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';


// this is used primarily for rendering. This is a functional component. The 'component' // method is used for more complex work including axios calls and Map to State components.

export default function Nav() {
    return (
        <div>
            <Link to="/">
                <div className="nav" > Home </div>
            </Link>
            <Link to="/Works">
                <div className="nav"> How This Works</div>
            </Link>
            <Link to="/Stuff">
                <div className="nav"> My Account</div>
            </Link>
            <Link to="/Search">
                <div className="nav"> Search </div>
            </Link>
            <Link to="/About">
                <div className="nav"> About Us </div>
            </Link>
            <Link to="/Login">
                <div className="nav"> Login </div>
            </Link>
        </div> 
    )
}