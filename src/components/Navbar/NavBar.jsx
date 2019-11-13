import React from 'react'
import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";

const NavBar = (props) => {
    debugger;
    return (
        <div className={s.nav}>
            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/feed' activeClassName={s.activeLink}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/audio' activeClassName={s.activeLink}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
                </div>
            </nav>

            <div className={s.bestFriends}>
                {props.state.topFriends.map( friend =>
                    <div className={s.friend}>
                        <div className={s.dialogAvatar}>
                            <img src={ `https://api.adorable.io/avatars/50/${[friend.id + friend.name]}.png`}/>
                        </div>
                        <h4>{friend.name}</h4>
                    </div>
                )}
            </div>
        </div>
    )
};
export default NavBar