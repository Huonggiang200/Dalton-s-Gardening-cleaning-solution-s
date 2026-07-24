import { Helmet } from 'react-helmet-async';
import { PlaceholderImage } from '../components/PlaceholderImage';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CONFIG } from '../config';

interface GenericServicePageProps {
  title: string;
  subtitle: string;
  intro: string;
  inclusions: string[];
  imageFilename: string;
}

export function GenericServicePage({ title, subtitle, intro, inclusions, imageFilename }: GenericServicePageProps) {
  return (
    <>
      <Helmet>
        <title>{title} | {CONFIG.shortName}</title>
        <meta name="description" content={intro} />
      </Helmet>

      <div className="bg-pure-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Breadcrumbs */}
          <nav className="text-sm text-mist-grey-dark mb-8 flex gap-2 font-semibold">
            <Link to="/" className="hover:text-garden-green transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-garden-green transition-colors">Services</Link>
            <span>/</span>
            <span className="text-charcoal">{subtitle}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl font-extrabold mb-6 leading-tight">{title}</h1>
              <p className="text-lg text-charcoal/80 mb-8 leading-relaxed">
                {intro}
              </p>
              
              <div className="bg-cool-white p-8 border border-mist-grey rounded-sm mb-8">
                <h2 className="font-heading text-2xl font-bold mb-4">What this may include:</h2>
                <ul className="space-y-3">
                  {inclusions.map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-workwear-yellow font-bold mt-1">•</span>
                      <span className="font-semibold text-charcoal/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link to="/get-a-quote" className="inline-flex bg-workwear-yellow text-charcoal px-8 py-3.5 rounded-sm font-bold items-center gap-2 hover:bg-opacity-90 transition-all active:scale-95">
                Send Photos for a Quote <ArrowRight size={18} />
              </Link>
            </div>
            
            <div className="lg:sticky lg:top-32">
              <PlaceholderImage filename={imageFilename} aspectRatio="4/3" className="w-full object-cover rounded-sm shadow-md" />
              
              <div className="mt-8 bg-charcoal text-pure-white p-8 rounded-sm">
                <h3 className="font-heading text-xl font-bold mb-3">Factors affecting the quote</h3>
                <p className="text-mist-grey text-sm mb-4">Pricing is based on a practical assessment of the work required, considering access, waste removal, and the condition of the space.</p>
                <div className="pt-4 border-t border-mist-grey/20">
                  <span className="block text-sm font-semibold mb-1">Serving {CONFIG.location}</span>
                  <Link to="/areas-we-cover" className="text-sm text-workwear-yellow hover:underline">Check all areas covered</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
