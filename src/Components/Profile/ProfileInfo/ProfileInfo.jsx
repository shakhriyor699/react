import React from "react";
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://p4.wallpaperbetter.com/wallpaper/362/276/920/nature-4k-pc-full-hd-wallpaper-preview.jpg" alt="" />
            </div>
            <div className={classes.head}>
                <img src="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png" alt="" className={classes.ava} />
                <div className={classes.about}>
                    <h2 className={classes.name}>Sh</h2>
                    <p>Date birth: 11 nov</p>
                    <p>City: Tashkent</p>
                    <p>Education: TUIT</p>
                    <p>WebSite: <a href="https://shakhriyor.uz" className={classes.link}>https://shakhriyor.uz</a></p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;