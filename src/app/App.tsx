import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { AnimatedBackground } from './components/AnimatedBackground';

export default function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white relative overflow-x-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </div>
    </div>
  );
}