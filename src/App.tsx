import React from 'react';
import {Box, Grid} from "@material-ui/core";
import {AuthorScreen} from "./screens/AuthorScreen";
import {QuoteScreen} from "./screens/QuoteScreen";
import {DialogScreen} from "./screens/DialogScreen";

export default function App() {
    return (
        <Box width={1} height={1}>
            <Grid container spacing={3} alignItems="stretch">
                <Grid item xs={4}>
                    <AuthorScreen/>
                </Grid>
                <Grid item xs={8}>
                    <QuoteScreen/>
                </Grid>
            </Grid>
            <DialogScreen/>
        </Box>
    );
}

