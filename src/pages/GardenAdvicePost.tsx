import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { PlaceholderImage } from '../components/PlaceholderImage';
import { CONFIG } from '../config';

export function GardenAdvicePost() {
  return (
    <>
      <Helmet>
        <title>What Photos Should You Send for a Garden Quote? | {CONFIG.shortName}</title>
        <meta name="description" content="Learn what photos to send to get an accurate quote for garden maintenance, clearance, or fencing." />
      </Helmet>

      <div className="bg-pure-white py-12 lg:py-20 min-h-[70vh]">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <nav className="text-sm text-mist-grey-dark mb-8 flex gap-2 font-semibold">
            <Link to="/" className="hover:text-garden-green transition-colors">Home</Link>
            <span>/</span>
            <Link to="/garden-advice" className="hover:text-garden-green transition-colors">Advice</Link>
            <span>/</span>
            <span className="text-charcoal truncate">What to Send</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-[800] text-garden-green leading-tight mb-6 uppercase">What Photos Should You Send for a Garden Quote?</h1>
          <p className="text-xl text-charcoal/80 mb-8 leading-relaxed">
            Taking the right photos helps us provide a fast and accurate quote without needing to arrange an initial visit.
          </p>

          <div className="mb-10">
            <PlaceholderImage filename="send-garden-photos-for-quote.webp" aspectRatio="16/9" className="w-full rounded-lg shadow-sm border border-mist-grey object-cover" />
          </div>

          <div className="space-y-8 text-charcoal/80 leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-garden-green mb-4">1. Show the whole space</h2>
              <p>
                Stand back and take a wide shot of the entire garden or area that needs work. This gives us context about access, size, and the general layout.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-garden-green mb-4">2. Highlight the problem areas</h2>
              <p>
                Take closer photos of specific things that need attention. If a fence panel is broken, take a photo of the damage. If there's a large stump or thick brambles, get a clear shot of those so we know what we're dealing with.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-garden-green mb-4">3. Check access routes</h2>
              <p>
                If we need to bring tools or remove waste, show us the access route. A photo of the side gate, alleyway, or path to the road helps us plan logistics.
              </p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-mist-grey rounded-lg border border-garden-green/20">
            <h3 className="text-xl font-bold text-garden-green mb-3">Ready to get a quote?</h3>
            <p className="mb-6">Send your photos and your postcode to us via WhatsApp for a quick response.</p>
            <Link to="/get-a-quote" className="inline-block bg-workwear-yellow text-charcoal px-6 py-3 rounded-sm font-bold uppercase text-sm hover:brightness-95 transition-all">
              Start Your Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
