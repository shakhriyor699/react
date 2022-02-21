import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts data={props.newData.profilePage.postsData} newTextPost={props.newData.profilePage.newTextPost} post={props.addPost} updateNewPost={props.updateNewPost}/>
        </div>
    )
}


export default Profile