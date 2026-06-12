export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
  link: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Designing Production-Ready Agentic Infrastructure with Claude",
    excerpt: "Deep dive into the architectural principles of modern AI agents, exploring Anthropic's approach to decoupling the stateless 'brain' from ephemeral 'hands' and execution harnesses.",
    date: "2024-06-12",
    readTime: "10 min read",
    category: "AI Engineering",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop",
    tags: ["Agentic AI", "Infrastructure", "Claude"],
    link: "https://medium.com/search?q=Claude+Agentic+Infrastructure"
  },
  {
    title: "Overcoming Context Limits: Long-Term Memory Strategies in LangChain",
    excerpt: "How to build persistent AI memory architectures using Vector Databases, RAG, and LangGraph to maintain context across sessions without hitting token limits.",
    date: "2024-05-28",
    readTime: "12 min read",
    category: "Data Science",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
    tags: ["LangChain", "RAG", "Vector DB"],
    link: "https://medium.com/search?q=LangChain+Long-Term+Memory+Vector+Database"
  },
  {
    title: "The Future of Large Language Models in Enterprise Applications",
    excerpt: "Exploring how LLMs are revolutionizing business processes and the challenges of implementing them at scale.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "AI Integration",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    tags: ["LLM", "Enterprise", "AI"],
    link: "https://medium.com/search?q=LLM+Enterprise+Applications"
  }
];
