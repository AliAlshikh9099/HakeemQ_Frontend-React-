import classes from './Navigations.module.css';

const Navigations = () => {
    return (
        <ul className={classes.nav}>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Features</a>
            </li>
            <li>
                <a href="#">About Us</a>
            </li>
            <li>
                <a href="#">Doctors</a>
            </li>
        </ul>
    )
}

export default Navigations;