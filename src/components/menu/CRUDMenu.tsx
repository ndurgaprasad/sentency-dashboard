import React from "react";
import {Box, IconButton} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import {green, grey} from "@material-ui/core/colors";

interface CRUDMenuProps {
    onDeleteClicked?: () => void
    onAddClicked?: () => void
    onEditClicked?: () => void
    hasId: boolean
}

export const CRUDMenu: React.FC<CRUDMenuProps> = (props) => {

    const addButtonColor = green[500];
    const addButtonDisabledColor = grey[400]

    return (
        <Box display="flex" justifyContent="center" width={1}>
            <IconButton aria-label="delete" color="secondary" onClick={props.onDeleteClicked} disabled={!props.hasId}>
                <FontAwesomeIcon icon={faTrash} size="xs"/>
            </IconButton>
            <IconButton aria-label="edit" color="primary" onClick={props.onEditClicked} disabled={!props.hasId}>
                <FontAwesomeIcon icon={faEdit} size="xs"/>
            </IconButton>
            <IconButton aria-label="add" onClick={props.onAddClicked} disabled={props.hasId}>
                <FontAwesomeIcon icon={faPlus} size="xs" color={!props.hasId ? addButtonColor : addButtonDisabledColor}/>
            </IconButton>
        </Box>
    )
}