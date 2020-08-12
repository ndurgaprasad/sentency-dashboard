import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        grow: {
            flexGrow: 1,
        }
    }),
);

interface CRUDBarProps {
    title: string
    onAddClicked?: () => void
}

export const CRUDBar: React.FC<CRUDBarProps> = (props) => {
    const classes = useStyles();
    const {title} = props

    return (
        <div>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <Typography variant="h6" color="inherit">
                            {title}
                        </Typography>
                        <div className={classes.grow}/>
                        <IconButton aria-label="add" color="inherit" onClick={props.onAddClicked}>
                            <FontAwesomeIcon icon={faPlus} size="xs"/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </div>
        </div>
    )
}