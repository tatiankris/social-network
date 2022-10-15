import React from "react";
import s from "./News.module.css"
import {Spin} from "antd";

type NewsPropsType = {

}

const News = (props: NewsPropsType) => {
    return (
        <div>
            News
            <div style={{height: '100px', width: "100px", zIndex:'6'}}>
                <Spin />
            </div>
        </div>
    )
}

export default News;