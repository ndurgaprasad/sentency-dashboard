import Config from "../../core/Config";
import NetworkInterceptor from "../interceptors/NetworkInterceptor";

export class QuoteLocalizationService {
    private static baseUrl: string = Config.BASE_URL + "/language"

    static async createLocalization(code: string, message: string, quoteId: string): Promise<any> {
        const localization = {
            code: code,
            message: message,
            quoteId: quoteId
        }
        return NetworkInterceptor.network().post(this.baseUrl, localization).then()
    }

    static async deleteLocalization(id: string): Promise<any> {
        return NetworkInterceptor.network().delete(`${this.baseUrl}/${id}`).then()
    }
}
