import React from 'react';
import logo from './../../assets/imgs/logo.png';
import classes from './Header.module.css';

const Header = () => {
    return (
        <div className={classes.logo_container}>
            <img className={classes.logo} src={logo} />
        </div>
    )
}

export default Header;