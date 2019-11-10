import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return (
        <div>
            <div>
                <img src='http://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg'/>
            </div>
            <div className="avatarPlusDescription">
                avatar plus description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;