import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, Navigate, useParams } from 'react-router-dom';
import { CheckCircle2, DollarSign, MessageSquare, Phone, Truck } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { StickyCTA } from '../components/StickyCTA';
import { BUSINESS_INFO } from '../constants';
import { getServiceAreaBySlug, SERVICE_AREAS } from '../data/serviceAreas';

const SITE_URL = 'https://superdavebuysjunkcarsandtrucks.net';

export default function ServiceAreaPage() {
  const { slug = '' } = useParams();
  const area = getServiceAreaBySlug(slug);

  if (!area) {
    return <Navigate to="/" replace />;
  }

  const canonical = `${SITE_URL}/${area.slug}`;

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS_INFO.name,
    url: canonical,
    telephone: '+1-210-994-2827',
    areaServed: {
      '@type': 'City',
      name: area.city
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'San Antonio',
      addressRegion: 'TX',
      addressCountry: 'US'
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{area.metaTitle}</title>
        <meta name="description" content={area.metaDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={area.metaTitle} />
        <meta property="og:description" content={area.metaDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>

      <Header />

      <main className="flex-grow bg-[#f4f4f4]">
        <section className="bg-brand-blue text-white py-16 md:py-24">
          <div className="container-custom text-center max-w-4xl mx-auto">
            <p className="text-brand-yellow font-black uppercase tracking-widest mb-4">
              Super Dave Buys Junk Cars & Trucks
            </p>
            <h1 className="mb-6">{area.h1}</h1>
            <p className="text-lg md:text-xl font-bold text-slate-100 max-w-3xl mx-auto">
              Sell your junk car, truck or SUV in {area.city}, TX. Running or not, damaged, wrecked or unwanted — get a fast cash offer and free pickup.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="bg-brand-yellow text-brand-dark px-8 py-4 rounded-lg font-black text-lg uppercase flex items-center justify-center gap-2"
              >
                <Phone size={22} />
                Call {BUSINESS_INFO.phoneFormatted}
              </a>
              <a
                href={`sms:${BUSINESS_INFO.phone}`}
                className="bg-brand-red text-white px-8 py-4 rounded-lg font-black text-lg uppercase flex items-center justify-center gap-2"
              >
                <MessageSquare size={22} />
                Text for an Offer
              </a>
            </div>
          </div>
        </section>

        <section className="container-custom py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
            <article className="bg-white border border-slate-200 rounded-xl p-6 md:p-10 shadow-sm">
              <h2 className="text-brand-blue mb-5">Sell Your Junk Car in {area.city}, TX</h2>
              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>
                  If you are searching for <strong>cash for junk cars in {area.city}</strong>, Super Dave makes the process simple. We buy cars, trucks and SUVs in almost any condition, including non-running, damaged, wrecked, old and unwanted vehicles.
                </p>
                <p>
                  You can call or text us with the vehicle year, make, model and condition. We will give you a cash offer and arrange pickup in {area.city}. Free towing is included when we purchase your vehicle.
                </p>
                <p>
                  We serve {area.city} and nearby communities throughout the greater San Antonio area. Our goal is to make selling an unwanted vehicle fast, straightforward and convenient.
                </p>
              </div>

              <h2 className="text-brand-blue mt-10 mb-5">How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  ['1', 'Get Your Offer', 'Call or text your vehicle details for a fast quote.'],
                  ['2', 'Schedule Pickup', `Choose a convenient pickup time in ${area.city}.`],
                  ['3', 'Get Paid', 'We pick up the vehicle and pay you for it.']
                ].map(([num, title, text]) => (
                  <div key={num} className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                    <div className="w-9 h-9 rounded-full bg-brand-yellow text-brand-dark font-black flex items-center justify-center mb-3">{num}</div>
                    <h3 className="text-brand-blue text-lg mb-2">{title}</h3>
                    <p className="text-sm text-slate-600">{text}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-brand-blue mt-10 mb-5">We Buy Vehicles in Almost Any Condition</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Non-running cars',
                  'Wrecked and damaged vehicles',
                  'Old cars and trucks',
                  'Unwanted SUVs',
                  'Vehicles with mechanical problems',
                  'Cars taking up driveway or yard space'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 font-bold text-sm text-slate-700">
                    <CheckCircle2 size={18} className="text-brand-red shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-10 bg-brand-dark text-white rounded-xl p-6 md:p-8">
                <h2 className="text-brand-yellow mb-3">Get Cash for Your Junk Car in {area.city}</h2>
                <p className="text-slate-200 mb-5">
                  Call Super Dave today for a fast offer on your junk car, truck or SUV in {area.city}, TX.
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="inline-flex items-center gap-2 bg-brand-yellow text-brand-dark px-6 py-3 rounded-lg font-black uppercase"
                >
                  <Phone size={20} />
                  {BUSINESS_INFO.phoneFormatted}
                </a>
              </div>
            </article>

            <aside className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                <h2 className="text-brand-blue text-xl mb-4">Why Choose Super Dave?</h2>
                <div className="space-y-4 text-sm font-bold">
                  <div className="flex items-center gap-3"><DollarSign className="text-brand-red" /> Fast Cash Offers</div>
                  <div className="flex items-center gap-3"><Truck className="text-brand-red" /> Free Towing</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="text-brand-red" /> Cars, Trucks & SUVs</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="text-brand-red" /> Running or Not</div>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                <h2 className="text-brand-blue text-xl mb-4">Nearby Service Areas</h2>
                <div className="flex flex-col gap-2">
                  {SERVICE_AREAS.filter((item) => item.slug !== area.slug).slice(0, 10).map((item) => (
                    <Link
                      key={item.slug}
                      to={`/${item.slug}`}
                      className="text-sm font-bold text-brand-blue hover:text-brand-red"
                    >
                      Cash for Junk Cars in {item.city}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
}
