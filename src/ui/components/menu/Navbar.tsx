import React from "react";
import {Icon, Menu} from "semantic-ui-react";
import {NavLink} from "react-router-dom";

export const Navbar: React.FC<any> = () => {
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
        </Menu>
    )
}