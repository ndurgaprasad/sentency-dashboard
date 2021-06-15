import Config from "../../core/Config";
import axios from "axios";
import axiosRetry from "axios-retry";

export default class NetworkInterceptor {

    static token: string = "";
    private static instance = axios.create()

    static network() {
        this.instance.defaults.headers.common['apiKey'] = Config.API_KEY;
        axiosRetry(this.instance, {retries: 3, retryDelay: axiosRetry.exponentialDelay});
        return this.instance
    }

    static setToken(token: string) {
        this.token = token
        this.instance.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
    }
}
