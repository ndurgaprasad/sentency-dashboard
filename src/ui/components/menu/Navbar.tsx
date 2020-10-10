import React from "react";
import {Menu} from "semantic-ui-react";
import {NavLink} from "react-router-dom";

export const Navbar: React.FC<any> = () =>{
    return(
        <Menu inverted>
            <Menu.Item
                name='Home'
                as={NavLink}
                exact to="/"
            />
            <Menu.Item
                name='Data'
                as={NavLink}
                exact to="/data"
            />
        </Menu>
    )
}