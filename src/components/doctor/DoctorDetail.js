import classes from './DoctorDetail.module.css';
import profileImg from '../../assets/Doctor-icon.jpg';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '../UI/Card';
import ReactDOM from 'react-dom';

const DoctorItem = (props) => {
    const bookHandler = () => {
        props.onBook();
    }
    return (
        <Card className={classes['doctor-detail']}>
            <div className={classes.image}>
                <img src={profileImg} alt='profile' />
            </div>
            <div className={classes.details}>
                <h1>Dr. {props.name}</h1>
                <p>Specialist: <span>{props.spz}</span></p>
                <p>Experience: <span>{props.exp}</span></p>
                <p>Education: <span>{props.edu}</span></p>
            </div>
            {ReactDOM.createPortal(
                <button onClick={bookHandler} className={classes['booking-button']}>
                    <h4>Book an appoitment</h4>
                    <FontAwesomeIcon icon={faVideo} />
                </button>,
                document.getElementById('overlays')
            )}
        </Card>
    )
}

export default DoctorItem;