import React from 'react';
import 'semantic-ui-css/semantic.min.css'

import {Switch, Route, BrowserRouter} from "react-router-dom";
import {DialogModal} from "./components/modal/DialogModal";
import {MainScreen} from "./screens/MainScreen";
import {LoginScreen} from "./screens/LoginScreen";

export default function App() {

    return (
        <BrowserRouter basename="/dashboard">
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
        </BrowserRouter>
    );
}

