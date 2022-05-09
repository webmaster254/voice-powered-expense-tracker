import {List as MUIList, Avatar,IconButton, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';
import React from 'react';
import useStyles from './styles';

const List =()=> {

    const classes= useStyles();
  return (
    <MUIList dense={false} className={classes.list}>
        <Slide direction="down" in>
            <ListItem>
                <ListItemAvatar>
                    <Avatar >
                        <MoneyOff/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText />
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label='delete'>
                        <Delete/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </Slide>
    </MUIList>
  )
}

export default List