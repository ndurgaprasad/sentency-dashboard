import React from "react";
import {createStyles, FormControl, TextField, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        margin: {
            margin: theme.spacing(1),
        },
    }),
);

interface InputTextProps {
    label: string,
    name: string,
    onChange?: (name: string, value: string) => void,
    defaultValue?: string
}

export const InputTextArea: React.FC<InputTextProps> = (props) => {
    const classes = useStyles();
    const {label, name, onChange, defaultValue} = props

    const handleOnTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(event.target.name, event.target.value)
        }
    }

    return (
        <FormControl fullWidth className={classes.margin} variant="outlined">
            <TextField
                name={name}
                variant="outlined"
                label={label}
                value={defaultValue || ''}
                multiline
                rows={4}
                onChange={handleOnTextChange}/>
        </FormControl>
    )
}