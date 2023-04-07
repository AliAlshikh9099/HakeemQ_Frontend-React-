import BookingForm from "./Booking/BookingForm";
import DoctorDetail from "./Booking/DoctorDetail";
import classes from './DoctorItem.module.css';

const DoctorProfile = props => {
    const { name, spz } = props.doctor;
    return (
        <div className={classes.profile}>
            <div className={`container ${classes.content}`}>
                <DoctorDetail
                    name={name}
                    spz={spz}
                />
                <BookingForm />
            </div>
        </div>
    )
};

export default DoctorProfile;