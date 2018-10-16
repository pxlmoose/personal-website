import React from 'react';
import {NavLink} from 'react-router-dom';

const HomePage = () => (
    <div className="load-animation">
        <div className="content-container">
            <div className="title-container">
                <img className="image" src="/images/logo.png" />
                <h1 className="banner-title">PXL///RNNR</h1>
            </div>
            <h2 className="subtitle">Web designer & developer</h2>
        </div>
        <div className="link-grid">
            <div className="link-grid_box">
                <NavLink className="link-grid_link" to="/design">design</NavLink>
            </div>
            <div className="link-grid_box">
                <NavLink className="link-grid_link" to="/code">code</NavLink>
            </div>
            <div className="link-grid_box">
                <NavLink className="link-grid_link" to="/about">about</NavLink>
            </div>
            <div className="link-grid_box">
                <NavLink className="link-grid_link" to="/contact">contact</NavLink>
            </div>
        </div>
    </div>
);

export default HomePage;