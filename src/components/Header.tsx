import React from 'react';
import { motion } from 'motion/react';
import { Phone, Menu, X } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-blue text-white border-b-5 border-brand-yellow py-3 shadow-lg transition-shadow duration-300">
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <Link to="/" onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }} className="flex items-center gap-3 group">
            <img 
              src="https://pub-a35884625cfe400d9088764a7f0e49e0.r2.dev/Dave%20Buy's%20Junk%20cars/webuyjunkcarssanantoniologo-removebg-preview.png" 
              alt="Super Dave Buy’s Junk Cars San Antonio Logo"
              className="h-[45px] md:h-[65px] w-auto drop-shadow-[0_0_8px_rgba(255,215,0,0.3)] group-hover:scale-105 transition-transform"
            />
            <div className="hidden lg:flex flex-col">
              <h2 className="text-xl font-black uppercase leading-none">
                Super Dave
              </h2>
              <span className="text-brand-yellow text-[10px] font-bold uppercase tracking-tighter">
                Buy’s Junk Cars
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center gap-6 text-xs font-black uppercase tracking-widest">
              <Link to="/#how-it-works" className="hover:text-brand-yellow transition-colors">How It Works</Link>
              <Link to="/services/sell-my-car-no-title" className="hover:text-brand-yellow transition-colors">No Title Help</Link>
              <Link to="/#reviews" className="hover:text-brand-yellow transition-colors">Reviews</Link>
              <Link to="/#faq" className="hover:text-brand-yellow transition-colors">FAQ</Link>
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <a 
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="bg-brand-yellow text-brand-dark px-6 py-2 rounded border-2 border-white font-black text-xl flex items-center gap-2 shadow-md hover:bg-white transition-colors"
                >
                  <Phone size={20} />
                  {BUSINESS_INFO.phoneFormatted}
                </a>
              </div>
              
              <a 
                href={`tel:${BUSINESS_INFO.phone}`}
                className="md:hidden bg-brand-red text-white px-4 py-2 rounded font-black text-sm flex items-center gap-2 animate-pulse shadow-lg"
              >
                <Phone size={16} />
                CALL
              </a>

              <button 
                className="md:hidden p-2 text-brand-yellow"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-brand-blue border-t border-white/10 p-4 flex flex-col gap-4"
        >
          <Link to="/" onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }} className="font-bold uppercase">Home</Link>
          <Link to="/services/sell-my-car-no-title" onClick={() => setIsMenuOpen(false)} className="font-bold uppercase">No Title Guide</Link>
          <Link to="/#how-it-works" onClick={() => setIsMenuOpen(false)} className="font-bold uppercase">How It Works</Link>
          <a 
            href={`tel:${BUSINESS_INFO.phone}`}
            className="bg-brand-yellow text-brand-dark p-4 rounded font-black text-center flex items-center justify-center gap-2"
          >
            <Phone size={18} />
            CALL NOW
          </a>
        </motion.div>
      )}
    </header>
  );
};
