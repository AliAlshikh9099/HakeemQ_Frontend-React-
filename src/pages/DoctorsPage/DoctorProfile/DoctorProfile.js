import DoctorItem from "../../../components/doctor/DoctorItem";

import { useParams } from "react-router";
import AltHeader from "../../../components/layout/AltHeader";

import classes from './DoctorProfile.module.css';

import { useEffect, useState } from "react";
import axios from "axios";

// const DUMMY_DOCTORS = [
//     {
//         id: 'd1',
//         name: 'Omar Shahwan',
//         spz: 'Dentist',
//         experience: '+3 Years',
//         education: 'Damascus University',
//         availableTimes: [
//             { day: "Monday", houres: ['9:00 AM', '10:00 AM', '11:00 AM'] },
//             { day: 'Tuesday', houres: ['12:00 PM', '1:00 PM', '2:00 PM'] },
//             { day: 'Wednesday', houres: ['3:00 PM', '4:00 PM', '5:00 PM'] },
//             { day: 'Thursday', houres: ['6:00 PM', '7:00 PM', '8:00 PM'] },
//             { day: 'Friday', houres: ['9:00 PM', '10:00 PM', '9:00 AM'] },
//             { day: 'Saturday', houres: ['10:00 AM', '11:00 AM', '12:00 AM'] },
//             { day: 'Sunday', houres: ['1:00 AM', '2:00 AM', '3:00 AM'] }
//         ]
//     },
//     {
//         id: 'd2',
//         name: 'Ali Alshikh',
//         spz: 'Plastci',
//         experience: '+3 Years',
//         education: 'Damascus University',
//         availableTimes: [
//             { day: "Monday", houres: ['9:00 AM', '10:00 AM', '11:00 AM'] },
//             { day: 'Tuesday', houres: ['12:00 PM', '1:00 PM', '2:00 PM'] },
//             { day: 'Wednesday', houres: ['3:00 PM', '4:00 PM', '5:00 PM'] },
//             { day: 'Thursday', houres: ['6:00 PM', '7:00 PM', '8:00 PM'] },
//             { day: 'Friday', houres: ['9:00 PM', '10:00 PM', '9:00 AM'] },
//             { day: 'Saturday', houres: ['10:00 AM', '11:00 AM', '12:00 AM'] },
//             { day: 'Sunday', houres: ['1:00 AM', '2:00 AM', '3:00 AM'] }
//         ]
//     },
//     {
//         id: 'd3',
//         name: 'Omar Shahwan',
//         spz: 'Dentist',
//         experience: '+3 Years',
//         education: 'Damascus University',
//         availableTimes: [
//             { day: "Monday", houres: ['9:00 AM', '10:00 AM', '11:00 AM'] },
//             { day: 'Tuesday', houres: ['12:00 PM', '1:00 PM', '2:00 PM'] },
//             { day: 'Wednesday', houres: ['3:00 PM', '4:00 PM', '5:00 PM'] },
//             { day: 'Thursday', houres: ['6:00 PM', '7:00 PM', '8:00 PM'] },
//             { day: 'Friday', houres: ['9:00 PM', '10:00 PM', '9:00 AM'] },
//             { day: 'Saturday', houres: ['10:00 AM', '11:00 AM', '12:00 AM'] },
//             { day: 'Sunday', houres: ['1:00 AM', '2:00 AM', '3:00 AM'] }
//         ]
//     },
//     {
//         id: 'd4',
//         name: 'Omar Shahwan',
//         spz: 'Dentist',
//         experience: '+3 Years',
//         education: 'Damascus University',
//         availableTimes: [
//             { day: "Monday", houres: ['9:00 AM', '10:00 AM', '11:00 AM'] },
//             { day: 'Tuesday', houres: ['12:00 PM', '1:00 PM', '2:00 PM'] },
//             { day: 'Wednesday', houres: ['3:00 PM', '4:00 PM', '5:00 PM'] },
//             { day: 'Thursday', houres: ['6:00 PM', '7:00 PM', '8:00 PM'] },
//             { day: 'Friday', houres: ['9:00 PM', '10:00 PM', '9:00 AM'] },
//             { day: 'Saturday', houres: ['10:00 AM', '11:00 AM', '12:00 AM'] },
//             { day: 'Sunday', houres: ['1:00 AM', '2:00 AM', '3:00 AM'] }
//         ]
//     },
//     {
//         id: 'd5',
//         name: 'Omar Shahwan',
//         spz: 'Dentist',
//         experience: '+3 Years',
//         education: 'Damascus University',
//         availableTimes: [
//             { day: "Monday", houres: ['9:00 AM', '10:00 AM', '11:00 AM'] },
//             { day: 'Tuesday', houres: ['12:00 PM', '1:00 PM', '2:00 PM'] },
//             { day: 'Wednesday', houres: ['3:00 PM', '4:00 PM', '5:00 PM'] },
//             { day: 'Thursday', houres: ['6:00 PM', '7:00 PM', '8:00 PM'] },
//             { day: 'Friday', houres: ['9:00 PM', '10:00 PM', '9:00 AM'] },
//             { day: 'Saturday', houres: ['10:00 AM', '11:00 AM', '12:00 AM'] },
//             { day: 'Sunday', houres: ['1:00 AM', '2:00 AM', '3:00 AM'] }
//         ]
//     },
//     {
//         id: 'd6',
//         name: 'Omar Shahwan',
//         spz: 'Dentist',
//         experience: '+3 Years',
//         education: 'Damascus University',
//         availableTimes: [
//             { day: "Monday", houres: ['9:00 AM', '10:00 AM', '11:00 AM'] },
//             { day: 'Tuesday', houres: ['12:00 PM', '1:00 PM', '2:00 PM'] },
//             { day: 'Wednesday', houres: ['3:00 PM', '4:00 PM', '5:00 PM'] },
//             { day: 'Thursday', houres: ['6:00 PM', '7:00 PM', '8:00 PM'] },
//             { day: 'Friday', houres: ['9:00 PM', '10:00 PM', '9:00 AM'] },
//             { day: 'Saturday', houres: ['10:00 AM', '11:00 AM', '12:00 AM'] },
//             { day: 'Sunday', houres: ['1:00 AM', '2:00 AM', '3:00 AM'] }
//         ]
//     },
//     {
//         id: 'd7',
//         name: 'Omar Shahwan',
//         spz: 'Dentist',
//         experience: '+3 Years',
//         education: 'Damascus University',
//         availableTimes: [
//             { day: "Monday", houres: ['9:00 AM', '10:00 AM', '11:00 AM'] },
//             { day: 'Tuesday', houres: ['12:00 PM', '1:00 PM', '2:00 PM'] },
//             { day: 'Wednesday', houres: ['3:00 PM', '4:00 PM', '5:00 PM'] },
//             { day: 'Thursday', houres: ['6:00 PM', '7:00 PM', '8:00 PM'] },
//             { day: 'Friday', houres: ['9:00 PM', '10:00 PM', '9:00 AM'] },
//             { day: 'Saturday', houres: ['10:00 AM', '11:00 AM', '12:00 AM'] },
//             { day: 'Sunday', houres: ['1:00 AM', '2:00 AM', '3:00 AM'] }
//         ]
//     },
// ]

const DoctorProfile = props => {
    const { drId } = useParams();
    const [doctor, setDoctor] = useState({});

    useEffect(() => {
        axios.get(`http://192.168.43.7:8000/api/doctors/${drId}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            console.log(res);
            setDoctor(res.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, [drId]);


    return (
        <div className={classes['doctor-profile']}>
            <AltHeader />
            <DoctorItem doctorInfo={doctor} id={drId} />
        </div>
    )
}

export default DoctorProfile;