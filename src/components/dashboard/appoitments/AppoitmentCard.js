import { useState } from 'react';
import classes from './AppoitmentCard.module.css';
import Droplist from './Droplist';

const AppoitmentCard = () => {
    const [droplistIsOpen, setDroplistIsOpen] = useState(false);

    const toggleDroplistHandler = () => {
        setDroplistIsOpen(prevState => !prevState);
    }   
    return (
        <div className={classes['app-card']}>
            <div className={classes.content}>
                <div>
                    <h6>Appoitment Time</h6>
                    <p>11:00 AM</p>
                </div>
                <div>
                    <h6>Patient Name</h6>
                    <p>Ali Alshikh</p>
                </div>
                <div>
                    <h6>Email</h6>
                    <p>info@example.com</p>
                </div>
                <div>
                    <h6>Age</h6>
                    <p>44</p>
                </div>
            </div>
            <div
                onClick={toggleDroplistHandler}
                className={droplistIsOpen ? `${classes['drop-btn']} ${classes.active}` : classes['drop-btn']}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            {droplistIsOpen && <Droplist />}
        </div>
    )
};

export default AppoitmentCard;