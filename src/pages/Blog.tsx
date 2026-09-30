import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { StickyCTA } from '../components/StickyCTA';
import { BLOG_POSTS } from '../data/blogPosts';

const SITE_URL = 'https://superdavebuysjunkcarsandtrucks.net';

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Junk Car Blog | Super Dave Buys Junk Cars San Antonio</title>
        <meta name="description" content="Read Super Dave's junk car blog for tips on selling junk cars, trucks and SUVs in San Antonio, Texas, including title, towing, value and pickup advice." />
        <link rel="canonical" href={`${SITE_URL}/blog`} />
      </Helmet>

      <Header />

      <main className="flex-grow bg-[#f4f4f4]">
        <section className="bg-brand-blue text-white py-16 md:py-20">
          <div className="container-custom text-center max-w-4xl mx-auto">
            <p className="text-brand-yellow font-black uppercase tracking-widest mb-3">Super Dave Resources</p>
            <h1 className="mb-4">Junk Car Blog</h1>
            <p className="text-lg text-slate-100">
              Helpful guides for selling junk cars, trucks and SUVs in San Antonio and across South Texas.
            </p>
          </div>
        </section>

        <section className="container-custom py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <article key={post.slug} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col">
                <h2 className="text-brand-blue text-xl mb-3">{post.title}</h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-grow">{post.metaDescription}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="font-black text-brand-red uppercase text-sm hover:text-brand-blue"
                >
                  Read Article →
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
}
