import React from 'react';
import {NavLink} from 'react-router-dom';

const AboutPage = () => (
    <div>
        <div>
            <h1>About title and my picture</h1>
        </div>
        <p>tex text text text text</p>
        <a>here's link to sm</a>
        <NavLink to="/" exact={true}>Back Home</NavLink>
    </div>
);

export default AboutPage;