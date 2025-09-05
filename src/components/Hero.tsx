import React from 'react';
import { ChevronRight, Brain, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white min-h-screen flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Brain className="w-12 h-12 text-blue-400" />
                <Sparkles className="w-6 h-6 text-purple-400 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Innovate
              </h1>
            </div>
          </div>

          {/* Main headline */}
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Your
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent animate-pulse">
              Business with AI
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            We provide tailored AI consulting to scale and innovate.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2">
              <span>Book a Free Consultation</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <div className="text-slate-400">AI Projects Delivered</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                40%
              </div>
              <div className="text-slate-400">Average Cost Reduction</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <div className="text-slate-400">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;