import React from 'react';
import {NavLink} from 'react-router-dom';

const AboutPage = () => (
    <div className="load-animation">
        <div className="content-container">
            <div className="title-container">
                <img className="image" src="/images/profile.jpg" />
                <h1 className="banner-title">About me</h1>
            </div>
        </div>
        <p className="text-content-about">Hi there! <br /> <br />I'm Jan, I'm a web designer and developer from 
            Warsaw, Poland. I'm very much interested in process of creation and problem solving.
            
            I thrive in chaotic environment, I love to try many ideas at once before arriving at
            one final answer. Personally, I'm fond of 80s neon/ punk aesthetics with strong and
            vibrant colours, clear message and coherent, memorable design. 
        
            Outside of designing and coding I practise drawing illustration a lot,
            I do quite a bit of photography and I play drums. </p>
        <a className="social-link" target="_empty" href="https://medium.com/@JanNowicki123">I'm on Medium</a>
        <NavLink className="home-link" to="/"exact={true}>Back</NavLink>
    </div>
);

export default AboutPage;