import React from "react";
import {useStores} from "../../data/store/UsesStore";
import {AuthorForm} from "../components/forms/AuthorForm";
import {AuthorList} from "../components/lists/AuthorList";

export const AuthorScreen: React.FC<any> = (props) => {
    const {authorStore} = useStores()
    authorStore.loadAuthors()

    return (
        <div>
            <AuthorForm/>
            <AuthorList/>
        </div>
    )
}