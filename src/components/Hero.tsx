import { Github, Linkedin, Mail, ArrowDown, Download, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Hero = () => {
  const { toast } = useToast();

  const handleGithubClick = () => {
    // Open GitHub profile in a new tab
    window.open('https://github.com/Archillesjakins', '_blank');
    toast({
      title: "GitHub Profile",
      description: "Opening GitHub profile in a new tab...",
      duration: 3000,
      className: "bg-gradient-to-r from-gray-900 to-black border border-gray-800",
      style: {
        background: "linear-gradient(to right, rgba(17, 24, 39, 0.95), rgba(0, 0, 0, 0.95))",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(75, 85, 99, 0.3)",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        color: "#ffffff",
      },
    });
  };

  const handleLinkedInClick = () => {
    // Open LinkedIn profile in a new tab
    window.open('https://linkedin.com/in/archilles-jacob-705695169', '_blank');
    toast({
      title: "LinkedIn Profile",
      description: "Opening LinkedIn profile in a new tab...",
      duration: 3000,
      className: "bg-gradient-to-r from-gray-900 to-black border border-gray-800",
      style: {
        background: "linear-gradient(to right, rgba(17, 24, 39, 0.95), rgba(0, 0, 0, 0.95))",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(75, 85, 99, 0.3)",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        color: "#ffffff",
      },
    });
  };

  const handleEmailClick = () => {
    // Open email client with pre-filled template
    window.location.href = 'mailto:jakingsarchly@gmail.com?subject=Project%20Inquiry&body=Hello%20Archilles%2C%0A%0AI%20would%20like%20to%20discuss%20a%20potential%20project%20with%20you.%0A%0ABest%20regards%2C';
    toast({
      title: "Email Client",
      description: "Opening email client...",
      duration: 3000,
      className: "bg-gradient-to-r from-gray-900 to-black border border-gray-800",
      style: {
        background: "linear-gradient(to right, rgba(17, 24, 39, 0.95), rgba(0, 0, 0, 0.95))",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(75, 85, 99, 0.3)",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        color: "#ffffff",
      },
    });
  };

  const handleResumeClick = () => {
    // Add a delay before opening the resume
    toast({
      title: "Resume",
      description: "Opening resume in a new tab...",
      duration: 3000,
      className: "bg-gradient-to-r from-gray-900 to-black border border-gray-800",
      style: {
        background: "linear-gradient(to right, rgba(17, 24, 39, 0.95), rgba(0, 0, 0, 0.95))",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(75, 85, 99, 0.3)",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        color: "#ffffff",
      },
    });

    // Add a delay before opening the resume
    setTimeout(() => {
      window.open('https://drive.google.com/file/d/1ped-gGK8rzQzTn8HP_Dh6hbekdtX5sK0/view?usp=sharing', '_blank');
    }, 2000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-emerald-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0" style={{
        backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.02\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
      }}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Glowing avatar placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-emerald-400 p-1">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-4xl font-bold">
              AJ
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
            Archilles Jacob
          </h1>
          <div className="flex justify-center items-center space-x-4 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent flex-1 max-w-32"></div>
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              AI Engineer • Data Scientist • Full-Stack Developer
            </p>
            <div className="h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent flex-1 max-w-32"></div>
          </div>
          <p className="text-lg mb-12 text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Crafting intelligent solutions that bridge the gap between cutting-edge AI research and real-world applications. 
            Transforming complex data into actionable insights and building scalable systems that matter.
          </p>
          
          <div className="flex justify-center space-x-4 mb-12 flex-wrap gap-4">
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-transparent border-gray-600 text-white hover:bg-gray-800 hover:border-gray-400 transition-all duration-300 backdrop-blur-sm"
              onClick={handleEmailClick}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              onClick={handleGithubClick}
            >
              <Github className="mr-2 h-5 w-5" />
              View Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-transparent border-emerald-600 text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all duration-300"
              onClick={handleResumeClick}
            >
              <Download className="mr-2 h-5 w-5" />
              Resume
            </Button>
          </div>
          
          {/* Analytics Display */}
          <div className="flex justify-center items-center space-x-8 mb-12 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <BarChart3 className="h-4 w-4 text-blue-400" />
              <span>1,247 Profile Views</span>
            </div>
            <div className="w-px h-4 bg-gray-600"></div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span>Available for Projects</span>
            </div>
          </div>
          
          <div className="flex justify-center space-x-8 text-gray-400">
            <button 
              onClick={handleGithubClick}
              className="hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 p-2 rounded-full hover:bg-gray-800/50"
            >
              <Github className="h-7 w-7" />
            </button>
            <button 
              onClick={handleLinkedInClick}
              className="hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 p-2 rounded-full hover:bg-gray-800/50"
            >
              <Linkedin className="h-7 w-7" />
            </button>
            <button 
              onClick={handleEmailClick}
              className="hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/25 p-2 rounded-full hover:bg-gray-800/50"
            >
              <Mail className="h-7 w-7" />
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
