import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { PlaceholderImage } from '../components/PlaceholderImage';
import { ArrowRight, CheckCircle2, ChevronRight, ChevronDown } from 'lucide-react';
import { cn } from '../utils';
import gardenMaintenanceImg from '../images/Garden Maintenance.jpg';

// Section Components
function Hero() {
  return (
    <div className="col-span-1 md:col-span-12 lg:col-span-7 lg:row-span-4 bg-pure-white rounded-lg border-0 md:border md:border-mist-grey flex flex-col md:flex-row relative overflow-hidden">
      {/* Left Content Area */}
      <div className="w-full md:w-[52%] relative z-20 bg-pure-white p-6 pt-5 md:p-8 lg:p-10 flex flex-col justify-center shrink-0">
        
        {/* Soft gradient transition on desktop */}
        <div className="hidden md:block absolute top-0 -right-24 w-24 h-full bg-gradient-to-r from-pure-white to-transparent pointer-events-none z-10"></div>
        
        <span className="text-field-green font-bold tracking-widest text-xs mb-2 md:mb-3 block uppercase">
          Local Garden & Outdoor Property Care
        </span>
        
        <h1 className="text-[clamp(40px,11vw,46px)] md:text-[clamp(2.5rem,5vw,4.25rem)] font-[800] text-garden-green leading-[0.95] mb-3 md:mb-4 uppercase break-words">
          <span className="hidden md:inline">GET IT SORTED.<br/>KEEP IT SORTED.</span>
          <span className="md:hidden">GET IT<br/>SORTED.<br/>KEEP IT<br/>SORTED.</span>
        </h1>
        
        <p className="text-base md:text-lg text-charcoal max-w-[420px] mb-6 md:mb-8 leading-[1.45] md:leading-snug">
          Garden maintenance and outdoor property care across Leeds. From regular mowing to overgrown clearances.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
          <Link to="/get-a-quote" className="w-full sm:w-auto bg-workwear-yellow text-charcoal px-6 py-3 rounded-sm font-bold shadow-sm flex items-center justify-center uppercase text-sm transition-colors hover:brightness-95">
            Send Photos for a Quote
          </Link>
          <Link to="/our-work" className="w-full sm:w-auto border-2 border-garden-green text-garden-green px-6 py-3 rounded-sm font-bold uppercase text-sm text-center transition-colors hover:bg-garden-green hover:text-pure-white">
            See the Work
          </Link>
        </div>
      </div>
      
      {/* Right Image Area */}
      <div className="w-full h-[260px] md:h-auto md:w-[48%] relative shrink-0 flex-grow bg-mist-grey">
        {/* Subtle dark green overlay */}
        <div className="absolute inset-0 bg-[#1A2B23]/10 z-10 mix-blend-multiply pointer-events-none"></div>
        
        <img 
          src={gardenMaintenanceImg} 
          alt="Garden maintenance in Leeds" 
          className="absolute inset-0 w-full h-full object-cover object-[center_70%] md:object-[center_60%]"
        />
        
        {/* Understated Label */}
        <div className="absolute bottom-3 left-3 md:bottom-6 md:left-6 z-20 bg-[#1A2B23] text-pure-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-[2px] shadow-sm">
          GARDEN MAINTENANCE • LEEDS
        </div>
      </div>
    </div>
  );
}

function TrustStrip() {
  return (
    <div className="col-span-1 md:col-span-4 lg:row-span-2 bg-mist-grey rounded-lg p-5 md:p-6 flex flex-col justify-center gap-3 h-[144px]">
      <div className="flex items-center gap-3 text-sm font-bold text-garden-green">
        <div className="w-4 h-4 bg-field-green rounded-full shrink-0"></div> Local family business
      </div>
      <div className="flex items-center gap-3 text-sm font-bold text-garden-green">
        <div className="w-4 h-4 bg-field-green rounded-full shrink-0"></div> Based in Middleton
      </div>
      <div className="flex items-center gap-3 text-sm font-bold text-garden-green">
        <div className="w-4 h-4 bg-field-green rounded-full shrink-0"></div> One-off and regular visits
      </div>
      <div className="flex items-center gap-3 text-sm font-bold text-garden-green">
        <div className="w-4 h-4 bg-field-green rounded-full shrink-0"></div> Free, straightforward quotes
      </div>
    </div>
  );
}

