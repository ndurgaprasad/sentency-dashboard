import React from "react";
import {useStores} from "../../data/context/UseStore";
import {AuthorForm} from "../components/forms/AuthorForm";
import {AuthorList} from "../components/lists/AuthorList";

export const AuthorView: React.FC<any> = (props) => {
    const {authorStore} = useStores()

    authorStore.loadAuthors()

    return (
        <>
            <div>
                <AuthorForm/>
                <AuthorList/>
            </div>
        </>
    )
}
