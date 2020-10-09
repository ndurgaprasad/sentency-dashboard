import React from "react";
import {Author} from "../../../../data/model/Author";
import {useStores} from "../../../../data/store/UsesStore";
import { List, Image } from "semantic-ui-react";

interface AuthorItemProps {
    author: Author
}

export const AuthorItem: React.FC<AuthorItemProps> = (props) => {
    const {authorStore} = useStores()
    const {author} = props

    const onClick = () => {
        authorStore.selectAuthor(author)
    }

    return (
        <List.Item onClick={onClick}>
            <Image avatar src={author.picUrl} />
            <List.Content>
                <List.Header as='a'>{author.name}</List.Header>
            </List.Content>
        </List.Item>
    )
}