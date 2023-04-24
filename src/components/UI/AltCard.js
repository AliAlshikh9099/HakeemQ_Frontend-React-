import Card from "./Card";
import { useState } from "react";
import classes from './AltCard.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const AltCard = props => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMoreInfoHandler = () => {
        setIsOpen(prevState => !prevState);
    }
    const isOpenClasses = isOpen ? `${classes.header} ${classes.open}` : classes.header;
    return (
        <Card>
            <div className={isOpenClasses} onClick={toggleMoreInfoHandler}>
                <h3>{props.title}</h3>
                <FontAwesomeIcon className={classes.icon} icon={faAngleDown} />
            </div>
            {isOpen && <div className={classes.info}>
                <div>{props.info}</div>
            </div>}
        </Card>
    )
};

export default AltCard;