function ProblemLedChooser({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <Link to="/garden-clearance-leeds" className="col-span-1 md:col-span-6 lg:col-span-5 lg:row-span-2 bg-garden-green text-pure-white rounded-lg p-5 md:p-6 flex flex-col justify-between group hover:bg-[#1a4a3b] transition-colors">
        <div>
          <h2 className="text-xl font-bold mb-1">"It's getting away from us."</h2>
          <p className="text-sm text-pure-white/70">For overgrown lawns, weeds, and gardens that need a proper reset.</p>
        </div>
        <div className="flex justify-between items-end mt-6 md:mt-8">
          <span className="text-xs font-bold text-workwear-yellow uppercase tracking-tighter">Garden Clearance</span>
          <div className="bg-pure-white/10 p-2 rounded-full"><ArrowRight size={16} /></div>
        </div>
      </Link>

      <Link to="/garden-maintenance-leeds" className="col-span-1 md:col-span-6 lg:col-span-5 lg:row-span-2 bg-pure-white rounded-lg border border-mist-grey p-5 md:p-6 flex flex-col justify-between shadow-sm hover:border-workwear-yellow transition-colors group">
        <div>
          <h2 className="text-xl font-bold mb-1 text-garden-green">"We need someone to keep on top of it."</h2>
          <p className="text-sm text-charcoal/70">Regular lawn, hedge, and general garden care arranged for you.</p>
        </div>
        <div className="flex justify-between items-end mt-6 md:mt-8">
          <span className="text-xs font-bold text-field-green uppercase">Regular Care</span>
          <div className="bg-garden-green/5 p-2 rounded-full"><ArrowRight size={16} /></div>
        </div>
      </Link>

      {children}

      <Link to="/jet-washing-leeds" className="col-span-1 md:col-span-4 lg:row-span-2 bg-pure-white rounded-lg border border-mist-grey p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4 hover:shadow-md transition-shadow group h-[114px]">
        <div className="w-24 h-24 shrink-0 bg-charcoal/5 rounded flex flex-col items-center justify-center p-2 text-center text-[10px] font-bold overflow-hidden relative">
          <PlaceholderImage filename="patio-jet-washing-leeds.webp" aspectRatio="1/1" className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-multiply" />
          <span className="text-field-green z-10 relative">BEFORE</span>
          <div className="w-full h-1 bg-garden-green/20 my-1 z-10 relative"></div>
          <span className="text-garden-green z-10 relative">AFTER</span>
        </div>
        <div>
          <h3 className="font-bold text-garden-green">Jet Washing</h3>
          <p className="text-xs text-charcoal/60 mt-1">Restore patios, paths, and decking surfaces.</p>
        </div>
      </Link>

      <Link to="/garden-fencing-leeds" className="col-span-1 md:col-span-4 lg:row-span-2 bg-workwear-yellow rounded-lg p-5 md:p-6 flex flex-col justify-center relative overflow-hidden group h-[114px]">
        <div className="relative z-10">
          <h3 className="font-bold text-charcoal text-lg">Fencing & Decking</h3>
          <p className="text-xs text-charcoal/80 mt-1">Repairs, replacements and new timber work.</p>
          <div className="mt-4 text-[10px] font-[900] uppercase tracking-widest border-b-2 border-charcoal inline-block">Explore Options</div>
        </div>
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-charcoal/5 rounded-full rotate-12 transition-transform group-hover:scale-110"></div>
      </Link>
    </>
  );
}

