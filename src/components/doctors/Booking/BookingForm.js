import classes from './BookingForm.module.css';
import { useState, useEffect } from 'react';

const AVAILABLE_TIMES = [
    { day: "Monday", times: ['9:00 AM', '10:00 AM', '11:00 AM'] },
    { day: 'Tuesday', times: ['12:00 PM', '1:00 PM', '2:00 PM'] },
    { day: 'Wednesday', times: ['3:00 PM', '4:00 PM', '5:00 PM'] },
    { day: 'Thursday', times: ['6:00 PM', '7:00 PM', '8:00 PM'] },
    { day: 'Friday', times: ['9:00 PM', '10:00 PM', '9:00 AM'] },
    { day: 'Saturday', times: ['10:00 AM', '11:00 AM', '12:00 AM'] },
    { day: 'Sunday', times: ['1:00 AM', '2:00 AM', '3:00 AM'] }
]

const BookingForm = (props) => {
    const submitHandler = (event) => {
        event.preventDefault();
    }

    const [selectedDay, setSelectedDay] = useState('Monday');

    const [availableTimes, setAvailableTimes] = useState([]);

    const selectDayHandler = event => {
        setSelectedDay(event.target.value);
    }

    useEffect(() => {
        const day = AVAILABLE_TIMES.find(day => day.day === selectedDay);
        setAvailableTimes(day.times);
    }, [selectedDay])


    return (
        <form onSubmit={submitHandler}>
            <div className={classes['input-form']}>
                <div className={classes.control}>
                    <label htmlFor='name'>Name</label>
                    <input type="text" id="name" name="name"/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='email'>E-mail</label>
                    <input type="email" id="email" name="email"/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='phone'>Phone</label>
                    <input type="tel" id="phone" name="phone"/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='age'>Age</label>
                    <input type="number" id="age" name="age"/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='reason'>Booking Reason</label>
                    <textarea name='reason' id='reason'></textarea>
                </div>
                <div className={classes.control}>
                    <label>Choose Day</label>
                    <select onChange={selectDayHandler} value={selectedDay}>
                        {AVAILABLE_TIMES.map(day => <option key={day.day} value={day.day}>{day.day}</option>)}
                    </select>
                    <label>Available times in <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>
                            {selectedDay}
                        </span>:
                    </label>
                    <select>
                        {availableTimes.map(time => <option key={time} value={time}>{time}</option>)}
                    </select>
                </div>
            </div>
            <div className={classes.action}>
                <button className={classes.button}>Confirm</button>
                <button onClick={props.onClose} type="button" className={classes['button--alt']}>Close</button>
            </div>
        </form>
    )
}

export default BookingForm;