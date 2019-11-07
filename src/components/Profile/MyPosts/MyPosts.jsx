import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
    <div>
        My posts
        <div>
            <textarea>Text...</textarea>
            <button>New Post</button>
        </div>
        <div className={s.posts}>
            <Post message="First port" likes={Math.round(Math.random() * 1000)}/>
            <Post message="First port" likes={Math.round(Math.random() * 1000)}/>
            <Post message="First port" likes={Math.round(Math.random() * 1000)}/>
            <Post message="First port" likes={Math.round(Math.random() * 1000)}/>
            <Post message="First port" likes={Math.round(Math.random() * 1000)}/>
            <Post message="First port" likes={Math.round(Math.random() * 1000)}/>
            <Post message="First port" likes={Math.round(Math.random() * 1000)}/>
            <Post message="First port" likes={Math.round(Math.random() * 1000)}/>

            <Post />

        </div>
    </div>
    )
}

export default MyPosts;