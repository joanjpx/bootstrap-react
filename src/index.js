import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
//
import './index.css';
import App from './App';
import Users from './components/users/user.component';
import Contact from './components/contacts/contacts.component';

const routing = (
    <Router>
        <Route exact path="/" component={App} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/contact" component={Contact} />
    </Router>
);
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
