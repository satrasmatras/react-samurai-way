import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

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
                {props.posts.map(p => <Post message={p.message} likes={p.likesCount}/>)}
            </div>
        </div>
    )
};

export default MyPosts;