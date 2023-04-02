import Header from '../../components/layout/Header';
import Hero from '../../components/Hero/Hero';
import Features from '../../components/features/Features';
import Doctors from '../../components/doctors/Doctors';
import About from '../../components/about/About';
import Contact from '../../components/Contact/Contact';

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Features />
            <Doctors />
            <About />
            <Contact />
        </>
    )
}

export default Home;