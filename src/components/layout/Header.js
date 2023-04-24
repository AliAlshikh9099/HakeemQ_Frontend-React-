import { useState, useEffect } from 'react';
import classes from './Header.module.css';
import Navigations from './Navigations';
import Bar from './NavigationsBar/Bar';
import MenuBar from './NavigationsBar/MenuBar';
import Register from './Register';

import { Link } from 'react-router-dom';
import Logo from '../logo/Logo';

const Header = () => {
    const [barIsClicked, setBarIsClicked] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const barClickHandler = () => {
        setBarIsClicked((prevState) => {
            return !prevState;
        });
    }

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
        <header className={`${classes.header} ${isScrolled ? classes['fixed-header'] : ''}`}>
            <div className={`container ${classes.content}`}>
                <div className={classes['right-item']}>
                    <Logo />
                    <Navigations />
                </div>
                <Register />
                <Bar onClick={barClickHandler} />
            </div>
            <MenuBar isClicked={barIsClicked}/>
        </header>
    )
}

export default Header;