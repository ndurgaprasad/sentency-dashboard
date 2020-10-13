import React from "react";
import {StatisticsList} from "../components/lists/StatisticsList";
import {Divider} from "semantic-ui-react";
import {useStores} from "../../data/store/UsesStore";

export const HomeScreen: React.FC<any> = () => {

    const {quoteStore, authorStore} = useStores()

    authorStore.loadAuthorsCount()
    authorStore.loadAuthorWithMostQuotes()
    quoteStore.loadQuotesCount()
    quoteStore.countMonthQuotes()

    return (
        <div>
            <StatisticsList/>
            <Divider/>
        </div>
    )
}