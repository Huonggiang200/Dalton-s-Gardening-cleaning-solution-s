import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { Helmet } from 'react-helmet-async';
import { CONFIG } from '../config';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-body bg-cool-white text-charcoal">
      <Helmet>
        {CONFIG.demoMode && <meta name="robots" content="noindex, nofollow" />}
        <html lang="en-GB" />
      </Helmet>
      
      <Header />
      
      <main className="flex-grow pb-[68px] lg:pb-0">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}
