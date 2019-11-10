import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/1'>Denis</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Denis</NavLink>

                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Denis</NavLink>

                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>Denis</NavLink>

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