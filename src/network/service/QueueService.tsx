import Config from "../../core/Config";
import NetworkInterceptor from "../interceptors/NetworkInterceptor";
import {QueueLocalization} from "../../data/model/QueueLocalization";
import {GenericResponse} from "../../data/model/GenericResponse";

export class QueueService {
    private static baseUrl: string = Config.BASE_URL + "/queue"

    static async getQueuedLocalizations(): Promise<QueueLocalization[]> {
        return await NetworkInterceptor.network()
            .get(this.baseUrl + "/language")
            .then(res => {
                return res.data
            })
    }

    static async dropLocalization(id: string): Promise<GenericResponse> {
        return await NetworkInterceptor.network()
            .delete(`${this.baseUrl}/language/${id}`)
            .then(res => {
                return res.data
            })
    }

    static async applyLocalization(id: string): Promise<GenericResponse> {
        return await NetworkInterceptor.network()
            .post(`${this.baseUrl}/language/${id}`)
            .then(res => {
                return res.data
            })
    }
}
