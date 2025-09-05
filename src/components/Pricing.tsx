import React from 'react';
import { Check, Zap, Crown, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Free Consultation',
      price: 'Free',
      duration: '1-hour session',
      description: 'Perfect for exploring AI opportunities',
      features: [
        'Business needs assessment',
        'AI opportunity identification',
        'High-level strategy overview',
        'Implementation roadmap outline',
        'No commitment required'
      ],
      cta: 'Book Free Session',
      popular: false,
      icon: Zap,
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      name: 'Starter Package',
      price: '$999',
      duration: 'per month',
      description: 'Ideal for small to medium businesses',
      features: [
        'Comprehensive AI strategy',
        'Monthly consultation calls',
        'Basic automation setup',
        'Email & chat support',
        'Progress tracking dashboard',
        'Training materials access'
      ],
      cta: 'Get Started',
      popular: true,
      icon: Crown,
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      duration: 'tailored pricing',
      description: 'For large organizations with complex needs',
      features: [
        'Custom AI model development',
        'Dedicated team of experts',
        'Priority 24/7 support',
        'Advanced integrations',
        'On-site training programs',
        'Continuous optimization'
      ],
      cta: 'Contact Sales',
      popular: false,
      icon: Crown,
      gradient: 'from-purple-500 to-indigo-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
            <Crown className="w-4 h-4 mr-2" />
            Pricing Plans
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Flexible Solutions for
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Every Business</span>
          </h2>
          {/* <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Start with a free consultation and scale your AI implementation as your business grows.
          </p> */}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div 
                key={index}
                className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${
                  plan.popular 
                    ? 'border-blue-500 scale-105' 
                    : 'border-slate-200 hover:border-slate-300'
                } hover:-translate-y-2 group`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${plan.gradient} rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                    {plan.duration && (
                      <span className="text-slate-500 ml-2">/{plan.duration}</span>
                    )}
                  </div>
                  <p className="text-slate-600">{plan.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <div className={`w-5 h-5 bg-gradient-to-br ${plan.gradient} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button 
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group/btn ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 shadow-lg hover:shadow-xl'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        
      </div>
    </section>
  );
};

export default Pricing;