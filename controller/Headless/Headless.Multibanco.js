const puppeteer = require('puppeteer');
const { scrollPageToBottom } = require('puppeteer-autoscroll-down');

async function HeadlessMultibanco(redirectionURL, headlessStatus) {
    try {
        browser = await puppeteer.launch({ headless: headlessStatus, executablePath: "/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome", defaultViewport: null });
        const page = await browser.newPage();
        const goto = await page.goto(redirectionURL, { waitUntil: 'networkidle0' });
        await page.click("#col-transaction-payment > div > div.panel-body > div:nth-child(2) > div:nth-child(2) > button", { button: "left" });
        await page.waitForSelector('#sim-container > div > div.container > div > div:nth-child(3) > button');
        await page.click("#sim-container > div > div.container > div > div:nth-child(3) > button", { button: "left" });
        await page.waitForNavigation({ waitUntil: 'networkidle0' });
        await browser.close();
        return {"httpstatus":200, "Status": "success" };
    } catch (err) {
        console.log(err);
        return {"httpstatus":500, "Status": err };
    }
};
module.exports = { HeadlessMultibanco };