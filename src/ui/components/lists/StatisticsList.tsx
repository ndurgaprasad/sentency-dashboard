import React from "react";
import {StatisticGroup} from "semantic-ui-react";
import {StatisticsItem} from "../items/StatisticsItem";

export const StatisticsList: React.FC<any> = (props) => {
    return (
        <StatisticGroup widths='four'>
            <StatisticsItem value={"22"} label={"Authors"}/>
            <StatisticsItem value={"230"} label={"Quotes"}/>
            <StatisticsItem value={""} label={"Most Quotes"}
                            image={"https://www.estrelando.com.br/uploads/2019/11/14/dwayne-ok-1573764118.jpg"}
                            isText={true}/>
            <StatisticsItem value={"230"} label={"Quotes"}/>
        </StatisticGroup>
    )
}