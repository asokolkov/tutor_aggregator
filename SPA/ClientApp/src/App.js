import React, {Component} from 'react';
import {Route} from 'react-router';
import {Layout} from './components/Layout';
import {Home} from './components/Home';

import './custom.css'
import {ProfilePage} from "./components/Profile/ProfilePage";
import {LoginPage} from "./components/Authorization/LoginPage";
import {SignupPage} from "./components/Authorization/SignupPage";

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home}/>
                <Route path='/profile' component={ProfilePage} />
                <Route path='/login' component={LoginPage} />
                <Route path='/signup' component={SignupPage} />
                {/*<Route path='/search' component={} />*/}
            </Layout>
        );
    }
}
