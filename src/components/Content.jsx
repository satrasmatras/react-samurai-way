import React from 'react';
import s from './Content.module.css'

const Profile = () => {
    return (
        <main className={s.content}>
            <div>
                <img src='http://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg'/>
            </div>
            <div className="avatarPlusDescription">
                avatar plus description
            </div>
            <div>
                My posts
                <div>
                    New Post
                </div>
                <div>
                    <div className={s.item}>
                        Post #1
                    </div>
                    <div className={s.item}>
                        Post #2
                    </div>
                    <div className={s.item}>
                        Post #3
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Profile;