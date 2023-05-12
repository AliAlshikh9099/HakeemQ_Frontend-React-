import classes from './DoctorForm.module.css';

import useInput from '../../hooks/use-input';
import { useContext, useState } from 'react';

import { RotatingLines } from 'react-loader-spinner';

import axios from 'axios';
import AuthContext from '../../store/auth-context';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Modal from '../UI/Modal';
import Input from '../UI/Input';


const validateName = value => value.trim() !== '';
const validateEmail = value => value.includes('@');
const validatePassword = value => value.length > 7;
const validatePhone = value => value.length === 10;

const DoctorForm = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);
    const [error, setError] = useState(null);
    const [regAlertIsOpen, setRegAlertIsOpen] = useState(false);
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
            .then(res => {
                console.log(res);
                setIsLoading(false);
                setIsRegistered(true);
                setRegAlertIsOpen(true);
                setMsg(res.data.msg);
                const token = res.data.token;
                authCtx.register(res.data.data, token);
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
                setIsLoading(false);
                setRegAlertIsOpen(true);
            })
        resetName();
        resetEmail();
        resetPassword();
        resetPhone();
        resetSpz();
        resetGender();
    }


    const closeRegAlertHandler = () => {
        setRegAlertIsOpen(false);
    }

    const inputElements = [
        {
            elementType: 'input',
            id: 'name',
            hasError: nameHasError,
            errorMsg: 'Please enter a valid name (non empty value).',
            config: {
                type: 'text',
                name: 'name',
                value: enteredName,
                onBlur: nameBlurHandler,
                onChange: nameChangeHandler,
            }
        },
        {
            elementType: 'input',
            id: 'email',
            hasError: emailHasError,
            errorMsg: 'Please enter a valid email.',
            config: {
                type: 'email',
                name: 'email',
                value: enteredEmail,
                onBlur: emailBlurHandler,
                onChange: emailChangeHandler,
            }
        },
        {
            elementType: 'input',
            id: 'password',
            hasError: passwordHasError,
            errorMsg: 'Please enter a valid password (non empty value).',
            config: {
                type: 'password',
                name: 'password',
                value: enteredPassword,
                onBlur: passwordBlurHandler,
                onChange: passwordChangeHandler,
            }
        },
        {
            elementType: 'input',
            id: 'phone',
            hasError: phoneHasError,
            errorMsg: 'Please enter a valid phone',
            config: {
                type: 'tel',
                name: 'phone',
                value: enteredPhone,
                onBlur: phoneBlurHandler,
                onChange: phoneChangeHandler,
            }
        },
        {
            elementType: 'select',
            id: 'gender',
            config: {
                value: selectedGender,
                onChange: genderChangeHandler,
            },
            options: [
                { value: '', inner: '--please select your gender--' },
                { value: 'Male', inner: 'Male' },
                { value: 'Female', inner: 'Female' }
            ]
        },
        {
            elementType: 'select',
            id: 'speciality',
            config: {
                value: selectedSpz,
                onChange: spzChangeHandler,
            },
            options: [
                { value: '', inner: '--please select your spz--' },
                { value: 'Dentist', inner: 'Dentist' },
                { value: 'Orthopedist', inner: 'Orthopedist' },
                { value: 'Pediatrician', inner: 'Pediatrician' },
                { value: 'Plastci', inner: 'Plastci' },
                { value: 'Urologist', inner: 'Urologist' },
                { value: 'Ophthalmologist', inner: 'Ophthalmologist'}
            ]
        }
    ]

    let alertContent;

    if (isRegistered && !isLoading && !error) {
        alertContent = (
            <>
                <FontAwesomeIcon className={`${classes.icon} ${classes.success}`} icon={faCheckCircle} />
                <div className={classes.msg}>
                    <h3>Welcome to our team</h3>
                    <p>{msg}</p>
                </div>
                <div className={classes.actions}>
                    <Link to="/dashboard">Go to dashboard </Link>
                    <button onClick={closeRegAlertHandler}>Close</button>
                </div>
            </>
        )
    }
    if (error && !isLoading) {
        alertContent = (
            <>
                <FontAwesomeIcon className={`${classes.icon} ${classes.danger}`} icon={faCircleXmark} />
                <div className={classes.msg}>
                    <h3>Something went wrong!</h3>
                    <p>{error}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={closeRegAlertHandler}>Close</button>
                </div>
            </>
        )
    }

    return (
        <div className={classes['doctor-form']}>
            <h1>Create your account</h1>
            <form onSubmit={registerHandler}>
                {inputElements.map(el =>
                    <Input
                        key={el.id}
                        id={el.id}
                        elementType={el.elementType}
                        config={el.config}
                        classes={el.classes}
                        options={el.options}
                        hasError={el.hasError}
                        errorMsg={el.errorMsg}
                    />
                )}
                <div className={classes.actions}>
                    <button disabled={!formIsValid} className={classes.button}>
                        {isLoading ?
                            <RotatingLines
                                strokeColor='var(--primary)'
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="20"
                                visible={true}
                            />
                        : 'Register'}
                    </button>
                </div>
            </form>
            {regAlertIsOpen &&
                <Modal onClose={closeRegAlertHandler} className={classes['reg-alert']}>
                    {alertContent}
                </Modal>}
        </div>
    )
}

export default DoctorForm;