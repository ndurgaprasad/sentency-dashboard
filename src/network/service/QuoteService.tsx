import Config from "../../core/Config";
import request from "superagent";
import {Quote} from "../../data/model/Quote";

export class QuoteService {
    private static baseUrl: string = Config.BASE_URL + "/quotes"

    static async loadQuotes(authorId: string): Promise<Quote[]> {
        return request.post(Config.BASE_URL + "/authors/quotes").send({id: authorId})
            .then(res => {
                let listQuotes: Quote[] = res.body
                return listQuotes
            })
    }

    static async addQuote(quote: Quote): Promise<any> {
        return request.post(this.baseUrl + "/add").send(quote).then()
    }

    static async deleteQuote(quote: Quote): Promise<any> {
        return request.delete(this.baseUrl + "/delete/").send({id: quote.id}).then()
    }

    static async updateQuote(quote: Quote): Promise<any> {
        return request.put(this.baseUrl + "/update/").send(quote).then()
    }

    static async countQuotes(): Promise<number> {
        return request.get(this.baseUrl + "/count/").then(res => {
            return res.body
        })
    }

    static async monthQuotes(): Promise<number> {
        return request.get(this.baseUrl + "/month/count/").then(res => {
            return res.body
        })
    }
}