import React from "react";
import {observer} from "mobx-react";
import {useStores} from "../../../data/store/UsesStore";
import {AuthorItem} from "./items/AuthorItem";
import {Header, List, Segment} from "semantic-ui-react";

export const AuthorList: React.FC<any> = observer((props) => {
    const {authorStore} = useStores()

    return (
        <Segment>
            <Header size='small'>List of Authors</Header>
                <List divided relaxed selection>
                    {
                        authorStore.authorList.map(author => {
                            return (
                                <AuthorItem
                                    key={author.id}
                                    author={author}/>
                            )
                        })
                    }
                </List>
        </Segment>
    )
})