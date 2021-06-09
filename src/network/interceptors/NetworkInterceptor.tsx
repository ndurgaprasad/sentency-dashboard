import Config from "../../core/Config";
import axios from "axios";

export default class NetworkInterceptor {

    static token: string = "";
    private static instance = axios.create()

    static network() {
        this.instance.defaults.headers.common['apiKey'] = Config.API_KEY;
        return this.instance
    }

    static setToken(token: string) {
        this.token = token
        this.instance.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
    }
}
