import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink activeClassName={s.active} to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
};

export default DialogItem;