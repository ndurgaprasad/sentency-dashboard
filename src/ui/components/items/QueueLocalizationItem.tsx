import React from "react";
import {Button, Card, List} from "semantic-ui-react";
import {QueueLocalization} from "../../../data/model/QueueLocalization";
import {TimeUtils} from "../../../core/TimeUtils";
import {useStores} from "../../../data/context/UseStore";

interface QueueLocalizationItemProps {
    queueLocalization: QueueLocalization
}

export const QueueLocalizationItem: React.FC<QueueLocalizationItemProps> = (props) => {
    const {queueLocalization} = props
    const {queueStore} = useStores()

    const onAcceptClicked = () => {
        queueStore.acceptLocalization(queueLocalization.id)
    }

    const onDeclineClicked = () => {
        queueStore.declineLocalization(queueLocalization.id)
    }

    return (
        <List.Item>
            <Card>
                <Card.Content>
                    <Card.Meta>{TimeUtils.formatTime(queueLocalization.timestamp)}</Card.Meta>
                    <Card.Description>
                        <strong>Message: </strong>
                        {queueLocalization.data.message}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color='green' onClick={onAcceptClicked}>
                            Accept
                        </Button>
                        <Button basic color='red' onClick={onDeclineClicked}>
                            Decline
                        </Button>
                    </div>
                </Card.Content>
            </Card>
        </List.Item>)
}
