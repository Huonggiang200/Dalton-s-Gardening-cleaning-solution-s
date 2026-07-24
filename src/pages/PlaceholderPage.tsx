import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CONFIG } from '../config';
import { Info } from 'lucide-react';

export function PlaceholderPage({ title = "Page Not Found" }: { title?: string }) {
  return (
    <>
      <Helmet>
        <title>{title} | {CONFIG.shortName}</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="bg-pure-white py-20 lg:py-32 min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="w-16 h-16 bg-mist-grey text-charcoal rounded-full flex items-center justify-center mx-auto mb-6">
          <Info size={32} />
        </div>
        
        <h1 className="text-4xl font-[800] text-garden-green uppercase mb-4">{title}</h1>
        
        <p className="text-lg text-charcoal/70 max-w-lg mx-auto mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex gap-4 justify-center">
          <Link to="/" className="bg-charcoal text-pure-white px-8 py-3 rounded-sm font-bold uppercase text-sm hover:bg-garden-green transition-colors">
            Return Home
          </Link>
          <Link to="/get-a-quote" className="bg-workwear-yellow text-charcoal px-8 py-3 rounded-sm font-bold uppercase text-sm hover:brightness-95 transition-colors">
            Get a Quote
          </Link>
        </div>
      </div>
    </>
  );
}
