import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post. Ohoooo', likesCount: 30},
        {id: 3, message: 'Keep Calm guys!', likesCount: -999},
        {id: 4, message: 'LUL!', likesCount: 1000},
        {id: 5, message: 'Devil Will Wise!!!', likesCount: 666},
    ];

    let postsElements = posts.map(p => <Post message={p.message} likes={p.likesCount}/>)

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
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;