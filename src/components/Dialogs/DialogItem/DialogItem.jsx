import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {

    return (
        <div className={s.dialog}>
            <div className={s.dialogAvatar}>
                <img src={ `https://api.adorable.io/avatars/50/${[props.id + props.name]}.png`}/>
            </div>
            <NavLink activeClassName={s.dialogTitle + ' ' + s.active} to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
};

export default DialogItem;