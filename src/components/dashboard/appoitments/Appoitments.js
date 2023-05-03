import classes from './Appoitments.module.css';
import AppoitmentCard from './AppoitmentCard';

const Appoitments = () => {
    return (
        <div className={`container ${classes.appoitments}`}>
            <div className={classes.header}>
                <div className={classes.title}>
                    <h2>Appoitments</h2>
                    <p>Your appoitments this week</p>
                </div>
                <div className={classes.schedule}>
                    <label htmlFor="schedule">Schedule</label>
                    <select id="schedule">
                        <option value="Monday">Monday</option>
                        <option value="Sunday">Sunday</option>
                        <option value="Tuseday">Tuseday</option>
                        <option value="Wendsday">Wendsday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                    </select>
                </div>
            </div>
            <div className={classes['app-cards']}>
                <AppoitmentCard />
                <AppoitmentCard />
                <AppoitmentCard />
                <AppoitmentCard />
            </div>
        </div>
    )
};

export default Appoitments;