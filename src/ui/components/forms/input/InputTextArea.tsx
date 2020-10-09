import React from "react";
import {Form} from "semantic-ui-react";

interface InputTextProps {
    label: string,
    name: string,
    onChange?: (name: string, value: string) => void,
    defaultValue?: string
}

export const InputTextArea: React.FC<InputTextProps> = (props) => {
    const {label, name, onChange, defaultValue} = props

    const handleOnTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (onChange) {
            onChange(event.target.name, event.target.value)
        }
    }

    return (
        <Form>
            <Form.TextArea name={name} placeholder={label} value={defaultValue || ''}
                           onChange={handleOnTextChange}/>
        </Form>
    )
}