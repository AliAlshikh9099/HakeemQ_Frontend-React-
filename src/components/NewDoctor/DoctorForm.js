import classes from './DoctorForm.module.css';

import useInput from '../../hooks/use-input';
import { useContext, useState } from 'react';

import { RotatingLines } from 'react-loader-spinner';

import axios from 'axios';
import AuthContext from '../../store/auth-context';

const spzs = ['Dentist', 'Orthopedist', 'Pediatrician', 'Plastci', 'Urologist', 'Ophthalmologist'];

const validateName = value => value.trim() !== '';
const validateEmail = value => value.includes('@');
const validatePassword = value => value.length > 7;
const validatePhone = value => value.length === 10;

const DoctorForm = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);
    const [msg, setMsg] = useState('');
    const authCtx = useContext(AuthContext);

    const { 
        value: enteredName,
        isValid: enteredNameIsValid,
        valueHasError: nameHasError,
        valueChangeHandler: nameChangeHandler,
        valueBlurHandler: nameBlurHandler,
        reset: resetName
    } = useInput(validateName);
    const { 
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        valueHasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        valueBlurHandler: emailBlurHandler,
        reset: resetEmail
    } = useInput(validateEmail);
    const { 
        value: enteredPassword,
        isValid: enteredPasswordIsValid,
        valueHasError: passwordHasError,
        valueChangeHandler: passwordChangeHandler,
        valueBlurHandler: passwordBlurHandler,
        reset: resetPassword
    } = useInput(validatePassword);
    const { 
        value: enteredPhone,
        isValid: enteredPhoneIsValid,
        valueHasError: phoneHasError,
        valueChangeHandler: phoneChangeHandler,
        valueBlurHandler: phoneBlurHandler,
        reset: resetPhone
    } = useInput(validatePhone);
    const { 
        value: selectedSpz,
        isValid: selectedSpzIsValid,
        valueChangeHandler: spzChangeHandler,
        reset: resetSpz
    } = useInput(validateName);
    const { 
        value: selectedGender,
        isValid: selectedGenderIsValid,
        valueChangeHandler: genderChangeHandler,
        reset: resetGender
    } = useInput(validateName);


    let formIsValid = false;

    if (
        enteredNameIsValid &&
        enteredEmailIsValid &&
        enteredPasswordIsValid &&
        enteredPhoneIsValid &&
        selectedSpzIsValid &&
        selectedGenderIsValid
    ) {
        formIsValid = true;
    }

    const registerHandler = (event) => {
        setIsLoading(true);
        event.preventDefault();
        if (!formIsValid) {
            return;
        }
        const registerData = {
            name: enteredName,
            email: enteredEmail,
            password: enteredPassword,
            phone: enteredPhone,
            gender: selectedGender,
            spz: selectedSpz
        }
        axios.post('http://192.168.43.7:8000/api/register', registerData, {
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setIsLoading(false);
                setIsRegistered(true);
                setMsg(data.msg);
                authCtx.register(data.token);
            })
            .catch(error => {
                console.log(error);
                setIsLoading(false);
            })
        resetName();
        resetEmail();
        resetPassword();
        resetPhone();
        resetSpz();
        resetGender();
    }

    const invalidNameClasses = nameHasError ? `${classes.control} ${classes.invalid}` : classes.control;
    const invalidEmailClasses = emailHasError ? `${classes.control} ${classes.invalid}` : classes.control;
    const invalidPasswordClasses = passwordHasError ? `${classes.control} ${classes.invalid}` : classes.control;
    const invalidPhoneClasses = phoneHasError ? `${classes.control} ${classes.invalid}` : classes.control;

    return (
        <div className={classes['doctor-form']}>
            <h1>Create your account</h1>
            <form onSubmit={registerHandler}>
                <div className={invalidNameClasses}>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={enteredName}
                        onBlur={nameBlurHandler}
                        onChange={nameChangeHandler}
                    />
                    {nameHasError && <p className={classes['error-text']}>Please enter valid name (not empty value).</p>}
                </div>
                <div className={invalidEmailClasses}>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={enteredEmail}
                        onBlur={emailBlurHandler}
                        onChange={emailChangeHandler}
                    />
                    {emailHasError && <p className={classes['error-text']}>Please enter valid email.</p>}
                </div>
                <div className={invalidPasswordClasses}>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={enteredPassword}
                        onBlur={passwordBlurHandler}
                        onChange={passwordChangeHandler}
                    />
                    {passwordHasError && <p className={classes['error-text']}>Password isn't strong enough (8 charecters at least).</p>}
                </div>
                <div className={invalidPhoneClasses}>
                    <label>Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={enteredPhone}
                        onBlur={phoneBlurHandler}
                        onChange={phoneChangeHandler}
                    />
                    {phoneHasError && <p className={classes['error-text']}>Please enter valid phone.</p>}
                </div>
                <div className={classes.control}>
                    <label>Gender</label>
                    <select value={selectedGender} onChange={genderChangeHandler}>
                        <option value="">--Please select your gender--</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label>Speciality</label>
                    <select value={selectedSpz} onChange={spzChangeHandler}>
                        <option value="">--Please select a speciality--</option>
                        {spzs.map(spz => <option key={spz} value={spz}>{spz}</option>)}
                    </select>
                </div>
                <div className={classes.actions}>
                    <button disabled={!formIsValid} className={classes.button}>
                        {isLoading ?
                            <RotatingLines
                                strokeColor='var(--primary)'
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="25"
                                visible={true}
                            />
                        : 'Register'}
                    </button>
                </div>
            </form>
            {!isLoading && isRegistered && <h1>{msg}</h1>}
        </div>
    )
}

export default DoctorForm;