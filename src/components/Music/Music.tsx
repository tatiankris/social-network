import React from "react";
import s from "./Music.module.css"
import cs from "../../common-styles/BlockCommonStyles.module.scss";

type MusicPropsType = {

}

const Music = (props: MusicPropsType) => {
    return (
        <div className={cs.block}>
            Music
        </div>
    )
}

export default Music;