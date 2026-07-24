import { CONFIG } from '../config';

export function DemoBanner() {
  if (!CONFIG.demoMode) return null;
  
  return (
    <div className="bg-charcoal text-workwear-yellow text-[11px] text-center py-1.5 font-semibold tracking-wide border-b border-workwear-yellow/20 relative z-50">
      Website concept — Not a live business site
    </div>
  );
}
