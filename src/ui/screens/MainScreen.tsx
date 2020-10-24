import {observer} from "mobx-react";
import React from "react";
import {Navbar} from "../components/menu/Navbar";
import {Redirect, Route, Switch} from "react-router-dom";
import {HomeScreen} from "./HomeScreen";
import {DataScreen} from "./DataScreen";
import {useStores} from "../../data/context/UseStore";

export const MainScreen = observer(() => {

    const margin = {padding: '0.5rem'}

    const {userStore} = useStores()

    return (
        <>
            {userStore.loggedUser ?
                <>
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
                </>
                : <Redirect to="/login"/>
            }
        </>

    )
})