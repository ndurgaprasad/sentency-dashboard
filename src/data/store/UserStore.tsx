import {action, observable, runInAction} from "mobx";
import {User} from "../model/User";
import {UserService} from "../../network/service/UserService";
import {BaseStore} from "./BaseStore";
import NetworkInterceptor from "../../network/interceptors/NetworkInterceptor";

export class UserStore extends BaseStore {

    @observable loggedUser?: User = undefined

    constructor() {
        super();
        this.checkLocal()
    }

    @action
    async checkLocal() {
        let token = localStorage.getItem("token")
        let email = localStorage.getItem("email")

        runInAction(() => {
            if (email !== null && token !== null) {
                NetworkInterceptor.setToken(token)
                this.loggedUser = {email: email, token: token}
            }
        })
    }

    @action
    async login(email: string, password: string) {
        return this.baseCall(async () => {
            UserService.login(email, password).then(response => {
                runInAction(() => {
                    NetworkInterceptor.setToken(response.token)
                    this.loggedUser = {email: email, token: response.token}
                })
                localStorage.setItem("token", response.token)
                localStorage.setItem("email", email)
            }).catch(res => {
                console.log(res)
            })
        })
    }

    @action
    async logout() {
        this.loggedUser = undefined
        localStorage.removeItem("token")
        localStorage.removeItem("email")
    }
}
