import {observable} from "mobx";

export abstract class BaseStore {

    @observable isLoading = false;

    protected baseCall(execute: () => void) {
        try {
            execute()
        } catch (error) {
            console.log(error)
        }
    }
}
