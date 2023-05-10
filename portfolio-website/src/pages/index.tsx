import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { Research } from '../components/Research';
import { AboutMe } from '../components/AboutMe';
import { Contact } from '../components/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <About />
        <AboutMe />
        <Projects />
        < Research/>
        < Contact/>
      </main>
      <Footer />
    </>
  );
}
