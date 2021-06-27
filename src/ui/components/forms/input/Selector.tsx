import {DropdownItemProps, DropdownProps, Form} from "semantic-ui-react"
import React, {SyntheticEvent} from "react";

interface SelectorProps {
    options: string[],
    placeholder: string,
    value: string,
    onSelectChange: (code: string) => void
}

export const Selector: React.FC<SelectorProps> = (props) => {

    const {options, placeholder, value, onSelectChange} = props

    const newOptions: DropdownItemProps[] = options.map((option => {
        return {value: option, text: option} as DropdownItemProps
    }))

    const onChange = (event: SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => {
        onSelectChange(data.value as string)
    }

    return (
        <Form.Select
            placeholder={placeholder}
            options={newOptions}
            onChange={onChange}
            value={value}/>
    )
}
