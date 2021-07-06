import React from "react";
import {Quote} from "../../../data/model/Quote";
import {Button, Icon, Label, List} from "semantic-ui-react";
import {QuoteLocalization} from "../../../data/model/QuoteLocalization";

interface QuoteItemProps {
    quote: Quote
    onDeleteClicked?: (quote: Quote) => void
    onEditClicked?: (quote: Quote) => void
    onAddLocalizationClicked?: (quote: Quote) => void
    onLocalizationClicked?: (localization: QuoteLocalization) => void
}

export const QuoteItem: React.FC<QuoteItemProps> = (props) => {

    const {quote, onDeleteClicked, onEditClicked, onAddLocalizationClicked, onLocalizationClicked} = props

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

    const onAddLocalization = () => {
        if (onAddLocalizationClicked) {
            onAddLocalizationClicked(quote)
        }
    }

    const onLocalization = (localization: QuoteLocalization) => {
        if (onLocalizationClicked) {
            onLocalizationClicked(localization)
        }
    }

    return (
        <List.Item>
            <List.Content floated='right'>
                <Button circular onClick={onDelete} icon="trash" color="red"/>
                <Button circular onClick={onEdit} icon="edit" color="blue"/>
            </List.Content>
            <List.Content>
                <List.Header>
                    {quote.messages[0].message}
                </List.Header>
                <List.Description>
                    <Label as='a' color='teal' image onClick={onAddLocalization}>
                        <Icon name='plus'/>
                        Add
                    </Label>
                    {quote.messages.map(message => {
                        return <Label
                            as='a'
                            key={message.id}
                            onClick={() => onLocalization(message)}>
                            {message.code}
                            <Icon name='delete' />
                        </Label>
                    })}
                </List.Description>
            </List.Content>
        </List.Item>
    )
}
