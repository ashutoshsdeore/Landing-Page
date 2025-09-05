import React from 'react';
import { Calendar, Search, Map, Rocket } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Calendar,
      title: 'Book a Free Consultation',
      description: 'Schedule a no-commitment consultation to discuss your business challenges and AI opportunities.',
      color: 'blue'
    },
    {
      icon: Search,
      title: 'We Analyze Your Business Needs',
      description: 'Our experts conduct a thorough assessment of your current operations and identify AI opportunities.',
      color: 'purple'
    },
    {
      icon: Map,
      title: 'Get a Tailored AI Roadmap',
      description: 'Receive a customized strategy with clear milestones, timelines, and expected outcomes.',
      color: 'teal'
    },
    {
      icon: Rocket,
      title: 'Deploy AI Solutions with Our Support',
      description: 'Implement AI solutions with ongoing guidance, training, and optimization support.',
      color: 'emerald'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-500 text-blue-500',
      purple: 'bg-purple-500 text-purple-500',
      teal: 'bg-teal-500 text-teal-500',
      emerald: 'bg-emerald-500 text-emerald-500'
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-slate-800 text-slate-300 rounded-full text-sm font-semibold mb-6 border border-slate-700">
            <Rocket className="w-4 h-4 mr-2" />
            How It Works
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Journey to 
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> AI Success</span>
          </h2>
          {/* <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Our proven 4-step process ensures a smooth transition to AI-powered operations 
            with measurable results and continuous support.
          </p> */}
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const colorClasses = getColorClasses(step.color);
            
            return (
              <div key={index} className="relative group">
                {/* Connection line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-8 h-0.5 bg-gradient-to-r from-slate-600 to-transparent transform translate-x-4"></div>
                )}
                
                <div className="text-center">
                  {/* Step number */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative">
                      <div className={`w-24 h-24 bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 border border-slate-600 group-hover:border-slate-500`}>
                        <Icon className={`w-10 h-10 ${colorClasses.split(' ')[1]}`} />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Start Your AI Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;