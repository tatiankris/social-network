import React from "react";
import s from "./Post.module.css"

type PostPropsType = {
    message: string
    likeCount: number
}


function Post (props: PostPropsType) {
    return (
        <div className={s.item}>
            <img src={'https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg'} alt={'wtf'} />
            {props.message}
            <div>
                <span>likes</span>{props.likeCount}
            </div>
        </div>
    )
}

export default React.memo(Post);
