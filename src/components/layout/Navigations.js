import classes from './Navigations.module.css';

const Navigations = () => {
    return (
        <ul className={classes.nav}>
            <li>
                <a href="/#home">Home</a>
            </li>
            <li>
                <a href="/#features">Features</a>
            </li>
            <li>
                <a href="/#doctors">Doctors</a>
            </li>
            <li>
                <a href="/#about">About Us</a>
            </li>
        </ul>
    )
}

export default Navigations;