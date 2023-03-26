import classes from './LoginForm.module.css';

const LoginForm = () => {
    return (
        <div className={classes.login}>
            <form>
                <div className={classes.control}>
                    <label htmlFor='email'>Email</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Password</label>
                    <input type="password" id="password" name="password" />
                </div>
                <div className={classes.action}>
                    <button className={classes.button}>Login</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;