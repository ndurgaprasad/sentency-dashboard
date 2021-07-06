import {Form, Modal} from "semantic-ui-react";
import {Selector} from "../../forms/input/Selector";
import {InputTextArea} from "../../forms/input/InputTextArea";
import React, {useState} from "react";
import {Quote} from "../../../../data/model/Quote";

interface AddLocalizationProps {
    quote: Quote
    options: string[]
    onNewLocalization?: (code: string, message: string) => void
}

interface AddLocalizationState {
    code: string,
    message: string
}

export const ModalAddLocalizationView: React.FC<AddLocalizationProps> = (props) => {

    const {quote, options, onNewLocalization} = props
    const [localization, setLocalization] = useState({code: options[0], message: ""})

    const onChange = (name: string, value: string) => {
        if (name === "message") {
            let newLocalization = {...localization, message: value}
            localizationChanged(newLocalization)
            setLocalization(newLocalization)
        }
    }

    const localizationChanged = (newLocalization: AddLocalizationState) => {
        if (onNewLocalization) {
            const code = newLocalization.code
            onNewLocalization(code, newLocalization.message)
        }
    }

    const onSelectChange = (code: string) => {
        let newLocalization = {...localization, code: code}
        localizationChanged(newLocalization)
        setLocalization(newLocalization)
    }

    return (
        <>
            <Modal.Header>Add Localization</Modal.Header>
            <Modal.Content>
                <h5>Original: {quote.messages[0].message}</h5>
                <Form>
                    <Selector
                        options={options}
                        placeholder="Select code to add"
                        value={localization.code}
                        onSelectChange={onSelectChange}/>
                    <InputTextArea
                        label="Quote"
                        name="message"
                        onChange={onChange}
                        defaultValue={localization.message}/>
                </Form>
            </Modal.Content>
        </>
    )
}
