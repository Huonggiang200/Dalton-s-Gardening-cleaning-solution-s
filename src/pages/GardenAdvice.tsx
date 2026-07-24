import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CONFIG } from '../config';

export function GardenAdvice() {
  const posts = [
    {
      title: "What Photos Should You Send for a Garden Quote?",
      excerpt: "Take the right photos to help us give you an accurate price without a site visit.",
      route: "/garden-advice/what-to-send-for-a-garden-quote"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Garden Advice | {CONFIG.shortName}</title>
        <meta name="description" content="Practical advice and tips for maintaining your garden and outdoor spaces." />
      </Helmet>

      <div className="bg-pure-white py-12 lg:py-20 min-h-[70vh]">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <nav className="text-sm text-mist-grey-dark mb-8 flex gap-2 font-semibold">
            <Link to="/" className="hover:text-garden-green transition-colors">Home</Link>
            <span>/</span>
            <span className="text-charcoal">Garden Advice</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-[800] text-garden-green leading-tight mb-10 uppercase">Garden Advice</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post, idx) => (
              <Link key={idx} to={post.route} className="bg-mist-grey rounded-lg p-8 hover:bg-workwear-yellow transition-colors group">
                <h2 className="text-2xl font-bold text-garden-green mb-3">{post.title}</h2>
                <p className="text-charcoal/80 mb-6">{post.excerpt}</p>
                <div className="flex items-center text-sm font-bold uppercase tracking-widest text-garden-green group-hover:text-charcoal">
                  Read More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
