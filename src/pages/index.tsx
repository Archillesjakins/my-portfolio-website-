import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Exprience';
import Blog from '@/components/Blog';
import Analytics from '@/components/Analytics';
import FileStorage from '@/components/FileStorage';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Blog />
      <Analytics />
      <FileStorage />
      <Contact />
      
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
