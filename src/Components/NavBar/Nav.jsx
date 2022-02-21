import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';

const Nav = (props) => {
    let sideBar = props.links.sidebar.sideBarInfo

    let navLink = sideBar.map(item => (<li className='item' key={item.id}>
        <NavLink to={item.link} className={navData => navData.isActive ? classes.active : classes.item } >{item.linkName}</NavLink>
    </li>))
    
    return (
        <nav className={classes.nav}>
            <ul>
                {navLink}
            </ul>
        </nav>
    )
}


export default Nav