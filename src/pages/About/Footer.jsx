import React, {useState} from "react";
import "./Footer.css"

const Footer = () => {
	
	return (
        <div className="footer">
            <div className="awaits-container">
                <div className="tagline">
                    <h1 className="tagline-heading">Your Opportunity Awaits...</h1>
                    <h2 className="tagline-description"> Let's get Started!</h2>
                </div>
                <a href="/" className="get-started-button">Get Started</a>
            </div>
            
            <footer className="footer-container">
                <div className="footer-column">
                    <h3 className="footer-heading">Opportunity</h3>
                    <p className="footer-description">Something about my website</p>
                </div>
               
                <div className="footer-column">
                    <h3 className="footer-heading">Contact Info</h3>
                    <ul className="footer-list">
                    <li>Email: info@opportunity.com</li>
                    <li>
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </li>
                    </ul>
                </div>
            </footer>
        </div>	
	);
};

export default Footer;
