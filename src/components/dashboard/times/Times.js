import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import classes from './Times.module.css';
import { useState } from 'react';

const Times = () => {
    const [isEdit, setIsEdit] = useState(false);

    const editHandler = () => {
        setIsEdit(true);
    }

    const cancelEditionHandler = () => {
        setIsEdit(false);
    }

    return (
        <div className={`container ${classes.times}`}>
            <div className={classes.title}>
                <h2>Available Times</h2>
                <p>Your schedule</p>
            </div>
            <div className={classes.content}>
                <div className={`${classes['schedule-card']} ${classes.current}`}>
                    <h4>This Week</h4>
                    <div className={classes['card-content']}>
                        <div>
                            <h6>Monday</h6>
                            <p>9:30 - 11:30</p>
                        </div>
                        <div>
                            <h6>Sunday</h6>
                            <p>9:30 - 11:30</p>
                        </div>
                        <div>
                            <h6>Tuseday</h6>
                            <p>9:30 - 11:30</p>
                        </div>
                        <div>
                            <h6>Wendsday</h6>
                            <p>9:30 - 11:30</p>
                        </div>
                        <div>
                            <h6>Thursday</h6>
                            <p>9:30 - 11:30</p>
                        </div>
                        <div>
                            <h6>Friday</h6>
                            <p>9:30 - 11:30</p>
                        </div>
                        <div>
                            <h6>Saturday</h6>
                            <p>9:30 - 11:30</p>
                        </div>
                    </div>
                </div>
                <div className={`${classes['schedule-card']} ${classes.next}`}>
                    <div className={classes.header}>
                        <h4>Next Week</h4>
                        <FontAwesomeIcon
                            className={classes.icon}
                            icon={faPen}
                            onClick={editHandler}
                        />
                    </div>
                    <div className={classes['card-content']}>
                        <div>
                            <h6>Monday</h6>
                            {!isEdit && <p>9:30 - 11:30</p>}
                            {isEdit && <div className={classes.control}>
                                <input value="9:30" type="text" />
                                <span>to</span>
                                <input value="11:30" type="text" />
                            </div>}
                        </div>
                        <div>
                            <h6>Sunday</h6>
                            {!isEdit && <p>9:30 - 11:30</p>}
                            {isEdit && <div className={classes.control}>
                                <input value="9:30" type="text" />
                                <span>to</span>
                                <input value="11:30" type="text" />
                            </div>}
                        </div>
                        <div>
                            <h6>Tuseday</h6>
                            {!isEdit && <p>9:30 - 11:30</p>}
                            {isEdit && <div className={classes.control}>
                                <input value="9:30" type="text" />
                                <span>to</span>
                                <input value="11:30" type="text" />
                            </div>}
                        </div>
                        <div>
                            <h6>Wendsday</h6>
                            {!isEdit && <p>9:30 - 11:30</p>}
                            {isEdit && <div className={classes.control}>
                                <input value="9:30" type="text" />
                                <span>to</span>
                                <input value="11:30" type="text" />
                            </div>}
                        </div>
                        <div>
                            <h6>Thursday</h6>
                            {!isEdit && <p>9:30 - 11:30</p>}
                            {isEdit && <div className={classes.control}>
                                <input value="9:30" type="text" />
                                <span>to</span>
                                <input value="11:30" type="text" />
                            </div>}
                        </div>
                        <div>
                            <h6>Friday</h6>
                            {!isEdit && <p>9:30 - 11:30</p>}
                            {isEdit && <div className={classes.control}>
                                <input value="9:30" type="text" />
                                <span>to</span>
                                <input value="11:30" type="text" />
                            </div>}
                        </div>
                        <div>
                            <h6>Saturday</h6>
                            {!isEdit && <p>9:30 - 11:30</p>}
                            {isEdit && <div className={classes.control}>
                                <input value="9:30" type="text" />
                                <span>to</span>
                                <input value="11:30" type="text" />
                            </div>}
                        </div>
                    </div>
                    {isEdit && <div className={classes.actions}>
                        <button className={classes.button}>Save Changes</button>
                        <button onClick={cancelEditionHandler} className={classes['button-alt']}>Cancel</button>
                    </div>}
                </div>
            </div>
        </div>
    )
};

export default Times