import {action, observable, runInAction} from "mobx";
import {Author} from "../model/Author";
import {AuthorService} from "../../network/service/AuthorService";
import {BaseStore} from "./BaseStore";

export class AuthorStore extends BaseStore {

    private fullAuthorList: Author[] = [];

    @observable selectedAuthor?: Author = undefined
    @observable authorList: Author[] = []
    @observable authorCount: number = 0
    @observable authorWithMostQuotes?: Author = undefined

    @action
    selectAuthor(author?: Author) {
        this.selectedAuthor = author
    }

    @action
    async loadAuthors() {
        this.baseCall(async () => {
            const authors = await AuthorService.loadAuthors()
            runInAction(() => {
                this.fullAuthorList = authors
                this.search("")
            })
        })
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
                    runInAction(() => {
                        this.loadAuthors()
                    })
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
                    runInAction(() => {
                        this.loadAuthors()
                    })
                }
            })
        })
    }

    @action
    async deleteAuthor(author: Author) {
        this.baseCall(async () => {
            const response = AuthorService.deleteAuthor(author)
            response.then(res => {
                if (res.status === 200) {
                    runInAction(() => {
                        this.loadAuthors()
                    })
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
                })
            })
        })
    }

    @action async loadAuthorWithMostQuotes(){
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