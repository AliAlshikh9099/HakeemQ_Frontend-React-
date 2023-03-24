import classes from './Hero.module.css';
import Text from './Text';
import Image from './Image';

const Hero = () => {
    return (
        <div className={classes.hero}>
            <div className={`container ${classes.content}`} style={{width: '100%'}}>
                <Text />
                <Image />
            </div>
        </div>
    )
}

export default Hero;