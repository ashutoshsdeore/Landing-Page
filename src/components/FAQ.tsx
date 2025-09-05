import React, { useState } from 'react';
import { HelpCircle, Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Which industries do you serve?',
      answer: 'We serve a wide range of industries including Healthcare, Fintech, Retail, Education, Manufacturing, Logistics, and more. Our AI solutions are adaptable to virtually any industry that can benefit from automation, data analysis, or intelligent decision-making.'
    },
    {
      question: 'Do you provide end-to-end support?',
      answer: 'Yes, we provide comprehensive end-to-end support from initial strategy consultation through deployment and ongoing optimization. Our team stays with you throughout the entire AI implementation journey to ensure success.'
     }
    // {
    //   question: 'How long does a typical AI implementation take?',
    //   answer: 'Implementation timelines vary based on project complexity. Simple automation projects can be completed in 4-6 weeks, while custom AI model development typically takes 3-6 months. We provide detailed timelines during the consultation phase.'
    // },
    // {
    //   question: 'What makes your AI consulting different?',
    //   answer: 'We focus on practical, business-oriented AI solutions that deliver measurable ROI. Our team combines deep technical expertise with business acumen, ensuring AI implementations align with your strategic objectives and operational requirements.'
    // },
    // {
    //   question: 'Do you work with small businesses or just enterprises?',
    //   answer: 'We work with businesses of all sizes. Our Starter Package is designed specifically for small to medium businesses, while our Enterprise solutions cater to large organizations. Every business can benefit from AI optimization.'
    // },
    // {
    //   question: 'What happens during the free consultation?',
    //   answer: 'During your free consultation, we assess your current operations, identify AI opportunities, discuss potential challenges, and provide a high-level implementation roadmap. There\'s no sales pressure—just valuable insights about your AI potential.'
    // }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
            <HelpCircle className="w-4 h-4 mr-2" />
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Everything You Need to 
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Know</span>
          </h2>
         
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-slate-50 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex items-center justify-between hover:bg-slate-100 transition-colors duration-300 group"
              >
                <h3 className="text-lg font-semibold text-slate-900 pr-8 group-hover:text-blue-600 transition-colors duration-300">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  ) : (
                    <Plus className="w-6 h-6 text-slate-400 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300" />
                  )}
                </div>
              </button>
              
              <div 
                className={`px-6 transition-all duration-500 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-96 pb-6 opacity-100' 
                    : 'max-h-0 pb-0 opacity-0'
                }`}
              >
                <div className="border-t border-slate-200 pt-4">
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl">
          <h3 className="text-2xl font-bold text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-slate-300 mb-6 leading-relaxed">
            Our AI experts are here to help. Book a free consultation to get personalized answers.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Schedule Your Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;