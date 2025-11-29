import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, BarChart3, Calculator, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import { PRODUCTS, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  // Get top 3 templates
  const templateProducts = PRODUCTS.slice(0, 3);

  // ROI Calculator State
  const [hourlyRate, setHourlyRate] = useState<number>(150); // Consultant rate
  const [hoursSaved, setHoursSaved] = useState<number>(20);
  
  const calculateSavings = () => {
    return hourlyRate * hoursSaved;
  };

  return (
    <div className="flex flex-col w-full">
      
      {/* Seamless Hero - Professional Consultancy Vibe */}
      <section className="relative pt-24 pb-20 md:pt-36 md:pb-32 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-50 opacity-60"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary-200/30 rounded-full blur-3xl animate-float"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-semibold text-slate-600 mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
            <span>Streamline your People Operations</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.1] max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            HR Made <span className="text-primary-500">Simple.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Your HR Department, On Demand. Professional tools, templates, and frameworks for busy business owners. 
            Save time and reduce risk without the agency price tag.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/shop">
              <Button size="lg" className="px-10 shadow-xl shadow-primary-200/50">
                Browse All Templates
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="px-10">
                Request Custom Document
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted By / Testimonials Section */}
      <section className="border-y border-slate-100 bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900">Trusted by 1,000+ People leaders</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#fbbf24" className="text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed flex-grow">"{testimonial.content}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-200/50">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-8 h-8 rounded-full object-cover" />
                  <div className="text-left">
                    <p className="text-xs font-bold text-slate-900">{testimonial.name}</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature 1: The HR Time/Cost Calculator */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                   <Calculator size={24} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Stop overpaying for standard documents.</h2>
                <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                  Hiring an HR Consultant or Lawyer for standard policies costs an average of $150-$300/hr. Our professional templates are ready to use in minutes.
                </p>
                <div className="flex flex-col gap-4">
                   <div className="flex items-start gap-4">
                      <CheckCircle2 className="text-primary-500 mt-1" size={20}/>
                      <div>
                        <h4 className="font-bold text-slate-900">Professional Formatting</h4>
                        <p className="text-sm text-slate-500">Looks like it came from a top-tier firm.</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-4">
                      <CheckCircle2 className="text-primary-500 mt-1" size={20}/>
                      <div>
                        <h4 className="font-bold text-slate-900">Instant Access</h4>
                        <p className="text-sm text-slate-500">Don't wait weeks for a draft. Start now.</p>
                      </div>
                   </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
                 <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                   <BarChart3 size={20}/> ROI Estimator
                 </h3>
                 
                 <div className="space-y-6">
                    <div>
                       <label className="block text-sm font-medium text-slate-700 mb-2">Consultant Hourly Rate ($)</label>
                       <input 
                         type="range" 
                         min="50" 
                         max="500" 
                         step="10"
                         value={hourlyRate} 
                         onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                         className="w-full accent-primary-500 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                       />
                       <div className="text-right font-mono font-bold text-slate-900 mt-1">${hourlyRate}/hr</div>
                    </div>
                    
                    <div>
                       <label className="block text-sm font-medium text-slate-700 mb-2">Hours to Draft from Scratch</label>
                       <input 
                         type="range" 
                         min="5" 
                         max="100" 
                         value={hoursSaved} 
                         onChange={(e) => setHoursSaved(parseInt(e.target.value))}
                         className="w-full accent-primary-500 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                       />
                       <div className="text-right font-mono font-bold text-slate-900 mt-1">{hoursSaved} hrs</div>
                    </div>

                    <div className="pt-6 border-t border-slate-200">
                       <p className="text-sm text-slate-500 mb-1">Potential Savings with Simple HR</p>
                       <p className="text-4xl font-bold text-green-600">${calculateSavings().toLocaleString()}</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-24 bg-slate-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-3">Popular Solutions</h2>
              <p className="text-slate-500">Essential frameworks for a compliant, structured business.</p>
            </div>
            <Link to="/shop">
              <Button variant="outline" className="rounded-full">
                View All Solutions <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {templateProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Feature 2: Custom Request (Consultancy Service) */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-bold mb-6">
             <Star size={12} />
             <span>Premium Service</span>
           </div>
           <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Can't find what you need?</h2>
           <p className="text-xl text-slate-500 mb-10 leading-relaxed">
             We operate as a full-service HR consultancy. If you need a specific policy, agreement, or strategy document that isn't in our library, our team can draft it for you.
           </p>
           <Link to="/contact">
              <Button size="lg" className="shadow-xl shadow-slate-200/50">
                 Request Custom Document
              </Button>
           </Link>
        </div>
      </section>

      {/* Feature 3: Compliance Alerts / Newsletter */}
      <section className="py-24 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Get the HR Pulse</h2>
            <p className="text-slate-400 mb-8 text-lg">
              Get free resources delivered to your email. No fluff, just practical tools, compliance updates, and guides for the modern people leader.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-slate-300">
                <CheckCircle2 size={20} className="text-primary-400"/> Free policy templates
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <CheckCircle2 size={20} className="text-primary-400"/> Regulatory change alerts
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <CheckCircle2 size={20} className="text-primary-400"/> Leadership guides
              </li>
            </ul>
          </div>
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
             <h3 className="font-bold text-lg mb-4">Join the list</h3>
             <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
               <div>
                 <label className="block text-xs font-medium text-slate-400 mb-1">Work Email</label>
                 <input type="email" placeholder="name@company.com" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary-500 outline-none"/>
               </div>
               <Button className="w-full bg-primary-500 hover:bg-primary-400 text-slate-900 font-bold border-none">
                 Get Free Resources
               </Button>
               <p className="text-xs text-slate-500 text-center">Unsubscribe at any time.</p>
             </form>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;