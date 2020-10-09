import React from 'react';
import {AuthorScreen} from "./screens/AuthorScreen";
import {QuoteScreen} from "./screens/QuoteScreen";
import {DialogScreen} from "./screens/DialogScreen";
import 'semantic-ui-css/semantic.min.css'
import {Grid, GridRow} from "semantic-ui-react";

export default function App() {
    return (
        <Grid columns={2} divided>
            <GridRow>
                <Grid.Column width={4}>
                    <AuthorScreen/>
                </Grid.Column>
                <Grid.Column width={12}>
                    <QuoteScreen/>
                </Grid.Column>
            </GridRow>
            <DialogScreen/>
        </Grid>
    );
}

