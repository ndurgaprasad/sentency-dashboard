import React from "react";
import {Button, ButtonGroup} from "semantic-ui-react";

interface CRUDMenuProps {
    onDeleteClicked?: () => void
    onAddClicked?: () => void
    onEditClicked?: () => void
    hasId: boolean
}

export const CRUDMenu: React.FC<CRUDMenuProps> = (props) => {
    return (
        <ButtonGroup>
            <Button color='red' icon="trash" onClick={props.onDeleteClicked} disabled={!props.hasId} content="Delete"/>
            <Button color='blue' icon="edit" onClick={props.onEditClicked} disabled={!props.hasId} content="Edit"/>
            <Button color='green' icon="plus" onClick={props.onAddClicked} disabled={props.hasId} content="Add"/>
        </ButtonGroup>
    )
}