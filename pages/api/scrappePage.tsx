import puppeteer from 'puppeteer';
import jsdom from "jsdom";

const scrappePage = async () => {
  const res = await fetch('https://www.npmjs.com/package/puppeteer')
  const html = await res.text()
  console.log('html', html);
  return ''


  // // Launch the browser
  // const browser = await puppeteer.launch();

  // // Create a page
  // const page = await browser.newPage();

  // // Go to your site
  // await page.goto('YOUR_SITE');

  // // Evaluate JavaScript
  // const three = await page.evaluate(() => {
  //   return 1 + 2;
  // });

  // console.log(three);

  // // Close browser.
  // await browser.close();
  // return
}

export default scrappePage;