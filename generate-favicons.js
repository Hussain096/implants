// Generate favicon PNG files from SVG using sharp
import sharp from 'sharp';
import fs from 'fs';

const svgBuffer = fs.readFileSync('./public/favicon.svg');

// Generate all required sizes
const sizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 48, name: 'favicon-48x48.png' },
  { size: 192, name: 'icon-192.png' },
  { size: 512, name: 'icon-512.png' },
  { size: 180, name: 'apple-touch-icon.png' },
];

for (const { size, name } of sizes) {
  await sharp(svgBuffer)
    .resize(size, size)
    .png()
    .toFile(`./public/${name}`);
  console.log(`✅ Generated ${name} (${size}x${size})`);
}

console.log('\nDone! All favicon PNGs generated.');
