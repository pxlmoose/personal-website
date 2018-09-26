import React from 'react';
import {NavLink} from 'react-router-dom';

const CodePage = () => (
    <div>
        <h1>Code title</h1>
        <p>text text text</p>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
        <a>link to github</a>
        <NavLink to="/" exact={true}>link back home</NavLink>
    </div>
);

export default CodePage;