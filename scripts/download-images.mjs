import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const outputDir = path.join(projectRoot, 'public', 'case-study-images');

const images = [
  {
    file: 'pax-silica-site-unveiling.jpg',
    url: 'https://reports.psaintelligence.com/content/images/size/w1200/2026/08/Pax-Silica.jpg',
  },
  {
    file: 'new-clark-city-aerial.webp',
    url: 'https://mb.com.ph/manilabulletin/uploads/images/2026/07/30/119817.webp',
  },
  {
    file: 'semiconductor-worker.jpg',
    url: 'https://www.bworldonline.com/wp-content/uploads/2023/12/electronics-worker.jpg',
  },
  {
    file: 'aeta-leader-capas.jpg',
    url: 'https://www.japantimes.co.jp/japantimes/uploads/images/2026/09/20/564120.jpg',
  },
  {
    file: 'luzon-economic-corridor.jpg',
    url: 'https://pbs.twimg.com/media/GK8QfkCXQAAUZ1u.jpg',
  },
  {
    file: 'officials-new-clark-city-model.jpg',
    url: 'https://media.philstar.com/photos/2026/05/19/hioqwwdwuailuntjpeg_2026-05-19_12-29-38.jpg',
  },
];

await fs.mkdir(outputDir, { recursive: true });

for (const image of images) {
  const destination = path.join(outputDir, image.file);
  try {
    console.log(`Downloading ${image.file}...`);
    const response = await fetch(image.url, {
      headers: {
        'User-Agent': 'Mozilla/5.0',
        Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
      },
      redirect: 'follow',
    });

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    const bytes = Buffer.from(await response.arrayBuffer());
    await fs.writeFile(destination, bytes);
    console.log(`✓ ${image.file}`);
  } catch (error) {
    console.error(`✗ ${image.file}: ${error.message}`);
    console.error(`  Manual download URL: ${image.url}`);
  }
}

console.log('\nDone. Check public/case-study-images/.');
