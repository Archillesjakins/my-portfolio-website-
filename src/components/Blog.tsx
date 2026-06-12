import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { blogPosts } from '@/data/blog';

const Blog = () => {
  const { toast } = useToast();

  const handleViewAllArticles = () => {
    // Copy search text to clipboard
    navigator.clipboard.writeText("Machine learning Pipeline and Agentic AI");
    
    // Show toast notification first
    toast({
      title: "Search Text Copied!",
      description: "Please paste the copied text in the search box of the opened page",
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

    // Add a delay before opening the new tab
    setTimeout(() => {
      window.open("https://newsai-app.vercel.app", "_blank");
    }, 2000); // 2 second delay
  };



  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-white">Technical Blog</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400">Insights, tutorials, and thoughts on emerging technologies</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article key={index} className="group bg-black rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-black/30 backdrop-blur-sm text-white border-white/20">
                    {post.category}
                  </Badge>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center text-sm text-gray-400 mb-4 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3">{post.excerpt}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs bg-gray-800 border-gray-700 text-gray-300 hover:border-gray-500">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full bg-transparent border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-500 group-hover:border-purple-500 group-hover:text-purple-400"
                  onClick={() => window.open(post.link, '_blank')}
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            onClick={handleViewAllArticles}
          >
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;