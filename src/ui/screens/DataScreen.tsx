import React from "react";
import {Grid, GridRow} from "semantic-ui-react";
import {AuthorView} from "../views/AuthorView";
import {QuoteView} from "../views/QuoteView";

export const DataScreen: React.FC<any> = () => {
    return (
        <Grid columns={2} divided>
            <GridRow>
                <Grid.Column width={4}>
                    <AuthorView/>
                </Grid.Column>
                <Grid.Column width={12}>
                    <QuoteView/>
                </Grid.Column>
            </GridRow>
        </Grid>
    )
}