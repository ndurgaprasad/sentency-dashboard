import React, {useState} from "react";
import {Quote} from "../../../../data/model/Quote";
import {InputTextArea} from "../../forms/input/InputTextArea";
import {Modal} from "semantic-ui-react";

export interface ModalQuoteViewProps {
    onQuoteChanged?: (quote: Quote) => void
    title: string,
    authorId: string,
    defaultQuote?: Quote
}

export const ModalQuoteView: React.FC<ModalQuoteViewProps> = (props) => {
    const {onQuoteChanged, title, authorId, defaultQuote} = props
    const [quote, setQuote] = useState(defaultQuote ? defaultQuote : {authorId: authorId} as Quote)

    const onChange = (name: string, value: string) => {
        let newQuote = {...quote, [name]: value}
        setQuote(newQuote)
        if (onQuoteChanged) {
            onQuoteChanged(newQuote)
        }
    }

    return (
        <>
            <Modal.Header>{title}</Modal.Header>
            <Modal.Content>
                    <InputTextArea label="Quote" name="quote" onChange={onChange} defaultValue={quote.message}/>
            </Modal.Content>
        </>
    )
}
