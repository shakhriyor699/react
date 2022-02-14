import React from 'react';
import classes from './Header.module.css';


const Header = () => {
    return (
        <header className={classes.header}>
            <img src="https://1000logos.net/wp-content/uploads/2016/11/meta-logo.png" alt="" className={classes.img} />
        </header>
    )
}

export default Header