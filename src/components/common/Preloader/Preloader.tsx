import React from "react";
import s from './Preloader.module.scss'
import preloader from "../../../assets/images/25transback.gif";


const Preloader = () => {
    return (
            <div>
                <img className={s.img} src={preloader}/>
            </div>
        )

}

export default Preloader;