import Title from '../UI/Title';
import classes from './Login.module.css';
import LoginForm from './LoginForm';

const Login = () => {
    return (
        <div className={classes.login}>
            <Title>Welcome Back</Title>
            <LoginForm />
        </div>
    )
};

export default Login;