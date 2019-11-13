import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = () => {

    let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post. Ohoooo', likesCount: 30},
        {id: 3, message: 'Keep Calm guys!', likesCount: -999},
        {id: 4, message: 'LUL!', likesCount: 1000},
        {id: 5, message: 'Devil Will Wise!!!', likesCount: 666},
    ];
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    )
}

export default Profile;