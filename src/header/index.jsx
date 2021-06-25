import React from 'react';
import pkg from '../../package.json';
import style from './style.css';

const Header = () => {
    return (
        <header className={style.appHeader}>
            App version: {pkg.version}
        </header>
    )
};

export default Header;
