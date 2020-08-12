import React from "react";
import {DialogContent, DialogTitle, DialogContentText} from "@material-ui/core";

export interface DeleteModalProps {
    title: string
    toDelete: string
}

export const DeleteView: React.FC<DeleteModalProps> = (props) => {
    const {title, toDelete} = props

    return (
        <div>
            <DialogTitle id="form-dialog-title">{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Do you really wish to delete <b>{toDelete}</b>?
                </DialogContentText>
            </DialogContent>
        </div>
    )
}