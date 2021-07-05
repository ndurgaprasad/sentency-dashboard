import React from "react";
import {StatisticsList} from "../components/lists/StatisticsList";
import {Divider, Grid} from "semantic-ui-react";
import {useStores} from "../../data/context/UseStore";
import {QueueList} from "../components/lists/QueueList";

export const HomeScreen: React.FC<any> = () => {

    const {quoteStore, authorStore, queueStore} = useStores()

    authorStore.loadAuthorsCount()
    authorStore.loadAuthorWithMostQuotes()
    quoteStore.loadQuotesCount()
    quoteStore.countMonthQuotes()
    queueStore.loadQueuedLocalizations()

    return (
        <div>
            <StatisticsList/>
            <Divider/>
            <Grid columns={3}>
                <Grid.Row>
                    <Grid.Column>
                        <h2>Suggestion Queue</h2>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <QueueList/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
