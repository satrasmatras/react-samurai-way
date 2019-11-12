import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink activeClassName={s.active} to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
};


const Dialogs = (props) => {

    // BLL
    // UI

    let dialogsData = [
        {id: 1, name: 'Denis'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Egor'},
        {id: 4, name: 'Pasha'},
        {id: 5, name: 'Saris'}
    ];

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'I am OK'}
    ];

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsData.map( dialogItem => <DialogItem name={dialogItem.name} id={dialogItem.id}/>)}
                {/*<DialogItem name={dialogsData[0].name} id={dialogsData[0].id} isActive="active"/>*/}
                {/*<DialogItem name='Viktoria' id='2'/>*/}
                {/*<DialogItem name='Egor' id='3'/>*/}
                {/*<DialogItem name='Pavel' id='4'/>*/}

            </div>
            <div className={s.messages}>

                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>


            </div>
        </div>
    )
}

export default Dialogs;