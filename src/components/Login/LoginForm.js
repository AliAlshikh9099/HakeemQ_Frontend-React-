import axios from 'axios';
import classes from './LoginForm.module.css';
import useInput from '../../hooks/use-input';
import { useContext, useState } from 'react';
import AuthContext from '../../store/auth-context';

import { useNavigate } from 'react-router';
import Input from '../UI/Input';

import { RotatingLines } from 'react-loader-spinner';

const validateEmail = value => value.includes('@');
const validatePassword = value => value.length >= 6;

const LoginForm = () => {
    const authCtx = useContext(AuthContext);

    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const {
        value: enteredEmail,
        isValid: emailIsValid,
        valueHasError: emailHasError,
        valueBlurHandler: emailBlurHandler,
        valueChangeHandler: emailChangeHandler,
        reset: resetEmail,
    } = useInput(validateEmail);
    const { 
        value: enteredPassword,
        isValid: passwordIsValid,
        valueHasError: passwordHasError,
        valueBlurHandler: passwordBlurHandler,
        valueChangeHandler: passwordChangeHandler,
        reset: resetPassword
    } = useInput(validatePassword);

    let formIsValid = false;

    if (emailIsValid && passwordIsValid) {
        formIsValid = true;
    }

    const loginHandler = event => {
        setIsLoading(true);
        event.preventDefault();
        const loginData = {
            email: enteredEmail,
            password: enteredPassword,
        }
        axios.post('http://192.168.43.7:8000/api/login', loginData, {
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => {
                setIsLoading(false);
                console.log(res);
                if (res.data.status === 403) {
                    alert(res.data.message);
                } else {
                    authCtx.login(res.data);
                    navigate('/dashboard');
                }
            })
            .catch(error => {
                setIsLoading(false);
                console.log(error);
            })
        resetEmail();
        resetPassword();
    }

    const inputElements = [
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
            errorMsg: 'Please enter a valid password.',
            config: {
                type: 'password',
                name: 'password',
                value: enteredPassword,
                onBlur: passwordBlurHandler,
                onChange: passwordChangeHandler,
            }
        },
    ]

    return (
        <div className={classes.login}>
            <form onSubmit={loginHandler}>
                {inputElements.map(el => 
                    <Input
                        key={el.id}
                        id={el.id}
                        elementType={el.elementType}
                        config={el.config}
                        classes={el.classes}
                        hasError={el.hasError}
                        errorMsg={el.errorMsg}
                    />
                    )}
                <div className={classes.action}>
                    <button
                        disabled={!formIsValid}
                        className={classes.button}>
                        {isLoading &&
                            <RotatingLines
                                strokeColor='var(--primary)'
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="20"
                                visible={true}
                            />}
                        {!isLoading && 'Login'}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;