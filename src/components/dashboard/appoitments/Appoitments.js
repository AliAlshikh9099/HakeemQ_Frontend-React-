import classes from './Appoitments.module.css';
import AppoitmentCard from './AppoitmentCard';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Appoitments = () => {
    const [appData, setAppData] = useState([]);

    useEffect(() => {
        axios.get('http://192.168.43.7:8000/api/appoints', {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                console.log(res.data);
                setAppData(res.data);
            })
            .catch(error => console.log(error))
    }, []);

    return (
        <div className={`container ${classes.appoitments}`}>
            <div className={classes.header}>
                <div className={classes.title}>
                    <h2>Appoitments</h2>
                    <p>Your appoitments this week</p>
                </div>
            </div>
            <div className={classes['app-cards']}>
                {appData.map(app => 
                    <AppoitmentCard
                        key={app.id}
                        id={app.id}
                        name={app.name}
                        email={app.email}
                        gender={app.gender}
                        phone={app.phone}
                        appTime={app.appointment_time}
                        appDate={app.appointment_date}
                        age={app.age}
                    />
                )}
            </div>
        </div>
    )
};

export default Appoitments;