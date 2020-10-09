import {observer} from "mobx-react";
import React from "react";
import {useStores} from "../../data/store/UsesStore";
import {Button, Modal} from "semantic-ui-react";

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
        <Modal
            onClose={() => handleClose()}
            size="small"
            open={dialogView != null}>
            {dialogView?.view}
            <Modal.Actions>
                <Button negative onClick={handleClose}>
                    Cancel
                </Button>
                <Button positive onClick={handleConfirm}>
                    Confirm
                </Button>
            </Modal.Actions>
        </Modal>
    )
})