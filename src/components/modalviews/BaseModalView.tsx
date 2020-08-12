import React from "react";


export interface BaseModalView {
    onConfirmAction?: () => void
    onCloseClicked?: () => void
    view: React.ReactNode
}