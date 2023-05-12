import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import classes from './Doctors.module.css';

import { Pagination } from "swiper";

import { Navigation } from "swiper";

import DoctorCard from "./DoctorCard";
import Title from "../UI/Title";
import { useEffect, useState, useCallback, useContext } from "react";
import ApiContext from "../../store/api-context";
import axios from "axios";

import { RotatingLines } from "react-loader-spinner";


// const DUMMY_DOCTORS = [
//     { id: 'd1', name: 'Omar Shahwan', spz: 'Dentist' },
//     { id: 'd2', name: 'Ali Alshikh', spz: 'Plastci' },
//     { id: 'd3', name: 'Omar Shahwan', spz: 'Dentist' },
//     { id: 'd4', name: 'Omar Shahwan', spz: 'Dentist' },
//     { id: 'd5', name: 'Omar Shahwan', spz: 'Dentist' },
//     { id: 'd6', name: 'Omar Shahwan', spz: 'Dentist' },
//     { id: 'd7', name: 'Omar Shahwan', spz: 'Dentist' },
// ]

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    const sendRequest = useContext(ApiContext).sendRequest;
    const isLoading = useContext(ApiContext).isLoading;
    const error = useContext(ApiContext).error;

    const fetchDoctors = useCallback(async () => {
        try {
            const data = await sendRequest({ url: 'http://192.168.43.7:8000/api/doctors' });
            setDoctors(data.data);
        }
        catch (error) {
            console.error(error);
        }
    }, []);
    
    useEffect(() => {
        fetchDoctors();
    }, [fetchDoctors]);

    let content;

    if (isLoading) {
        content = <RotatingLines
                    strokeColor='var(--primary)'
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="220"
                    visible={true}
                />
    }
    if (!isLoading && error) {
        content = <p>{error}</p>
    }
    if (!isLoading && !error) {
        content = (
            doctors.map(dr =>
                <SwiperSlide key={dr.id}>
                    <DoctorCard
                        name={dr.name}
                        spz={dr.spz}
                        id={dr.id}
                    />
                </SwiperSlide>)
        )
    }

    return (
        <div id="doctors" className={classes.doctors}>
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
                    {/* {doctors.map(dr =>
                        <SwiperSlide key={dr.id}>
                            <DoctorCard
                                name={dr.name}
                                spz={dr.spz}
                                id={dr.id}
                            />
                        </SwiperSlide>)} */}
                    {content}
                </Swiper>
        </div>
    </div>
    );
}

export default Doctors;