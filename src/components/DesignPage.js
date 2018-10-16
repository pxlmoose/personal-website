import React from 'react';
import {NavLink} from 'react-router-dom';

const DesignPage = () => (
    <div className="load-animation">
        <div className="content-container">
            <h1 className="title">Design</h1>
            <p className="text-content">This is where we turn chaos into solid form. To me, design at it's core is about pen and 
            paper. I draw until I can find one coherent idea that can be translated into digital form.</p>
        </div>
        <a className="social-link" href="https://www.behance.net/newme0071342" target="_blank">I'm on Behance</a>
        <div className="list-grid">
            <ul>
                <p className="list-intro">What I create with</p>
                <li className="list-element"><span>Pen and Paper</span><span>2016</span></li>
                <li className="list-element"><span>Inkscape</span><span>2017</span></li>
                <li className="list-element"><span>Illustrator</span><span>2018</span></li>
                <li className="list-element"><span>Photography</span><span>2015</span></li>
            </ul>
        </div>
        
        <NavLink className="home-link" to="/" exact={true}>Back</NavLink>
    </div>
);

export default DesignPage;