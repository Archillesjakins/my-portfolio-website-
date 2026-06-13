import { Suspense, lazy, useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import TrustBar from '@/components/TrustBar';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const About = lazy(() => import('@/components/About'));
const Skills = lazy(() => import('@/components/Skills'));
const Projects = lazy(() => import('@/components/Projects'));
const Experience = lazy(() => import('@/components/Exprience'));
const Blog = lazy(() => import('@/components/Blog'));
const Analytics = lazy(() => import('@/components/Analytics'));
const FileStorage = lazy(() => import('@/components/FileStorage'));
const Contact = lazy(() => import('@/components/Contact'));
const ResumeChatbot = lazy(() => import('@/components/ResumeChatbot'));
const WhatISolve = lazy(() => import('@/components/WhatISolve'));
const HowItWorks = lazy(() => import('@/components/HowItWorks'));

const Index = () => {
  const [profileTab, setProfileTab] = useState('about');
  const [insightsTab, setInsightsTab] = useState('blog');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#about' || hash === '#skills' || hash === '#experience') {
        setProfileTab(hash.substring(1));
      } else if (hash === '#blog' || hash === '#storage' || hash === '#analytics') {
        setInsightsTab(hash === '#storage' ? 'resources' : hash.substring(1));
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Execute immediately on load to handle deep links
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="relative pt-16">
        {/* Home Section */}
        <section id="home">
          <Hero />
        </section>

        {/* Trust Bar */}
        <TrustBar />

        {/* Who Is This For — Industry Solutions */}
        <section id="solutions">
          <Suspense fallback={<div className="py-20 text-center text-gray-500">Loading...</div>}>
            <WhatISolve />
          </Suspense>
        </section>

        {/* How I Work With You */}
        <Suspense fallback={<div className="py-10" />}>
          <HowItWorks />
        </Suspense>

        {/* Projects Section - Always expanded as it is the core showcase */}
        <section id="projects">
          <Suspense fallback={<div className="py-20 text-center text-gray-500">Loading projects...</div>}>
            <Projects />
          </Suspense>
        </section>

        {/* Profile & Journey Tabbed Section */}
        <section className="relative border-t border-zinc-900 bg-black">
          <div id="about" className="absolute -top-20"></div>
          <div id="skills" className="absolute -top-20"></div>
          <div id="experience" className="absolute -top-20"></div>
          
          <Tabs value={profileTab} onValueChange={setProfileTab} className="w-full">
            <div className="bg-zinc-950/80 border-b border-zinc-900 py-6 sticky top-16 z-30 backdrop-blur-md">
              <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <h3 className="text-xl font-bold text-white tracking-wide font-mono flex items-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-500 mr-2.5 animate-pulse"></span>
                  PROFILE & JOURNEY
                </h3>
                <TabsList className="bg-zinc-900/60 border border-zinc-800 p-1 rounded-xl h-11">
                  <TabsTrigger value="about" className="px-5 rounded-lg text-xs text-gray-400 data-[state=active]:bg-purple-600 data-[state=active]:text-white font-semibold transition-all">
                    About Me
                  </TabsTrigger>
                  <TabsTrigger value="skills" className="px-5 rounded-lg text-xs text-gray-400 data-[state=active]:bg-purple-600 data-[state=active]:text-white font-semibold transition-all">
                    Technical Arsenal
                  </TabsTrigger>
                  <TabsTrigger value="experience" className="px-5 rounded-lg text-xs text-gray-400 data-[state=active]:bg-purple-600 data-[state=active]:text-white font-semibold transition-all">
                    Professional Journey
                  </TabsTrigger>
                </TabsList>
              </div>
            </div>
            
            <Suspense fallback={<div className="py-20 text-center text-gray-500">Loading profile...</div>}>
              <TabsContent value="about" className="mt-0 focus-visible:ring-0 focus-visible:ring-offset-0">
                <About />
              </TabsContent>
              <TabsContent value="skills" className="mt-0 focus-visible:ring-0 focus-visible:ring-offset-0">
                <Skills />
              </TabsContent>
              <TabsContent value="experience" className="mt-0 focus-visible:ring-0 focus-visible:ring-offset-0">
                <Experience />
              </TabsContent>
            </Suspense>
          </Tabs>
        </section>

        {/* Insights & Resources Tabbed Section */}
        <section className="relative border-t border-zinc-900 bg-black">
          <div id="blog" className="absolute -top-20"></div>
          <div id="storage" className="absolute -top-20"></div>
          <div id="analytics" className="absolute -top-20"></div>
          
          <Tabs value={insightsTab} onValueChange={setInsightsTab} className="w-full">
            <div className="bg-zinc-950/80 border-b border-zinc-900 py-6 sticky top-16 z-30 backdrop-blur-md">
              <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <h3 className="text-xl font-bold text-white tracking-wide font-mono flex items-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500 mr-2.5 animate-pulse"></span>
                  INSIGHTS & RESOURCES
                </h3>
                <TabsList className="bg-zinc-900/60 border border-zinc-800 p-1 rounded-xl h-11">
                  <TabsTrigger value="blog" className="px-5 rounded-lg text-xs text-gray-400 data-[state=active]:bg-blue-600 data-[state=active]:text-white font-semibold transition-all">
                    Technical Blog
                  </TabsTrigger>
                  <TabsTrigger value="resources" className="px-5 rounded-lg text-xs text-gray-400 data-[state=active]:bg-blue-600 data-[state=active]:text-white font-semibold transition-all">
                    Resource Library
                  </TabsTrigger>
                  <TabsTrigger value="analytics" className="px-5 rounded-lg text-xs text-gray-400 data-[state=active]:bg-blue-600 data-[state=active]:text-white font-semibold transition-all">
                    Portfolio Analytics
                  </TabsTrigger>
                </TabsList>
              </div>
            </div>
            
            <Suspense fallback={<div className="py-20 text-center text-gray-500">Loading resources...</div>}>
              <TabsContent value="blog" className="mt-0 focus-visible:ring-0 focus-visible:ring-offset-0">
                <Blog />
              </TabsContent>
              <TabsContent value="resources" className="mt-0 focus-visible:ring-0 focus-visible:ring-offset-0">
                <FileStorage />
              </TabsContent>
              <TabsContent value="analytics" className="mt-0 focus-visible:ring-0 focus-visible:ring-offset-0">
                <Analytics />
              </TabsContent>
            </Suspense>
          </Tabs>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Suspense fallback={<div className="py-20 text-center text-gray-500">Loading contact...</div>}>
            <Contact />
          </Suspense>
        </section>
      </main>
      
      <Suspense fallback={null}>
        <ResumeChatbot />
      </Suspense>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Archilles Jacob
              </h3>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Building AI-powered businesses across Africa & Europe.
                Custom agents, workflow automation, and full-stack systems — no tech team needed.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#solutions" className="hover:text-white transition-colors">Who It's For</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
                <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">What I Build</h4>
              <ul className="space-y-2 text-gray-400">
                <li>AI Agents & Chatbots</li>
                <li>Workflow Automation</li>
                <li>Clinical AI Systems</li>
                <li>Full-Stack Web Apps</li>
                <li>Business Intelligence</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2026 Archilles Jacob · Built with React, TypeScript & Tailwind CSS · 🇬🇭 Ghana
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
