import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {props.state.messages.map(m => <Message message={m.message} owner={m.owner}/>)}
                <div class={s.newMessage}>
                    <textarea>New message</textarea>
                    <button>Enter</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;