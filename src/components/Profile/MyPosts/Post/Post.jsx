import React from 'react'
import s from './Post.module.css'

const Post = (props) => {

    return (
        <div className={s.item}>
            <img src={ `https://api.adorable.io/avatars/50/${Math.round(Math.random() * 1000)}.png`}/>
            { props.message || "Empty Message"}
            <div>
                <span>likes {props.likes}</span>
            </div>
        </div>
    )
};

export default Post;