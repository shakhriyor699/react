import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
            <div >
                <h2 className={classes.post__title}>My posts</h2>
                <div className={classes.addPost}>
                    <textarea className={classes.post__new} placeholder="New posts"></textarea>
                    <button>Add post</button>
                </div>
                <div className={classes.posts}>
                   <Post text='post1' count='30'/>
                   <Post text='post2' count='20'/>
                   <Post text='post3' count='50'/>
                   <Post text='post4' count='100'/>
                </div>
            </div>
    )
}


export default MyPosts