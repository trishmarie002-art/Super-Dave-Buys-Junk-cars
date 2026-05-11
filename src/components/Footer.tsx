import React from 'react';
import { MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white py-16 border-t-8 border-brand-yellow">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div>
            <img 
              src="https://pub-a35884625cfe400d9088764a7f0e49e0.r2.dev/Dave%20Buy's%20Junk%20cars/webuyjunkcarssanantoniologo-removebg-preview.png" 
              alt="Super Dave Logo"
              className="h-16 w-auto mb-6"
            />
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              San Antonio's most trusted junk car buyer. We provide fast, honest, and professional junk car removal services with instant cash payments.
            </p>
          </div>
          
          <div>
            <h4 className="text-brand-yellow mb-6 tracking-widest uppercase">Quick Links</h4>
            <nav className="flex flex-col gap-4 text-sm font-bold uppercase">
              <Link to="/" onClick={() => window.scrollTo(0, 0)} className="hover:text-brand-yellow transition-colors">Home</Link>
              <Link to="/services/sell-my-car-no-title" className="hover:text-brand-yellow transition-colors text-brand-yellow">No Title Guide</Link>
              <Link to="/#how-it-works" className="hover:text-brand-yellow transition-colors">How It Works</Link>
              <Link to="/#reviews" className="hover:text-brand-yellow transition-colors">Customer Reviews</Link>
              <Link to="/#faq" className="hover:text-brand-yellow transition-colors">FAQ</Link>
            </nav>
          </div>

          <div>
            <h4 className="text-brand-yellow mb-6 tracking-widest uppercase">Service Areas</h4>
            <div className="grid grid-cols-2 gap-2 text-[10px] uppercase font-bold text-slate-400">
              {BUSINESS_INFO.serviceAreas.map((city, i) => (
                <div key={i} className="flex items-center gap-1">
                  <MapPin size={10} className="text-brand-red" /> {city}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-medium text-slate-500">
          <div>&copy; {new Date().getFullYear()} Super Dave Buy’s Junk Cars - San Antonio, TX</div>
          <div className="flex items-center gap-4">
            <span>Primary Location: San Antonio, TX 78201</span>
            <span className="hidden md:inline">|</span>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="text-brand-yellow font-black text-sm uppercase">Call {BUSINESS_INFO.phoneFormatted}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
