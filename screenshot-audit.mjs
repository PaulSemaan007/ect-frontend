import puppeteer from 'puppeteer';
import { mkdirSync } from 'fs';
import { join } from 'path';

const BASE_URL = 'https://ect-frontend.vercel.app';
const SCREENSHOT_DIR = join(process.cwd(), 'screenshots');

const PAGES = [
  { name: 'homepage', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'services', path: '/services' },
  { name: 'services-events', path: '/services/events' },
  { name: 'services-corporate', path: '/services/corporate' },
  { name: 'careers', path: '/careers' },
  { name: 'quote', path: '/quote' },
  { name: 'careers-apply', path: '/careers/apply' },
];

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
];

/** Scroll through the entire page to trigger all whileInView animations */
async function scrollToBottom(tab) {
  await tab.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 300;
      const timer = setInterval(() => {
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= document.body.scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });
}

async function run() {
  mkdirSync(SCREENSHOT_DIR, { recursive: true });

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  for (const viewport of VIEWPORTS) {
    for (const page of PAGES) {
      const tab = await browser.newPage();
      await tab.setViewport({ width: viewport.width, height: viewport.height });

      const url = `${BASE_URL}${page.path}`;
      console.log(`Capturing ${viewport.name} - ${page.name}: ${url}`);

      try {
        await tab.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
        // Wait for initial render
        await new Promise((r) => setTimeout(r, 1000));
        // Scroll through page to trigger all whileInView animations
        await scrollToBottom(tab);
        // Wait for animations to complete
        await new Promise((r) => setTimeout(r, 2000));
        // Scroll back to top for the screenshot
        await tab.evaluate(() => window.scrollTo(0, 0));
        await new Promise((r) => setTimeout(r, 500));

        const filename = `${viewport.name}-${page.name}.png`;
        await tab.screenshot({
          path: join(SCREENSHOT_DIR, filename),
          fullPage: true,
        });
        console.log(`  -> Saved ${filename}`);
      } catch (err) {
        console.error(`  -> ERROR: ${err.message}`);
      }

      await tab.close();
    }
  }

  await browser.close();
  console.log('\nDone! Screenshots saved to:', SCREENSHOT_DIR);
}

run();
