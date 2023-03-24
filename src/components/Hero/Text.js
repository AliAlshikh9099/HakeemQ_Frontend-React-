import classes from './Text.module.css'

const Text = () => {
    return (
        <div className={classes.text}>
            <h1>Consult a doctor anytime, anywhere by <span>video call</span></h1>
            <p>Tals with a doctor using our highly secured and privacy, end-to-end encrypted video call, easy to use.</p>
            <button>Get started</button>
        </div>
    )
}

export default Text;