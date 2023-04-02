import classes from './Register.module.css';

import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className={classes.reg}>
            <button className={classes['button--alt']}>
                <Link to='/login'>Login</Link>
            </button>
            <button className={classes.button}>
                <Link to='/register'>Register</Link>
            </button>
        </div>
    )
};

export default Register;