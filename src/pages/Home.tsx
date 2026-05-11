import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MessageSquare, 
  Truck, 
  CheckCircle2, 
  Star, 
  DollarSign, 
  ChevronRight
} from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { StickyCTA } from '../components/StickyCTA';
import { HeavyDutyTrucks } from '../components/HeavyDutyTrucks';
import { BUSINESS_INFO } from '../constants';

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  const heroImages = [
    {
      url: "https://pub-a35884625cfe400d9088764a7f0e49e0.r2.dev/Dave%20Buy's%20Junk%20cars/webuyjunkcarssanantonio.webp",
      alt: "Cash for junk cars San Antonio - Super Dave Buy's Junk Cars"
    },
    {
      url: "https://pub-a35884625cfe400d9088764a7f0e49e0.r2.dev/Dave%20Buy's%20Junk%20cars/webuyjunkcarssanantonio1.webp",
      alt: "Junk car removal San Antonio TX - Fast cash offers"
    },
    {
      url: "https://pub-a35884625cfe400d9088764a7f0e49e0.r2.dev/Dave%20Buy's%20Junk%20cars/webuyjunkcarssanantonio2.webp",
      alt: "Sell my junk car San Antonio - Free junk car pickup"
    }
  ];

  React.useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-[#f4f4f4]">
        {/* --- Ticker --- */}
        <div className="bg-brand-yellow text-brand-dark py-2 font-black uppercase text-center text-sm border-b border-brand-dark/10">
          Available 7 Days a Week - Same Day Junk Car Removal San Antonio TX
        </div>

        {/* --- New Rotating Hero --- */}
        <section 
          className="relative min-h-[600px] md:h-[650px] flex items-center justify-center overflow-hidden pt-20 pb-24 md:pt-0 md:pb-0"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={heroImages[currentImageIndex].url}
              alt={heroImages[currentImageIndex].alt}
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1.1 }}
              exit={{ opacity: 0 }}
              transition={{ 
                opacity: { duration: 1.5 },
                scale: { duration: 5, ease: "linear" } 
              }}
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading={currentImageIndex === 0 ? "eager" : "lazy"}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-brand-dark/60" />
          
          <div className="relative z-10 container-custom text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col items-center max-w-4xl mx-auto"
            >
              <h1 className="mb-6 drop-shadow-2xl">
                Cash for Junk Cars in <span className="text-brand-yellow">San Antonio, TX</span>
              </h1>
              <p className="text-lg md:text-2xl font-bold mb-10 text-slate-100 drop-shadow-lg max-w-2xl">
                We Buy Junk Cars, Trucks & SUVs – Running or Not – Free Pickup
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center w-full max-w-sm sm:max-w-none">
                <a 
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="bg-brand-red text-white px-6 py-4 md:px-10 md:py-5 rounded-lg font-black text-lg md:text-2xl uppercase btn-shadow border-2 border-red-900 hover:-translate-y-1 transition-transform flex items-center justify-center gap-3 w-full sm:w-auto"
                >
                  <Phone size={24} className="md:w-7 md:h-7" />
                  CALL: {BUSINESS_INFO.phoneFormatted}
                </a>
                <a 
                  href={`sms:${BUSINESS_INFO.phone}`}
                  className="bg-brand-blue text-white px-6 py-4 md:px-10 md:py-5 rounded-lg font-black text-lg md:text-2xl uppercase btn-shadow border-2 border-blue-900 hover:-translate-y-1 transition-transform flex items-center justify-center gap-3 w-full sm:w-auto"
                >
                  <MessageSquare size={24} className="md:w-7 md:h-7" />
                  TEXT FOR OFFER
                </a>
              </div>

              <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm font-black uppercase tracking-widest text-brand-yellow">
                <span className="flex items-center gap-2"><Star size={18} className="fill-current" /> 5-Star Rated</span>
                <span className="flex items-center gap-2"><Truck size={18} /> Free Towing</span>
                <span className="flex items-center gap-2"><DollarSign size={18} /> Instant Cash</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- Main Content Grid --- */}
        <div className="container-custom py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[280px_1fr_280px] gap-6">
          
          {/* --- Left Sidebar --- */}
          <aside className="flex flex-col gap-6 md:col-span-1 lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm"
            >
              <h3 className="text-sm font-black text-brand-blue uppercase border-b-2 border-brand-yellow pb-1 mb-3">Why Choose Us?</h3>
              <div className="space-y-2">
                {[
                  "Cash Paid On The Spot",
                  "Free Pickup San Antonio",
                  "No Title? No Problem",
                  "Same-Day Service",
                  "All Conditions Accepted"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-bold">
                    <CheckCircle2 size={16} className="text-brand-red" />
                    {text}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm"
            >
              <h3 className="text-sm font-black text-brand-blue uppercase border-b-2 border-brand-yellow pb-1 mb-3">Vehicles We Buy</h3>
              <p className="text-[11px] font-bold mb-2">We buy all types of junk cars in San Antonio, including damaged, totaled, and non-running vehicles:</p>
              <ul className="text-[11px] space-y-1 ml-4 list-disc font-medium">
                <li>Wrecked Trucks</li>
                <li>Non-Running SUVs</li>
                <li>Scrap Vehicles</li>
                <li>Old Sedans</li>
              </ul>
            </motion.div>
          </aside>

          {/* --- Center Content --- */}
          <div className="flex flex-col gap-6 md:col-span-2 lg:col-span-1">
            <motion.section 
              id="how-it-works"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm"
            >
              <h2 className="text-brand-blue mb-4">San Antonio's #1 Junk Car Removal Service</h2>
              <div className="text-sm md:text-base leading-relaxed text-slate-600 space-y-4">
                <p>
                  Looking to sell your junk car in San Antonio, TX? <strong>Super Dave Buy’s Junk Cars</strong> pays top cash for junk cars, trucks, and SUVs. Whether your vehicle is running or not, wrecked, or without a title, we offer fast, free junk car removal across San Antonio and surrounding areas.
                </p>
                <p>
                  As the leading junk car buyers San Antonio, we ensure you get the best value for your scrap car buyers near me search. Get your junk car pickup San Antonio free towing today! We handle all the paperwork and make the process as simple as possible.
                </p>
              </div>

              <div className="mt-8">
                <h4 className="text-sm font-black text-brand-blue uppercase mb-4">Our Simple 3-Step Process:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-[11px] font-bold uppercase">
                  <div className="p-4 bg-slate-50 rounded border border-slate-100 flex flex-col items-center text-center gap-2">
                    <div className="w-8 h-8 bg-brand-yellow rounded-full flex items-center justify-center text-brand-dark">1</div>
                    Call for a Free Quote
                  </div>
                  <div className="p-4 bg-slate-50 rounded border border-slate-100 flex flex-col items-center text-center gap-2">
                    <div className="w-8 h-8 bg-brand-yellow rounded-full flex items-center justify-center text-brand-dark">2</div>
                    Accept Your Cash Offer
                  </div>
                  <div className="p-4 bg-slate-50 rounded border border-slate-100 flex flex-col items-center text-center gap-2">
                    <div className="w-8 h-8 bg-brand-yellow rounded-full flex items-center justify-center text-brand-dark">3</div>
                    Schedule Free Pickup
                  </div>
                </div>
              </div>
            </motion.section>

            {/* --- Google Reviews Section --- */}
            <motion.section 
              id="reviews"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm"
            >
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 border-b border-slate-100 pb-6">
                <div className="text-center md:text-left">
                  <h2 className="text-brand-blue">What Our Customers Say</h2>
                  <p className="text-sm font-bold text-slate-500 uppercase">Real Reviews from San Antonio Residents</p>
                </div>
                <div className="flex flex-col items-center md:items-end">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-black text-brand-dark">{BUSINESS_INFO.rating}</span>
                    <div className="flex text-brand-yellow">
                      {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-current" />)}
                    </div>
                  </div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{BUSINESS_INFO.reviewCount} Google Reviews</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    name: "David Duncan",
                    text: "Mr Dave was awesome I called him a day before to let him know what I was selling. He called me back the next day and told me that he saw my post on a social media site and let me know possibly a solution to increase the value of my sell.",
                    date: "3 months ago",
                    url: "https://maps.app.goo.gl/AUicrE3kn5kAdo959"
                  },
                  {
                    name: "Bobby Floyd",
                    text: "Amazing! That’s the best work I could use. Never been through this process before but Dave made it super easy and gave me a fair deal for a car that I needed to get rid of!",
                    date: "a month ago",
                    url: "https://maps.app.goo.gl/U1uoAwSJizUtKhFN6"
                  }
                ].map((review, i) => (
                  <a 
                    key={i} 
                    href={review.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-50 p-4 rounded-lg border border-slate-100 hover:border-brand-yellow transition-colors block group"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-black text-sm uppercase text-brand-blue group-hover:text-brand-red transition-colors">{review.name}</div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase">{review.date}</div>
                    </div>
                    <div className="flex text-brand-yellow mb-2">
                      {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-current" />)}
                    </div>
                    <p className="text-xs text-slate-600 italic leading-relaxed">"{review.text}"</p>
                  </a>
                ))}
              </div>
              <div className="mt-8 text-center">
                <a 
                  href={BUSINESS_INFO.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-blue text-white px-8 py-3 rounded font-black uppercase text-sm hover:bg-blue-800 transition-colors shadow-md"
                >
                  View All Reviews on Google
                </a>
              </div>
            </motion.section>

             {/* --- FAQ Section --- */}
            <motion.section 
              id="faq"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm"
            >
              <div className="prose prose-slate max-w-none prose-sm md:prose-base prose-headings:text-brand-blue">
                <h2 className="mb-6 uppercase">FAQ</h2>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-brand-blue uppercase font-black">How fast can you pick up my car?</h4>
                    <p>In most cases, we offer same-day or next-day pickup throughout San Antonio and surrounding areas.</p>
                  </div>
                  <div>
                    <h4 className="text-brand-blue uppercase font-black">No Title?</h4>
                    <p>
                      While having a title makes the process smoother, Texas law allows for the sale of scrap vehicles under certain conditions. 
                      Visit our <Link to="/services/sell-my-car-no-title" className="text-brand-red font-bold">No Title Guide</Link> for more info.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>

          {/* --- Right Sidebar --- */}
          <aside className="flex flex-col gap-6 md:col-span-2 lg:col-span-1">
            <motion.div 
              id="service-areas"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm flex-grow"
            >
              <h3 className="text-brand-blue border-b-2 border-brand-yellow pb-1 mb-4">Service Areas</h3>
              <p className="text-xs mb-4 font-medium">Fast junk car removal throughout San Antonio and nearby cities:</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-x-4 gap-y-2 text-[11px] font-bold">
                {BUSINESS_INFO.serviceAreas.map((city, i) => (
                  <div key={i} className="flex items-center gap-1">
                    <span className="text-brand-red">•</span> {city}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.a 
              href={`tel:${BUSINESS_INFO.phone}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-brand-blue text-white rounded-lg p-4 text-center shadow-lg border-2 border-brand-yellow block hover:scale-105 transition-transform"
            >
              <h4 className="text-lg font-black mb-1 uppercase">SELL TODAY!</h4>
              <p className="text-[10px] font-medium leading-tight">San Antonio’s #1 Junk Car Buyer</p>
            </motion.a>
          </aside>
        </div>

        {/* --- Heavy Duty Trucks Component --- */}
        <HeavyDutyTrucks />

      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
}
