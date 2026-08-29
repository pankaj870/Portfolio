import { Hero } from './components/Hero';
import { BackendDiagram } from './components/BackendDiagram';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { DeveloperStats } from './components/DeveloperStats';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { EasterEggs } from './components/EasterEggs';
import { StarsBackground } from '@/components/animate-ui/components/backgrounds/stars';

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white relative overflow-x-hidden">
      <StarsBackground
        starColor="#FFFFFF"
        speed={70}
        factor={0.035}
        pointerEvents={false}
        className="fixed inset-0 z-0"
      />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <BackendDiagram />
        <About />
        <Skills />
        <Experience />
        <DeveloperStats />
        <Projects />
        <Education />
        <Contact />
      </div>
      <EasterEggs />
    </div>
  );
}
