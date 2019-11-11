import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>

                <DialogItem name='Denis' id='1'/>
                <DialogItem name='Viktoria' id='2'/>
                <DialogItem name='Egor' id='3'/>
                <DialogItem name='Pavel' id='4'/>

            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='How are you?'/>
                <Message message='Im okay. Thanks'/>
            </div>
        </div>
    )
}

export default Dialogs;