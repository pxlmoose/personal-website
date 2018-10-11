import React from 'react';
import {NavLink} from 'react-router-dom';

const CodePage = () => (
    <div>
        <div className="content-container">
            <h1 className="title">Coding</h1>
            <p className="text-content">This is where I turn the design into live product. I build whole base
            and architecture from the ground up. It's very important to me to make sure that final code is
            working on even old generation devices.</p>
        </div>
        <a className="social-link" href="https://github.com/pxlmoose">I'm on Github</a>
        <div className="list-grid">
            <ul>
                <p className="list-intro">Tools I code with</p>
                <li className="list-element"><span>HTML</span><span>2016</span></li>
                <li className="list-element"><span>CSS (SCSS)</span><span>2016</span></li>
                <li className="list-element"><span>JavaScript</span><span>2016</span></li>
                <li className="list-element"><span>React</span><span>2017</span></li>
                <li className="list-element"><span>Redux</span><span>2018</span></li>
                <li className="list-element"><span>Node</span><span>2017</span></li>
                <li className="list-element"><span>C#</span><span>2018</span></li>
            </ul>
        </div>
        <NavLink className="home-link" to="/" exact={true}>Back</NavLink>
    </div>
);

export default CodePage;