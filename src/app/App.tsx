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
import { GravityController } from './components/GravityController';
import { EasterEggs } from './components/EasterEggs';

export default function App() {
  return (
    <div className="bg-[#060612] min-h-screen text-white relative overflow-x-hidden">
      <GravityController />
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