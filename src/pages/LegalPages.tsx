import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CONFIG } from '../config';

export function LegalPage({ type }: { type: 'privacy' | 'cookie' }) {
  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? 'Privacy Policy' : 'Cookie Policy';

  return (
    <>
      <Helmet>
        <title>{title} | {CONFIG.shortName}</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="bg-pure-white py-12 lg:py-20 min-h-[70vh]">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <nav className="text-sm text-mist-grey-dark mb-8 flex gap-2 font-semibold">
            <Link to="/" className="hover:text-garden-green transition-colors">Home</Link>
            <span>/</span>
            <span className="text-charcoal">{title}</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-[800] text-garden-green leading-tight mb-8 uppercase">{title}</h1>
          
          <div className="prose max-w-none text-charcoal/80 space-y-6">
            <p className="text-lg">
              This is a standard template for the {title.toLowerCase()}. Please consult a legal professional to generate an appropriate policy for your business operations.
            </p>
            
            <h2 className="text-2xl font-bold text-garden-green mt-8">Information We Collect</h2>
            <p>
              We collect information you provide directly to us when you request a quote, use our services, or communicate with us.
            </p>

            <h2 className="text-2xl font-bold text-garden-green mt-8">How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, to process transactions, and to communicate with you about quotes and ongoing work.
            </p>

            <h2 className="text-2xl font-bold text-garden-green mt-8">Contact Us</h2>
            <p>
              If you have any questions about this {title}, please <Link to="/contact" className="text-garden-green underline font-semibold">contact us</Link>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
