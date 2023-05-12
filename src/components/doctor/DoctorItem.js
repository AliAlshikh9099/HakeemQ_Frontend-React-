import BookingForm from "./Booking/BookingForm";
import DoctorDetail from "./DoctorDetail";
import classes from './DoctorItem.module.css';
import Modal from '../UI/Modal';
import { useState, useEffect, useContext, useCallback } from "react";
import MoreInfo from "./MoreInfo";
// import AvailableDates from "./AvailableDates";

import ReactDOM from 'react-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";

import ApiContext from '../../store/api-context';

const DoctorProfile = props => {
    const sendRequest = useContext(ApiContext).sendRequest;
    const error = useContext(ApiContext).error;
    // const isLoading = useContext(ApiContext).isLoading;

    const [isLoading, setIsLoading] = useState(false);

    const { name, spz, email, phone } = props.doctorInfo;

    const [bookingModalIsVisible, setBookingModalIsVisible] = useState(false);

    const [availableTimes, setAvailableTimes] = useState(null);

    const [selectedDate, setSelectedDate] = useState();

    const showBookingModalHandler = () => {
        setBookingModalIsVisible(true);
    };
    const closeBookingModalHandler = () => {
        setBookingModalIsVisible(false);
    };

    const selectDateHandler = useCallback((date) => {
        setSelectedDate(date);
    }, [])

    useEffect(  () => {
        setIsLoading(true);
        axios.get(`http://192.168.43.7:8000/api/available-times/${props.id}/${selectedDate}`, {
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => {
                setIsLoading(false);
                console.log(res);
                setAvailableTimes(res.data.available_times);
            })
            .catch(error => {
                setIsLoading(false);
                console.log(error);
            })
        // const data = sendRequest({
        //     url: `http://192.168.43.7:8000/api/available-times/${props.id}/${formattedDate}`,
        //     headers: { 'Content-Type': 'application/json' }
        // });
    }, [selectedDate, props.id]);

    return (
        <div className={`${classes.profile} container`}>
            <DoctorDetail
                name={name}
                spz={spz}
                email={email}
                phone={phone}
                isLoading={isLoading}
            />
            {/* <AvailableDates
                times='nothing'
            /> */}
            <MoreInfo />
            {ReactDOM.createPortal(
                <button onClick={showBookingModalHandler} className={classes['booking-button']}>
                    <h4>Book an appoitment</h4>
                    <FontAwesomeIcon icon={faVideo} />
                </button>,
                document.getElementById('overlays')
            )}
            {bookingModalIsVisible && <Modal className={`${classes['booking-modal']} container`} onClose={closeBookingModalHandler}>
                <h1 style={{ marginBottom: '20px' }}>Dr.{name}</h1>
                <BookingForm
                    times={availableTimes}
                    onClose={closeBookingModalHandler}
                    id={props.id}
                    onSelectDate={selectDateHandler}
                />
            </Modal>}
        </div>
    )
};

export default DoctorProfile;