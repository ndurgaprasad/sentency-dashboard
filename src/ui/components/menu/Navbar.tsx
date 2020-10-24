import React from "react";
import {Button, Icon, Menu} from "semantic-ui-react";
import {NavLink} from "react-router-dom";
import {useStores} from "../../../data/context/UseStore";

export const Navbar: React.FC<any> = () => {
    const {userStore} = useStores()

    return (
        <Menu inverted>
            <Menu.Item
                name='Home'
                as={NavLink}
                exact to="/">
                <Icon name='home'/>
                Home
            </Menu.Item>
            <Menu.Item
                name='Data'
                as={NavLink}
                exact to="/data"
            >
                <Icon name='database'/>
                Data
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item
                    name='Data'
                    as={Button}
                    onClick={() => {
                        userStore.logout()
                    }}
                >
                    <Icon name='log out'/>
                    Logout
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}