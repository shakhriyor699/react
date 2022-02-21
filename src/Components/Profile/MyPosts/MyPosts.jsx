import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsData = props.data
    
    let postsElem = postsData.map(p => <Post text={p.post} count={p.likesCount} key={p.id}/>)

    let newPost = React.createRef()
    let addPost = () => {
        props.post()
    }
    let onPostChange = () => {
        let value = newPost.current.value
        props.updateNewPost(value)
    }

    return (
            <div>
                <h2 className={classes.post__title}>My posts</h2>
                <div className={classes.addPost}>
                    <textarea className={classes.post__new} placeholder="New posts" ref={newPost}  value={props.newTextPost} onChange={onPostChange}/>
                    <button onClick={addPost}>Add post</button>
                </div>
                <div className={classes.posts}> 
                   {postsElem}
                </div>
            </div>
    )
}


export default MyPosts