import React from 'react';
import {NavLink} from 'react-router-dom';

const DevelopmentPage = () => (
    <div>
        <h1>Design</h1>
        <p>text text text</p>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
        <a>link to sm</a>
        <NavLink to="/" activeClassName="is-active" exact={true}>back home</NavLink>
    </div>
);

export default DevelopmentPage;