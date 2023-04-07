import classes from './BookingForm.module.css';
import { useState, useEffect } from 'react';

import useInput from '../../../hooks/use-input';

const AVAILABLE_TIMES = [
    { day: "Monday", times: ['9:00 AM', '10:00 AM', '11:00 AM'] },
    { day: 'Tuesday', times: ['12:00 PM', '1:00 PM', '2:00 PM'] },
    { day: 'Wednesday', times: ['3:00 PM', '4:00 PM', '5:00 PM'] },
    { day: 'Thursday', times: ['6:00 PM', '7:00 PM', '8:00 PM'] },
    { day: 'Friday', times: ['9:00 PM', '10:00 PM', '9:00 AM'] },
    { day: 'Saturday', times: ['10:00 AM', '11:00 AM', '12:00 AM'] },
    { day: 'Sunday', times: ['1:00 AM', '2:00 AM', '3:00 AM'] }
]

const nameValidation = value => value.trim() !== '';
const emailValidation = value => value.includes('@');
const phoneValidation = value => value.length === 10;
const ageValidation = value => value > 18 && value < 100;

const BookingForm = (props) => {

    const [selectedDay, setSelectedDay] = useState('Monday');

    const [availableTimes, setAvailableTimes] = useState([]);

    const selectDayHandler = event => {
        setSelectedDay(event.target.value);
    }

    useEffect(() => {
        const day = AVAILABLE_TIMES.find(day => day.day === selectedDay);
        setAvailableTimes(day.times);
    }, [selectedDay]);

    const { 
        value: enteredName,
        isValid: nameIsValid,
        valueHasError: nameHasError,
        valueChangeHandler: nameChangeHandler,
        valueBlurHandler: nameBlurHandler,
        reset: resetName
    } = useInput(nameValidation);
    const { 
        value: enteredEmail,
        isValid: emailIsValid,
        valueHasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        valueBlurHandler: emailBlurHandler,
        reset: resetEmail
    } = useInput(emailValidation);
    const { 
        value: enteredPhone,
        isValid: phoneIsValid,
        valueHasError: phoneHasError,
        valueChangeHandler: phoneChangeHandler,
        valueBlurHandler: phoneBlurHandler,
        reset: resetPhone
    } = useInput(phoneValidation);
    const { 
        value: enteredAge,
        isValid: ageIsValid,
        valueHasError: ageHasError,
        valueChangeHandler: ageChangeHandler,
        valueBlurHandler: ageBlurHandler,
        reset: resetAge
    } = useInput(ageValidation);
    const { 
        value: enteredReason,
        isValid: reasonIsValid,
        valueHasError: reasonHasError,
        valueChangeHandler: reasonChangeHandler,
        valueBlurHandler: reasonBlurHandler,
        reset: resetReason
    } = useInput(nameValidation);

    let formIsValid = false;

    if (
        nameIsValid &&
        emailIsValid &&
        phoneIsValid &&
        ageIsValid &&
        reasonIsValid
    ) {
        formIsValid = true;
    } 

    const submitHandler = (event) => {
        event.preventDefault();
        const bookingData = {
            name: enteredName,
            email: enteredEmail,
            phone: enteredPhone,
            age: enteredAge,
            reason: enteredReason
        }
        console.log(bookingData);
        resetName();
        resetEmail();
        resetPhone();
        resetAge();
        resetReason();
    }

    const invalidNameClasses = nameHasError ? `${classes.control} ${classes.invalid}` : classes.control;
    const invalidEmailClasses = emailHasError ? `${classes.control} ${classes.invalid}` : classes.control;
    const invalidPhoneClasses = phoneHasError ? `${classes.control} ${classes.invalid}` : classes.control;
    const invalidAgeHandler = ageHasError ? `${classes.control} ${classes.invalid}` : classes.control;
    const invalidReasonClasses = reasonHasError ? `${classes.control} ${classes.invalid}` : classes.control;

    return (
        <form onSubmit={submitHandler}>
            <div className={classes['input-form']}>
                <div className={invalidNameClasses}>
                    <label htmlFor='name'>Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={enteredName}
                        onBlur={nameBlurHandler}
                        onChange={nameChangeHandler}
                    />
                    {nameHasError && <p className={classes['error-text']}>Please enter valid name (non empty value).</p>}
                </div>
                <div className={invalidEmailClasses}>
                    <label htmlFor='email'>E-mail</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={enteredEmail}
                        onBlur={emailBlurHandler}
                        onChange={emailChangeHandler}
                    />
                    {emailHasError && <p className={classes['error-text']}>Please enter valid email.</p>}
                </div>
                <div className={invalidPhoneClasses}>
                    <label htmlFor='phone'>Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={enteredPhone}
                        onBlur={phoneBlurHandler}
                        onChange={phoneChangeHandler}
                    />
                    {phoneHasError && <p className={classes['error-text']}>Please enter valid phone.</p>}
                </div>
                <div className={invalidAgeHandler}>
                    <label htmlFor='age'>Age</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={enteredAge}
                        onBlur={ageBlurHandler}
                        onChange={ageChangeHandler}
                    />
                    {ageHasError && <p className={classes['error-text']}>Please enter valid age (greater than 18).</p>}
                </div>
                <div className={invalidReasonClasses}>
                    <label htmlFor='reason'>Booking Reason</label>
                    <textarea
                        name='reason'
                        id='reason'
                        value={enteredReason}
                        onBlur={reasonBlurHandler}
                        onChange={reasonChangeHandler}
                    ></textarea>
                    {reasonHasError && <p className={classes['error-text']}>Please enter valid reason.</p>}
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
                <button disabled={!formIsValid} className={classes.button}>Confirm</button>
                <button onClick={props.onClose} type="button" className={classes['button--alt']}>Close</button>
            </div>
        </form>
    )
}

export default BookingForm;