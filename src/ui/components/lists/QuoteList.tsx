import {observer} from "mobx-react";
import {useStores} from "../../../data/context/UseStore";
import React from "react";
import {QuoteItem} from "../items/QuoteItem";
import {ModalDeleteView} from "../modal/views/ModalDeleteView";
import {BaseModalView} from "../../base/BaseModalView";
import {Quote} from "../../../data/model/Quote";
import {ModalQuoteView} from "../modal/views/ModalQuoteView";
import {List} from "semantic-ui-react";
import {ModalAddLocalizationView} from "../modal/views/ModalAddLocalizationView";
import {LanguageUtils} from "../../../core/LanguageUtils";
import {QuoteLocalization} from "../../../data/model/QuoteLocalization";

export const QuoteList: React.FC<any> = observer((props) => {
    const {quoteStore, viewStore} = useStores()

    const onDeleteClicked = (quote: Quote) => {
        viewStore.setModalView({
            onConfirmAction: () => {
                quoteStore.deleteQuote(quote)
            },
            view: (<ModalDeleteView title="Delete quote" toDelete={quote.messages[0].message}/>)
        } as BaseModalView)
    }

    const onEditClicked = (quote: Quote) => {
        let mQuote = quote
        viewStore.setModalView({
            onConfirmAction: () => {
                quoteStore.updateQuote(mQuote)
            },
            view: (<ModalQuoteView title="Update Quote"
                                   onQuoteChanged={(tQuote => mQuote = tQuote)}
                                   defaultQuote={mQuote}/>)
        } as BaseModalView)
    }

    const onAddLocalizationClicked = (quote: Quote) => {
        let mQuote = quote
        let code = ""
        let message = ""
        viewStore.setModalView({
                onConfirmAction: () => {
                    quoteStore.addLocalization(mQuote, code, message)
                },
                view: (<ModalAddLocalizationView
                    quote={mQuote}
                    options={LanguageUtils.getOptions(mQuote)}
                    onNewLocalization={(tCode, tMessage) => {
                        code = tCode
                        message = tMessage
                    }}/>)
            } as BaseModalView
        )
    }

    const onLocalizationClicked = (quoteLocalization: QuoteLocalization) => {
        viewStore.setModalView({
            onConfirmAction: () => {
                quoteStore.deleteLocalization(quoteLocalization.id)
            },
            view: (<ModalDeleteView title="Delete localization" toDelete={quoteLocalization.message}/>)
        } as BaseModalView)
    }

    return (
        <List divided verticalAlign='middle' relaxed selection animated>
            {quoteStore.quoteList.map(quote => {
                return (<QuoteItem
                        quote={quote}
                        onDeleteClicked={onDeleteClicked}
                        onEditClicked={onEditClicked}
                        onAddLocalizationClicked={onAddLocalizationClicked}
                        onLocalizationClicked={onLocalizationClicked}
                        key={quote.id}/>
                )
            })}
        </List>
    )
})
