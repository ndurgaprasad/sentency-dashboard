import React from 'react';
import 'semantic-ui-css/semantic.min.css'

import {Switch, Route, HashRouter} from "react-router-dom";
import {DialogModal} from "./components/modal/DialogModal";
import {MainScreen} from "./screens/MainScreen";
import {LoginScreen} from "./screens/LoginScreen";

export default function App() {

    return (
        <HashRouter>
            <div className="App root">
                <Switch>
                    <Route exact path="/login">
                        <LoginScreen/>
                    </Route>
                    <Route path="/">
                        <MainScreen/>
                    </Route>
                </Switch>
            </div>
            <DialogModal/>
        </HashRouter>
    );
}

