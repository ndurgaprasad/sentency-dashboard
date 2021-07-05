import {observer} from "mobx-react";
import React from "react";
import {useStores} from "../../../data/context/UseStore";
import {List} from "semantic-ui-react";
import {QueueLocalizationItem} from "../items/QueueLocalizationItem";

export const QueueList: React.FC<any> = observer((props) => {

        const {queueStore} = useStores()

        return (
            <List>
                {queueStore.fullLocalizationsList.map(suggestion => {
                    return <QueueLocalizationItem queueLocalization={suggestion}
                                                  key={suggestion.id}/>
                })}
            </List>
        )
    }
)
