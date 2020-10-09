import React from "react";
import {Input} from "semantic-ui-react";

interface InputTextProps {
    label: string,
    name: string,
    onChange?: (name: string, value: string) => void,
    defaultValue?: string
}

export const InputText: React.FC<InputTextProps> = (props) => {
    const {label, name, onChange, defaultValue} = props

    const handleOnTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(event.target.name, event.target.value)
        }
    }

    return (
        <Input fluid name={name} label={label} labelPosition={"left"} onChange={handleOnTextChange}
               value={defaultValue || ''}/>
    )
}