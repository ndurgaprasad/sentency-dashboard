import {action, observable, runInAction} from "mobx";
import {Author} from "../model/Author";
import {AuthorService} from "../../network/service/AuthorService";
import {BaseStore} from "./BaseStore";

export class AuthorStore extends BaseStore {

    private fullAuthorList: Author[] = [];

    constructor() {
        super();
        this.loadAuthorsCount()
    }

    @observable selectedAuthor?: Author = undefined
    @observable authorList: Author[] = []
    @observable authorCount: number = 0
    @observable authorWithMostQuotes?: Author = undefined
    @observable currentPage: number = 1
    @observable maxPages: number = 1

    @action
    selectAuthor(author?: Author) {
        this.selectedAuthor = author
    }

    @action
    async loadAuthors() {
        this.isLoading = true
        this.baseCall(async () => {
            const authors = await AuthorService.loadPaginated(this.currentPage)
            runInAction(() => {
                this.isLoading = false
                this.fullAuthorList = authors
                this.search("")
            })
        })
    }

    @action
    changePage(page: number) {
        this.currentPage = page
        this.loadAuthors()
    }

    @action
    search(query?: string) {
        if (query) {
            this.authorList = this.fullAuthorList.filter(item => item.name.includes(query))
        } else {
            this.authorList = this.fullAuthorList
        }
    }

    @action
    async addAuthor(author: Author) {
        this.baseCall(async () => {
            const response = AuthorService.addAuthor(author)
            response.then(res => {
                if (res.status === 200) {
                    this.processResponse(res)
                }
            })
        })
    }

    @action
    async updateAuthor(author: Author) {
        this.baseCall(async () => {
            const response = AuthorService.updateAuthor(author)
            response.then(res => {
                if (res.status === 200) {
                    this.processResponse(res)
                }
            })
        })
    }

    @action
    private async processResponse(res: any) {
        runInAction(() => {
            this.loadAuthors()
        })
    }

    @action
    async deleteAuthor(author: Author) {
        this.baseCall(async () => {
            const response = AuthorService.deleteAuthor(author)
            response.then(res => {
                if (res.status === 202) {
                    this.processResponse(res)
                }
            })
        })
    }

    @action
    async loadAuthorsCount() {
        this.baseCall(async () => {
            const response = AuthorService.countAuthors()
            response.then(res => {
                runInAction(() => {
                    this.authorCount = res
                    this.maxPages = Math.floor(res / 10)
                })
            })
        })
    }

    @action
    async loadAuthorWithMostQuotes() {
        this.baseCall(async () => {
            const response = AuthorService.authorWithMostQuotes()
            response.then(res => {
                runInAction(() => {
                    this.authorWithMostQuotes = res
                })
            })
        })
    }

}
