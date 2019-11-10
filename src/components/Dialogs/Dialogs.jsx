import React from 'react'
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Denis
                </div>
                <div className={s.dialog}>
                    Olesya
                </div>
                <div className={s.dialog}>
                    Margarita
                </div>
                <div className={s.dialog}>
                    Andrey
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How you doin?</div>
                <div className={s.message}>Good</div>
            </div>
        </div>
    )
}

export default Dialogs;