import React from 'react';
import {NavLink} from 'react-router-dom';

import classes from './Navigation.module.css';

const Navigation = props => {
    return (
        <header className={classes.mainHeader}>
            <nav>
                <ul>
                    <li>
                        {/* navlink is similar to link, it helps in styling the link text */}
                        <NavLink to="/" exact> All Products </NavLink>
                    </li>
                    <li>
                        <NavLink to="/favorites"> Favorites </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;