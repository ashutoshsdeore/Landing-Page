import React from 'react';
import { Brain, Sparkles, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Final CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Book your free AI consultation today
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
            Unlock growth with AI! Transform your business operations and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2">
              <span>Book Free Consultation Now</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <Brain className="w-10 h-10 text-blue-400" />
                  <Sparkles className="w-5 h-5 text-purple-400 absolute -top-1 -right-1 animate-pulse" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  AI Innovate
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Transforming businesses through strategic AI implementation and expert consulting.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">AI Strategy</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Custom Models</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Automation</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Integration</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Training</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">About Us</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Case Studies</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Blog</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Careers</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Contact</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
              <div className="space-y-3">
                <p className="text-slate-400">
                  <span className="block font-medium text-white">Email:</span>
                  hello@aiinnovate.com
                </p>
                <p className="text-slate-400">
                  <span className="block font-medium text-white">Phone:</span>
                  (555) 123-4567
                </p>
                <p className="text-slate-400">
                  <span className="block font-medium text-white">Address:</span>
                  123 Innovation Drive<br />
                  San Francisco, CA 94105
                </p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          {/* <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between">
            <p className="text-slate-400 text-sm">
              © 2025 AI Innovate. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 sm:mt-0">
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">Cookie Policy</a>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;