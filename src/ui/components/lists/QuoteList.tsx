import {observer} from "mobx-react";
import {useStores} from "../../../data/store/UsesStore";
import React from "react";
import {QuoteItem} from "./items/QuoteItem";
import {DeleteView} from "../modalviews/DeleteView";
import {BaseModalView} from "../modalviews/BaseModalView";
import {Quote} from "../../../data/model/Quote";
import {CRUDQuoteView} from "../modalviews/CRUDQuoteView";
import {List} from "semantic-ui-react";

export const QuoteList: React.FC<any> = observer((props) => {
    const {quoteStore, viewStore} = useStores()

    const onDeleteClicked = (quote: Quote) => {
        viewStore.setModalView({
            onConfirmAction: () => {
                quoteStore.deleteQuote(quote)
            },
            view: (<DeleteView title="Delete quote" toDelete={quote.quote}/>)
        } as BaseModalView)
    }

    const onEditClicked = (quote: Quote) => {
        let mQuote = quote
        viewStore.setModalView({
            onConfirmAction: () => {
                quoteStore.updateQuote(mQuote)
            },
            view: (<CRUDQuoteView title="Update Quote" onQuoteChanged={(tQuote => mQuote = tQuote)}
                                  authorId={quote.authorId} defaultQuote={mQuote}/>)
        } as BaseModalView)
    }

    return (
        <List divided verticalAlign='middle' relaxed selection>
            {quoteStore.quoteList.map(quote => {
                return (<QuoteItem quote={quote} onDeleteClicked={onDeleteClicked} onEditClicked={onEditClicked}/>)
            })}
        </List>
    )
})