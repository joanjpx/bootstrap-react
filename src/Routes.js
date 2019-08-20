import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
//
import App from './App';
import Users from './components/users/user.component';
import Contact from './components/contacts/contacts.component';

const routing = (
    <Router>
        <Route exact path="/" component={App} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/contacts" component={Contact} />
    </Router>
);

export default routing;