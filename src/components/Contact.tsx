import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form data
      if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        throw new Error('Please fill in all fields');
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      // Compose WhatsApp URL
      const text = `Hello Archilles,\n\nMy name is *${formData.name}* (${formData.email}).\n\n*Subject*: ${formData.subject}\n\n*Message*:\n${formData.message}`;
      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://wa.me/233248802586?text=${encodedText}`;

      // Show success toast
      toast({
        title: "Redirecting to WhatsApp...",
        description: "Opening WhatsApp chat window...",
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

      // Open WhatsApp in a new window/tab
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        setIsSubmitting(false);
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1000);

    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "An error occurred.",
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
    <section className="py-20 bg-black text-white border-t border-zinc-900 relative overflow-hidden">
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4 border border-blue-500/20 bg-blue-500/5 rounded-full px-4 py-1.5">
            Contact
          </span>
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl text-gray-400">Ready to bring your AI and software projects to life</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 flex flex-col justify-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, innovative projects, and potential collaborations. 
                Whether you need AI solutions, workflow automation, or full-stack systems, let's connect.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-gray-400">jakingsarchly@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-emerald-500 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Location</p>
                  <p className="text-gray-400">Accra, Greater Accra Region, Ghana</p>
                </div>
              </div>
              
              <div className="flex space-x-4 pt-4">
                <a 
                  href="https://github.com/Archillesjakins" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center hover:bg-zinc-800 hover:border-zinc-700 transition-all text-gray-400 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/archilles-jacob-705695169" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center hover:bg-zinc-800 hover:border-zinc-700 transition-all text-gray-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-zinc-900/50 border border-zinc-800/80 backdrop-blur-sm p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-purple-500/5 blur-[80px] -mr-16 -mt-16 pointer-events-none" />
            <h3 className="text-2xl font-bold mb-6 text-white relative z-10">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                  <Input 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-zinc-950 border-zinc-800 text-white placeholder-gray-600 focus-visible:ring-purple-500" 
                    placeholder="Your name" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                  <Input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-zinc-950 border-zinc-800 text-white placeholder-gray-600 focus-visible:ring-purple-500" 
                    placeholder="your.email@example.com" 
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Subject</label>
                <Input 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-zinc-950 border-zinc-800 text-white placeholder-gray-600 focus-visible:ring-purple-500" 
                  placeholder="Project inquiry" 
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-zinc-950 border-zinc-800 text-white placeholder-gray-600 focus-visible:ring-purple-500 min-h-32" 
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full h-11"
              >
                <Send className="w-4 h-4 mr-2" />
                {isSubmitting ? 'Opening WhatsApp...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;