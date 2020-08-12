import React from "react";
import {
    Avatar,
    Box,
    Card, CardActions,
    CardContent,
    createStyles,
    Theme,
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {InputText} from "./input/InputText";
import {observer} from "mobx-react";
import {useStores} from "../../data/store/UsesStore";
import {Author} from "../../data/model/Author";
import {CRUDMenu} from "../menu/CRUDMenu";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {DeleteView} from "../modalviews/DeleteView";
import {BaseModalView} from "../modalviews/BaseModalView";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
        },
        content: {
            flex: '1 1',
        },
        cover: {
            flexShrink: 0,
            flexGrow: 1,
            width: 150,
        },
        large: {
            width: theme.spacing(17),
            height: theme.spacing(17),
        }
    }),
);

export const AuthorForm: React.FC<any> = observer((props) => {
    const {authorStore, viewStore} = useStores()
    const classes = useStyles()
    const selectedAuthor = authorStore.selectedAuthor

    const onChange = (name: string, value: string) => {
        let currentAuthor = {...selectedAuthor, [name]: value} as unknown as Pick<Author, keyof Author>
        authorStore.updateSelectedAuthor(currentAuthor)
    }

    const onAddClicked = () => {
        if (selectedAuthor) {
            authorStore.addAuthor(selectedAuthor)
        }
    }

    const onEditClicked = () => {
        if (selectedAuthor) {
            authorStore.updateAuthor(selectedAuthor)
        }
    }

    const onDeleteClicked = () => {
        if (selectedAuthor) {
            viewStore.setModalView({
                onConfirmAction: () => {
                    authorStore.deleteAuthor(selectedAuthor)
                },
                view: (<DeleteView title="Delete author" toDelete={selectedAuthor.name}/>)
            } as BaseModalView)
        }
    }

    return (
        <Box mt={2} ml={2}>
            <Card className={classes.root}>
                <Box className={classes.cover} display="flex" justifyContent="center" alignItems="center">
                    <Avatar alt="Author" className={classes.large} src={selectedAuthor?.picUrl}>
                        <FontAwesomeIcon icon={faUser} size="4x"/>
                    </Avatar>
                </Box>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <form>
                            <InputText label="Name" name="name" onChange={onChange}
                                       defaultValue={selectedAuthor?.name}/>
                            <InputText label="Picture URL" name="picUrl" onChange={onChange}
                                       defaultValue={selectedAuthor?.picUrl}/>
                        </form>
                    </CardContent>
                    <CardActions>
                        <CRUDMenu
                            hasId={selectedAuthor ? (!!selectedAuthor.id) : false}
                            onDeleteClicked={onDeleteClicked}
                            onEditClicked={onEditClicked}
                            onAddClicked={onAddClicked}/>
                    </CardActions>
                </div>
            </Card>
        </Box>
    )
})