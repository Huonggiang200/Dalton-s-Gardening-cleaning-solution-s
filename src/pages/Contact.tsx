import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { CONFIG } from '../config';

export function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | {CONFIG.shortName}</title>
        <meta name="description" content={`Contact ${CONFIG.shortName} for garden maintenance, clearances, fencing, and jet washing across Leeds.`} />
      </Helmet>

      <div className="bg-pure-white py-12 lg:py-20 min-h-[70vh]">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <nav className="text-sm text-mist-grey-dark mb-8 flex gap-2 font-semibold">
            <Link to="/" className="hover:text-garden-green transition-colors">Home</Link>
            <span>/</span>
            <span className="text-charcoal">Contact Us</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-[800] text-garden-green leading-tight mb-6 uppercase">Contact Us</h1>
          <p className="text-lg text-charcoal/80 mb-12 max-w-2xl leading-relaxed">
            For the fastest response and an accurate quote, please send photos of the work required and your postcode via WhatsApp.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-mist-grey p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-garden-green mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <a href={`tel:${CONFIG.phone.replace(/\s/g, '')}`} className="flex items-start gap-4 group">
                  <div className="bg-pure-white p-3 rounded-full shadow-sm group-hover:bg-workwear-yellow transition-colors">
                    <Phone className="text-garden-green" size={24} />
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-charcoal/60 uppercase">Call or WhatsApp</span>
                    <span className="text-lg font-bold text-charcoal">{CONFIG.phone}</span>
                  </div>
                </a>
                
                <a href={`mailto:${CONFIG.email}`} className="flex items-start gap-4 group">
                  <div className="bg-pure-white p-3 rounded-full shadow-sm group-hover:bg-workwear-yellow transition-colors">
                    <Mail className="text-garden-green" size={24} />
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-charcoal/60 uppercase">Email</span>
                    <span className="text-lg font-bold text-charcoal">{CONFIG.email}</span>
                  </div>
                </a>
                
                <div className="flex items-start gap-4">
                  <div className="bg-pure-white p-3 rounded-full shadow-sm">
                    <MapPin className="text-garden-green" size={24} />
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-charcoal/60 uppercase">Based In</span>
                    <span className="text-lg font-bold text-charcoal">{CONFIG.publicLocation}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-garden-green text-pure-white p-8 rounded-lg flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-4">Want a quick quote?</h3>
              <p className="mb-8 text-pure-white/80">Skip the back-and-forth by sending us photos of your garden or outdoor space directly.</p>
              <Link to="/get-a-quote" className="bg-workwear-yellow text-charcoal px-6 py-3 rounded-sm font-bold uppercase text-sm hover:brightness-95 transition-all text-center w-full sm:w-auto self-start">
                Send Photos for a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
