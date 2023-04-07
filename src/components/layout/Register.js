import classes from './Register.module.css';

import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className={classes.reg}>
            <Link className={classes['button--alt']} to='/login'>Login</Link>
            <Link className={classes.button} to='/register'>Register</Link>
        </div>
    )
};

export default Register;