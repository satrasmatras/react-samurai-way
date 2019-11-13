import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {props.messages.map(m => <Message message={m.message}/>)}
            </div>
        </div>
    )
}

export default Dialogs;