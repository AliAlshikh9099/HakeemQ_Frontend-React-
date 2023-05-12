import { useState } from 'react';
import classes from './AppoitmentCard.module.css';
import Droplist from './Droplist';

const AppoitmentCard = (props) => {
    const [droplistIsOpen, setDroplistIsOpen] = useState(false);

    const toggleDroplistHandler = () => {
        setDroplistIsOpen(prevState => !prevState);
    }   
    return (
        <div className={classes['app-card']}>
            <div className={classes.content}>
                <div>
                    <h6>Patient Name</h6>
                    <p>{props.name}</p>
                </div>
                <div>
                    <h6>Age</h6>
                    <p>{props.age}</p>
                </div>
                <div>
                    <h6>Gender</h6>
                    <p>{props.gender}</p>
                </div>
                <div>
                    <h6>Appoitment Date</h6>
                    <p>{props.appDate}</p>
                </div>
                <div>
                    <h6>Appoitment Time</h6>
                    <p>{props.appTime}</p>
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
            {droplistIsOpen && <Droplist id={props.id} />}
        </div>
    )
};

export default AppoitmentCard;