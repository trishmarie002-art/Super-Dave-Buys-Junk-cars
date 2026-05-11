/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NoTitlePage from './pages/NoTitlePage';
import ScrollToTop from './components/ScrollToTop';
import { KEYWORDS } from './constants';

// --- Schema Markup ---
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://super-dave-buys-junk-cars.vercel.app/#business",
      "name": "Super Dave Buys Junk Cars",
      "image": "https://pub-a35884625cfe400d9088764a7f0e49e0.r2.dev/Dave%20Buy's%20Junk%20cars/webuyjunkcarssanantoniologo-removebg-preview.png",
      "url": "https://super-dave-buys-junk-cars.vercel.app/",
      "telephone": "+1-210-994-2827",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "San Antonio",
        "addressRegion": "TX",
        "postalCode": "78201",
        "addressCountry": "US"
      },
      "areaServed": [
        "San Antonio TX",
        "Converse TX",
        "Universal City TX",
        "Schertz TX",
        "New Braunfels TX"
      ],
      "openingHours": "Mo-Su 00:00-23:59",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "69"
      }
    }
  ]
};

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Helmet>
          {/* Surgical Meta Update */}
          <title>$500+ Cash for Junk Cars & Trucks San Antonio | No Title? No Problem | Call Super Dave for an Instant Quote!</title>
          <meta name="description" content="Get $500+ cash for junk cars, trucks, and SUVs in San Antonio today! We handle no-title vehicles legally. Same-day pickup and instant quotes. Call Super Dave now!" />
          <meta name="keywords" content={KEYWORDS.join(', ')} />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="$500+ Cash for Junk Cars & Trucks San Antonio | Super Dave" />
          <meta property="og:description" content="Instant cash for junk vehicles in San Antonio. No title? No problem! Free towing included." />
          <meta property="og:image" content="https://pub-a35884625cfe400d9088764a7f0e49e0.r2.dev/Dave%20Buy's%20Junk%20cars/webuyjunkcarssanantoniologo-removebg-preview.png" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Cash for Junk Cars San Antonio | Super Dave" />
          <meta name="twitter:description" content="$500+ Cash for junk cars in San Antonio - No Title Needed!" />
          <meta name="twitter:image" content="https://pub-a35884625cfe400d9088764a7f0e49e0.r2.dev/Dave%20Buy's%20Junk%20cars/webuyjunkcarssanantoniologo-removebg-preview.png" />

          <script type="application/ld+json">
            {JSON.stringify(schemaMarkup)}
          </script>
        </Helmet>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/sell-my-car-no-title" element={<NoTitlePage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