function VisualProof() {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section className="py-20 lg:py-28 bg-pure-white border-t border-mist-grey">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-12 items-center">
        <div className="w-full lg:w-1/3">
          <span className="text-field-green font-bold tracking-widest text-xs mb-3 block uppercase">
            Real Results
          </span>
          <h2 className="text-4xl md:text-5xl font-[800] text-garden-green leading-tight mb-4">SEE THE DIFFERENCE, NOT THE SALES PITCH.</h2>
          <p className="text-charcoal/80 mb-8 leading-snug">
            Concept imagery shown in this website preview. Replace with Dalton's real project photos before launch.
          </p>
          <Link to="/our-work" className="inline-block border-2 border-garden-green text-garden-green px-6 py-3 rounded-sm font-bold uppercase text-sm hover:bg-garden-green hover:text-pure-white transition-colors">
            View the Work
          </Link>
        </div>
        
        <div className="w-full lg:w-2/3">
          <div 
            className="relative w-full aspect-[4/3] md:aspect-[16/9] bg-mist-grey select-none overflow-hidden rounded-lg border border-mist-grey shadow-sm"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
              setSliderPos((x / rect.width) * 100);
            }}
            onTouchMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
              setSliderPos((x / rect.width) * 100);
            }}
          >
            {/* After Image (Background) */}
            <div className="absolute inset-0">
              <PlaceholderImage filename="garden-clearance-leeds-after.webp" aspectRatio="16/9" className="w-full h-full object-cover" />
            </div>
            
            {/* Before Image (Foreground overlay) */}
            <div 
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <div className="absolute inset-y-0 left-0 w-[100vw] sm:w-[calc(100vw-2rem)] md:w-[calc(100vw-4rem)] lg:w-[calc((100vw-8rem)*0.66)] max-w-[calc(80rem*0.66)]">
                 <PlaceholderImage filename="garden-clearance-leeds-before.webp" aspectRatio="16/9" className="w-full h-full object-cover" />
              </div>
            </div>
            
            {/* Slider Handle */}
            <div 
              className="absolute inset-y-0 w-1 bg-pure-white cursor-ew-resize flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.3)]"
              style={{ left: `calc(${sliderPos}% - 2px)` }}
            >
              <div className="w-8 h-8 bg-pure-white rounded-full flex items-center justify-center shadow-md">
                <div className="flex gap-1">
                  <div className="w-0.5 h-3 bg-mist-grey rounded-full"></div>
                  <div className="w-0.5 h-3 bg-mist-grey rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="absolute top-4 left-4 bg-charcoal text-pure-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm z-10 shadow-sm">
              Before
            </div>
            <div className="absolute top-4 right-4 bg-workwear-yellow text-charcoal text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm z-10 shadow-sm">
              After
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesList() {
  const services = [
    { name: "Garden Maintenance", cta: "View Options", route: "/garden-maintenance-leeds" },
    { name: "Garden Clearances", cta: "See Clearance", route: "/garden-clearance-leeds" },
    { name: "Hedge & Lawn Care", cta: "Explore Lawn Care", route: "/garden-maintenance-leeds" }, // Maps to maintenance
    { name: "Fencing", cta: "Explore Fencing", route: "/garden-fencing-leeds" },
    { name: "Decking", cta: "Discuss Decking", route: "/decking-leeds" },
    { name: "Jet Washing", cta: "See Results", route: "/jet-washing-leeds" }
  ];

  return (
    <section className="py-20 lg:py-28 bg-cool-white border-t border-mist-grey">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <span className="text-field-green font-bold tracking-widest text-xs mb-3 block text-center uppercase">
          All Services
        </span>
        <h2 className="text-4xl md:text-5xl font-[800] text-garden-green leading-tight mb-12 text-center uppercase">PRACTICAL HELP FOR GARDENS.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, idx) => (
            <Link key={idx} to={service.route} className="bg-pure-white p-8 border border-mist-grey hover:border-workwear-yellow flex flex-col h-full transition-colors group rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-garden-green mb-6 flex-grow">{service.name}</h3>
              <div className="inline-flex items-center text-[10px] font-[900] uppercase tracking-widest border-b-2 border-charcoal mt-auto w-fit group-hover:border-garden-green transition-colors">
                {service.cta}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteProcess() {
  return (
    <section className="py-20 lg:py-28 bg-garden-green text-pure-white">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-workwear-yellow font-bold tracking-widest text-xs mb-3 block uppercase">
              How It Works
            </span>
            <h2 className="text-4xl md:text-5xl font-[800] leading-tight mb-12 uppercase">A QUOTE WITHOUT THE BACK-AND-FORTH.</h2>
            
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-10 h-10 rounded-full bg-workwear-yellow text-charcoal flex items-center justify-center font-bold text-lg shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Send the postcode and photos</h3>
                  <p className="text-pure-white/80">Show the space and briefly explain what needs doing.</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-10 h-10 rounded-full bg-mist-grey text-garden-green flex items-center justify-center font-bold text-lg shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Confirm what is involved</h3>
                  <p className="text-pure-white/80">If a visit is needed before pricing, it can be arranged.</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-10 h-10 rounded-full bg-mist-grey text-garden-green flex items-center justify-center font-bold text-lg shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Agree the work</h3>
                  <p className="text-pure-white/80">The customer knows what is being done before the job starts.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <Link to="/get-a-quote" className="inline-block bg-workwear-yellow text-charcoal px-6 py-3 rounded-sm font-bold shadow-sm uppercase text-sm hover:brightness-95 transition-all active:scale-95">
                Start My Quote
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:block">
             <PlaceholderImage filename="send-garden-photos-for-quote.webp" aspectRatio="4/3" className="w-full h-full object-cover rounded-lg border border-mist-grey shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="py-20 lg:py-28 bg-pure-white">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <PlaceholderImage filename="local-gardener-middleton-leeds.webp" aspectRatio="4/3" className="w-full object-cover rounded-lg border border-mist-grey shadow-sm" />
        </div>
        <div className="order-1 lg:order-2">
          <span className="text-field-green font-bold tracking-widest text-xs mb-3 block uppercase">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-[800] text-garden-green leading-tight mb-6 uppercase">A LOCAL NAME BEHIND THE WORK.</h2>
          <p className="text-lg text-charcoal/80 mb-6 leading-relaxed">
            Dalton's is a small family-run business based in Middleton, providing practical garden and outdoor property care across Leeds. The focus is simple: understand the job, agree what needs doing and leave the space properly sorted.
          </p>
          <Link to="/about-daltons" className="inline-flex items-center text-[10px] font-[900] uppercase tracking-widest border-b-2 border-charcoal hover:border-garden-green transition-colors">
            Meet Dalton's
          </Link>
        </div>
      </div>
    </section>
  );
}

function AreasSection() {
  const areas = ["Middleton", "Beeston", "Wortley", "Armley", "East End Park", "Tingley", "Nearby areas across Leeds"];
  
  return (
    <section className="py-20 lg:py-28 bg-mist-grey">
      <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
        <span className="text-field-green font-bold tracking-widest text-xs mb-3 block uppercase">
          Service Area
        </span>
        <h2 className="text-4xl md:text-5xl font-[800] text-garden-green leading-tight mb-10 uppercase">LOCAL WORK ACROSS LEEDS.</h2>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {areas.map((area, idx) => (
            <span key={idx} className={cn(
              "px-4 py-2 bg-pure-white border shadow-sm rounded-lg text-sm font-bold",
              area === "Middleton" ? "border-garden-green text-garden-green" : "border-mist-grey text-charcoal/80"
            )}>
              {area}
            </span>
          ))}
        </div>
        <Link to="/areas-we-cover" className="inline-block border-2 border-garden-green text-garden-green px-6 py-3 rounded-sm font-bold uppercase text-sm hover:bg-garden-green hover:text-pure-white transition-colors">
          Check Your Postcode
        </Link>
      </div>
    </section>
  );
}

function FAQAccordion() {
  const faqs = [
    { q: "Do you offer one-off garden clearances?", a: "Yes, we handle heavily overgrown gardens that need a complete reset, clearing brambles, weeds, and debris to make the space usable again." },
    { q: "Can I arrange fortnightly or monthly maintenance?", a: "Yes, regular maintenance can be scheduled depending on the season and what the garden actually requires." },
    { q: "Do you remove garden waste?", a: "Waste removal is discussed and agreed upon during the quoting process, ensuring you know exactly what is included before work starts." },
    { q: "Do I need to be at home?", a: "As long as there is clear access to the garden or outdoor space, we can complete the agreed work while you are out." },
    { q: "Can a fence be repaired instead of replaced?", a: "We always inspect the existing structure first. If a repair is practical and safe, we will recommend it over a full replacement." },
    { q: "Which areas of Leeds do you cover?", a: "We are based in Middleton and primarily cover South and West Leeds, including Beeston, Wortley, Armley, East End Park, and Tingley." },
    { q: "What photos should I send for a quote?", a: "Take a wide shot of the whole space, close-ups of specific problem areas, and photos showing access routes." },
    { q: "How is the price calculated?", a: "Pricing is based on a practical assessment of the work required, not a flat hourly rate, so you have a clear total before we begin." }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-pure-white border-t border-mist-grey">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <span className="text-field-green font-bold tracking-widest text-xs mb-3 block uppercase">
            Questions
          </span>
          <h2 className="text-4xl md:text-5xl font-[800] text-garden-green leading-tight mb-6 uppercase">BEFORE YOU SEND A QUOTE.</h2>
          <p className="text-charcoal/80 text-lg max-w-md">
            Clear answers about how we work, where we work, and what to expect from the quoting process.
          </p>
        </div>
        <div className="lg:col-span-7 space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-mist-grey rounded-lg overflow-hidden bg-cool-white">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-mist-grey/50 transition-colors font-bold text-garden-green"
                aria-expanded={openIdx === idx}
              >
                {faq.q}
                <ChevronDown size={20} className={cn("transition-transform", openIdx === idx ? "rotate-180" : "")} />
              </button>
              <div 
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  openIdx === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="p-6 pt-0 text-charcoal/80 text-sm">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 bg-charcoal text-pure-white text-center">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <span className="text-workwear-yellow font-bold tracking-widest text-xs mb-3 block uppercase">
          Ready to Start?
        </span>
        <h2 className="text-4xl md:text-5xl font-[800] leading-tight mb-6 uppercase">NOT SURE WHICH SERVICE YOU NEED?</h2>
        <p className="text-lg text-mist-grey mb-10 leading-relaxed max-w-xl mx-auto">
          You do not need to diagnose the job. Send a few photos, your postcode and a short description, and Dalton's can take it from there.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/get-a-quote" className="bg-workwear-yellow text-charcoal px-6 py-3 rounded-sm font-bold shadow-sm uppercase text-sm hover:brightness-95 transition-all active:scale-95">
            SHOW US THE JOB
          </Link>
          <a href="tel:07369266176" className="border-2 border-mist-grey text-pure-white px-6 py-3 rounded-sm font-bold uppercase text-sm hover:bg-white/10 transition-all active:scale-95">
            CALL 07369 266176
          </a>
        </div>
      </div>
    </section>
  );
}

export function Home() {
  return (
    <>
      <Helmet>
        <title>Gardening Services in Leeds | Dalton's Gardening Solutions</title>
        <meta name="description" content="Local garden maintenance, overgrown garden clearance, fencing, decking and jet washing across Middleton and Leeds. Send photos for a free quote." />
      </Helmet>
      
      <main className="px-5 py-6 md:p-4 lg:p-6 grid grid-cols-1 md:grid-cols-12 lg:grid-rows-6 gap-5 md:gap-4 max-w-[1400px] w-full mx-auto md:my-4 lg:my-8">
        <Hero />
        <ProblemLedChooser>
          <TrustStrip />
        </ProblemLedChooser>
      </main>
      
      <VisualProof />
      <ServicesList />
      <QuoteProcess />
      <AboutSection />
      <AreasSection />
      <FAQAccordion />
      <FinalCTA />
    </>
  );
}
