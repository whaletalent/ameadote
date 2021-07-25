import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';


function Routes() {

    return (
        <Router>
            <Switch>
                <Route path='/profile' component={Profile}></Route>
                <Route path='/' component={Home}></Route>
            </Switch>
        </Router>
    )

};



export default Routes;