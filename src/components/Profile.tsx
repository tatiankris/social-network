import React from "react";

function Profile () {
    return (
        <div className={'content'}>
            <div>
                <img src={'https://html5css.ru/howto/img_snow_wide.jpg'} alt={'wtf'}/>
            </div>
            <div>
                <img src={'https://lh3.googleusercontent.com/proxy/B9naiOt0v3HsAZuX6I8uTiXXvqwYuL6vR8dD8NizisOpnQ739zO4KbgrldC4cKawBl4xzoSbvIfMk-6twHTwGn-AdylpCU6SVVUE7a_YvlVghUA0t_O7ZWotgiDup4unsCw8'} alt={'wtf'} />
                + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;