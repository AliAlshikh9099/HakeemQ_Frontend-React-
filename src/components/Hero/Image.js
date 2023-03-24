import heroImg from '../../assets/hero.png';
import classes from './Image.module.css';

const Image = () => {
    return <div className={classes.image}><img alt="doctor" src={heroImg}/></div>
}

export default Image;