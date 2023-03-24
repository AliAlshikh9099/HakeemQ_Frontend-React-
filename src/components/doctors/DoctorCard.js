import classes from './DoctorCard.module.css';
import DoctorIcon from '../../assets/Doctor-icon.jpg';

const DoctorCard = (props) => {
    const bookHandler = () => {
        props.onBook(props.index);
    }
    return (
        <div className={classes.doctor}>
            <img alt='doctor' src={DoctorIcon}/>
            <h2>Dr. {props.name}</h2>
            <p>{props.spz}</p>
            <button onClick={bookHandler}>View</button>
        </div>
    )
}

export default DoctorCard;