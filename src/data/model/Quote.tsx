import {QuoteLocalization} from "./QuoteLocalization";

export interface Quote {
    id?: string,
    authorId: string,
    messages: QuoteLocalization[]
}
