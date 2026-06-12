import { Suspense, lazy } from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';

const About = lazy(() => import('@/components/About'));
const Skills = lazy(() => import('@/components/Skills'));
const Projects = lazy(() => import('@/components/Projects'));
const Experience = lazy(() => import('@/components/Exprience'));
const Blog = lazy(() => import('@/components/Blog'));
const Analytics = lazy(() => import('@/components/Analytics'));
const FileStorage = lazy(() => import('@/components/FileStorage'));
const Contact = lazy(() => import('@/components/Contact'));

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="relative pt-16">
        <section id="home">
          <Hero />
        </section>
        
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-gray-500">Loading sections...</div>}>
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="blog">
            <Blog />
          </section>
          <section id="analytics">
            <Analytics />
          </section>
          <section id="storage">
            <FileStorage />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </Suspense>
      </main>
      
      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Archilles Jacob
              </h3>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Transforming ideas into intelligent solutions through cutting-edge AI, 
                machine learning, and full-stack development.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
                <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>AI Engineering</li>
                <li>Data Science</li>
                <li>Full-Stack Development</li>
                <li>Technical Consulting</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Archilles Jacob. Built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
