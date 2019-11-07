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
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    </div>
    )
}

export default MyPosts;