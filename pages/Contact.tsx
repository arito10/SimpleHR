import React, { useState } from 'react';
import Button from '../components/Button';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <div className="bg-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Info */}
          <div>
            <h1 className="text-5xl font-serif font-bold text-slate-900 mb-6">Get in Touch</h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Have a question about a template or need a custom consultation? We are here to help.
            </p>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start">
                <div className="bg-primary-50 p-4 rounded-2xl mr-5 text-primary-600 shadow-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Email Us</h3>
                  <p className="text-slate-600">hello@simplehr.com</p>
                  <p className="text-slate-600">support@simplehr.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary-50 p-4 rounded-2xl mr-5 text-primary-600 shadow-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Call Us</h3>
                  <p className="text-slate-600">+1 (555) 123-4567</p>
                  <p className="text-sm text-slate-400 mt-1">Mon-Fri 9am-5pm EST</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary-50 p-4 rounded-2xl mr-5 text-primary-600 shadow-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Office</h3>
                  <p className="text-slate-600">123 Business Park Blvd</p>
                  <p className="text-slate-600">Suite 200, Austin, TX 78701</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 animate-bounce">
                  <Mail size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-600">We will get back to you within 24 hours.</p>
                <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-8">Send another</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                  <input type="text" id="name" required className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" placeholder="Jane Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                  <input type="email" id="email" required className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" placeholder="jane@company.com" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                  <select id="subject" className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all">
                    <option>General Inquiry</option>
                    <option>Product Support</option>
                    <option>Consulting Request</option>
                    <option>Partnership</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                  <textarea id="message" rows={4} required className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" placeholder="How can we help?"></textarea>
                </div>
                <Button type="submit" size="lg" className="w-full shadow-lg shadow-primary-200">Send Message</Button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;