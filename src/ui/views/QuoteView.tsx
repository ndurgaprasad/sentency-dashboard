import React from "react";
import {CRUDBar} from "../components/menu/CRUDBar";
import {observer} from "mobx-react";
import {useStores} from "../../data/context/UseStore";
import {BaseModalView} from "../base/BaseModalView";
import {Quote} from "../../data/model/Quote";
import {ModalQuoteView} from "../components/modal/views/ModalQuoteView";
import {QuoteList} from "../components/lists/QuoteList";
import {Divider, Segment} from "semantic-ui-react";

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
            let mQuote = {authorId: selectedAuthor.id} as Quote
            viewStore.setModalView({
                onConfirmAction: () => {
                    quoteStore.addQuote(mQuote)
                },
                view: (<ModalQuoteView title="Add Quote" onQuoteChanged={(quote => mQuote = quote)}
                                       authorId={selectedAuthor.id}/>)
            } as BaseModalView)
        }
    }

    return (
        <Segment fluid>
            <CRUDBar
                title={selectedAuthor ? selectedAuthor.name + " Quotes" : "Select an author ..."}
                onAddClicked={onAddClicked}/>
            <Divider/>
            <QuoteList/>
        </Segment>
    )
})