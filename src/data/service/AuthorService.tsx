import {Author} from "../model/Author";
import request from "superagent";
import Config from "../../core/Config";

export class AuthorService {
    private static baseUrl: string = Config.BASE_URL + "/authors"

    static async addAuthor(author: Author): Promise<any> {
        return request.post(this.baseUrl + "/add/").send(author).then()
    }

    static async loadAuthors(): Promise<Author[]> {
        return request.get(this.baseUrl).then(res => {
                let listAuthor: Author[] = res.body
                return listAuthor
            }
        )
    }

    static async updateAuthor(author: Author): Promise<any> {
        return request.post(this.baseUrl + "/update/").send(author).then()
    }

    static async deleteAuthor(author: Author): Promise<any> {
        return request.delete(this.baseUrl + "/delete/").send({id: author.id}).then()
    }
}