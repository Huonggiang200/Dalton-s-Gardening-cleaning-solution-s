import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { PlaceholderImage } from '../components/PlaceholderImage';
import { CONFIG } from '../config';

export function AreaSpecific() {
  const { areaId } = useParams();
  
  // Format areaId from URL (e.g. "gardener-middleton-leeds")
  let areaName = "Middleton";
  if (areaId) {
    const parts = areaId.split('-');
    if (parts.length > 1) {
      // capitalize first letter
      areaName = parts[1].charAt(0).toUpperCase() + parts[1].slice(1);
    }
  }

  return (
    <>
      <Helmet>
        <title>Gardener in {areaName}, Leeds | {CONFIG.shortName}</title>
        <meta name="description" content={`Local garden maintenance and property care in ${areaName}, Leeds.`} />
      </Helmet>

      <div className="bg-pure-white py-12 lg:py-20 min-h-[70vh]">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <nav className="text-sm text-mist-grey-dark mb-8 flex gap-2 font-semibold">
            <Link to="/" className="hover:text-garden-green transition-colors">Home</Link>
            <span>/</span>
            <Link to="/areas-we-cover" className="hover:text-garden-green transition-colors">Areas</Link>
            <span>/</span>
            <span className="text-charcoal">{areaName}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <span className="text-field-green font-bold tracking-widest text-xs mb-3 block uppercase">
                Local Services
              </span>
              <h1 className="text-4xl md:text-5xl font-[800] text-garden-green leading-tight mb-6 uppercase">
                Gardener in {areaName}
              </h1>
              <p className="text-lg text-charcoal/80 mb-6 leading-relaxed">
                Dalton's provides practical garden and outdoor property care across {areaName} and the surrounding Leeds area. 
                Whether you need regular maintenance, a one-off clearance, or fencing and jet washing work.
              </p>
              <Link to="/get-a-quote" className="inline-block bg-workwear-yellow text-charcoal px-6 py-3 rounded-sm font-bold uppercase text-sm hover:brightness-95 transition-all">
                Get a Quote for {areaName}
              </Link>
            </div>
            <div>
              <PlaceholderImage filename={`local-gardener-${areaName.toLowerCase()}-leeds.webp`} aspectRatio="4/3" className="w-full object-cover rounded-lg shadow-sm border border-mist-grey" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
             <Link to="/garden-maintenance-leeds" className="bg-mist-grey p-6 rounded-lg hover:bg-workwear-yellow transition-colors group">
                <h3 className="font-bold text-garden-green mb-2">Maintenance</h3>
                <p className="text-sm text-charcoal/80">Regular lawn and hedge care.</p>
             </Link>
             <Link to="/garden-clearance-leeds" className="bg-mist-grey p-6 rounded-lg hover:bg-workwear-yellow transition-colors group">
                <h3 className="font-bold text-garden-green mb-2">Clearance</h3>
                <p className="text-sm text-charcoal/80">Overgrown garden reset.</p>
             </Link>
             <Link to="/garden-fencing-leeds" className="bg-mist-grey p-6 rounded-lg hover:bg-workwear-yellow transition-colors group">
                <h3 className="font-bold text-garden-green mb-2">Fencing</h3>
                <p className="text-sm text-charcoal/80">Repairs and replacements.</p>
             </Link>
          </div>
        </div>
      </div>
    </>
  );
}
