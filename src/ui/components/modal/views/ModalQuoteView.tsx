import React, {useState} from "react";
import {Quote} from "../../../../data/model/Quote";
import {InputTextArea} from "../../forms/input/InputTextArea";
import {Form, Modal} from "semantic-ui-react";
import {Selector} from "../../forms/input/Selector";

export interface ModalQuoteViewProps {
    onQuoteChanged?: (quote: Quote) => void
    title: string,
    defaultQuote: Quote
}

export const ModalQuoteView: React.FC<ModalQuoteViewProps> = (props) => {
    const {onQuoteChanged, title, defaultQuote} = props
    const [values, setValues] = useState({quote: defaultQuote, code: "en-US"})

    const onChange = (name: string, value: string) => {
        let newValues: { quote: Quote; code: string }
        if (name === "message") {
            let newQuote = changeMessage(values.quote, value)
            newValues = {...values, quote: newQuote}
        } else {
            newValues = {...values, [name]: value}
        }
        setValues(newValues)
        if (onQuoteChanged) {
            onQuoteChanged(newValues.quote)
        }
    }

    const getOptions = (): string[] => {
        return values.quote.messages.map(quote => {
            return quote.code
        })
    }

    const changeMessage = (quote: Quote, message: string): Quote => {
        let index = values.quote.messages.findIndex(mMessage => {
            return mMessage.code === values.code
        })

        if (index !== -1) {
            quote.messages[index].message = message
        }

        return quote
    }

    const getMessage = (): string => {
        const message = values.quote.messages.find(mMessage => {
            return mMessage.code === values.code
        })
        if (message) {
            return message.message
        } else {
            return values.quote.messages[0].message
        }
    }

    const onSelectChange = (code: string) => {
        let newValues = {...values, code: code}
        setValues(newValues)
    }

    return (
        <>
            <Modal.Header>{title}</Modal.Header>
            <Modal.Content>
                <Form>
                    <Selector
                        options={getOptions()}
                        placeholder="Select code"
                        value={values.code}
                        onSelectChange={onSelectChange}/>
                    <InputTextArea
                        label="Quote"
                        name="message"
                        onChange={onChange}
                        defaultValue={getMessage()}/>
                </Form>
            </Modal.Content>
        </>
    )
}
