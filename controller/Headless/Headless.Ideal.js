const puppeteer = require('puppeteer');
const { scrollPageToBottom } = require('puppeteer-autoscroll-down');

async function HeadlessIdeal(redirectionURL, headlessStatus) {
    try {
        browser = await puppeteer.launch({ headless: headlessStatus, executablePath: "/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome", defaultViewport: null });
        const page = await browser.newPage();
        const goto = await page.goto(redirectionURL, { waitUntil: 'networkidle0' });
        await page.click('#data > table > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr > td > form > table > tbody > tr:nth-child(3) > td:nth-child(1) > input', { button: "left" });
        await page.waitForNavigation({ waitUntil: 'networkidle0' });
        await browser.close();
        return {"httpstatus":200, "Status": "success" };
    } catch (err) {
        console.log(err);
        return {"httpstatus":500, "Status": err };
    }
};
module.exports = { HeadlessIdeal };