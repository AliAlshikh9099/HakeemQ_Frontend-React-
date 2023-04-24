import Logo from '../logo/Logo';
import classes from './AltHeader.module.css'
import Register from './Register';

const AltHeader = () => {
    return (
        <div className={classes['header-alt']}>
            <div className={`container ${classes.content}`}>
                <Logo />
                <Register />
            </div>
        </div>
    )
};

export default AltHeader;