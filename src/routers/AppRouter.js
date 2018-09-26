import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './../components/HomePage';
import DesignPage from './../components/DesignPage';
import CodePage from '../components/CodePage';
import ContactPage from './../components/ContactPage';
import AboutPage from './../components/AboutPage';
import NotFoundPage from './../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div> 
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/design" component={DesignPage} />
                <Route path="/code" component={CodePage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/about" component={AboutPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;