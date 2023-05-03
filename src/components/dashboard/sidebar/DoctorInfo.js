import classes from './DoctorInfo.module.css';
import DoctorImg from '../../../assets/doctor-icon.png';


const DoctorInfo = props => {
    return (
        <div className={classes.info}>
            <div className={classes.image}>
                <img src={DoctorImg} alt="doctor" />
            </div>
            <h4 className={classes.name}>Dr. Omar Shahwan</h4>
            <p className={classes.spz}>Dentist</p>
        </div>
    )
}

export default DoctorInfo;