import axios from 'axios';
import classes from './Droplist.module.css';

const Droplist = (props) => {
    const deleteAppointmentsHandler = () => {
        axios.delete(`http://192.168.43.7:8000/api/appoints/${props.id}/delete`)
            .then(res => {
                console.log(res);
            })
    }

    return (
        <ul className={classes.droplist}>
            <li>More Info</li>
            <li onClick={deleteAppointmentsHandler}>Delete</li>
            <li>Edit</li>
        </ul>
    )
};

export default Droplist;