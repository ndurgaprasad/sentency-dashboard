import {action, makeAutoObservable, observable} from "mobx";
import {BaseModalView} from "../../ui/base/BaseModalView";

export class ViewStore {

    @observable modalView?: BaseModalView = undefined

    constructor() {
        makeAutoObservable(this)
    }

    @action
    setModalView(view?: BaseModalView) {
        this.modalView = view
    }
}
