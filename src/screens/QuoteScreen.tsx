import React from "react";
import {CRUDBar} from "../components/menu/CRUDBar";
import {Box} from "@material-ui/core";
import {observer} from "mobx-react";
import {useStores} from "../data/store/UsesStore";
import {BaseModalView} from "../components/modalviews/BaseModalView";
import {Quote} from "../data/model/Quote";
import {CRUDQuoteView} from "../components/modalviews/CRUDQuoteView";
import {QuoteList} from "../components/lists/QuoteList";

export const QuoteScreen: React.FC<any> = observer((props) => {
    const {authorStore, viewStore, quoteStore} = useStores()
    const selectedAuthor = authorStore.selectedAuthor

    if (selectedAuthor?.id) {
        quoteStore.loadQuotes(selectedAuthor.id)
    }

    const onAddClicked = () => {
        if (selectedAuthor?.id) {
            let mQuote = {authorId: selectedAuthor.id} as Quote
            viewStore.setModalView({
                onConfirmAction: () => {
                    quoteStore.addQuote(mQuote)
                },
                view: (<CRUDQuoteView title="Add Quote" onQuoteChanged={(quote => mQuote = quote)}
                                      authorId={selectedAuthor.id}/>)
            } as BaseModalView)
        }
    }

    return (
        <Box mt={2} mr={2}>
            <CRUDBar
                title={selectedAuthor ? selectedAuthor.name + " Quotes" : "Select an author ..."}
                onAddClicked={onAddClicked}/>
            <QuoteList/>
        </Box>
    )
})