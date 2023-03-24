import classes from './DoctorItem.module.css';


const DoctorItem = (props) => {
    return (
        <div className={classes['doctor-item']}>
            <h1>Dr. {props.name}</h1>
            <p>{props.spz}</p>
        </div>
    )
}

export default DoctorItem;