import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (

        <div className={classes.item}>
            <div className={classes.item__wrapper}>
                <img src="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png" alt="" className={classes.ava} />
                <p>{props.text}</p>
            </div>
            <div>
                <span>{"Likes " + props.count}</span>
            </div>
        </div>

    )
}


export default Post