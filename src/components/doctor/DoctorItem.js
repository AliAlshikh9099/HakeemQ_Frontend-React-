import BookingForm from "./Booking/BookingForm";
import DoctorDetail from "./DoctorDetail";
import classes from './DoctorItem.module.css';
import Modal from '../UI/Modal';
import { useState } from "react";
import MoreInfo from "./MoreInfo";
import AvailableDates from "./AvailableDates";

const DoctorProfile = props => {
    const { name, spz, education, experience, availableTimes } = props.doctorInfo;
    const [bookingModalIsVisible, setBookingModalIsVisible] = useState(false);
    const bookAppoitmentHandler = () => {
        setBookingModalIsVisible(true);
    };
    const closeBookingModalHandler = () => {
        setBookingModalIsVisible(false);
    };
    return (
        <div className={`${classes.profile} container`}>
            <DoctorDetail
                name={name}
                spz={spz}
                edu={education}
                exp={experience}
                onBook={bookAppoitmentHandler}
            />
            <AvailableDates
                times={availableTimes}
            />
            <MoreInfo />
            {bookingModalIsVisible && <Modal onClose={closeBookingModalHandler}>
                <h1 style={{ marginBottom: '20px' }}>Dr.{name}</h1>
                <BookingForm onClose={closeBookingModalHandler} />
            </Modal>}
        </div>
    )
};

export default DoctorProfile;