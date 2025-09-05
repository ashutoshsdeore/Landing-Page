import React from 'react';
import { Brain, Code, Workflow, Puzzle, GraduationCap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Strategy Consulting',
      description: 'Comprehensive AI roadmap aligned with your business objectives and industry requirements.',
      color: 'blue'
    },
    {
      icon: Code,
      title: 'Custom AI Model Development',
      description: 'Tailored machine learning models designed specifically for your unique business challenges.',
      color: 'purple'
    },
    {
      icon: Workflow,
      title: 'Automation & Workflow Optimization',
      description: 'Streamline operations with intelligent automation solutions that reduce costs and improve efficiency.',
      color: 'teal'
    },
    {
      icon: Puzzle,
      title: 'AI Integrations with Existing Systems',
      description: 'Seamlessly connect AI capabilities with your current technology stack and business processes.',
      color: 'emerald'
    },
    {
      icon: GraduationCap,
      title: 'Training & Support',
      description: 'Comprehensive team training and ongoing support to ensure successful AI adoption and optimization.',
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500',
      purple: 'from-purple-500 to-purple-600 hover:from-purple-400 hover:to-purple-500',
      teal: 'from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500',
      emerald: 'from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500',
      indigo: 'from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-500'
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
            <Brain className="w-4 h-4 mr-2" />
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Comprehensive AI Solutions
          </h2>
        
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-transparent hover:-translate-y-2"
              >
                {/* Gradient background that appears on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${getColorClasses(service.color)} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${getColorClasses(service.color)} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  {/* <div className="mt-6">
                    <button className={`text-transparent bg-gradient-to-r ${getColorClasses(service.color)} bg-clip-text font-semibold hover:underline transition-all duration-300`}>
                      Learn More →
                    </button>
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;