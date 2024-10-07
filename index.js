import puppeteer from 'puppeteer';
import * as fs from 'node:fs/promises';
// Or import puppeteer from 'puppeteer-core';

// Launch the browser and open a new blank page
//headless false lets you see the browser 
const browser = await puppeteer.launch({headless:true});
const page = await browser.newPage();

// Navigate the page to a URL.
await page.goto('https://fabrics-store.com/sewing-patterns/beau-pleated-shirt-pattern-type-pdf');

//locator 
await page.locator('h1');
let title = await page.$("h1")
const getTitle = await page.evaluate(el => el.textContent, title)
console.log(getTitle)

//fs 
await fs.writeFile('log.txt', getTitle)

await browser.close();