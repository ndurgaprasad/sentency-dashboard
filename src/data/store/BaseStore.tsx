import {observable} from "mobx";

export abstract class BaseStore {

    @observable isLoading = false;

    baseCall(execute: () => void) {
        this.isLoading = true
        try {
            execute()
        } catch (error) {
            console.log(error)
        } finally {
            this.isLoading = false
        }
    }
}