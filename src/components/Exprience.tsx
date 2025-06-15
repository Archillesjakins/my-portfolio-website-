import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "AI Engineering & Data Science Consultant",
      company: "Freelance",
      location: "Remote",
      period: "2023 - Present",
      description: "Providing technical advisory and solution design for AI/ML projects, including feasibility studies, requirement gathering, and stakeholder communication.",
      achievements: [
        "Designed and implemented AI-driven solutions for multiple clients",
        "Specialized in LLM applications and recommendation systems",
        "Delivered end-to-end data science projects from conception to deployment"
      ]
    },
    {
      title: "Full-Stack Developer",
      company: "Independent Projects",
      location: "Accra, Ghana",
      period: "2022 - Present",
      description: "Developed comprehensive web applications using modern frameworks and technologies, focusing on user experience and scalable architecture.",
      achievements: [
        "Built multiple full-stack applications using React, Flask, and Django",
        "Implemented database solutions with SQLite, PostgreSQL, and MySQL",
        "Integrated third-party APIs and services for enhanced functionality"
      ]
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-white">Professional Journey</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400">Building innovative solutions and driving technical excellence</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-20 pb-16 last:pb-0 group">
                {/* Timeline dot */}
                <div className="absolute left-6 w-5 h-5 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-4 border-black shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
                
                <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition-all duration-300 group-hover:transform group-hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <Briefcase className="h-5 w-5 text-blue-400 mr-2" />
                        <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                          {exp.title}
                        </h3>
                      </div>
                      <p className="text-xl text-purple-400 font-semibold mb-2">{exp.company}</p>
                    </div>
                    <div className="lg:text-right mt-4 lg:mt-0 space-y-2">
                      <div className="flex items-center lg:justify-end">
                        <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                        <p className="text-gray-300 font-medium">{exp.period}</p>
                      </div>
                      <div className="flex items-center lg:justify-end">
                        <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                        <p className="text-gray-400 text-sm">{exp.location}</p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-4 flex items-center">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                      Key Achievements:
                    </h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-gray-300 flex items-start group/item hover:text-white transition-colors duration-200">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0 group-hover/item:bg-blue-400 transition-colors duration-200"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;