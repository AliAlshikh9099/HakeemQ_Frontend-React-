import Title from '../UI/Title';
import classes from './About.module.css';

const About = () => {
    return (
        <div id='about' className={classes.about}>
            <Title>About Us</Title>
            <p style={{margin: '10px', color: '#777', textAlign: 'center'}}>Who is HakeemQ.</p>
            <div className={`container ${classes.content}`}>

            </div>
        </div>
    )
}

export default About;