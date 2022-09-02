import React from "react";
import s from "./Header.module.css"
import {NavLink, Redirect} from "react-router-dom";

type PropsType = {
    logoutTC: () => void
    login: string,
    isAuth: boolean,
}

const Header = React.memo(({logoutTC, login, isAuth, ...props}: PropsType) => {

    return (
        <header className={s.header}>
            <img src={'https://www.adobe.com/express/create/media_114db2401080d263d7338e6fab6589ca67f85274c.jpeg?width=2000&format=webply&optimize=medium'} alt={'wtf'}/>

            <div className={s.loginBlock}>
                {isAuth
                    ? <div>{login} - <button onClick={logoutTC}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
})

export default Header;