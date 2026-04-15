/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MessageSquare, 
  Car, 
  Truck, 
  CheckCircle2, 
  MapPin, 
  Star, 
  Clock, 
  DollarSign, 
  ShieldCheck,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { BUSINESS_INFO, KEYWORDS } from './constants';

// --- Schema Markup ---
const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": BUSINESS_INFO.name,
  "image": "https://picsum.photos/seed/junkcar/800/600",
  "telephone": BUSINESS_INFO.phone,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "San Antonio",
    "addressRegion": "TX",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 29.4241,
    "longitude": -98.4936
  },
  "url": "https://superdavejunkcars.com",
  "priceRange": "$$",
  "areaServed": BUSINESS_INFO.serviceAreas.map(city => ({
    "@type": "City",
    "name": city
  })),
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": BUSINESS_INFO.rating.toString(),
    "reviewCount": BUSINESS_INFO.reviewCount.toString()
  }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
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
    <HelmetProvider>
      <div className="min-h-screen flex flex-col">
        <Helmet>
          <title>Super Dave Buy’s Junk Cars | Cash for Junk Cars San Antonio TX</title>
          <meta name="description" content="Sell your junk car fast in San Antonio, TX. Get top cash offers, free pickup, and same-day service. Call Super Dave Buy’s Junk Cars today!" />
          <meta name="keywords" content={KEYWORDS.join(', ')} />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Super Dave Buy’s Junk Cars – Cash for Junk Cars San Antonio" />
          <meta property="og:description" content="Get paid cash today for your junk car. Free pickup in San Antonio. Call now!" />
          <meta property="og:image" content="https://pub-a35884625cfe400d9088764a7f0e49e0.r2.dev/Dave%20Buy's%20Junk%20cars/webuyjunkcarssanantoniologo.png" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Super Dave Buy’s Junk Cars" />
          <meta name="twitter:description" content="Cash for junk cars in San Antonio – fast & easy" />
          <meta name="twitter:image" content="https://pub-a35884625cfe400d9088764a7f0e49e0.r2.dev/Dave%20Buy's%20Junk%20cars/webuyjunkcarssanantoniologo.png" />

          <link rel="preload" as="image" href={heroImages[0].url} />
          <script type="application/ld+json">
            {JSON.stringify(schemaMarkup)}
          </script>
        </Helmet>

        {/* --- Ticker --- */}
        <div className="bg-brand-yellow text-brand-dark py-2 font-black uppercase text-center text-sm border-b border-brand-dark/10">
          Available 7 Days a Week - Same Day Junk Car Removal San Antonio TX
        </div>

        {/* --- Header --- */}
        <header className="sticky top-0 z-50 bg-brand-blue text-white border-b-5 border-brand-yellow py-3 shadow-lg transition-shadow duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <a href="/" className="flex items-center gap-3 group">
                <img 
                  src="https://pub-a35884625cfe400d9088764a7f0e49e0.r2.dev/Dave%20Buy's%20Junk%20cars/webuyjunkcarssanantoniologo1.png" 
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
              </a>

              <div className="flex items-center gap-8">
                <nav className="hidden md:flex items-center gap-6 text-xs font-black uppercase tracking-widest">
                  <a href="#how-it-works" className="hover:text-brand-yellow transition-colors">How It Works</a>
                  <a href="#reviews" className="hover:text-brand-yellow transition-colors">Reviews</a>
                  <a href="#service-areas" className="hover:text-brand-yellow transition-colors">Service Areas</a>
                  <a href="#faq" className="hover:text-brand-yellow transition-colors">FAQ</a>
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
                  
                  {/* Mobile Call Button (Visible only on mobile next to logo) */}
                  <a 
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="md:hidden bg-brand-red text-white px-4 py-2 rounded font-black text-sm flex items-center gap-2 animate-pulse shadow-lg"
                  >
                    <Phone size={16} />
                    CALL
                  </a>

                  {/* Mobile Menu Toggle */}
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

          {/* Mobile Nav */}
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden bg-brand-blue border-t border-white/10 p-4 flex flex-col gap-4"
            >
              <a href="#how-it-works" onClick={() => setIsMenuOpen(false)} className="font-bold uppercase">How It Works</a>
              <a href="#service-areas" onClick={() => setIsMenuOpen(false)} className="font-bold uppercase">Service Areas</a>
              <a href="#faq" onClick={() => setIsMenuOpen(false)} className="font-bold uppercase">FAQ</a>
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

        <main className="flex-grow bg-[#f4f4f4]">
          {/* --- New Rotating Hero --- */}
          <section 
            className="relative h-[500px] md:h-[650px] flex items-center justify-center overflow-hidden"
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
            
            <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col items-center"
              >
                <h1 className="text-4xl md:text-7xl font-black uppercase leading-tight mb-6 drop-shadow-2xl">
                  Cash for Junk Cars in <span className="text-brand-yellow">San Antonio, TX</span>
                </h1>
                <p className="text-xl md:text-3xl font-bold mb-10 text-slate-100 drop-shadow-lg">
                  We Buy Junk Cars, Trucks & SUVs – Running or Not – Free Pickup
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a 
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="bg-brand-red text-white px-10 py-5 rounded-lg font-black text-2xl uppercase btn-shadow border-2 border-red-900 hover:-translate-y-1 transition-transform flex items-center justify-center gap-3"
                  >
                    <Phone size={28} />
                    CALL: {BUSINESS_INFO.phoneFormatted}
                  </a>
                  <a 
                    href={`sms:${BUSINESS_INFO.phone}`}
                    className="bg-brand-blue text-white px-10 py-5 rounded-lg font-black text-2xl uppercase btn-shadow border-2 border-blue-900 hover:-translate-y-1 transition-transform flex items-center justify-center gap-3"
                  >
                    <MessageSquare size={28} />
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
          <div className="max-w-7xl mx-auto p-4 grid lg:grid-cols-[280px_1fr_280px] gap-4">
            
            {/* --- Left Sidebar --- */}
            <aside className="flex flex-col gap-4">
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
            <div className="flex flex-col gap-4">
              <motion.section 
                id="how-it-works"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm"
              >
                <h2 className="text-2xl font-black text-brand-blue uppercase mb-4">San Antonio's #1 Junk Car Removal Service</h2>
                <div className="text-sm leading-relaxed text-slate-600 space-y-4">
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
                    <h2 className="text-2xl font-black text-brand-blue uppercase">What Our Customers Say</h2>
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
                      text: "Mr Dave was awesome I called him a day before to let him know what I was selling. He called me back the next day and told me that he saw my post on a social media site and let me know possibly a solution to increase the value of my sell. Mr David ended up buying my vehicle really great guy really straightforward and honest highly recommend.",
                      date: "3 months ago",
                      url: "https://maps.app.goo.gl/AUicrE3kn5kAdo959"
                    },
                    {
                      name: "Bobby Floyd",
                      text: "Amazing! That’s the best work I could use. Never been through this process before but Dave made it super easy and gave me a fair deal for a car that I needed to get rid of! If you’re looking for an honest guy who comes with fair prices and will even pick up the car for free, this is the person you want to see. Highly recommend and super happy!",
                      date: "a month ago",
                      url: "https://maps.app.goo.gl/U1uoAwSJizUtKhFN6"
                    },
                    {
                      name: "Veronica Nevarez",
                      text: "Great buyer! Super Dave bought my junk car quickly and made the whole process easy. Clear communication and fast pickup. Would definitely work with him again.",
                      date: "4 months ago",
                      url: "https://maps.app.goo.gl/PFrZSb3UkEugZZAt7"
                    },
                    {
                      name: "Jodi P",
                      text: "Just had a fantastic experience selling my junk truck with Super Dave! Gave me a great deal and was here to pick it up within 30 minutes. Great guy, down to earth, honest, fast and efficient, will be recommending him to everyone!",
                      date: "a year ago",
                      url: "https://maps.app.goo.gl/DxwF4sGpVxBTs5i99"
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
                      <div className="mt-3 text-[9px] font-black text-brand-blue uppercase opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                        View on Google Maps <ChevronRight size={10} />
                      </div>
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
                    View All {BUSINESS_INFO.reviewCount} Reviews on Google
                  </a>
                </div>
              </motion.section>

              {/* --- SEO Content Section (Preserved) --- */}
              <motion.section 
                id="faq"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm"
              >
                <div className="prose prose-slate max-w-none prose-sm md:prose-base prose-headings:font-black prose-headings:uppercase prose-headings:text-brand-blue">
                  <h2 className="text-2xl font-black mb-6">Ultimate Guide to Selling Your Junk Car in San Antonio, TX</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <p>
                        Are you tired of looking at that old, rusted vehicle taking up space in your driveway? If you've been searching for <strong>cash for junk cars San Antonio</strong>, you've come to the right place. At Super Dave Buy’s Junk Cars, we specialize in helping San Antonio residents turn their unwanted vehicles into immediate cash.
                      </p>
                      <h3 className="text-lg font-bold mt-6">Why Sell Your Junk Car Now?</h3>
                      <p>
                        Leaving a junk car on your property isn't just an eyesore—it can also lead to fines from the city of San Antonio or attract unwanted pests. By choosing <strong>junk car removal San Antonio TX</strong> services, you're not only cleaning up your property but also putting money back in your pocket.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Frequently Asked Questions</h3>
                      <div className="space-y-4 mt-4">
                        <div>
                          <h4 className="font-bold text-sm">How fast can you pick up my car?</h4>
                          <p className="text-xs">In most cases, we offer same-day or next-day pickup throughout San Antonio and surrounding areas like New Braunfels and Schertz.</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-sm">Do I need to be present?</h4>
                          <p className="text-xs">Yes, we typically need the owner present to sign the necessary paperwork and receive the cash payment.</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-sm">No Title?</h4>
                          <p className="text-xs">While having a title makes the process smoother, Texas law allows for the sale of scrap vehicles under certain conditions. Let us know!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>
            </div>

            {/* --- Right Sidebar --- */}
            <aside className="flex flex-col gap-4">
              <motion.div 
                id="service-areas"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm flex-grow"
              >
                <h3 className="text-sm font-black text-brand-blue uppercase border-b-2 border-brand-yellow pb-1 mb-3">Service Areas</h3>
                <p className="text-[11px] mb-3 font-medium">We provide fast junk car removal services throughout San Antonio and nearby cities:</p>
                <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[10px] font-bold">
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
                <p className="text-[10px] font-medium leading-tight">Turn Your Junk Car Into Cash Today – San Antonio’s #1 Junk Car Buyer</p>
              </motion.a>
            </aside>

          </div>
        </main>

        {/* --- Footer --- */}
        <footer className="bg-brand-dark text-white py-12 border-t-8 border-brand-yellow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              <div>
                <img 
                  src="https://pub-a35884625cfe400d9088764a7f0e49e0.r2.dev/Dave%20Buy's%20Junk%20cars/webuyjunkcarssanantoniologo1.png" 
                  alt="Super Dave Logo"
                  className="h-16 w-auto mb-6"
                />
                <p className="text-slate-400 text-sm leading-relaxed">
                  San Antonio's most trusted junk car buyer. We provide fast, honest, and professional junk car removal services with instant cash payments.
                </p>
              </div>
              
              <div>
                <h4 className="text-brand-yellow font-black uppercase mb-6 tracking-widest">Quick Links</h4>
                <nav className="flex flex-col gap-4 text-sm font-bold uppercase">
                  <a href="#how-it-works" className="hover:text-brand-yellow transition-colors">How It Works</a>
                  <a href="#reviews" className="hover:text-brand-yellow transition-colors">Customer Reviews</a>
                  <a href="#service-areas" className="hover:text-brand-yellow transition-colors">Service Areas</a>
                  <a href="#faq" className="hover:text-brand-yellow transition-colors">FAQ</a>
                </nav>
              </div>

              <div>
                <h4 className="text-brand-yellow font-black uppercase mb-6 tracking-widest">Service Areas</h4>
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

        {/* --- Sticky CTA for Mobile --- */}
        <div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-white/90 backdrop-blur-md border-t border-slate-200 z-50">
          <div className="grid grid-cols-2 gap-4">
            <a 
              href={`tel:${BUSINESS_INFO.phone}`}
              className="bg-brand-red text-white py-3 rounded font-black flex items-center justify-center gap-2 shadow-lg uppercase text-sm border-b-4 border-red-900"
            >
              <Phone size={16} />
              CALL NOW
            </a>
            <a 
              href={`sms:${BUSINESS_INFO.phone}`}
              className="bg-brand-blue text-white py-3 rounded font-black flex items-center justify-center gap-2 shadow-lg uppercase text-sm border-b-4 border-blue-900"
            >
              <MessageSquare size={16} />
              TEXT NOW
            </a>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}
