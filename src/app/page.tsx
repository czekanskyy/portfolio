import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
