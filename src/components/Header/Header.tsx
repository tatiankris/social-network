import React from "react";
import s from "./Header.module.css"
import { NavLink } from "react-router-dom";
import {HeaderContainerPropsType} from "./HeaderContainer";


function Header (props: HeaderContainerPropsType) {
    return (
        <header className={s.header}>
            <img src={'https://www.adobe.com/express/create/media_114db2401080d263d7338e6fab6589ca67f85274c.jpeg?width=2000&format=webply&optimize=medium'} alt={'wtf'}/>

            <div className={s.loginBlock}>
                { props.isAuth
                    ? <div>{props.login} - <button onClick={props.logoutTC}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;