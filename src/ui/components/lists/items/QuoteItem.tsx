import React from "react";
import {Quote} from "../../../../data/model/Quote";
import {Button, List} from "semantic-ui-react";

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
        <List.Item>
            <List.Content floated='right'>
                <Button circular onClick={onDelete} icon="trash" color="red"/>
                <Button circular onClick={onEdit} icon="edit" color="blue"/>
            </List.Content>
            <List.Content> {quote.quote}</List.Content>
        </List.Item>
    )
}