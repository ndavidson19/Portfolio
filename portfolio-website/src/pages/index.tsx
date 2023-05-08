import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { About } from '../components/About';
import { Projects } from '../components/Projects';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
