import classes from './MenuList.module.css';
import { faCalendarCheck, faHospitalUser, faClock, faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../../store/auth-context';
import axios from 'axios';

const MenuList = props => { 
    const authCtx = useContext(AuthContext);
    const navigate = useNavigate();

    const logoutHandler = () => {
        axios.post('http://192.168.43.171:8000/api/logout', {}, {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                authCtx.logout();
                navigate('/');
            })
            .catch(error => console.log(error));
    }

    return (
        <ul className={classes['menu-list']}>
            <div>
            <li className={classes['menu-item']}>
                <NavLink to='appoitments' className={(navData) => navData.isActive ? classes.active : ''}>
                    <FontAwesomeIcon className={classes.icon} icon={faCalendarCheck} />
                    <span>Appoitments</span>
                </NavLink>
            </li>
            <li className={classes['menu-item']}>
                <NavLink to='patients' className={(navData) => navData.isActive ? classes.active : ''}>
                    <FontAwesomeIcon className={classes.icon} icon={faHospitalUser} />
                    <span>Patients</span>
                </NavLink>
            </li>
            <li className={classes['menu-item']}>
                <NavLink to='times' className={(navData) => navData.isActive ? classes.active : ''}>
                    <FontAwesomeIcon className={classes.icon} icon={faClock} />
                    <span>Available Times</span>
                </NavLink>
            </li>
            <li className={classes['menu-item']}>
                <NavLink to='profile' className={(navData) => navData.isActive ? classes.active : ''}>
                    <FontAwesomeIcon className={classes.icon} icon={faUser} />
                    <span>Profile</span>
                </NavLink>
            </li>
            </div>
            <li className={classes['menu-item']}>
                <NavLink onClick={logoutHandler}>
                    <FontAwesomeIcon className={classes.icon} icon={faRightFromBracket} />
                    <span>Logout</span>
                </NavLink>
            </li>
        </ul>
    )
};

export default MenuList;