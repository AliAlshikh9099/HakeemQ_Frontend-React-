import classes from './BookingForm.module.css';

const BookingForm = (props) => {
    const submitHandler = (event) => {
        event.preventDefault();
    }
    return (
        <form onSubmit={submitHandler}>
            <div className={classes['input-form']}>
                <div className={classes.control}>
                    <label htmlFor='name'>Name</label>
                    <input type="text" id="name" name="name"/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='email'>E-mail</label>
                    <input type="email" id="email" name="email"/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='phone'>Phone</label>
                    <input type="tel" id="phone" name="phone"/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='age'>Age</label>
                    <input type="number" id="age" name="age"/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='reason'>Booking Reason</label>
                    <textarea name='reason' id='reason'></textarea>
                </div>
            </div>
            <div className={classes.action}>
                <button className={classes.button}>Confirm</button>
                <button onClick={props.onClose} type="button" className={classes['button--alt']}>Close</button>
            </div>
        </form>
    )
}

export default BookingForm;