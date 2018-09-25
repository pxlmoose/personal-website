import React from 'react';
import {NavLink} from 'react-router-dom';

const ContactPage = () => (
    <div>
        <h1>Contact</h1>
        <p>tex text text text text</p>
        <a>here's link to sm</a>
        <NavLink to="/" activeClassName="is-active" exact={true}>Back Home</NavLink>
    </div>
);

export default ContactPage;