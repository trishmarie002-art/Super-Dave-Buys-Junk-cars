import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { StickyCTA } from '../components/StickyCTA';
import { BUSINESS_INFO } from '../constants';
import { BLOG_POSTS, getBlogPost } from '../data/blogPosts';

const SITE_URL = 'https://superdavebuysjunkcarsandtrucks.net';

export default function BlogPostPage() {
  const { slug = '' } = useParams();
  const post = getBlogPost(slug);

  if (!post) return <Navigate to="/blog" replace />;

  const canonical = `${SITE_URL}/blog/${post.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    mainEntityOfPage: canonical,
    author: { '@type': 'Organization', name: BUSINESS_INFO.name },
    publisher: { '@type': 'Organization', name: BUSINESS_INFO.name },
    datePublished: '2026-09-29',
    dateModified: '2026-09-29'
  };

  const related = BLOG_POSTS.filter((item) => item.slug !== post.slug).slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.metaDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:url" content={canonical} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <Header />

      <main className="flex-grow bg-[#f4f4f4]">
        <section className="relative text-white py-20 md:py-28 overflow-hidden">
          <img
            src="https://pub-a35884625cfe400d9088764a7f0e49e0.r2.dev/Dave%20Buy's%20Junk%20cars/webuyjunkcarssanantonio.webp"
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-dark/70" />
          <div className="relative z-10 container-custom text-center max-w-4xl mx-auto">
            <p className="text-brand-yellow font-black uppercase tracking-widest mb-3">Super Dave Junk Car Blog</p>
            <h1>{post.title}</h1>
          </div>
        </section>

        <section className="container-custom py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
            <article className="bg-white border border-slate-200 rounded-xl p-6 md:p-10 shadow-sm">
              <p className="font-bold text-slate-700 mb-6 text-lg">{post.metaDescription}</p>
              <div className="space-y-5 text-slate-600 leading-8">
                {post.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-10 bg-brand-dark text-white rounded-xl p-6 md:p-8">
                <h2 className="text-brand-yellow mb-3">Need an Offer on Your Junk Car?</h2>
                <p className="text-slate-200 mb-5">
                  Call or text Super Dave for a fast cash offer on your junk car, truck or SUV in San Antonio and surrounding areas.
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="inline-flex items-center gap-2 bg-brand-yellow text-brand-dark px-6 py-3 rounded-lg font-black uppercase"
                >
                  <Phone size={20} /> {BUSINESS_INFO.phoneFormatted}
                </a>
              </div>
            </article>

            <aside className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                <h2 className="text-brand-blue text-xl mb-4">Related Articles</h2>
                <div className="flex flex-col gap-3">
                  {related.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/blog/${item.slug}`}
                      className="text-sm font-bold text-brand-blue hover:text-brand-red"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                <h2 className="text-brand-blue text-xl mb-4">Local Service</h2>
                <Link to="/" className="text-sm font-bold text-brand-red hover:text-brand-blue">
                  Cash for Junk Cars in San Antonio TX
                </Link>
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
