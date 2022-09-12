import React from "react";
import s from "./Header.module.scss"
import {NavLink, Redirect} from "react-router-dom";
import CommonButton from "../common/CommonButton/CommonButton";
import catImg from '../../assets/images/cat-black-face-svgrepo-com.svg'

type PropsType = {
    logoutTC: () => void
    login: string,
    isAuth: boolean,
}

const Header = React.memo(({logoutTC, login, isAuth, ...props}: PropsType) => {
    console.log({login, isAuth}) /////////////Тут берем данные у state.auth и всё приходит
    return (
        <header className={s.header}>
            {/*<img src={'https://www.adobe.com/express/create/media_114db2401080d263d7338e6fab6589ca67f85274c.jpeg?width=2000&format=webply&optimize=medium'} alt={'wtf'}/>*/}
            <span className={s.logo}>
                {/*<span>c</span>*/}
                <img className={s.img} src={catImg}/>
                wor<span>k</span></span>
            <div className={s.loginBlock}>
                {isAuth
                    ? <div className={s.blockWithLogout}><span>@{login}</span><CommonButton onClick={logoutTC} text={'Log out'}></CommonButton></div>
                    : (
                        // <div className={s.blockWithLogin}>
                      <NavLink className={s.blockWithLogin} to={'/login'}>Login</NavLink>
                    // </div>
                    )
                }
            </div>
        </header>
    )
})

export default Header;