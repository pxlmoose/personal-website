import React from 'react';
import {NavLink} from 'react-router-dom';

const DesignPage = () => (
    <div>
        <h1>Design title</h1>
        <p>text text text</p>
        <ul>
            list of my design skills and how good I think I am
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
        <a>link to behance</a>
        <NavLink to="/" exact={true}>Link back home</NavLink>
    </div>
);

export default DesignPage;