import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFoundPage = () => (
    <div className="load-animation">
        <div className="not-found">
            <p className="error">Sorry, nothing here.</p>     
        </div>    
        <NavLink className="home-link" to="/"exact={true}>Back</NavLink>
    </div>
);

export default NotFoundPage;