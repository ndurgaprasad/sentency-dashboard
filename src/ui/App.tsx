import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {DialogModal} from "./components/modal/DialogModal";
import {DataScreen} from "./screens/DataScreen";
import {HomeScreen} from "./screens/HomeScreen";
import {Navbar} from "./components/menu/Navbar";

export default function App() {

    const margin = {padding: '0.5rem'}

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className="App">
                <Navbar/>
                <div style={margin}>
                    <Switch>
                        <Route exact path="/">
                            <HomeScreen/>
                        </Route>
                        <Route path="/data">
                            <DataScreen/>
                        </Route>
                    </Switch>
                </div>
            </div>
            <DialogModal/>
        </BrowserRouter>
    );
}

