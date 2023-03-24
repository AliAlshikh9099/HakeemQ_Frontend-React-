import classes from './Register.module.css';


const Register = () => {
    return (
        <div className={classes.reg}>
            <button className={classes['button--alt']}>Login</button>
            <button className={classes.button}>Register</button>
        </div>
    )
};

export default Register;