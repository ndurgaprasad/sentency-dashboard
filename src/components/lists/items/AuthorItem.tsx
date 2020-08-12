import React from "react";
import {Author} from "../../../data/model/Author";
import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import {useStores} from "../../../data/store/UsesStore";

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
        <ListItem button onClick={onClick}>
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={author.picUrl}/>
            </ListItemAvatar>
            <ListItemText primary={author.name}/>
        </ListItem>
    )
}