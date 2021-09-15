import React from "react"
import ReactDom from 'react-dom'
import App from "./App";
import {HashRouter} from "react-router-dom";
import {Provider} from 'react-redux'

import store from "./redux/store";

ReactDom.render((
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>
), document.getElementById('root'))

