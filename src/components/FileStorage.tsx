import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Download, Calendar, FileImage, File, Folder } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const FileStorage = () => {
  const [isDownloading, setIsDownloading] = useState<string | null>(null);

  const handleEmailClick = () => {
    // Open email client with pre-filled template
    window.location.href = 'mailto:jakingsarchly@gmail.com?subject=Project%20Inquiry&body=Hello%20Archilles%2C%0A%0AI%20would%20like%20to%20request%20a%20documents%20project%20%20on...%0A%0ABest%20regards%2C';
    toast({
      title: "Email Client",
      description: "Opening email client...",
      duration: 3000,
    });
  };

  const files = [
    {
      name: "Archilles_Jacob_Resume_2024.pdf",
      type: "PDF",
      size: "2.4 MB",
      downloads: 456,
      lastModified: "2024-01-15",
      category: "Documents",
      icon: FileText,
      color: "from-red-500 to-red-600",
      file: "/src/components/ARCHILLES JACOB CV-1.pdf"
    },
    {
      name: "Portfolio_Case_Study_HealthTranscribe.pdf",
      type: "PDF",
      size: "5.7 MB",
      downloads: 231,
      lastModified: "2024-01-10",
      category: "Case Studies",
      icon: FileText,
      color: "from-blue-500 to-blue-600",
      file: "/src/components/Health Transcribe Report .pdf"
    },
    {
      name: "AI_Project_Presentations.pdf",
      type: "PDF",
      size: "15.2 MB",
      downloads: 89,
      lastModified: "2024-01-08",
      category: "Presentations",
      icon: FileText,
      color: "from-purple-500 to-purple-600",
      file: "/src/components/AI Marketing Tools.pdf"
    },
    {
      name: "Technical_Certifications.pdf",
      type: "PDF",
      size: "1.8 MB",
      downloads: 167,
      lastModified: "2024-01-05",
      category: "Certificates",
      icon: FileText,
      color: "from-emerald-500 to-emerald-600",
      file: null,
      comingSoon: true
    },
    {
      name: "Code_Samples_Portfolio.zip",
      type: "ZIP",
      size: "8.9 MB",
      downloads: 342,
      lastModified: "2024-01-03",
      category: "Code",
      icon: Folder,
      color: "from-orange-500 to-orange-600",
      file: null,
      comingSoon: true
    },
    {
      name: "Project_Screenshots.zip",
      type: "ZIP",
      size: "12.1 MB",
      downloads: 124,
      lastModified: "2023-12-28",
      category: "Images",
      icon: FileImage,
      color: "from-pink-500 to-pink-600",
      file: null,
      comingSoon: true
    }
  ];

  const handleDownload = async (file: string, fileName: string) => {
    try {
      setIsDownloading(fileName);
      const response = await fetch(file);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading file:', error);
    } finally {
      setIsDownloading(null);
    }
  };

  return (
    <section className="py-12 md:py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white">Resource Library</h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4 md:mb-6"></div>
          <p className="text-lg md:text-xl text-gray-400">Download resumes, case studies, and project resources</p>
        </div>
        
        {/* Storage Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          <div className="bg-black p-4 md:p-6 rounded-xl border border-gray-800">
            <div className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">6</div>
            <div className="text-gray-400 text-xs md:text-sm">Total Files</div>
          </div>
          <div className="bg-black p-4 md:p-6 rounded-xl border border-gray-800">
            <div className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">46.1 MB</div>
            <div className="text-gray-400 text-xs md:text-sm">Storage Used</div>
          </div>
          <div className="bg-black p-4 md:p-6 rounded-xl border border-gray-800">
            <div className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">1,409</div>
            <div className="text-gray-400 text-xs md:text-sm">Total Downloads</div>
          </div>
          <div className="bg-black p-4 md:p-6 rounded-xl border border-gray-800">
            <div className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">5</div>
            <div className="text-gray-400 text-xs md:text-sm">Categories</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {files.map((file, index) => {
            const IconComponent = file.icon;
            return (
              <div 
                key={index} 
                className={cn(
                  "group bg-black p-6 md:p-8 rounded-2xl border border-gray-800 transition-all duration-300",
                  file.file ? "hover:border-gray-600 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10" : "opacity-75"
                )}
              >
                <div className="flex items-start justify-between mb-4 md:mb-6">
                  <div className={`p-3 md:p-4 rounded-2xl bg-gradient-to-br ${file.color}`}>
                    <IconComponent className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <Badge variant="outline" className="bg-gray-800 border-gray-700 text-gray-300">
                    {file.type}
                  </Badge>
                </div>
                
                <h3 className="text-base md:text-lg font-bold text-white mb-2 md:mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {file.name}
                </h3>
                
                <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                  <div className="flex justify-between text-xs md:text-sm">
                    <span className="text-gray-400">Size:</span>
                    <span className="text-gray-300">{file.size}</span>
                  </div>
                  <div className="flex justify-between text-xs md:text-sm">
                    <span className="text-gray-400">Downloads:</span>
                    <span className="text-emerald-400 font-medium">{file.downloads}</span>
                  </div>
                  <div className="flex justify-between text-xs md:text-sm">
                    <span className="text-gray-400">Category:</span>
                    <span className="text-gray-300">{file.category}</span>
                  </div>
                  <div className="flex justify-between text-xs md:text-sm">
                    <span className="text-gray-400">Modified:</span>
                    <span className="text-gray-300 flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(file.lastModified).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                
                {file.file ? (
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                    onClick={() => handleDownload(file.file!, file.name)}
                    disabled={isDownloading === file.name}
                  >
                    {isDownloading === file.name ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Downloading...
                      </span>
                    ) : (
                      <>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </>
                    )}
                  </Button>
                ) : (
                  <Button 
                    className="w-full bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-300 transition-all duration-300"
                    disabled
                  >
                    Coming Soon
                  </Button>
                )}
              </div>
            );
          })}
        </div>
        
        {/* Upload Section */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="bg-black p-6 md:p-8 rounded-2xl border border-gray-800 max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Need a specific document?</h3>
            <p className="text-gray-400 mb-4 md:mb-6 text-sm md:text-base">
              If you're looking for additional project documentation, code samples, or certificates, 
              feel free to reach out and I'll be happy to share them with you.
            </p>
            <Button size="lg" variant="outline" className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-400" onClick={handleEmailClick}>
              Request Files
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FileStorage;
