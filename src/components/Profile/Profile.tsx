import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

function Profile () {
    return (
        <div>
            <div>
                <img src={'https://html5css.ru/howto/img_snow_wide.jpg'} alt={'wtf'}/>
            </div>
            <div>
                <img src={'https://lh3.googleusercontent.com/proxy/B9naiOt0v3HsAZuX6I8uTiXXvqwYuL6vR8dD8NizisOpnQ739zO4KbgrldC4cKawBl4xzoSbvIfMk-6twHTwGn-AdylpCU6SVVUE7a_YvlVghUA0t_O7ZWotgiDup4unsCw8'} alt={'wtf'} />
                + description
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;