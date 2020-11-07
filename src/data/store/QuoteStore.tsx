import {BaseStore} from "./BaseStore";
import {Quote} from "../model/Quote";
import {action, observable, runInAction} from "mobx";
import {QuoteService} from "../../network/service/QuoteService";

export class QuoteStore extends BaseStore {

    private fullQuoteList: Quote[] = [];

    @observable selectedQuote?: Quote = undefined
    @observable quoteList: Quote[] = []
    @observable quotesCount: number = 0
    @observable monthQuotes: number = 0

    @action
    async loadQuotes(authorId: string) {
        this.baseCall(async () => {
            const quotes = await QuoteService.loadQuotes(authorId)
            runInAction(() => {
                this.fullQuoteList = quotes
                this.search("")
            })
        })
    }

    @action
    cleanQuotes() {
        this.fullQuoteList = []
        this.search("")
    }

    @action
    search(query?: string) {
        if (query) {
            this.quoteList = this.fullQuoteList.filter(item => item.quote.includes(query))
        } else {
            this.quoteList = this.fullQuoteList
        }
    }

    @action
    async addQuote(quote: Quote) {
        this.baseCall(async () => {
            const response = QuoteService.addQuote(quote)
            response.then(res => {
                if (res.status === 200) {
                    runInAction(() => {
                        this.loadQuotes(quote.authorId)
                    })
                }
            })
        })
    }

    @action
    async updateQuote(quote: Quote) {
        this.baseCall(async () => {
            const response = QuoteService.updateQuote(quote)
            response.then(res => {
                if (res.status === 200) {
                    runInAction(() => {
                        this.loadQuotes(quote.authorId)
                    })
                }
            })
        })
    }

    @action
    async deleteQuote(quote: Quote) {
        this.baseCall(async () => {
            const response = QuoteService.deleteQuote(quote)
            response.then(res => {
                if (res.status === 200) {
                    runInAction(() => {
                        this.loadQuotes(quote.authorId)
                    })
                }
            })
        })
    }

    @action
    async loadQuotesCount() {
        this.baseCall(async () => {
            const response = QuoteService.countQuotes()
            response.then(res => {
                runInAction(() => {
                    this.quotesCount = res
                })
            })
        })
    }

    @action
    async countMonthQuotes() {
        this.baseCall(async () => {
            const response = QuoteService.monthQuotes()
            response.then(res => {
                runInAction(() => {
                    this.monthQuotes = res
                })
            })
        })
    }
}