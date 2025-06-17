import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with environment variable
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

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

  const handleSubmit = async (e: React.FormEvent) => {
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

      // Show preparing toast
      toast({
        title: "Sending Message",
        description: "Please wait while we send your message...",
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

      // Prepare email template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: "Archilles Jacob",
        to_email: "jakingsarchly@gmail.com"
      };

      // Send email using EmailJS with environment variables
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams
      );

      // Reset form after successful sending
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);

      // Show success toast
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        duration: 5000,
        className: "bg-gradient-to-r from-emerald-900 to-black border border-emerald-800",
        style: {
          background: "linear-gradient(to right, rgba(6, 78, 59, 0.95), rgba(0, 0, 0, 0.95))",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(6, 95, 70, 0.3)",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          color: "#ffffff",
        },
      });

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
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl text-slate-400">Ready to bring your AI and software projects to life</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, innovative projects, and potential collaborations. 
                Whether you need AI solutions, data science expertise, or full-stack development, let's connect.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-slate-400">jakingsarchly@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-slate-400">Accra, Greater Accra Region, Ghana</p>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-8">
                <a href="https://github.com/Archillesjakins" className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://linkedin.com/in/archilles-jacob-705695169" className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-slate-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-slate-700 border-slate-600 text-white" 
                    placeholder="Your name" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-slate-700 border-slate-600 text-white" 
                    placeholder="your.email@example.com" 
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-slate-700 border-slate-600 text-white" 
                  placeholder="Project inquiry" 
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-slate-700 border-slate-600 text-white min-h-32" 
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                <Send className="w-4 h-4 mr-2" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;