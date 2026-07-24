import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { PlaceholderImage } from '../components/PlaceholderImage';
import { CONFIG } from '../config';

export function About() {
  return (
    <>
      <Helmet>
        <title>About Us | {CONFIG.shortName}</title>
        <meta name="description" content="Dalton's is a small family-run garden maintenance and property care business based in Middleton, Leeds." />
      </Helmet>

      <div className="bg-pure-white py-12 lg:py-20 min-h-[70vh]">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <nav className="text-sm text-mist-grey-dark mb-8 flex gap-2 font-semibold">
            <Link to="/" className="hover:text-garden-green transition-colors">Home</Link>
            <span>/</span>
            <span className="text-charcoal">About Us</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-field-green font-bold tracking-widest text-xs mb-3 block uppercase">
                The Business
              </span>
              <h1 className="text-4xl md:text-5xl font-[800] text-garden-green leading-tight mb-6 uppercase">A Local Name Behind the Work.</h1>
              
              <div className="space-y-4 text-charcoal/80 leading-relaxed">
                <p>
                  Dalton's is a small family-run business based in Middleton, providing practical garden and outdoor property care across Leeds. 
                </p>
                <p>
                  The focus is simple: understand the job, agree what needs doing, and leave the space properly sorted. We don't try to upscale jobs or pitch unnecessary work. 
                </p>
                <p>
                  Whether it is regular mowing, tackling an overgrown jungle, replacing a damaged fence panel, or jet washing a slippery patio, we approach every job with the same straightforward attitude.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/get-a-quote" className="bg-workwear-yellow text-charcoal px-6 py-3 rounded-sm font-bold uppercase text-sm hover:brightness-95 transition-all">
                  Get a Quote
                </Link>
                <Link to="/our-work" className="border-2 border-garden-green text-garden-green px-6 py-3 rounded-sm font-bold uppercase text-sm hover:bg-garden-green hover:text-pure-white transition-colors">
                  See Our Work
                </Link>
              </div>
            </div>
            
            <div>
              <PlaceholderImage filename="local-gardener-middleton-leeds.webp" aspectRatio="4/3" className="w-full object-cover rounded-lg shadow-sm border border-mist-grey" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
