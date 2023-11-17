import React, {useState} from "react";
import "./About.css"
import Footer from "./Footer";

const About = () => {
	
	return (
        <div className="about">
            <div>
                <h1 className="heading">The value that holds us true and to account</h1>        
                <div className="about-container">
                    <div className="singleGrid first">
                        <div className="icon">
                            <img src="https://img.icons8.com/ios/50/000000/idea.png" alt="idea" />
                        </div>
                        <div className="text">
                            <h2 className="head">Simplicity</h2>
                            <p className="description">Things being made beautiful simple are at the heart of everything we do.</p>
                        </div>
                    </div>
                    <div className="singleGrid second">
                        <div className="icon">
                            <img src="https://img.icons8.com/ios/50/000000/idea.png" alt="idea" />
                        </div>
                        <div className="text">
                            <h2 className="head">Social Good</h2>
                            <p className="description">we belive in making things better for everyone, even if just by a little.</p>
                        </div>
                    </div>
                    <div className="singleGrid third">
                        <div className="icon">
                            <img src="https://img.icons8.com/ios/50/000000/idea.png" alt="idea" />
                        </div>
                        <div className="text">
                            <h2 className="head">Trust</h2>
                            <p className="description">We work on the basis of creating trust which can be nurtured through authencity and transparency.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>

	);
};

export default About;
