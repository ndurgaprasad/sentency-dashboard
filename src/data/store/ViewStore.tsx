import {action, observable} from "mobx";
import {BaseModalView} from "../../ui/components/modalviews/BaseModalView";

export class ViewStore {
    @observable modalView?: BaseModalView = undefined

    @action
    setModalView(view?: BaseModalView) {
        this.modalView = view
    }
}