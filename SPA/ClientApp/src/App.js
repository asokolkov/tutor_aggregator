import React, {Component} from 'react';
import {Route} from 'react-router';
import {Layout} from './components/Layout';
import {Home} from './components/Home';

import './custom.css'
import {ProfilePage} from "./components/Profile/ProfilePage";
import {SearchPage} from "./components/Search/SearchPage";

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home}/>
                <Route path='/profile' component={ProfilePage} />
                {/*<Route path='/auth' component={} />*/}
                <Route path='/search' component={SearchPage} />
            </Layout>
        );
    }
}
