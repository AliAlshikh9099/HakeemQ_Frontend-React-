import classes from './MenuBar.module.css';

import { Link } from 'react-router-dom';

const MenuBar = (props) => {
    return (
        <>
            <div className={`${classes['menu-bar']} ${props.isClicked ? classes.clicked : ''}`}>
                <ul className={classes.nav}>
                    <li>
                        <a href="/#home">Home</a>
                    </li>
                    <li>
                        <a href="/#features">Features</a>
                    </li>
                    <li>
                        <a href="/#about">About Us</a>
                    </li>
                    <li>
                        <a href="/#doctors">Doctors</a>
                    </li>
                    <div className={classes.reg}>
                        <button className={classes.button}>
                            <Link to="/register">Register</Link>
                        </button>
                        <button className={classes['button--alt']}>
                            <Link to="/login">Login</Link>
                        </button>
                    </div>
                </ul>
            </div>
        </>
    )
}

export default MenuBar;