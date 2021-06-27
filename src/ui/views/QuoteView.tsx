import React from "react";
import {CRUDBar} from "../components/menu/CRUDBar";
import {observer} from "mobx-react";
import {useStores} from "../../data/context/UseStore";
import {BaseModalView} from "../base/BaseModalView";
import {Quote} from "../../data/model/Quote";
import {ModalQuoteView} from "../components/modal/views/ModalQuoteView";
import {QuoteList} from "../components/lists/QuoteList";
import {Divider, Segment} from "semantic-ui-react";
import {QuoteLocalization} from "../../data/model/QuoteLocalization";

export const QuoteView: React.FC<any> = observer((props) => {
    const {authorStore, viewStore, quoteStore} = useStores()
    const selectedAuthor = authorStore.selectedAuthor

    if (selectedAuthor?.id) {
        quoteStore.loadQuotes(selectedAuthor.id)
    } else {
        quoteStore.cleanQuotes()
    }

    const onAddClicked = () => {
        if (selectedAuthor?.id) {
            let mQuote = createCleanQuote(selectedAuthor.id)
            viewStore.setModalView({
                onConfirmAction: () => {
                    quoteStore.addQuote(mQuote)
                },
                view: (<ModalQuoteView title="Add Quote"
                                       onQuoteChanged={(quote => mQuote = quote)}
                                       defaultQuote={mQuote}/>)
            } as BaseModalView)
        }
    }

    const createCleanQuote = (authorId: string): Quote => {
        return {
            authorId: authorId,
            messages: [
                {code: "en-US"} as QuoteLocalization
            ]
        } as Quote
    }

    return (
        <Segment fluid={"true"}>
            <CRUDBar
                title={selectedAuthor ? selectedAuthor.name + " Quotes" : "Select an author ..."}
                onAddClicked={onAddClicked}/>
            <Divider/>
            <QuoteList/>
        </Segment>
    )
})
