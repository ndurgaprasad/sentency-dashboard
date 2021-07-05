import {Quote} from "../model/Quote";
import {action, makeAutoObservable, runInAction} from "mobx";
import {QuoteService} from "../../network/service/QuoteService";

export class QuoteStore {

    private fullQuoteList: Quote[] = [];

    selectedQuote?: Quote = undefined
    quoteList: Quote[] = []
    quotesCount: number = 0
    monthQuotes: number = 0

    constructor() {
        makeAutoObservable(this)
    }

    async loadQuotes(authorId: string) {
        const quotes = await QuoteService.loadQuotes(authorId)
        this.fullQuoteList = quotes
        this.search("")
    }

    cleanQuotes() {
        this.fullQuoteList = []
        this.search("")
    }

    search(query?: string) {
        if (query) {
            this.quoteList = this.fullQuoteList.filter(item => item.messages[0].message.includes(query))
        } else {
            this.quoteList = this.fullQuoteList
        }
    }

    async addQuote(quote: Quote) {
        const response = await QuoteService.addQuote(quote)
        if (response.status === 200) {
            this.loadQuotes(quote.authorId)
        }
    }

    @action
    private async processResponse(res: any, authorId: string) {
        runInAction(() => {
            this.loadQuotes(authorId)
        })
    }

    @action
    async updateQuote(quote: Quote) {
        const response = await QuoteService.updateQuote(quote)
        if (response.status === 200) {
            this.processResponse(response, quote.authorId)
        }
    }

    @action
    async deleteQuote(quote: Quote) {
        const response = await QuoteService.deleteQuote(quote)
        if (response.status === 202) {
            this.processResponse(response, quote.authorId)
        }
    }

    async loadQuotesCount() {
        const response = await QuoteService.countQuotes()
        runInAction(() => {
            this.quotesCount = response
        })
    }

    async countMonthQuotes() {
        const response = await QuoteService.monthQuotes()
        runInAction(() => {
            this.monthQuotes = response
        })
    }
}
