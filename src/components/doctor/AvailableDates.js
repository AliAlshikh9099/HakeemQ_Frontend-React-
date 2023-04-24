import AltCard from "../UI/AltCard";
import classes from './AvailableTimes.module.css';

const AvailableDates = props => {
    const availableTimes = props.times.map(date =>
        <ul key={date.day} className={classes['times-list']}>
            <li className={classes.date}>
                <p>{date.day}:</p>
                <div>{date.houres.map(houre => <span key={houre}>{houre}</span>)}</div>
            </li>
        </ul>)
    return (
        <AltCard
            title="Available Times"
            info={availableTimes}
        />
    )
};

export default AvailableDates;