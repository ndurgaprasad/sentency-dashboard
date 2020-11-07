import React from "react";
import {Button, ButtonGroup, Grid} from "semantic-ui-react";

interface CRUDMenuProps {
    onDeleteClicked?: () => void
    onAddClicked?: () => void
    onEditClicked?: () => void
    onCleanClicked?: () => void
    hasId: boolean
}

export const CRUDMenu: React.FC<CRUDMenuProps> = (props) => {

    const {hasId} = props

    return (
        <Grid>
            <Grid.Column textAlign="center">
                <ButtonGroup>
                    <Button color='red' icon="trash" onClick={props.onDeleteClicked} disabled={!props.hasId} content="Delete"/>
                    <Button color='blue' icon="edit" onClick={props.onEditClicked} disabled={!props.hasId} content="Edit"/>
                    {hasId ?
                        <Button color='yellow' icon="eraser" onClick={props.onCleanClicked} content="Clean"/>
                        :
                        <Button color='green' icon="plus" onClick={props.onAddClicked} content="Add"/>
                    }
                </ButtonGroup>
            </Grid.Column>
        </Grid>

    )
}