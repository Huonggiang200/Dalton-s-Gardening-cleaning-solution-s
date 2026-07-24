import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { CONFIG } from '../config';

export function AreasWeCover() {
  const areas = [
    "Middleton",
    "Belle Isle",
    "Beeston",
    "Holbeck",
    "Hunslet",
    "Morley",
    "Rothwell",
    "Robin Hood",
    "Tingley",
    "Ardsley",
    "Outwood"
  ];

  return (
    <>
      <Helmet>
        <title>Areas We Cover | {CONFIG.shortName}</title>
        <meta name="description" content="Local garden and outdoor property care across Leeds, including Middleton, Beeston, Morley, and Rothwell." />
      </Helmet>

      <div className="bg-pure-white py-12 lg:py-20 min-h-[70vh]">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <nav className="text-sm text-mist-grey-dark mb-8 flex gap-2 font-semibold">
            <Link to="/" className="hover:text-garden-green transition-colors">Home</Link>
            <span>/</span>
            <span className="text-charcoal">Areas We Cover</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-[800] text-garden-green leading-tight mb-6 uppercase">Areas We Cover in Leeds</h1>
          <p className="text-lg text-charcoal/80 mb-10 leading-relaxed max-w-2xl">
            Dalton's is based in Middleton and provides garden maintenance, clearances, fencing, decking and jet washing across South Leeds and surrounding areas.
          </p>

          <div className="bg-mist-grey rounded-lg p-8 mb-12">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <MapPin size={20} className="text-garden-green" />
              Primary Service Areas
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {areas.map((area, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-field-green rounded-full"></div>
                  <span className="font-semibold text-charcoal">{area}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-workwear-yellow rounded-lg p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-bold text-xl mb-2 text-charcoal">Don't see your area?</h3>
              <p className="text-charcoal/80 text-sm">We cover most of South Leeds. Send us your postcode to check.</p>
            </div>
            <Link to="/get-a-quote" className="bg-charcoal text-pure-white px-6 py-3 rounded-sm font-bold uppercase text-sm hover:bg-opacity-90 transition-all shrink-0">
              Check Your Postcode
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
