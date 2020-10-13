import React from "react";
import {StatisticsList} from "../components/lists/StatisticsList";
import {Divider} from "semantic-ui-react";


export const HomeScreen: React.FC<any> = () => {
    return (
        <div>
            <StatisticsList/>
            <Divider/>
        </div>
    )
}