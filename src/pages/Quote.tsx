import { Helmet } from 'react-helmet-async';
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Upload, X, CheckCircle2 } from 'lucide-react';
import { CONFIG } from '../config';
import { cn } from '../utils';

type FormData = {
  postcode: string;
  area: string;
  service: string;
  description: string;
  photos: File[];
  frequency: string;
  timing: string;
  access: string;
  fullName: string;
  phone: string;
  email: string;
  contactMethod: string;
  consent: boolean;
};

export function Quote() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>({
    postcode: '',
    area: '',
    service: '',
    description: '',
    photos: [],
    frequency: '',
    timing: '',
    access: '',
    fullName: '',
    phone: '',
    email: '',
    contactMethod: 'Phone',
    consent: false,
  });
  
  const [submitted, setSubmitted] = useState(false);

  const updateData = (fields: Partial<FormData>) => {
    setData(prev => ({ ...prev, ...fields }));
  };

  const handleNext = () => setStep(s => Math.min(s + 1, 4));
  const handlePrev = () => setStep(s => Math.max(s - 1, 1));
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Real implementation would send data to CONFIG.quoteEndpoint here
  };

  const renderStepIndicator = () => (
    <div className="flex justify-between items-center mb-12 relative">
      <div className="absolute top-1/2 left-0 w-full h-1 bg-mist-grey -translate-y-1/2 z-0"></div>
      <div 
        className="absolute top-1/2 left-0 h-1 bg-workwear-yellow -translate-y-1/2 z-0 transition-all duration-300"
        style={{ width: `${((step - 1) / 3) * 100}%` }}
      ></div>
      
      {[1, 2, 3, 4].map(num => (
        <div 
          key={num} 
          className={cn(
            "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold z-10 transition-colors border-2",
            step >= num 
              ? "bg-workwear-yellow border-workwear-yellow text-charcoal" 
              : "bg-cool-white border-mist-grey text-mist-grey-dark"
          )}
        >
          {num}
        </div>
      ))}
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Get a Gardening Quote in Leeds | Dalton's</title>
        <meta name="description" content="Send photos of your garden or outdoor property issue in Leeds for a straightforward, free quote from Dalton's." />
        {submitted && <meta name="robots" content="noindex" />}
      </Helmet>

      <div className="bg-pure-white py-12 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          {!submitted ? (
            <>
              <div className="text-center mb-10">
                <h1 className="font-heading text-4xl md:text-5xl font-extrabold mb-4">Show us the job.</h1>
                <p className="text-lg text-charcoal/80">
                  Send your postcode, a short description and a few useful photos. You do not need to know the exact service before getting in touch.
                </p>
              </div>

              {renderStepIndicator()}

              <form onSubmit={handleSubmit} className="bg-cool-white p-6 md:p-10 border border-mist-grey rounded-sm shadow-sm">
                
                {/* STEP 1 */}
                {step === 1 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                    <h2 className="font-heading text-2xl font-bold border-b border-mist-grey pb-4">Where is the job?</h2>
                    
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="postcode" className="block font-semibold mb-2">Postcode *</label>
                        <input 
                          type="text" 
                          id="postcode"
                          required
                          value={data.postcode}
                          onChange={e => updateData({ postcode: e.target.value })}
                          className="w-full md:w-1/2 p-3 border border-mist-grey rounded-sm focus:border-garden-green focus:ring-1 focus:ring-garden-green outline-none"
                          placeholder="e.g. LS10 4XX"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="area" className="block font-semibold mb-2">Area (Optional)</label>
                        <input 
                          type="text" 
                          id="area"
                          value={data.area}
                          onChange={e => updateData({ area: e.target.value })}
                          className="w-full md:w-1/2 p-3 border border-mist-grey rounded-sm focus:border-garden-green focus:ring-1 focus:ring-garden-green outline-none"
                          placeholder="e.g. Middleton"
                        />
                      </div>
                    </div>

                    <div className="pt-6 flex justify-end">
                      <button 
                        type="button" 
                        onClick={handleNext}
                        disabled={!data.postcode}
                        className="bg-charcoal text-pure-white px-6 py-3 rounded-sm font-semibold flex items-center gap-2 hover:bg-garden-green transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Next Step <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                    <h2 className="font-heading text-2xl font-bold border-b border-mist-grey pb-4">What needs doing?</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        "Regular garden maintenance",
                        "Garden clearance",
                        "Hedge or lawn care",
                        "Fencing",
                        "Decking",
                        "Jet washing",
                        "Other exterior work",
                        "Not sure"
                      ].map(option => (
                        <label 
                          key={option} 
                          className={cn(
                            "p-4 border rounded-sm cursor-pointer transition-colors flex items-center gap-3",
                            data.service === option 
                              ? "border-garden-green bg-garden-green/5 text-garden-green font-semibold" 
                              : "border-mist-grey bg-pure-white hover:border-garden-green/50"
                          )}
                        >
                          <input 
                            type="radio" 
                            name="service" 
                            value={option}
                            checked={data.service === option}
                            onChange={() => updateData({ service: option })}
                            className="w-4 h-4 text-garden-green focus:ring-garden-green"
                          />
                          {option}
                        </label>
                      ))}
                    </div>

                    <div className="pt-6 flex justify-between">
                      <button 
                        type="button" 
                        onClick={handlePrev}
                        className="text-charcoal px-4 py-3 font-semibold flex items-center gap-2 hover:text-garden-green transition-colors"
                      >
                        <ArrowLeft size={18} /> Back
                      </button>
                      <button 
                        type="button" 
                        onClick={handleNext}
                        disabled={!data.service}
                        className="bg-charcoal text-pure-white px-6 py-3 rounded-sm font-semibold flex items-center gap-2 hover:bg-garden-green transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Next Step <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                    <h2 className="font-heading text-2xl font-bold border-b border-mist-grey pb-4">Show us the space</h2>
                    
                    <div className="space-y-5">
                      <div>
                        <label htmlFor="description" className="block font-semibold mb-2">Short description *</label>
                        <textarea 
                          id="description"
                          required
                          value={data.description}
                          onChange={e => updateData({ description: e.target.value })}
                          rows={4}
                          className="w-full p-3 border border-mist-grey rounded-sm focus:border-garden-green focus:ring-1 focus:ring-garden-green outline-none resize-y"
                          placeholder="Briefly explain what needs doing..."
                        />
                      </div>
                      
                      <div>
                        <label className="block font-semibold mb-2">Photos</label>
                        <p className="text-sm text-charcoal/70 mb-3">Upload a few photos showing the whole space and any specific issues. (Max 5MB per file)</p>
                        
                        <div className="border-2 border-dashed border-mist-grey bg-pure-white rounded-sm p-6 text-center hover:border-garden-green/50 transition-colors">
                          <input 
                            type="file" 
                            id="photos" 
                            multiple 
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                              if (e.target.files) {
                                updateData({ photos: [...data.photos, ...Array.from(e.target.files)] });
                              }
                            }}
                          />
                          <label htmlFor="photos" className="cursor-pointer flex flex-col items-center">
                            <Upload size={32} className="text-garden-green mb-3 opacity-70" />
                            <span className="font-semibold text-garden-green">Click to select photos</span>
                            <span className="text-sm text-charcoal/60 mt-1">or drag and drop here</span>
                          </label>
                        </div>
                        
                        {data.photos.length > 0 && (
                          <div className="mt-4 space-y-2">
                            {data.photos.map((file, i) => (
                              <div key={i} className="flex justify-between items-center bg-pure-white p-2 border border-mist-grey rounded-sm text-sm">
                                <span className="truncate max-w-[80%]">{file.name}</span>
                                <button 
                                  type="button"
                                  onClick={() => updateData({ photos: data.photos.filter((_, idx) => idx !== i) })}
                                  className="text-red-500 p-1 hover:bg-red-50 rounded"
                                >
                                  <X size={16} />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <div>
                            <label htmlFor="frequency" className="block font-semibold mb-2">One-off or regular?</label>
                            <select 
                              id="frequency"
                              value={data.frequency}
                              onChange={e => updateData({ frequency: e.target.value })}
                              className="w-full p-3 border border-mist-grey rounded-sm focus:border-garden-green focus:ring-1 focus:ring-garden-green outline-none"
                            >
                              <option value="">Please select...</option>
                              <option value="One-off">One-off job</option>
                              <option value="Regular">Regular work</option>
                              <option value="Not sure">Not sure yet</option>
                            </select>
                         </div>
                         <div>
                            <label htmlFor="timing" className="block font-semibold mb-2">Preferred timing</label>
                            <select 
                              id="timing"
                              value={data.timing}
                              onChange={e => updateData({ timing: e.target.value })}
                              className="w-full p-3 border border-mist-grey rounded-sm focus:border-garden-green focus:ring-1 focus:ring-garden-green outline-none"
                            >
                              <option value="">Please select...</option>
                              <option value="As soon as possible">As soon as possible</option>
                              <option value="Within 2 weeks">Within 2 weeks</option>
                              <option value="Within a month">Within a month</option>
                              <option value="No rush">No rush</option>
                            </select>
                         </div>
                      </div>
                      
                      <div>
                        <label htmlFor="access" className="block font-semibold mb-2">Access notes (Optional)</label>
                        <input 
                          type="text" 
                          id="access"
                          value={data.access}
                          onChange={e => updateData({ access: e.target.value })}
                          className="w-full p-3 border border-mist-grey rounded-sm focus:border-garden-green focus:ring-1 focus:ring-garden-green outline-none"
                          placeholder="e.g. Side gate is locked, need to be home."
                        />
                      </div>
                    </div>

                    <div className="pt-6 flex justify-between">
                      <button 
                        type="button" 
                        onClick={handlePrev}
                        className="text-charcoal px-4 py-3 font-semibold flex items-center gap-2 hover:text-garden-green transition-colors"
                      >
                        <ArrowLeft size={18} /> Back
                      </button>
                      <button 
                        type="button" 
                        onClick={handleNext}
                        disabled={!data.description}
                        className="bg-charcoal text-pure-white px-6 py-3 rounded-sm font-semibold flex items-center gap-2 hover:bg-garden-green transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Next Step <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 4 */}
                {step === 4 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                    <h2 className="font-heading text-2xl font-bold border-b border-mist-grey pb-4">Your details</h2>
                    
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="fullName" className="block font-semibold mb-2">Full name *</label>
                        <input 
                          type="text" 
                          id="fullName"
                          required
                          value={data.fullName}
                          onChange={e => updateData({ fullName: e.target.value })}
                          className="w-full p-3 border border-mist-grey rounded-sm focus:border-garden-green focus:ring-1 focus:ring-garden-green outline-none"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="phone" className="block font-semibold mb-2">Phone *</label>
                          <input 
                            type="tel" 
                            id="phone"
                            required
                            value={data.phone}
                            onChange={e => updateData({ phone: e.target.value })}
                            className="w-full p-3 border border-mist-grey rounded-sm focus:border-garden-green focus:ring-1 focus:ring-garden-green outline-none"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block font-semibold mb-2">Email *</label>
                          <input 
                            type="email" 
                            id="email"
                            required
                            value={data.email}
                            onChange={e => updateData({ email: e.target.value })}
                            className="w-full p-3 border border-mist-grey rounded-sm focus:border-garden-green focus:ring-1 focus:ring-garden-green outline-none"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block font-semibold mb-3">Preferred contact method</label>
                        <div className="flex gap-4">
                          {['Phone', 'Email', 'WhatsApp'].map(method => (
                            <label key={method} className="flex items-center gap-2 cursor-pointer">
                              <input 
                                type="radio" 
                                name="contactMethod"
                                value={method}
                                checked={data.contactMethod === method}
                                onChange={() => updateData({ contactMethod: method })}
                                className="w-4 h-4 text-garden-green focus:ring-garden-green"
                              />
                              {method}
                            </label>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-4 pb-2">
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input 
                            type="checkbox" 
                            required
                            checked={data.consent}
                            onChange={e => updateData({ consent: e.target.checked })}
                            className="w-5 h-5 mt-0.5 text-garden-green rounded-sm focus:ring-garden-green"
                          />
                          <span className="text-sm text-charcoal/80 leading-tight">
                            I consent to Dalton's Gardening & Cleaning Solutions storing my details to process this quote request, in accordance with the <a href="/privacy-policy" className="underline hover:text-garden-green">Privacy Policy</a>.
                          </span>
                        </label>
                      </div>
                      
                      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
                    </div>

                    <div className="pt-6 flex justify-between items-center">
                      <button 
                        type="button" 
                        onClick={handlePrev}
                        className="text-charcoal px-4 py-3 font-semibold flex items-center gap-2 hover:text-garden-green transition-colors"
                      >
                        <ArrowLeft size={18} /> Back
                      </button>
                      <button 
                        type="submit"
                        disabled={!data.fullName || !data.phone || !data.email || !data.consent}
                        className="bg-workwear-yellow text-charcoal px-8 py-3.5 rounded-sm font-bold flex items-center gap-2 hover:bg-opacity-90 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Send Quote Request
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </>
          ) : (
            <div className="bg-cool-white p-10 md:p-16 border border-mist-grey rounded-sm text-center animate-in zoom-in-95 duration-300">
              <div className="w-20 h-20 bg-garden-green/10 text-garden-green rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h2 className="font-heading text-3xl font-bold mb-4">Thanks — your job details have been received.</h2>
              <p className="text-lg text-charcoal/80 mb-8 max-w-lg mx-auto">
                Dalton's will use the contact information provided to get back to you.
              </p>
              
              {CONFIG.demoMode && (
                <div className="bg-workwear-yellow/20 text-charcoal text-sm p-4 rounded-sm border border-workwear-yellow/40 mb-8 max-w-lg mx-auto font-semibold">
                  This website concept has validated your form. Connect the live enquiry endpoint before launch.
                </div>
              )}
              
              <button 
                onClick={() => {
                  setSubmitted(false);
                  setStep(1);
                  setData({ ...data, description: '', photos: [] }); // Reset some data for another quote
                }}
                className="bg-charcoal text-pure-white px-8 py-3 rounded-sm font-semibold hover:bg-garden-green transition-colors"
              >
                Send Another Request
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
