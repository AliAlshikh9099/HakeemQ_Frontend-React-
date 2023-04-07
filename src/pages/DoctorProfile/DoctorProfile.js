import DoctorProfile from "../../components/doctor/DoctorItem";
import Header from "../../components/layout/Header"

import { useParams } from "react-router";

const DUMMY_DOCTORS = [
    { id: 'd1', name: 'Omar Shahwan', spz: 'Dentist' },
    { id: 'd2', name: 'Ali Alshikh', spz: 'Plastci' },
    { id: 'd3', name: 'Omar Shahwan', spz: 'Dentist' },
    { id: 'd4', name: 'Omar Shahwan', spz: 'Dentist' },
    { id: 'd5', name: 'Omar Shahwan', spz: 'Dentist' },
    { id: 'd6', name: 'Omar Shahwan', spz: 'Dentist' },
    { id: 'd7', name: 'Omar Shahwan', spz: 'Dentist' },
]

const DoctorDetail = () => {
    const { drId } = useParams();
    const existingDr = DUMMY_DOCTORS.find(dr => dr.id === drId);
    return (
        <>
            <Header />
            <DoctorProfile doctor={existingDr} />
        </>
    )
}

export default DoctorDetail;