import {observer} from "mobx-react";
import {useStores} from "../../../data/context/UseStore";
import React from "react";
import {QuoteItem} from "../items/QuoteItem";
import {ModalDeleteView} from "../modal/views/ModalDeleteView";
import {BaseModalView} from "../../base/BaseModalView";
import {Quote} from "../../../data/model/Quote";
import {ModalQuoteView} from "../modal/views/ModalQuoteView";
import {List} from "semantic-ui-react";

export const QuoteList: React.FC<any> = observer((props) => {
    const {quoteStore, viewStore} = useStores()

    const onDeleteClicked = (quote: Quote) => {
        viewStore.setModalView({
            onConfirmAction: () => {
                quoteStore.deleteQuote(quote)
            },
            view: (<ModalDeleteView title="Delete quote" toDelete={quote.quote}/>)
        } as BaseModalView)
    }

    const onEditClicked = (quote: Quote) => {
        let mQuote = quote
        viewStore.setModalView({
            onConfirmAction: () => {
                quoteStore.updateQuote(mQuote)
            },
            view: (<ModalQuoteView title="Update Quote" onQuoteChanged={(tQuote => mQuote = tQuote)}
                                   authorId={quote.authorId} defaultQuote={mQuote}/>)
        } as BaseModalView)
    }

    return (
        <List divided verticalAlign='middle' relaxed selection animated>
            {quoteStore.quoteList.map(quote => {
                return (<QuoteItem quote={quote} onDeleteClicked={onDeleteClicked} onEditClicked={onEditClicked}/>)
            })}
        </List>
    )
})