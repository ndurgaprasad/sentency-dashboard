import React from "react";
import {observer} from "mobx-react";
import {useStores} from "../../../data/context/UseStore";
import {AuthorItem} from "../items/AuthorItem";
import {Dimmer, Header, List, Loader, Pagination, PaginationProps, Segment} from "semantic-ui-react";

export const AuthorList: React.FC<any> = observer((props) => {
        const {authorStore} = useStores()

        const handlePaginationChange = (event: React.MouseEvent<HTMLAnchorElement>, data: PaginationProps) => {
            authorStore.changePage(data.activePage as number)
        }

        return (
            <>
                {authorStore.isLoading ?
                    (
                        <Dimmer active>
                            <Loader/>
                        </Dimmer>
                    ) :
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
                        <Pagination
                            activePage={authorStore.currentPage}
                            totalPages={authorStore.maxPages}
                            boundaryRange={0}
                            ellipsisItem={null}
                            onPageChange={handlePaginationChange}/>
                    </Segment>
                }
            </>
        )
    }
)
