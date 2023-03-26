import classes from './Register.module.css';


const Register = () => {
    return (
        <div className={classes.reg}>
            <button className={classes['button--alt']}>
                <a href='/login'>Login</a>
            </button>
            <button className={classes.button}>
                <a href='/register'>Register</a>
            </button>
        </div>
    )
};

export default Register;