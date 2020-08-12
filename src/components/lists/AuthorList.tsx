import React from "react";
import {observer} from "mobx-react";
import {useStores} from "../../data/store/UsesStore";
import {Box, CardContent, createStyles, List, Theme, Card} from "@material-ui/core";
import {AuthorItem} from "./items/AuthorItem";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            backgroundColor: theme.palette.background.paper,
        },
        cardRoot: {
            display: 'flex',
            flexDirection: 'column'
        },
        content: {
            flex: '1 1',
        },
    }),
);

export const AuthorList: React.FC<any> = observer((props) => {
    const {authorStore} = useStores()
    const classes = useStyles();

    return (
        <Box mt={2} ml={2}>
            <Card className={classes.cardRoot}>
                <CardContent className={classes.content}>
                    <List component="nav" className={classes.root}>
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
                </CardContent>
            </Card>
        </Box>
    )
})