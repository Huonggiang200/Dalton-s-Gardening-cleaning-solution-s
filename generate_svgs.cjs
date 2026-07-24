const fs = require('fs');
const path = require('path');

const images = [
  'hero-after-leeds.svg',
  'patio-jet-washing-leeds.svg',
  'garden-clearance-leeds-after.svg',
  'regular-garden-maintenance-leeds.svg',
  'garden-fencing-leeds.svg',
  'send-garden-photos-for-quote.svg',
  'local-gardener-middleton-leeds.svg',
  'decking-repair-leeds.svg',
  'garden-clearance-leeds-before.svg',
  'hedge-lawn-care-leeds.svg'
];

const colors = [
  ['#2E4A3D', '#416353'], // Greens
  ['#E8E3DD', '#D1CDC7'], // Greys
  ['#D3B162', '#E8C87A'], // Yellows
  ['#1A2B23', '#253E32']  // Dark greens
];

if (!fs.existsSync('public')) {
  fs.mkdirSync('public');
}

images.forEach((img, index) => {
  const [c1, c2] = colors[index % colors.length];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
  <defs>
    <linearGradient id="grad${index}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${c1};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${c2};stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#grad${index})"/>
</svg>`;
  fs.writeFileSync(path.join('public', img), svg);
});
console.log('SVGs generated in public directory.');
