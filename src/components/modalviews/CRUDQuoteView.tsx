import {DialogContent, DialogTitle} from "@material-ui/core";
import React, {useState} from "react";
import {Quote} from "../../data/model/Quote";
import {InputTextArea} from "../forms/input/InputTextArea";

export interface CRUDQuoteViewProps {
    onQuoteChanged?: (quote: Quote) => void
    title: string,
    authorId: string,
    defaultQuote?: Quote
}

export const CRUDQuoteView: React.FC<CRUDQuoteViewProps> = (props) => {
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
        <div>
            <DialogTitle id="form-dialog-title">{title}</DialogTitle>
            <DialogContent>
                <InputTextArea label="Quote" name="quote" onChange={onChange} defaultValue={quote.quote}/>
            </DialogContent>
        </div>
    )
}