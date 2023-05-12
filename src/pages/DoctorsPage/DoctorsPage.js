import { useCallback, useContext, useEffect, useState } from "react";
import ApiContext from "../../store/api-context";

import { RotatingLines } from 'react-loader-spinner';

const DoctorsPage = () => {
    const isLoading = useContext(ApiContext).isLoading;
    const error = useContext(ApiContext).error;
    const sendRequest = useContext(ApiContext).sendRequest;

    const [doctors, setDoctors] = useState([]);

    const fetchDoctors =  useCallback(async () => {
        try {
            const data = await sendRequest({ url: 'http://192.168.43.7:8000/api/doctors' })
            setDoctors(data.data);
        }
        catch (error) {
            console.error(error);
        }
    }, [sendRequest]);

    useEffect(() => {
        fetchDoctors();
    }, []);


    return (
        <div>
            {isLoading &&
                <RotatingLines
                    strokeColor='var(--primary)'
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="220"
                    visible={true}
                />}
            {!isLoading && error && <p>{error}</p>}
            {!isLoading && !error && <ul>
                {doctors.map(dr =>
                    <li key={dr.id}>{dr.name}</li>)}
            </ul>}
        </div>
    )
};

export default DoctorsPage;