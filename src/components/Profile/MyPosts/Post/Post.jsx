import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://www.w3schools.com/howto/img_avatar.png'/>
            { props.message || "Empty Message"}
            <div>
                <span>likes count {props.likes}</span>
            </div>
        </div>
    )
};

export default Post;