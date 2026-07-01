import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
const page = await browser.newPage();

await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 2 });
await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });

// Hide elements marked no-print before capturing
await page.evaluate(() => {
  document.querySelectorAll('.no-print').forEach(el => {
    el.style.display = 'none';
  });
});

await page.pdf({
  path: 'seyun_jeong_portfolio.pdf',
  format: 'A4',
  printBackground: true,
  margin: { top: '18mm', bottom: '18mm', left: '20mm', right: '20mm' },
});

await browser.close();
console.log('PDF saved: seyun_jeong_portfolio.pdf');
