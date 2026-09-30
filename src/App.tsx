/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NoTitlePage from './pages/NoTitlePage';
import ServiceAreaPage from './pages/ServiceAreaPage';
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
          <title>Cash for Junk Cars in San Antonio TX</title>
          <meta name="description" content="Cash for Junk Cars in San Antonio TX. Super Dave buys junk cars, trucks and SUVs with fast cash offers, free towing and same-day pickup available." />
          <meta name="keywords" content={KEYWORDS.join(', ')} />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Cash for Junk Cars in San Antonio TX" />
          <meta property="og:description" content="Cash for Junk Cars in San Antonio TX. Fast cash offers, free towing and same-day pickup from Super Dave." />
          <meta property="og:image" content="https://pub-a35884625cfe400d9088764a7f0e49e0.r2.dev/Dave%20Buy's%20Junk%20cars/webuyjunkcarssanantoniologo-removebg-preview.png" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Cash for Junk Cars in San Antonio TX" />
          <meta name="twitter:description" content="Cash for Junk Cars in San Antonio TX. Fast cash offers, free towing and same-day pickup." />
          <meta name="twitter:image" content="https://pub-a35884625cfe400d9088764a7f0e49e0.r2.dev/Dave%20Buy's%20Junk%20cars/webuyjunkcarssanantoniologo-removebg-preview.png" />

          <script type="application/ld+json">
            {JSON.stringify(schemaMarkup)}
          </script>
        </Helmet>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/sell-my-car-no-title" element={<NoTitlePage />} />
          <Route path="/:slug" element={<ServiceAreaPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
