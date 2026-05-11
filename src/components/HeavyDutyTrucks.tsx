import React from 'react';
import { motion } from 'motion/react';
import { Truck, DollarSign, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export const HeavyDutyTrucks: React.FC = () => {
  return (
    <section id="heavy-duty-trucks" className="bg-brand-dark text-white py-16">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-block bg-brand-red text-white font-black px-4 py-1 uppercase text-sm tracking-widest rounded">
              Premium Payouts
            </div>
            <h2 className="text-white">We Pay <span className="text-brand-yellow">MORE</span> for Heavy Duty Trucks</h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Don't sell your commercial vehicle as simple scrap. At <strong>Super Dave Buy’s Junk Cars</strong>, 
              we recognize the residual value in heavy components. We pay significantly higher rates for 
              diesel trucks, work fleets, and semi-tractors than national chains.
            </p>
            
            <div className="space-y-4 pt-4">
              {[
                "Diesel Pickups (Ford Powerstroke, Duramax, Cummins)",
                "Full Fleet Work Trucks & Vans",
                "Box Trucks & Semi-Tractors",
                "Construction & Utility Vehicles"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-yellow shrink-0" size={24} />
                  <span className="font-bold text-slate-100">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <a 
                href={`tel:${BUSINESS_INFO.phone}`}
                className="bg-brand-yellow text-brand-dark px-8 py-4 rounded-lg font-black text-xl uppercase inline-flex items-center gap-3 hover:bg-white transition-colors btn-shadow"
              >
                <DollarSign size={24} />
                Get a Commercial Quote
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1586191121264-1e0c522cf7b7?q=80&w=1470&auto=format&fit=crop" 
              alt="Heavy Duty Scrap Truck"
              className="rounded-2xl shadow-2xl border-4 border-brand-yellow/20"
            />
            <div className="absolute -bottom-6 -right-6 bg-brand-red p-6 rounded-xl shadow-xl hidden md:block">
              <Truck size={48} className="text-white mb-2" />
              <div className="font-black text-2xl uppercase leading-none">Instant</div>
              <div className="font-bold text-sm uppercase text-red-200">Processing</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
