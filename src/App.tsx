/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Quote } from './pages/Quote';
import { OurWork } from './pages/OurWork';
import { GenericServicePage } from './components/GenericServicePage';
import { PlaceholderPage } from './pages/PlaceholderPage';

// Import new pages
import { Services } from './pages/Services';
import { AreasWeCover } from './pages/AreasWeCover';
import { AreaSpecific } from './pages/AreaSpecific';
import { About } from './pages/About';
import { GardenAdvice } from './pages/GardenAdvice';
import { GardenAdvicePost } from './pages/GardenAdvicePost';
import { Contact } from './pages/Contact';
import { LegalPage } from './pages/LegalPages';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            
            <Route path="services" element={<Services />} />
            
            <Route path="garden-maintenance-leeds" element={
              <GenericServicePage 
                title="Regular Garden Maintenance in Leeds"
                subtitle="Garden Maintenance"
                intro="For gardens that need consistent attention rather than another short-lived tidy-up. Arrange practical lawn, hedge and general garden care around what the property actually needs."
                inclusions={["Lawn mowing and edging", "Hedge and shrub trimming", "Weeding", "Border tidying", "Seasonal cutbacks", "General garden tidying", "Fortnightly or monthly visits where suitable"]}
                imageFilename="regular-garden-maintenance-leeds.webp"
              />
            } />
            <Route path="garden-clearance-leeds" element={
              <GenericServicePage 
                title="Overgrown Garden Clearance in Leeds"
                subtitle="Garden Clearance"
                intro="If the garden has become difficult to use, you do not need to know where to begin. Send a few photos and Dalton's can help establish what needs cutting back, clearing and removing."
                inclusions={["Cutting back overgrowth", "Weed and bramble removal", "Lawn recovery cut", "Hedge reduction", "Border clearance", "General waste gathering", "Preparation for future maintenance"]}
                imageFilename="garden-clearance-leeds-after.webp"
              />
            } />
            <Route path="garden-fencing-leeds" element={
              <GenericServicePage 
                title="Garden Fencing and Fence Repairs in Leeds"
                subtitle="Fencing"
                intro="Practical fencing repairs and installations. We assess whether a repair is possible before recommending a full replacement, ensuring you get honest advice."
                inclusions={["Damaged panels", "Leaning posts", "Weathered fencing", "Repair versus replacement", "New timber panels", "Practical site assessment"]}
                imageFilename="garden-fencing-leeds.webp"
              />
            } />
            <Route path="decking-leeds" element={
              <GenericServicePage 
                title="Decking Repairs and Practical Decking Work in Leeds"
                subtitle="Decking"
                intro="Restore your decking area with practical repairs and maintenance. We focus on fixing damaged boards and weathered surfaces without upselling unnecessary work."
                inclusions={["Damaged boards", "Loose sections", "Weathered surfaces", "Small repair and replacement work", "Realistic assessment of the existing structure"]}
                imageFilename="decking-repair-leeds.webp"
              />
            } />
            <Route path="jet-washing-leeds" element={
              <GenericServicePage 
                title="Patio and Exterior Jet Washing in Leeds"
                subtitle="Jet Washing"
                intro="Professional pressure washing to remove dirt, moss and weather-related build-up from patios, paths, and decking, providing realistic outcomes based on surface condition."
                inclusions={["Patios", "Paths", "Paving", "Decking where appropriate", "Dirt, moss and weather-related build-up", "Realistic outcomes depending on surface condition"]}
                imageFilename="patio-jet-washing-leeds.webp"
              />
            } />
            
            <Route path="our-work" element={<OurWork />} />
            <Route path="areas-we-cover" element={<AreasWeCover />} />
            <Route path="areas/:areaId" element={<AreaSpecific />} />
            
            <Route path="about-daltons" element={<About />} />
            
            <Route path="garden-advice" element={<GardenAdvice />} />
            <Route path="garden-advice/what-to-send-for-a-garden-quote" element={<GardenAdvicePost />} />
            
            <Route path="get-a-quote" element={<Quote />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy-policy" element={<LegalPage type="privacy" />} />
            <Route path="cookie-policy" element={<LegalPage type="cookie" />} />
            
            <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}


