import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        {id:1, message: 'Hi, how are you?', likesCount: 12},
        {id:2, message: 'It\'s my first post. Ohoooo', likesCount: 30},
        {id:3, message: 'Keep Calm guys!', likesCount: -999},
    ]
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
                <Post message={postData[0].message} likes={postData[0].likesCount}/>
                <Post message={postData[1].message} likes={postData[1].likesCount}/>
                <Post message={postData[2].message} likes={postData[2].likesCount}/>
            </div>
        </div>
    )
}

export default MyPosts;