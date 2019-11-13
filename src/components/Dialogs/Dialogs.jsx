import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Denis'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Egor'},
        {id: 4, name: 'Pasha'},
        {id: 5, name: 'Saris'}
    ];

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'I am OK'}
    ];


    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {messages.map(m => <Message message={m.message}/>)}
            </div>
        </div>
    )
}

export default Dialogs;