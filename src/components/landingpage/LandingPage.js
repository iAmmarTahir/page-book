import React, { Component } from 'react';
import Background from '../../main.jpg'
import Logo from '../p.png';
import './landingpage.css'
import { Link } from 'react-router-dom';
const LandingPage = () => {
    return ( 
        <>
            <img src={Logo} style={{width: '80px', height: '80px', }}/>
            <ul style={{display: 'inline-block'}}>
                <Link to="/login" className="link">Login</Link>
                <Link to="/register" className="link">Register</Link>
            </ul>
            <img src={Background} className="main"/> 
            <p className="center"><span className="name">PageBook</span><br/>With PageBook, you can write, edit and share</p>
        </>
    );
}
 
export default LandingPage;