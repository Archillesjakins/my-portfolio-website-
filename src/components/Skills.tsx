import { Code, Database, Brain, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "Java", level: 75 },
        { name: "HTML/CSS", level: 90 }
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Data Science & ML",
      icon: Database,
      skills: [
        { name: "Pandas/NumPy", level: 95 },
        { name: "Scikit-learn", level: 90 },
        { name: "Matplotlib/Seaborn", level: 85 },
        { name: "NLP (SpaCy/NLTK)", level: 80 }
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "AI Engineering",
      icon: Brain,
      skills: [
        { name: "TensorFlow/PyTorch", level: 85 },
        { name: "Hugging Face", level: 80 },
        { name: "OpenCV", level: 75 },
        { name: "LLMs & RAG", level: 90 }
      ],
      color: "from-emerald-500 to-emerald-600"
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: [
        { name: "React/Next.js", level: 85 },
        { name: "Flask/Django", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "SQL Databases", level: 85 }
      ],
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-white">Technical Arsenal</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400">Expertise across multiple cutting-edge domains</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="bg-black p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition-all duration-300 group hover:transform hover:scale-105">
                <div className="flex items-center mb-8">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} mr-4`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-3">
                        <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                        <span className="text-sm text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out transform origin-left`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
