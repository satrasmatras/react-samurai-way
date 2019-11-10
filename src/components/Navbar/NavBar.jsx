import React from 'react'
import s from './NavBar.module.css'

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <a href='/profile'>Profile</a>
            </div>
            <div className={s.item}>
                <a href='/dialogs'>Messages</a>
            </div>
            <div className={s.item}>
                <a href='/feed'>News</a>
            </div>
            <div className={s.item}>
                <a href='/audio'>Music</a>
            </div>
            <div className={s.item}>
                <a href='/settings'>Settings</a>
            </div>
        </nav>
    )
};
export default NavBar