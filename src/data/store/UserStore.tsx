import {action, observable, runInAction} from "mobx";
import {User} from "../model/User";
import {UserService} from "../../network/service/UserService";
import {BaseStore} from "./BaseStore";
import NetworkInterceptor from "../../network/interceptors/NetworkInterceptor";

export class UserStore extends BaseStore {

    @observable loggedUser?: User = undefined

    @action
    async login(email: string, password: string) {
        return this.baseCall(async () => {
            UserService.login(email, password).then(response => {
                if (response.code === 200) {
                    runInAction(() => {
                        NetworkInterceptor.setToken(response.message)
                        this.loggedUser = {email: email, token: response.message}
                    })
                }
            }).catch(res => {
                console.log(res)
            })
        })
    }

    @action
    async logout() {
        this.loggedUser = undefined
    }
}