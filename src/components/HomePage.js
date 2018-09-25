import React from 'react';
import {NavLink} from 'react-router-dom';

const HomePage = () => (
    <div>
        <h1>Welcome</h1>
        <p>This is my site. Take a look around.</p>
        <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
    </div>
);

export default HomePage;