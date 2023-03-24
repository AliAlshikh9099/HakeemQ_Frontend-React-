import classes from './FeatureItem.module.css';

const FeatureItem = (props) => {
    return (
        <div className={classes.feature}>
            <img src={props.icon} alt="icon" />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default FeatureItem;