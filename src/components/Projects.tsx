import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ArrowUpRight, Brain, Globe, ShoppingCart, Database, Newspaper, Leaf } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Projects = () => {
  const { toast } = useToast();

  const handleGithubClick = (url: string) => {
    if (url) {
      window.open(url, '_blank');
      toast({
        title: "GitHub Repository",
        description: "Opening repository in a new tab...",
        duration: 3000,
      });
    } else {
      toast({
        title: "Repository Unavailable",
        description: "This repository is currently private or not available.",
        duration: 3000,
      });
    }
  };

  const handleDemoClick = (url: string) => {
    if (url) {
      window.open(url, '_blank');
      toast({
        title: "Live Demo",
        description: "Opening demo in a new tab...",
        duration: 3000,
      });
    } else {
      toast({
        title: "Demo Unavailable",
        description: "This project's demo is currently not available.",
        duration: 3000,
      });
    }
  };

  const projects = [
    {
      title: "Health-Transcribe",
      description: "Real-time, multilingual AI web-based application for translation leveraging Gemini and Google API for contextual accuracy.",
      technologies: ["JavaScript", "Gemini API", "Google API", "Real-time Processing"],
      category: "AI Engineering",
      impact: "Enables real-time, context-aware multilingual communication",
      gradient: "from-blue-500 to-cyan-600",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
      githubUrl: "https://github.com/Archillesjakins/Health-Transcribe",
      demoUrl: "https://health-transcribe.vercel.app"
    },
    {
      title: "ArchieAI React",
      description: "Full-fledged LLM AI Assistant with capabilities for web scraping, document analysis, code generation, and research paper analysis.",
      technologies: ["TypeScript", "React", "Gemini Model", "API Integration"],
      category: "AI Engineering",
      impact: "Comprehensive AI assistant for multiple professional tasks",
      gradient: "from-purple-500 to-pink-600",
      icon: Brain,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      githubUrl: "https://github.com/Archillesjakins/ArchieAI-React",
      demoUrl: "https://archie-ai.vercel.app"
    },
    {
      title: "E-commerce Recommendation LLM System",
      description: "AI-driven e-commerce application combining Tinder-like interface with personalized recommendations using machine learning.",
      technologies: ["Python", "Gemini Embeddings", "ML Models", "Recommendation Systems"],
      category: "Data Science & AI",
      impact: "Enhanced user engagement and product discovery",
      gradient: "from-emerald-500 to-teal-600",
      icon: ShoppingCart,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f9da2c?w=800&h=600&fit=crop",
      githubUrl: "https://github.com/Archillesjakins/E-commerce-Recommendation-LLM",
      demoUrl: ""
    },
    {
      title: "E-commerce Management System",
      description: "Complete order management system enabling customers to place orders, view history, and get comprehensive summaries.",
      technologies: ["Python", "SQLite", "Database Design", "CRUD Operations"],
      category: "Software Engineering",
      impact: "Streamlined order processes for online retail",
      gradient: "from-orange-500 to-red-600",
      icon: Database,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      githubUrl: "https://github.com/Archillesjakins/E-commerce-Management-System",
      demoUrl: ""
    },
    {
      title: "News Search Engine",
      description: "A web application for summarizing and analyzing news articles with keyword-based content filtering.",
      technologies: ["Python", "Flask", "NLP", "Web Scraping"],
      category: "Full-Stack Development",
      impact: "Facilitates quick information consumption",
      gradient: "from-indigo-500 to-blue-600",
      icon: Newspaper,
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop",
      githubUrl: "https://github.com/Archillesjakins/News-Search-Engine",
      demoUrl: "https://newsai-app.vercel.app"
    },
    {
      title: "Crop Disease Detection",
      description: "YOLO model for agricultural crop disease detection with pre-training from local datasets and multi-batching capabilities.",
      technologies: ["Python", "YOLO", "OpenCV", "Computer Vision"],
      category: "AI Engineering",
      impact: "Improved crop health management for agriculture",
      gradient: "from-green-500 to-emerald-600",
      icon: Leaf,
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=600&fit=crop",
      githubUrl: "https://github.com/Archillesjakins/Crop-Disease-Detection",
      demoUrl: ""
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-white">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400">Innovative solutions across AI, Data Science, and Software Engineering</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div key={index} className="group bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-60 transition-opacity duration-300`}></div>
                  <div className="absolute top-4 left-4">
                    <div className="p-3 bg-black/30 backdrop-blur-sm rounded-full">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-black/30 backdrop-blur-sm text-white border-white/20">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3">{project.description}</p>
                  
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-300 mb-2">Impact:</p>
                    <p className="text-sm text-gray-400 italic">{project.impact}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs bg-gray-800 border-gray-700 text-gray-300 hover:border-gray-500">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 bg-transparent border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-500"
                      onClick={() => handleGithubClick(project.githubUrl)}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      onClick={() => handleDemoClick(project.demoUrl)}
                    >
                      <ArrowUpRight className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
