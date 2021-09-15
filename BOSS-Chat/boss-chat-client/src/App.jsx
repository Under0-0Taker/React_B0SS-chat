import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import Login from "./containers/login";
import Register from "./containers/register";
import Main from "./containers/main";

import './assets/css/index.less'

export default class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/register" component={Register}/>
                    <Route path="/login" component={Login}/>
                    <Route component={Main}/>
                </Switch>
            </div>
        )
    }
}

