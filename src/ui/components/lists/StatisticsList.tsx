import React from "react";
import {StatisticGroup} from "semantic-ui-react";
import {StatisticsItem} from "../items/StatisticsItem";
import {observer} from "mobx-react";
import {useStores} from "../../../data/store/UsesStore";

export const StatisticsList: React.FC<any> = observer((props) => {
    const {quoteStore, authorStore} = useStores()

    return (
        <StatisticGroup widths='four'>
            <StatisticsItem value={"" + authorStore.authorCount} label={"Authors"}/>
            <StatisticsItem value={"" + quoteStore.quotesCount} label={"Quotes"}/>
            <StatisticsItem value={""} label={"Most quotes"}
                            image={authorStore.authorWithMostQuotes?.picUrl ?? ""}
                            isText={true}/>
            <StatisticsItem value={"" + quoteStore.monthQuotes} label={"Month new quotes"}/>
        </StatisticGroup>
    )
})