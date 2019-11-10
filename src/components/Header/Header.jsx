import React from 'react'
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://art.nativescript-vue.org/NativeScript-Vue-Green-White.svg'/>
        </header>
    )
};

export default Header;