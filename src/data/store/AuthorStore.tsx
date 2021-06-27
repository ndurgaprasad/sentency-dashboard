import {action, makeAutoObservable, runInAction} from "mobx";
import {Author} from "../model/Author";
import {AuthorService} from "../../network/service/AuthorService";

export class AuthorStore {

    private fullAuthorList: Author[] = [];

    constructor() {
        makeAutoObservable(this)
        this.loadAuthorsCount()
    }

    selectedAuthor?: Author = undefined
    authorList: Author[] = []
    authorCount: number = 0
    authorWithMostQuotes?: Author = undefined
    currentPage: number = 1
    maxPages: number = 1
    isLoading = false;

    @action
    selectAuthor(author?: Author) {
        this.selectedAuthor = author
    }

    async loadAuthors() {
        const quotes = await AuthorService.loadPaginated(this.currentPage)
        runInAction(() => {
            this.isLoading = true
            this.fullAuthorList = quotes
        })
        this.setLoading(false)
        this.search("")
    }

    @action
    setLoading(loading: boolean) {
        this.isLoading = loading
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
        const response = await AuthorService.addAuthor(author)
        if (response.status === 200) {
            this.loadAuthors()
        }
    }

    @action
    async updateAuthor(author: Author) {
        const response = await AuthorService.updateAuthor(author)
        if (response.status === 200) {
            this.loadAuthors()
        }
    }

    @action
    async deleteAuthor(author: Author) {
        const response = await AuthorService.deleteAuthor(author)
        if (response.status === 202) {
            this.loadAuthors()
        }
    }

    async loadAuthorsCount() {
        const response = await AuthorService.countAuthors()
        runInAction(() => {
            this.authorCount = response
            this.maxPages = Math.floor(response / 10)
        })
    }

    async loadAuthorWithMostQuotes() {
        const response = await AuthorService.authorWithMostQuotes()
        runInAction(() => {
            this.authorWithMostQuotes = response
        })
    }

}
