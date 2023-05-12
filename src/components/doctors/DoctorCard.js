import classes from './DoctorCard.module.css';
import DoctorIcon from '../../assets/Doctor-icon.jpg';

import { Link } from 'react-router-dom';

const DoctorCard = (props) => {
    return (
        <div className={classes.doctor}>
            <img alt='doctor' src={DoctorIcon}/>
            <h2>Dr. {props.name}</h2>
            <p>{props.spz}</p>
            <Link to={`/doctors/${props.id}`}>View</Link>
        </div>
    )
}

export default DoctorCard;