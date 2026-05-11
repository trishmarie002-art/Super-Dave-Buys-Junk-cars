import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { 
  ShieldAlert, 
  FileCheck, 
  IdCard, 
  PhoneCall, 
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { StickyCTA } from '../components/StickyCTA';
import { BUSINESS_INFO } from '../constants';

export default function NoTitlePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      <Helmet>
        <title>Sell My Junk Car With No Title San Antonio | Super Dave Junk Cars</title>
        <meta name="description" content="Missing your car title in San Antonio? We buy junk cars without titles using the Bill of Sale process. Fast cash, legal process, free pickup. Call now!" />
      </Helmet>

      <Header />

      <main className="flex-grow">
        {/* --- Hero Section --- */}
        <section className="bg-brand-blue py-16 md:py-24 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1594411110821-2a6234064567?q=80&w=2070&auto=format&fit=crop" 
              alt="Background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container-custom relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 bg-brand-yellow text-brand-dark font-black px-4 py-1 rounded-full text-xs uppercase mb-6 shadow-lg">
                <ShieldAlert size={14} /> Problem Solved
              </div>
              <h1 className="text-white mb-6">How to Sell Your Junk Car in San Antonio <span className="text-brand-yellow">Without a Title</span></h1>
              <p className="text-xl text-slate-100 font-bold mb-8">
                Lost the title? Never received it? We handle the paperwork and pay you cash today. 
                Selling a car without a title in Texas is possible—let us show you how.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="bg-brand-red text-white px-8 py-4 rounded-lg font-black text-xl uppercase flex items-center justify-center gap-3 animate-bounce shadow-2xl border-b-4 border-red-900"
                >
                  <PhoneCall size={24} />
                  Get My No-Title Quote
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- Requirements Section --- */}
        <section className="py-16 container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-12">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <h2 className="text-brand-blue mb-6">The "No Title" Realities in Texas</h2>
                <div className="prose prose-slate max-w-none">
                  <p className="text-lg leading-relaxed">
                    Under Texas law, you can sell your vehicle for scrap or junk without a traditional title if certain requirements are met. 
                    <strong> Super Dave Buy’s Junk Cars</strong> is a licensed professional that understands the local San Antonio 
                    regulations to stay 100% compliant while getting you paid.
                  </p>
                  
                  <h3 className="mt-8 mb-4 flex items-center gap-2 text-brand-red uppercase font-black">
                    <FileCheck /> What We Need From You:
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 not-prose">
                    {[
                      { icon: <IdCard className="text-brand-blue" />, title: "Valid Photo ID", desc: "A current driver's license or state-issued ID is mandatory." },
                      { icon: <CheckCircle2 className="text-brand-blue" />, title: "Proof of Ownership", desc: "An old registration, insurance card, or a bill of sale can work." },
                      { icon: <AlertTriangle className="text-brand-blue" />, title: "Vehicle Access", desc: "You must have the keys and physical access to the vehicle." },
                      { icon: <ShieldAlert className="text-brand-blue" />, title: "Verification", desc: "We run the VIN to ensure there are no active liens or theft reports." }
                    ].map((item, i) => (
                      <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex gap-4">
                        <div className="shrink-0">{item.icon}</div>
                        <div>
                          <div className="font-black text-xs uppercase mb-1">{item.title}</div>
                          <p className="text-xs text-slate-500 font-medium">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-brand-yellow/10 p-8 rounded-2xl border-2 border-brand-yellow/30">
                <h3 className="text-brand-dark mb-4 uppercase font-black">Don't Get Scammed by Fly-By-Night Shops</h3>
                <p className="text-brand-dark/80 font-medium leading-relaxed">
                  Many scrap yards will lower their price significantly if you don't have a title. 
                  Super Dave offers fair, transparent pricing. We won't penalize you for lost paperwork 
                  if the vehicle is legally yours.
                </p>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="bg-brand-blue text-white p-8 rounded-2xl shadow-xl sticky top-28">
                <h3 className="text-brand-yellow mb-6">Immediate Help</h3>
                <p className="text-sm font-bold mb-6 opacity-90 leading-relaxed">
                  Call now to speak directly with Dave. He will walk you through exactly what is 
                  needed for your specific car and year.
                </p>
                <div className="space-y-4">
                   <a 
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="w-full bg-white text-brand-blue py-4 rounded font-black text-center flex items-center justify-center gap-2 hover:bg-brand-yellow transition-colors"
                  >
                    <PhoneCall size={20} />
                    {BUSINESS_INFO.phoneFormatted}
                  </a>
                  <p className="text-[10px] text-center opacity-70 italic font-medium">
                    Available for same-day pickup in San Antonio
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-yellow/20 rounded-full flex items-center justify-center text-brand-yellow shrink-0">
                      <ChevronRight size={20} />
                    </div>
                    <span className="text-xs font-bold">100% Free Towing Included</span>
                  </div>
                   <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-yellow/20 rounded-full flex items-center justify-center text-brand-yellow shrink-0">
                      <ChevronRight size={20} />
                    </div>
                    <span className="text-xs font-bold">Instant Top-Dollar Payouts</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* --- Call to Action --- */}
        <section className="bg-brand-dark py-20">
          <div className="container-custom text-center">
            <h2 className="text-white mb-6">Ready to Clear Your Property & Get Paid?</h2>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-10">
              Stop stressing over the missing title. Super Dave buys vehicles that others won't. 
              Get your fast quote today.
            </p>
            <div className="flex justify-center">
               <a 
                href={`tel:${BUSINESS_INFO.phone}`}
                className="bg-brand-yellow text-brand-dark px-12 py-5 rounded-xl font-black text-2xl uppercase flex items-center gap-4 hover:scale-105 transition-transform"
              >
                Call Super Dave <ArrowRight size={28} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
}
