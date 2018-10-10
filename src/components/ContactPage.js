import React from 'react';
import {NavLink} from 'react-router-dom';

const ContactPage = () => (
    <div>
        <div className="content-container">
            <h1 className="title">Contact</h1>
            <p className="text-content">If you'd like to say hello, or see bit more of my work
            you can do it here:</p>
        </div>
        <div className="link-grid">
            <div className="link-grid_box">
                <a className="link-grid_link" target="_empty" href="https://www.behance.net/newme0071342">behance</a>
            </div>
            <div className="link-grid_box">
                <a className="link-grid_link" target="_empty" href="https://github.com/pxlmoose">github</a>
            </div>
            <div className="link-grid_box">
                <a className="link-grid_link" target="_empty" href="https://medium.com/@JanNowicki123">medium</a>
            </div>
            <div className="link-grid_box">
                <a className="link-grid_link" href="mailto:newme007@gmail.com">email</a>
            </div>
        </div>
        <NavLink className="home-link" to="/"exact={true}>link Back Home</NavLink>
    </div>
);

export default ContactPage;