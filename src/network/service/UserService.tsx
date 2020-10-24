import Config from "../../core/Config";
import {SentencyResponse} from "../response/SentencyResponse";
import request from "superagent";

export class UserService {
    private static baseUrl: string = Config.BASE_URL + "/users"

    static async login(email: string, password: string): Promise<SentencyResponse> {
        return request
            .post(this.baseUrl + "/authenticate")
            .send({email: email, password: password})
            .then(res => {
                const response: SentencyResponse = res.body

                return response
            })
    }
}