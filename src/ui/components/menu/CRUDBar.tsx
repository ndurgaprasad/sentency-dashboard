import React from "react";
import {Button, Grid, GridRow, Header} from "semantic-ui-react";

interface CRUDBarProps {
    title: string
    onAddClicked?: () => void
}

export const CRUDBar: React.FC<CRUDBarProps> = (props) => {
    const {title, onAddClicked} = props

    return (
        <Grid>
            <GridRow verticalAlign='middle'>
                <Grid.Column floated='left' width={9}>
                    <Header as='h3'>{title}</Header>
                </Grid.Column>
                <Grid.Column floated='right'>
                    <Button circular onClick={onAddClicked} icon="plus" color='green'/>
                </Grid.Column>
            </GridRow>
        </Grid>
    )
}