import Logo from '../logo/Logo';
import classes from './AltHeader.module.css'
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../store/auth-context';

const AltHeader = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    
    const authCtx = useContext(AuthContext);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [])

    const handleScroll = () => {
        if (window.pageYOffset > 64) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }

    return (
        <header className={`${classes['header-alt']} ${isScrolled ? classes['fixed-header'] : ''}`}>
            <div className={`container ${classes.content}`}>
                <Logo />
                {!authCtx.isAuth && <div className={classes.reg}>
                    <Link className={classes['button--alt']} to='/login'>Login</Link>
                    <Link className={classes.button} to='/register'>Register</Link>
                </div>}
                {authCtx.isAuth && <Link className={classes.button} to='/dashboard'>Your dashboard</Link>}
            </div>
        </header>
    )
};

export default AltHeader;