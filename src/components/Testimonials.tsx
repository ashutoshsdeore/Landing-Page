import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "AI automation reduced our operational costs by 40% within the first six months. The ROI exceeded all expectations.",
      author: "Client C",
      company: "Fortune 500 Manufacturing",
      rating: 5,
      savings: "40% Cost Reduction"
    },
    {
      quote: "The AI strategy roadmap transformed our customer service. Response times decreased by 75% while satisfaction scores soared.",
      author: "Sarah Johnson",
      company: "TechStart Solutions",
      rating: 5,
      savings: "75% Faster Response"
    },
    {
      quote: "From consultation to deployment, their team guided us through every step. Our AI implementation was smooth and effective.",
      author: "Michael Chen",
      company: "Global Retail Chain",
      rating: 5,
      savings: "300% Revenue Growth"
     }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-6">
            <Star className="w-4 h-4 mr-2" />
            Client Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Proven Results for 
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Growing Businesses
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. See how we've helped businesses across industries 
            transform their operations with AI.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-slate-300 hover:-translate-y-2"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="w-12 h-12 text-slate-400" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial */}
              <blockquote className="text-slate-700 text-lg leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-slate-100 pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.author}</div>
                    <div className="text-slate-500 text-sm">{testimonial.company}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                      {testimonial.savings}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        
      </div>
    </section>
  );
};

export default Testimonials;