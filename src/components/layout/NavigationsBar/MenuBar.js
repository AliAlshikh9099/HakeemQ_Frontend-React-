import classes from './MenuBar.module.css';

const MenuBar = (props) => {
    return (
        <>
            <div className={classes['menu-bar']}>
                <ul className={classes.nav}>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#features">Features</a>
                    </li>
                    <li>
                        <a href="#about">About Us</a>
                    </li>
                    <li>
                        <a href="#doctors">Doctors</a>
                    </li>
                    <div className={classes.reg}>
                        <button className={classes.button}>Register</button>
                        <button className={classes['button--alt']}>Login</button>
                    </div>
                </ul>
            </div>
        </>
    )
}

export default MenuBar;