import {Author} from "../../data/model/Author";
import Config from "../../core/Config";
import NetworkInterceptor from "../interceptors/NetworkInterceptor";

export class AuthorService {
    private static baseUrl: string = Config.BASE_URL + "/author"

    static async addAuthor(author: Author): Promise<any> {
        return NetworkInterceptor.network().post(this.baseUrl, author).then()
    }

    static async loadAuthors(): Promise<Author[]> {
        return NetworkInterceptor.network().get(this.baseUrl + "/all").then(res => {
                return res.data
            }
        )
    }

    static async updateAuthor(author: Author): Promise<any> {
        return NetworkInterceptor.network().put(this.baseUrl, author).then()
    }

    static async deleteAuthor(author: Author): Promise<any> {
        return NetworkInterceptor.network().delete(this.baseUrl + `/${author.id}`).then()
    }

    static async countAuthors(): Promise<number> {
        return NetworkInterceptor.network().get(this.baseUrl + "/count").then(res => {
            return res.data["count"]
        })
    }

    static async authorWithMostQuotes(): Promise<Author> {
        return NetworkInterceptor.network().get(this.baseUrl + "/top").then(res => {
            return res.data
        })
    }
}
