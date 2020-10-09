import React from "react";
import { Modal } from "semantic-ui-react";

export interface DeleteModalProps {
    title: string
    toDelete: string
}

export const DeleteView: React.FC<DeleteModalProps> = (props) => {
    const {title, toDelete} = props

    return (
        <>
            <Modal.Header>{title}</Modal.Header>
            <Modal.Content>
                <p>
                    Do you really wish to delete <b>{toDelete}</b>?
                </p>
            </Modal.Content>
        </>
    )
}