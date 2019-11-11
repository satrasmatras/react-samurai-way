import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
    <div className={s.postsBlock}>
        <h2>My posts</h2>
        <div>
            <textarea>Text...</textarea>
        </div>
        <div>
            <button>New Post</button>
        </div>
        <div className={s.posts}>
            <Post message="First port" likes={Math.round(Math.random() * 1000)}/>
            <Post message="First port" likes={Math.round(Math.random() * 1000)}/>
            <Post message="First port" likes={Math.round(Math.random() * 1000)}/>
            <Post message="First port" likes={Math.round(Math.random() * 1000)}/>
        </div>
    </div>
    )
}

export default MyPosts;