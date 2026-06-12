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
              <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                <p>
                  If your team is spending hours on tasks that should take minutes — processing documents, managing leads, generating reports, handling repetitive workflows — I build the systems that eliminate that. You get working automation, not a proof of concept.
                </p>
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50">
                  <h4 className="text-white font-semibold mb-4">Two examples of what that looks like in production:</h4>
                  <ul className="space-y-4">
                    <li>
                      <strong className="text-blue-400">Sono Health</strong> — a clinical AI platform I founded that reduces medical report writing, research, and diagnosis from hours to minutes. Built with a Voice-to-Narrative pipeline, real-time document search grounded in medical literature, and a FHIR-compliant backend built for healthcare data sensitivity.
                    </li>
                    <li>
                      <strong className="text-purple-400">UmukoziHR</strong> — an AI recruiting platform where I served as Founding Engineer. Autonomous agents replaced weeks of manual candidate research and shortlisting, compressing the process to minutes. 100,000+ lines of production code shipped across the platform.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-3">What I build for clients:</h4>
                  <ul className="space-y-2 list-none">
                    <li className="flex items-start"><span className="text-emerald-400 mr-2">→</span> **Custom AI Chatbots & Agents** to handle multi-step business tasks without supervision</li>
                    <li className="flex items-start"><span className="text-emerald-400 mr-2">→</span> **Smart Document Search (RAG)** — ask questions and get instant answers from your PDFs and files</li>
                    <li className="flex items-start"><span className="text-emerald-400 mr-2">→</span> **Custom Web Apps & Databases** built securely to scale with your business (FastAPI + PostgreSQL)</li>
                    <li className="flex items-start"><span className="text-emerald-400 mr-2">→</span> **App Integrations** — linking Monday.com, Gmail, Stripe, and CRM tools to sync data automatically</li>
                    <li className="flex items-start"><span className="text-emerald-400 mr-2">→</span> **Voice-to-Text Automation** — speak naturally and get structured records and files on the other end</li>
                    <li className="flex items-start"><span className="text-emerald-400 mr-2">→</span> **Secure Healthcare Systems** — patient onboarding flows and clinical report generators</li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-800">
                  <p className="mb-4">
                    <strong className="text-white">Stack:</strong> Python · FastAPI · PostgreSQL · OpenAI · Claude · Gemini · LangChain · AWS · Docker · Redis · n8n
                  </p>
                  <p className="mb-4 text-sm text-gray-400">
                    I've also consulted for European clients for 2.5 years — translating complex AI architecture into plain business outcomes for founders and executives who don't speak code.
                  </p>
                  <p className="text-white font-medium">
                    If your team is drowning in manual workflows, I'll replace them with systems that run without supervision. I don't disappear after delivery — I hand over documented, maintainable systems your team can own.
                  </p>
                </div>
              </div>
              
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
  