import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Send } from 'lucide-react';

const About = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form data
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error('Please fill in all fields');
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      // Create mailto link with form data
      const subject = `Message from ${formData.name}`;
      const body = `Name: ${formData.name}%0AEmail: ${formData.email}%0A%0AMessage:%0A${formData.message}`;
      const mailtoLink = `mailto:jakingsarchly@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Show success toast notification
      toast({
        title: "Preparing Email",
        description: "Opening your email client...",
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

      // Add a small delay before opening email client
      setTimeout(() => {
        // Create and click a temporary link element
        const link = document.createElement('a');
        link.href = mailtoLink;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Reset form after sending
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);

        // Show confirmation toast
        toast({
          title: "Email Client Opened",
          description: "Please review and send your message",
          duration: 3000,
          className: "bg-gradient-to-r from-emerald-900 to-black border border-emerald-800",
          style: {
            background: "linear-gradient(to right, rgba(6, 78, 59, 0.95), rgba(0, 0, 0, 0.95))",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(6, 95, 70, 0.3)",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            color: "#ffffff",
          },
        });
      }, 2000);

    } catch (error) {
      // Show error toast notification
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        duration: 3000,
        className: "bg-gradient-to-r from-red-900 to-black border border-red-800",
        style: {
          background: "linear-gradient(to right, rgba(127, 29, 29, 0.95), rgba(0, 0, 0, 0.95))",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(153, 27, 27, 0.3)",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          color: "#ffffff",
        },
      });
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400">Innovative problem solver with a passion for AI and technology</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              {/* <p className="text-lg text-gray-300 leading-relaxed">
                I'm a highly motivated and versatile engineer with robust expertise across Data Science, AI Engineering, and Software Development. Based in Accra, Ghana, I specialize in designing, developing, and deploying innovative solutions that bridge the gap between cutting-edge AI research and practical applications.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My passion lies in creating intelligent systems that solve real-world problems, from real-time AI applications and sophisticated machine learning models to scalable web platforms that enhance user experiences.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With a comprehensive technical skill set spanning multiple domains, I'm eager to leverage emerging technologies to drive impactful projects and push the boundaries of what's possible in AI and software development.
              </p> */}
              
              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">100%</div>
                  <div className="text-sm text-gray-400">Client Satisfaction</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-4 h-4 bg-purple-500 rounded-full mr-3"></div>
                  <h3 className="text-xl font-semibold text-white">Location</h3>
                </div>
                <p className="text-gray-300">Open to all location across</p>
              </div>
              
              <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                  <h3 className="text-xl font-semibold text-white">Contact</h3>
                </div>
                <p className="text-gray-300">jakingsarchly@gmail.com</p>
              </div>
              
              <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-4 h-4 bg-emerald-500 rounded-full mr-3"></div>
                  <h3 className="text-xl font-semibold text-white">Specializations</h3>
                </div>
                <p className="text-gray-300">AI Engineering • Data Science • Full-Stack Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
  