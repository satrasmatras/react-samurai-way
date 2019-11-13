import React from 'react'
import s from './Message.module.css'

const Message = (props) => {
    debugger;
    return (
        <div className={s.message + ' ' + `${(props.owner == 'You') ? s.messageYou : s.messageHe}`}>{props.message}</div>
    )
};

export default Message;