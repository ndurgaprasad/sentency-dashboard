import Config from "../../core/Config";
import {Quote} from "../../data/model/Quote";
import NetworkInterceptor from "../interceptors/NetworkInterceptor";

export class QuoteService {
    private static baseUrl: string = Config.BASE_URL + "/quote"

    static async loadQuotes(authorId: string): Promise<Quote[]> {
        return NetworkInterceptor.network().get(Config.BASE_URL + `/author/${authorId}/quotes`)
            .then(res => {
                let listQuotes: Quote[] = res.data
                return listQuotes
            })
    }

    static async addQuote(quote: Quote): Promise<any> {
        return NetworkInterceptor.network().post(this.baseUrl, quote).then()
    }

    static async deleteQuote(quote: Quote): Promise<any> {
        return NetworkInterceptor.network().delete(this.baseUrl, {params: {id: quote.id}}).then()
    }

    static async updateQuote(quote: Quote): Promise<any> {
        return NetworkInterceptor.network().put(this.baseUrl, quote).then()
    }

    static async countQuotes(): Promise<number> {
        return NetworkInterceptor.network().get(this.baseUrl + "/count").then(res => {
            return res.data["count"]
        })
    }

    static async monthQuotes(): Promise<number> {
        return NetworkInterceptor.network().get(this.baseUrl + "/month/count").then(res => {
            return res.data["count"]
        })
    }
}
