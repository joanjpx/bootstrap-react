import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
//
import App from './App';
import Users from './components/users/user.component';
import Contacts from './components/contacts/contacts.component';
import NavBar from './components/navbar/navbar.component';

const routing = (
    <Fragment>
        <Router>
            <Route exact path="/home" component={App} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/contacts" component={Contacts} />
            <NavBar></NavBar>
        </Router>
    </Fragment>
);

export default routing;