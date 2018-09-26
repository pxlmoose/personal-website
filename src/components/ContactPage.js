import React from 'react';
import {NavLink} from 'react-router-dom';

const ContactPage = () => (
    <div>
        <h1>Contact title</h1>
        <p>tex text text text text</p>
        <div>
            Here are links on grid to all social medias plus email
            <a>here's link to sm</a>
            <a>here's link to sm</a>
            <a>here's link to sm</a>
        </div>
        <NavLink to="/"exact={true}>link Back Home</NavLink>
    </div>
);

export default ContactPage;