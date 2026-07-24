import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { CONFIG } from '../config';
import { cn } from '../utils';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Our Work', href: '/our-work' },
    { name: 'Areas We Cover', href: '/areas-we-cover' },
    { name: 'About', href: '/about-daltons' },
    { name: 'Advice', href: '/garden-advice' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top info bar */}
      <div className="hidden md:flex bg-garden-green text-pure-white py-2 px-8 justify-between items-center text-xs tracking-wider relative z-50">
        <span className="hidden md:inline-block">BASED IN MIDDLETON • SERVING LEEDS AND NEARBY AREAS</span>
        <span className="md:hidden text-center w-full uppercase">Local garden & outdoor property care</span>
        <a href={`tel:${CONFIG.phone.replace(/\s/g, '')}`} className="hidden md:flex items-center gap-2 hover:text-workwear-yellow transition-colors font-bold uppercase">
          CALL DARREN: {CONFIG.phone}
        </a>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          scrolled || !isHome ? "bg-pure-white border-b border-mist-grey shadow-sm" : "bg-pure-white border-b border-mist-grey",
          "px-4 md:px-8 py-3 md:py-4 flex justify-between items-center"
        )}
      >
        <div className="max-w-[1400px] w-full mx-auto flex justify-between items-center">
          <Link to="/" className="flex flex-col relative z-50">
            <span className="text-xl md:text-2xl font-[800] leading-none text-garden-green tracking-tighter">
              {CONFIG.shortName.toUpperCase()}
            </span>
            <span className="text-[9px] md:text-[10px] tracking-[0.2em] font-semibold text-field-green mt-1">
              GARDENING & CLEANING SOLUTIONS
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6 text-sm font-semibold text-garden-green">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="hover:text-field-green uppercase transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/get-a-quote"
              className="bg-workwear-yellow text-charcoal px-5 py-2.5 rounded-sm font-bold text-sm shadow-sm hover:brightness-95 transition-all active:scale-95 uppercase"
            >
              Get a Free Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-50 p-2 -mr-2 text-garden-green min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Drawer */}
        <div
          className={cn(
            "fixed inset-0 bg-pure-white z-40 transition-transform duration-300 ease-in-out lg:hidden pt-28 px-6 flex flex-col",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <ul className="flex flex-col gap-6 text-xl font-heading font-bold">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.href} className="text-charcoal block py-2 border-b border-mist-grey uppercase">
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
               <Link to="/get-a-quote" className="text-charcoal block py-2 border-b border-mist-grey uppercase">
                  Get a Free Quote
                </Link>
            </li>
          </ul>
        </div>
      </header>

      {/* Mobile Bottom Conversion Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-pure-white border-t border-mist-grey p-3 flex gap-3 z-50 pb-safe">
        <a href={`tel:${CONFIG.phone.replace(/\s/g, '')}`} className="flex-1 flex justify-center items-center gap-2 border border-garden-green text-garden-green rounded-sm h-[44px] font-semibold text-sm active:bg-mist-grey">
          <Phone size={18} />
          Call
        </a>
        <Link to="/get-a-quote" className="flex-1 flex justify-center items-center bg-workwear-yellow text-charcoal rounded-sm h-[44px] font-semibold text-sm active:bg-opacity-80">
          Get a Quote
        </Link>
      </div>
    </>
  );
}
