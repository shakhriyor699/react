import React from "react";
import { NavLink } from "react-router-dom";
import classes from './../Dialogs.module.css';

const DialogItem = (props) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={`/dialogs/${props.id}`} className={navData => navData.isActive ? classes.active : classes.dialog}> {props.name}</NavLink>
        </div>
    )
}

export default DialogItem;