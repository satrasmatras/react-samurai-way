import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src='http://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                avatar plus description
            </div>

        </div>
    )
};

export default ProfileInfo