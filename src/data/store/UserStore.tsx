import {makeAutoObservable} from "mobx";
import {User} from "../model/User";
import {UserService} from "../../network/service/UserService";
import NetworkInterceptor from "../../network/interceptors/NetworkInterceptor";

export class UserStore {

    loggedUser?: User = undefined

    constructor() {
        makeAutoObservable(this)
        this.checkLocal()
    }

    checkLocal() {
        let token = localStorage.getItem("token")
        let email = localStorage.getItem("email")

        if (email !== null && token !== null) {
            this.loggedUser = {email: email, token: token}
        }
    }

    async login(email: string, password: string) {
        UserService.login(email, password).then(response => {
            NetworkInterceptor.setToken(response.token)
            this.loggedUser = {email: email, token: response.token}
            localStorage.setItem("token", response.token)
            localStorage.setItem("email", email)
        }).catch(res => {
            console.log(res)
        })
    }

    async logout() {
        this.loggedUser = undefined
        localStorage.removeItem("token")
        localStorage.removeItem("email")
    }
}
