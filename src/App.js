import './App.css';
import Header from './components/layout/Header';
import Hero from './components/Hero/Hero';
import Features from './components/features/Features';
import Doctors from './components/doctors/Doctors';
import About from './components/about/About';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Doctors />
      <About />
    </>
  );
}

export default App;
