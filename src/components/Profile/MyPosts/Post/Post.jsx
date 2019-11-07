import React from 'react'
import s from './Post.module.css'

const Post = () => {
    return (
        <div className={s.item}>
            <img src='https://www.w3schools.com/howto/img_avatar.png'/>
            Post #3
            <div>
                <span>like</span>
            </div>
        </div>
    )
};

export default Post;