import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CONFIG } from '../config';

export function Services() {
  const services = [
    { name: "Garden Maintenance", cta: "View Options", route: "/garden-maintenance-leeds", desc: "Regular lawn, hedge, and general garden care arranged for you." },
    { name: "Garden Clearances", cta: "See Clearance", route: "/garden-clearance-leeds", desc: "For overgrown lawns, weeds, and gardens that need a proper reset." },
    { name: "Hedge & Lawn Care", cta: "Explore Lawn Care", route: "/garden-maintenance-leeds", desc: "Keep your hedges neat and your lawn healthy with regular visits." },
    { name: "Fencing", cta: "Explore Fencing", route: "/garden-fencing-leeds", desc: "Repairs, replacements and new timber work." },
    { name: "Decking", cta: "Discuss Decking", route: "/decking-leeds", desc: "Restore your decking area with practical repairs and maintenance." },
    { name: "Jet Washing", cta: "See Results", route: "/jet-washing-leeds", desc: "Restore patios, paths, and decking surfaces." }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services | {CONFIG.shortName}</title>
        <meta name="description" content="Professional garden maintenance, clearance, fencing, decking, and jet washing services across Leeds." />
      </Helmet>

      <section className="py-20 lg:py-28 bg-cool-white border-t border-mist-grey min-h-[70vh]">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <span className="text-field-green font-bold tracking-widest text-xs mb-3 block text-center uppercase">
            All Services
          </span>
          <h1 className="text-4xl md:text-5xl font-[800] text-garden-green leading-tight mb-12 text-center uppercase">PRACTICAL HELP FOR GARDENS.</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, idx) => (
              <Link key={idx} to={service.route} className="bg-pure-white p-8 border border-mist-grey hover:border-workwear-yellow flex flex-col h-full transition-colors group rounded-lg shadow-sm">
                <h2 className="text-xl font-bold text-garden-green mb-3 flex-grow">{service.name}</h2>
                <p className="text-sm text-charcoal/80 mb-6">{service.desc}</p>
                <div className="inline-flex items-center text-[10px] font-[900] uppercase tracking-widest border-b-2 border-charcoal mt-auto w-fit group-hover:border-garden-green transition-colors">
                  {service.cta}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
