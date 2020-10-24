import request from "superagent";

export default class NetworkInterceptor {

    static token: string = "";

    static network() {
        return request.agent().set({Authorization: this.token})
    }

    static setToken(token: string) {
        this.token = token
    }
}
