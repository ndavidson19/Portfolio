import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { Research } from '../components/Research';
import { AboutMe } from '../components/AboutMe';
import { Contact } from '../components/Contact';
import { handleClientScriptLoad } from 'next/script';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContactClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Header />
      <main>
        <About onContactClick={handleContactClick}/>
        {isModalOpen && (
        <Contact isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        )}        
        <AboutMe />
        <Projects />
        < Research/>
      </main>
      <Footer />
    </>
  );
}
