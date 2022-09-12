import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.scss"

export type sidebarType = {
    friends: Array<dialogsType>
}

export type dialogsType = {
    id: number
    name: string
}

type NavbarPropsType = {
    friendsState?: sidebarType;
}

function  Navbar (props: NavbarPropsType) {


    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={'/profile'} activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={`${s.item}`}>
                <NavLink to={'/dialogs'} activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/news'} activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/music'} activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/settings'} activeClassName={s.active}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={s.item} to={'/users'} activeClassName={s.active}>Users</NavLink>
            </div>

        </nav>
    )
}

export default React.memo(Navbar);