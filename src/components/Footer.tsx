import { Link } from 'react-router-dom';
import { CONFIG } from '../config';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-garden-green text-cool-white pt-16 pb-24 lg:pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div>
          <div className="flex flex-col mb-4">
            <span className="font-heading font-bold text-2xl tracking-wide uppercase leading-none">
              {CONFIG.shortName}
            </span>
            <span className="text-xs tracking-wider uppercase opacity-80 mt-1">
              {CONFIG.tagline}
            </span>
          </div>
          <p className="text-mist-grey text-sm mb-6 max-w-sm">
            Dalton's Gardening & Cleaning Solutions is a local family-run business based in Middleton, providing practical garden and outdoor property care across Leeds.
          </p>
        </div>

        <div>
          <h3 className="font-heading font-bold text-lg mb-4 text-workwear-yellow">Services</h3>
          <ul className="flex flex-col gap-3 text-sm text-mist-grey">
            <li><Link to="/garden-maintenance-leeds" className="hover:text-white transition-colors">Garden Maintenance</Link></li>
            <li><Link to="/garden-clearance-leeds" className="hover:text-white transition-colors">Garden Clearance</Link></li>
            <li><Link to="/garden-fencing-leeds" className="hover:text-white transition-colors">Fencing</Link></li>
            <li><Link to="/decking-leeds" className="hover:text-white transition-colors">Decking</Link></li>
            <li><Link to="/jet-washing-leeds" className="hover:text-white transition-colors">Jet Washing</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading font-bold text-lg mb-4 text-workwear-yellow">Areas</h3>
          <ul className="flex flex-col gap-3 text-sm text-mist-grey">
            <li><Link to="/areas/gardener-middleton-leeds" className="hover:text-white transition-colors">Middleton</Link></li>
            <li><Link to="/areas-we-cover" className="hover:text-white transition-colors">Beeston</Link></li>
            <li><Link to="/areas-we-cover" className="hover:text-white transition-colors">Wortley</Link></li>
            <li><Link to="/areas-we-cover" className="hover:text-white transition-colors">Armley</Link></li>
            <li><Link to="/areas-we-cover" className="hover:text-white transition-colors">All Areas</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading font-bold text-lg mb-4 text-workwear-yellow">Contact</h3>
          <ul className="flex flex-col gap-3 text-sm text-mist-grey mb-6">
            <li>Call: <a href={`tel:${CONFIG.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">{CONFIG.phone}</a></li>
            <li>Email: <a href={`mailto:${CONFIG.email}`} className="hover:text-white transition-colors">{CONFIG.email}</a></li>
            <li>{CONFIG.location}</li>
          </ul>
          <div className="flex gap-4">
            <a href={CONFIG.socials.facebook} className="text-mist-grey hover:text-workwear-yellow transition-colors" aria-label="Facebook">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href={CONFIG.socials.instagram} className="text-mist-grey hover:text-workwear-yellow transition-colors" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 border-t border-mist-grey/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-mist-grey/80">
        <p>&copy; {year} {CONFIG.businessName}. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}
