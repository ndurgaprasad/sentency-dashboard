import React from "react";
import {AuthorStore} from "../store/AuthorStore";
import {ViewStore} from "../store/ViewStore";
import {QuoteStore} from "../store/QuoteStore";


export const rootContext = React.createContext({
    authorStore: new AuthorStore(),
    viewStore: new ViewStore(),
    quoteStore: new QuoteStore()
})