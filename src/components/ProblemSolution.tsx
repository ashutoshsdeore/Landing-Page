import React from 'react';
import { AlertTriangle, Target, Zap, CheckCircle } from 'lucide-react';

const ProblemSolution = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Problem Statement */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold mb-6">
                <AlertTriangle className="w-4 h-4 mr-2" />
                The Challenge
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Businesses know AI is 
                <span className="text-red-600"> powerful</span> but don't know 
                <span className="text-red-600"> where to start</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Most companies understand that AI can transform their operations, but they struggle with implementation, 
                lack the technical expertise, and fear making costly mistakes in their AI journey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 text-sm">✗</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Technical Complexity</h4>
                  <p className="text-slate-600 text-sm">Overwhelmed by AI technologies and options</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 text-sm">✗</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Resource Constraints</h4>
                  <p className="text-slate-600 text-sm">Limited internal AI expertise and budget</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 text-sm">✗</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Implementation Risk</h4>
                  <p className="text-slate-600 text-sm">Fear of failed AI projects and wasted investment</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 text-sm">✗</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Strategy Gap</h4>
                  <p className="text-slate-600 text-sm">No clear roadmap for AI adoption</p>
                </div>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-6">
                <Target className="w-4 h-4 mr-2" />
                Our Solution
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                We guide businesses through 
                <span className="text-blue-600"> AI adoption</span>—from 
                <span className="text-purple-600"> strategy to deployment</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our expert team provides end-to-end AI consulting services, ensuring your business harnesses 
                the full potential of artificial intelligence with minimal risk and maximum ROI.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-emerald-200 transition-colors duration-300">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Expert Guidance</h4>
                  <p className="text-slate-600 text-sm">Strategic AI roadmap tailored to your business</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-blue-200 transition-colors duration-300">
                  <Zap className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Rapid Implementation</h4>
                  <p className="text-slate-600 text-sm">Fast deployment with proven methodologies</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-purple-200 transition-colors duration-300">
                  <Target className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Measured Results</h4>
                  <p className="text-slate-600 text-sm">Quantifiable business impact and ROI</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-teal-200 transition-colors duration-300">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Ongoing Support</h4>
                  <p className="text-slate-600 text-sm">Continuous optimization and maintenance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;