import { useState, useEffect } from 'react';
import classes from './Header.module.css';
import Navigations from './Navigations';
import Bar from './NavigationsBar/Bar';
import MenuBar from './NavigationsBar/MenuBar';
import Register from './Register';

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
                    <h1 className={classes.logo}>
                        <a href='/home'>HakeemQ</a>
                    </h1>
                    <Navigations />
                </div>
                <Register />
                <Bar onClick={barClickHandler} />
            </div>
            {barIsClicked && <MenuBar isClicke={barIsClicked}/>}
        </header>
    )
}

export default Header;