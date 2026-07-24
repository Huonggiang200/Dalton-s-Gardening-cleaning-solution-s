import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { DemoBanner } from './DemoBanner';
import { Helmet } from 'react-helmet-async';
import { CONFIG } from '../config';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-body bg-cool-white text-charcoal">
      <Helmet>
        {CONFIG.demoMode && <meta name="robots" content="noindex, nofollow" />}
        <html lang="en-GB" />
      </Helmet>
      
      <DemoBanner />
      <Header />
      
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}
