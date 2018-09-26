import React from 'react';
import {NavLink} from 'react-router-dom';

const HomePage = () => (
    <div>
        <div>
            <h1>This will be shared space for logo and brand name</h1>
        </div>
        <p>This is field for subtitle text</p>
        <div>
            This will be navigation panel
            <NavLink to="/design">design</NavLink>
            <NavLink to="/code">code</NavLink>
            <NavLink to="/about">about</NavLink>
            <NavLink to="/contact">contact</NavLink>
        </div>
    </div>
);

export default HomePage;