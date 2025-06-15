import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of Large Language Models in Enterprise Applications",
      excerpt: "Exploring how LLMs are revolutionizing business processes and the challenges of implementing them at scale.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "AI Engineering",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      tags: ["LLM", "Enterprise", "AI"]
    },
    {
      title: "Building Scalable Data Pipelines with Modern Python",
      excerpt: "A comprehensive guide to creating robust data processing workflows that can handle millions of records.",
      date: "2024-01-08",
      readTime: "12 min read",
      category: "Data Science",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tags: ["Python", "Data Engineering", "ETL"]
    },
    {
      title: "React Performance Optimization: From Good to Great",
      excerpt: "Advanced techniques for optimizing React applications, including code splitting, memoization, and state management.",
      date: "2024-01-01",
      readTime: "10 min read",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
      tags: ["React", "Performance", "JavaScript"]
    }
  ];

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
                
                <Button variant="outline" className="w-full bg-transparent border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-500 group-hover:border-purple-500 group-hover:text-purple-400">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;