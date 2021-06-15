import Config from "../../core/Config";
import {SentencyResponse} from "../response/SentencyResponse";
import NetworkInterceptor from "../interceptors/NetworkInterceptor";

export class UserService {
    private static baseUrl: string = Config.BASE_URL + "/user"

    static async login(email: string, password: string): Promise<SentencyResponse> {
        return await NetworkInterceptor.network()
            .post(this.baseUrl + "/login", {email: email, password: password})
            .then(res => {
                return res.data
            })
    }
}
