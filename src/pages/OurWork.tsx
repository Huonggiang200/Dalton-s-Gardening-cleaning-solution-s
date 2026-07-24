import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PlaceholderImage } from '../components/PlaceholderImage';
import { CONFIG } from '../config';
import { cn } from '../utils';

export function OurWork() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Maintenance', 'Clearances', 'Fencing', 'Decking', 'Jet Washing'];

  const projects = [
    {
      category: 'Clearances',
      area: 'Middleton, Leeds',
      problem: 'Heavily overgrown garden requiring a complete reset and bramble removal.',
      afterImg: 'garden-clearance-leeds-after.webp',
      beforeImg: 'garden-clearance-leeds-before.webp',
      route: '/garden-clearance-leeds'
    },
    {
      category: 'Maintenance',
      area: 'Beeston, Leeds',
      problem: 'Regular lawn mowing, edging and hedge trimming.',
      afterImg: 'regular-garden-maintenance-leeds.webp',
      route: '/garden-maintenance-leeds'
    },
    {
      category: 'Fencing',
      area: 'Wortley, Leeds',
      problem: 'Replacement of damaged timber fence panels after storm damage.',
      afterImg: 'garden-fencing-leeds.webp',
      route: '/garden-fencing-leeds'
    },
    {
      category: 'Jet Washing',
      area: 'Tingley, Leeds',
      problem: 'Removal of moss, dirt and weather-related build-up from an old patio.',
      afterImg: 'patio-jet-washing-leeds.webp',
      route: '/jet-washing-leeds'
    },
    {
      category: 'Decking',
      area: 'Armley, Leeds',
      problem: 'Repairing loose boards and treating weathered timber decking.',
      afterImg: 'decking-repair-leeds.webp',
      route: '/decking-leeds'
    },
    {
      category: 'Maintenance',
      area: 'East End Park, Leeds',
      problem: 'Seasonal cutback of large shrubs and general garden tidying.',
      afterImg: 'hedge-lawn-care-leeds.webp',
      route: '/garden-maintenance-leeds'
    }
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <>
      <Helmet>
        <title>Our Work | {CONFIG.shortName}</title>
        <meta name="description" content="View examples of garden maintenance, clearance, fencing and exterior property care completed across Leeds." />
      </Helmet>

      <div className="bg-pure-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-12 max-w-2xl">
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Work should be easy to judge.</h1>
            <p className="text-lg text-charcoal/80">
              Before-and-after photographs help customers understand the type of work involved without relying on exaggerated claims.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-5 py-2 rounded-sm font-semibold text-sm transition-colors border",
                  filter === cat 
                    ? "bg-garden-green text-pure-white border-garden-green" 
                    : "bg-cool-white text-charcoal/70 border-mist-grey hover:border-garden-green/50 hover:text-charcoal"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {CONFIG.demoMode && (
             <div className="bg-charcoal/5 border border-mist-grey p-4 rounded-sm text-sm text-charcoal/80 mb-8 max-w-3xl font-semibold">
               Concept service imagery shown. This should be replaced with Dalton's real Facebook and Instagram work, with permission, before live launch.
             </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, idx) => (
              <div key={idx} className="bg-cool-white border border-mist-grey rounded-sm overflow-hidden flex flex-col group hover:shadow-md transition-shadow">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <PlaceholderImage filename={project.afterImg} aspectRatio="4/3" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute top-3 left-3 bg-pure-white/90 backdrop-blur-sm text-charcoal text-xs font-bold px-2 py-1 tracking-wider uppercase rounded-sm">
                    {project.category}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-sm font-semibold text-mist-grey-dark mb-2 block">{project.area}</span>
                  <p className="text-charcoal/80 mb-6 flex-grow">{project.problem}</p>
                  
                  <Link to={project.route} className="inline-flex items-center text-sm font-semibold text-garden-green group-hover:text-charcoal transition-colors pt-4 border-t border-mist-grey">
                    View Project Format
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/get-a-quote" className="inline-block bg-workwear-yellow text-charcoal px-8 py-3.5 rounded-sm font-bold hover:bg-opacity-90 transition-all active:scale-95">
              Request a Similar Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
