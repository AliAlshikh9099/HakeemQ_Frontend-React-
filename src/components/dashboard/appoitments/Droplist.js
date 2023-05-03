import classes from './Droplist.module.css';

const Droplist = () => {
    return (
        <ul className={classes.droplist}>
            <li>More Info</li>
            <li>Delete</li>
            <li>Edit</li>
        </ul>
    )
};

export default Droplist;