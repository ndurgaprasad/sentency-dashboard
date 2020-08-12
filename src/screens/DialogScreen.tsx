import {observer} from "mobx-react";
import {Button, Dialog, DialogActions} from "@material-ui/core";
import React from "react";
import {useStores} from "../data/store/UsesStore";

export const DialogScreen: React.FC<any> = observer((props) => {
    const {viewStore} = useStores()
    const dialogView = viewStore.modalView

    const closeModal = () => {
        viewStore.setModalView()
    }

    const handleClose = () => {
        dialogView?.onCloseClicked?.()
        closeModal()
    };

    const handleConfirm = () => {
        dialogView?.onConfirmAction?.()
        closeModal()
    }

    return (
        <Dialog open={dialogView !== undefined} onClose={handleClose} maxWidth="xs" fullWidth={true}>
            {dialogView?.view}
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleConfirm} color="primary">
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    )
})