import axios from 'axios';
import classes from './LoginForm.module.css';
import useInput from '../../hooks/use-input';
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';

import { useNavigate } from 'react-router';

const validateValue = value => value.trim('') !== '';

const LoginForm = () => {
    const authCtx = useContext(AuthContext);

    const navigate = useNavigate();

    const {
        value: enteredEmail,
        // isValid: emailIsValid,
        // valueHasError: emailHasError,
        // valueBlurHandler: emailBlurHandler,
        valueChangeHandler: emailChangeHandler,
        // reset: resetEmail
    } = useInput(validateValue);
    const { 
        value: enteredPassword,
        valueChangeHandler: passwordChangeHandler
    } = useInput(validateValue);

    const loginHandler = event => {
        event.preventDefault();
        const loginData = {
            email: enteredEmail,
            password: enteredPassword,
        }
        axios.post('http://192.168.43.171:8000/api/login', loginData, {
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => {
                authCtx.login(res.data.token);
                navigate('/dashboard');
            })
            .catch(error => console.log(error));
    }
    return (
        <div className={classes.login}>
            <form onSubmit={loginHandler}>
                <div className={classes.control}>
                    <label htmlFor='email'>Email</label>
                    <input onChange={emailChangeHandler} type="email" id="email" name="email" />
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Password</label>
                    <input onChange={passwordChangeHandler} type="password" id="password" name="password" />
                </div>
                <div className={classes.action}>
                    <button className={classes.button}>Login</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;