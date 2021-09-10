import React from "react";
import s from "./Header.module.css"

function Header () {
    return (
        <header className={s.header}>
            <img src={'https://www.adobe.com/express/create/media_114db2401080d263d7338e6fab6589ca67f85274c.jpeg?width=2000&format=webply&optimize=medium'} alt={'wtf'}/>
        </header>
    )
}

export default Header;