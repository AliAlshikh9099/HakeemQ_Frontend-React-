import DoctorForm from './DoctorForm';
import classes from './NewDoctor.module.css';
import Title from '../UI/Title';

const NewDoctor = () => {
    return (
        <div className={classes['new-doctor']}>
            <Title>Join Us</Title>
            <p style={{
                textAlign: 'center', marginTop: '10px', color: '#777'}}>Let's make healty together</p>
            <DoctorForm />
        </div>
    )
}

export default NewDoctor