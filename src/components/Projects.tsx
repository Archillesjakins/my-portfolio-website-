import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ArrowUpRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { projects } from '@/data/projects';

const Projects = () => {
  const { toast } = useToast();

  const handleGithubClick = (url?: string) => {
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

  const handleDemoClick = (url?: string) => {
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

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-white">Portfolio Case Studies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400">Real-world problems solved with AI automation and robust backends</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div key={index} className="group bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10 flex flex-col">
                <div className="relative h-52 overflow-hidden shrink-0 bg-gray-950">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center`}>
                      <IconComponent className="h-16 w-16 text-white/10" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                  
                  <div className="absolute top-4 left-4 z-10">
                    <div className="p-3 bg-black/60 backdrop-blur-sm rounded-full border border-white/10">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 z-10">
                    <Badge variant="secondary" className="bg-black/60 backdrop-blur-sm text-white border-white/10">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <div className="space-y-4 mb-6 flex-1 text-sm">
                    <div>
                      <span className="font-semibold text-gray-300 block mb-1 uppercase text-xs tracking-wider font-mono">Problem</span>
                      <p className="text-gray-400 leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-300 block mb-1 uppercase text-xs tracking-wider font-mono">What I built</span>
                      <p className="text-gray-400 leading-relaxed">{project.whatIBuilt}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-300 block mb-1 uppercase text-xs tracking-wider font-mono">Tech used</span>
                      <p className="text-gray-400 leading-relaxed">{project.techUsed}</p>
                    </div>
                    <div className="bg-emerald-900/20 border border-emerald-800/30 rounded p-3 mt-4">
                      <span className="font-semibold text-emerald-400 block mb-1 uppercase text-xs tracking-wider font-mono">Result</span>
                      <p className="text-emerald-300 font-medium leading-relaxed">{project.result}</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3 mt-auto pt-6 border-t border-gray-800">
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
