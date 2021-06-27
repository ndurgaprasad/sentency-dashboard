import Config from "../../core/Config";
import axios, {AxiosInstance} from "axios";
import axiosRetry from "axios-retry";

export default class NetworkInterceptor {

    static token: string = "";
    private static instance: AxiosInstance

    private constructor() {
    }

    static network(): AxiosInstance {
        if (!this.instance) {
            this.startInstance()
        }
        return this.instance
    }

    static startInstance() {
        this.instance = axios.create()
        this.instance.defaults.headers.common['apiKey'] = Config.API_KEY;
        axiosRetry(this.instance, {retries: 3, retryDelay: axiosRetry.exponentialDelay});
        let token = localStorage.getItem("token")

        if (token) {
            this.setToken(token)
        }
    }

    static setToken(token: string) {
        this.token = token
        if (this.instance) {
            this.instance.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
        }
    }
}
