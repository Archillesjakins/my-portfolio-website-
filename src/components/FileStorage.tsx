import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Download, Calendar, FileImage, File, Folder } from 'lucide-react';

const FileStorage = () => {
  const files = [
    {
      name: "Archilles_Jacob_Resume_2024.pdf",
      type: "PDF",
      size: "2.4 MB",
      downloads: 456,
      lastModified: "2024-01-15",
      category: "Documents",
      icon: FileText,
      color: "from-red-500 to-red-600"
    },
    {
      name: "Portfolio_Case_Study_HealthTranscribe.pdf",
      type: "PDF",
      size: "5.7 MB",
      downloads: 231,
      lastModified: "2024-01-10",
      category: "Case Studies",
      icon: FileText,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "AI_Project_Presentations.zip",
      type: "ZIP",
      size: "15.2 MB",
      downloads: 89,
      lastModified: "2024-01-08",
      category: "Presentations",
      icon: Folder,
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Technical_Certifications.pdf",
      type: "PDF",
      size: "1.8 MB",
      downloads: 167,
      lastModified: "2024-01-05",
      category: "Certificates",
      icon: FileText,
      color: "from-emerald-500 to-emerald-600"
    },
    {
      name: "Code_Samples_Portfolio.zip",
      type: "ZIP",
      size: "8.9 MB",
      downloads: 342,
      lastModified: "2024-01-03",
      category: "Code",
      icon: Folder,
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "Project_Screenshots.zip",
      type: "ZIP",
      size: "12.1 MB",
      downloads: 124,
      lastModified: "2023-12-28",
      category: "Images",
      icon: FileImage,
      color: "from-pink-500 to-pink-600"
    }
  ];

  const getFileIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'pdf':
        return FileText;
      case 'zip':
        return Folder;
      case 'jpg':
      case 'png':
        return FileImage;
      default:
        return File;
    }
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-white">Resource Library</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400">Download resumes, case studies, and project resources</p>
        </div>
        
        {/* Storage Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-black p-6 rounded-xl border border-gray-800">
            <div className="text-2xl font-bold text-white mb-2">6</div>
            <div className="text-gray-400 text-sm">Total Files</div>
          </div>
          <div className="bg-black p-6 rounded-xl border border-gray-800">
            <div className="text-2xl font-bold text-white mb-2">46.1 MB</div>
            <div className="text-gray-400 text-sm">Storage Used</div>
          </div>
          <div className="bg-black p-6 rounded-xl border border-gray-800">
            <div className="text-2xl font-bold text-white mb-2">1,409</div>
            <div className="text-gray-400 text-sm">Total Downloads</div>
          </div>
          <div className="bg-black p-6 rounded-xl border border-gray-800">
            <div className="text-2xl font-bold text-white mb-2">5</div>
            <div className="text-gray-400 text-sm">Categories</div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {files.map((file, index) => {
            const IconComponent = file.icon;
            return (
              <div key={index} className="group bg-black p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${file.color}`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <Badge variant="outline" className="bg-gray-800 border-gray-700 text-gray-300">
                    {file.type}
                  </Badge>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {file.name}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Size:</span>
                    <span className="text-gray-300">{file.size}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Downloads:</span>
                    <span className="text-emerald-400 font-medium">{file.downloads}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Category:</span>
                    <span className="text-gray-300">{file.category}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Modified:</span>
                    <span className="text-gray-300 flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(file.lastModified).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            );
          })}
        </div>
        
        {/* Upload Section */}
        <div className="mt-16 text-center">
          <div className="bg-black p-8 rounded-2xl border border-gray-800 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Need a specific document?</h3>
            <p className="text-gray-400 mb-6">
              If you're looking for additional project documentation, code samples, or certificates, 
              feel free to reach out and I'll be happy to share them with you.
            </p>
            <Button size="lg" variant="outline" className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-400">
              Request Files
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FileStorage;
