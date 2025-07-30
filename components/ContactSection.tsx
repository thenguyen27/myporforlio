
'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    opportunityType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'message' && value.length > 500) return;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        opportunityType: '',
        message: ''
      });

      setTimeout(() => {
        setSubmitStatus('');
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50/40 to-cyan-50/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">Let's Connect!</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-300 to-cyan-300 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to create something amazing together? Drop me a line and let's turn your ideas into reality! 
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-sky-300 to-cyan-300 rounded-full flex items-center justify-center">
                <i className="ri-chat-1-line text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Send me a message</h3>
            </div>

            {submitStatus === 'success' && (
              <div className="bg-gradient-to-r from-emerald-100/80 to-teal-100/80 border border-emerald-300/50 text-emerald-700 px-6 py-4 rounded-2xl mb-6 backdrop-blur-sm">
                <div className="flex items-center space-x-2">
                  <i className="ri-check-line text-xl"></i>
                  <span>Thank you! Your message has been sent successfully. </span>
                </div>
              </div>
            )}

            <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-sky-200/50 rounded-2xl focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-200/50 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Work Email </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-sky-200/50 rounded-2xl focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-200/50 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                  placeholder="your.email@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Company </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-sky-200/50 rounded-2xl focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-200/50 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                  placeholder="Your awesome company"
                />
              </div>

              <div>
                <label htmlFor="opportunityType" className="block text-gray-700 font-medium mb-2">Opportunity Type </label>
                <div className="relative">
                  <select
                    id="opportunityType"
                    name="opportunityType"
                    value={formData.opportunityType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 pr-8 border border-sky-200/50 rounded-2xl focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-200/50 transition-all duration-300 appearance-none cursor-pointer bg-white/80 backdrop-blur-sm"
                  >
                    <option value="">Select opportunity type</option>
                    <option value="full-time">Full-time Position</option>
                    <option value="contract">Contract Work</option>
                    <option value="freelance">Freelance Project</option>
                    <option value="consultation">Consultation</option>
                    <option value="collaboration">Collaboration</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <i className="ri-arrow-down-s-line text-sky-400"></i>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message  ({formData.message.length}/500)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-sky-200/50 rounded-2xl focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-200/50 transition-all duration-300 resize-none bg-white/80 backdrop-blur-sm"
                  placeholder="Tell me about your project or opportunity... "
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || formData.message.length > 500}
                className="w-full bg-gradient-to-r from-sky-300 to-cyan-300 hover:from-sky-400 hover:to-cyan-400 text-white py-4 px-6 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center space-x-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    <span>Sending...</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center space-x-2">
                    <span>Send Message</span>
                    <i className="ri-send-plane-line"></i>
                  </span>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
                <i className="ri-contacts-line text-sky-400"></i>
                <span>Contact Info</span>
              </h3>
              <div className="space-y-6">
                <div className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-sky-50/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-sky-300 to-cyan-300 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <i className="ri-mail-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 group-hover:text-sky-600 transition-colors duration-300">Email</h4>
                    <p className="text-gray-600">t.thenguyen27@gmail.com</p>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-cyan-50/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <i className="ri-phone-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 group-hover:text-cyan-600 transition-colors duration-300">Phone</h4>
                    <p className="text-gray-600">+84 84 838 6884</p>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-teal-50/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-300 to-emerald-300 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <i className="ri-map-pin-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 group-hover:text-teal-600 transition-colors duration-300">Location</h4>
                    <p className="text-gray-600">Go Vap District, HCMC, Vietnam 🇻🇳</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-sky-100/60 via-cyan-100/40 to-teal-100/60 backdrop-blur-sm rounded-3xl p-8 border border-white/50">
              <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
                <i className="ri-links-line text-sky-500"></i>
                <span>Let's connect on social!</span>
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/nguyen-tran"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-gradient-to-r from-sky-300 to-cyan-300 hover:from-sky-400 hover:to-cyan-400 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6 cursor-pointer"
                >
                  <i className="ri-linkedin-fill text-xl group-hover:scale-110 transition-transform duration-200"></i>
                </a>
                <a
                  href="https://github.com/nguyen-tran"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-gray-800 hover:bg-gray-700 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6 cursor-pointer"
                >
                  <i className="ri-github-fill text-xl group-hover:scale-110 transition-transform duration-200"></i>
                </a>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg p-6 border border-white/50">
              <div className="flex items-center space-x-3 mb-4">
                <i className="ri-time-line text-sky-400 text-xl"></i>
                <h4 className="font-bold text-gray-800">Quick Response </h4>
              </div>
              <p className="text-gray-600 text-sm">
                I typically respond to messages within 24 hours. For urgent matters, 
                feel free to call me directly. Let's create something amazing! 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
