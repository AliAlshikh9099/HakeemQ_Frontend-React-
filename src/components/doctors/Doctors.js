import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import classes from './Doctors.module.css';

import { Pagination } from "swiper";

import { Navigation } from "swiper";

import DoctorCard from "./DoctorCard";
import Title from "../UI/Title";
import { useState } from "react";

import Modal from '../UI/Modal';
import DoctorItem from "./Booking/DoctorItem";
import BookingForm from "./Booking/BookingForm";

const DUMMY_DOCTORS = [
    { id: 'd1', name: 'Omar Shahwan', spz: 'Dentist' },
    { id: 'd2', name: 'Ali Alshikh', spz: 'Plastci' },
    { id: 'd3', name: 'Omar Shahwan', spz: 'Dentist' },
    { id: 'd4', name: 'Omar Shahwan', spz: 'Dentist' },
    { id: 'd5', name: 'Omar Shahwan', spz: 'Dentist' },
    { id: 'd6', name: 'Omar Shahwan', spz: 'Dentist' },
    { id: 'd7', name: 'Omar Shahwan', spz: 'Dentist' },
    
]

const Doctors = () => {

    const [selectedDr, setSelectedDr] = useState({});
    const [isViewd, setIsViewd] = useState(false);

    const bookDoctorHandler = (index) => {
        setIsViewd(true);
        setSelectedDr(DUMMY_DOCTORS[index]);
    }

    const closeBookModalHandler = () => {
        setIsViewd(false);
    }

    return (
        <div className={classes.doctors}>
            <Title>Meet our specialist</Title>
            <p style={{ textAlign: 'center', color: '#777', margin: '10px'}}>Who will help you to have a fresh health.</p>
            <div className={`container ${classes.content}`}>
                <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                breakpoints={{
                    640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    },
                    768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                    },
                    1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                    },
                }}
                modules={[Pagination, Navigation]}
                className={classes.swiper}
                >
                    {DUMMY_DOCTORS.map((dr, index) =>
                        <SwiperSlide key={dr.id}>
                            <DoctorCard
                                name={dr.name}
                                spz={dr.spz}
                                index={index}
                                onBook={bookDoctorHandler}
                            />
                        </SwiperSlide>)}
                </Swiper>
                {isViewd &&
                    <Modal onClose={closeBookModalHandler}>
                        <DoctorItem name={selectedDr.name} spz={selectedDr.spz} />
                        <BookingForm onClose={closeBookModalHandler} />
                    </Modal>}
        </div>
    </div>
    );
}

export default Doctors;