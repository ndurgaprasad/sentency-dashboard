import React from "react";
import {Quote} from "../../../data/model/Quote";
import {IconButton, ListItem, ListItemSecondaryAction, ListItemText} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";

interface QuoteItemProps {
    quote: Quote
    onDeleteClicked?: (quote: Quote) => void
    onEditClicked?: (quote: Quote) => void
}

export const QuoteItem: React.FC<QuoteItemProps> = (props) => {

    const {quote, onDeleteClicked, onEditClicked} = props

    const onDelete = () => {
        if (onDeleteClicked) {
            onDeleteClicked(quote)
        }
    }

    const onEdit = () => {
        if (onEditClicked) {
            onEditClicked(quote)
        }
    }

    return (
        <ListItem>
            <ListItemText
                primary={quote.quote}
            />
            <ListItemSecondaryAction>
                <IconButton aria-label="delete" color="secondary" onClick={onDelete}>
                    <FontAwesomeIcon icon={faTrash} size="xs"/>
                </IconButton>
                <IconButton aria-label="edit" color="primary" onClick={onEdit}>
                    <FontAwesomeIcon icon={faEdit} size="xs"/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}