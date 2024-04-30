const puppeteer = require('puppeteer');
const { scrollPageToBottom } = require('puppeteer-autoscroll-down');

async function HeadlessBancontactAccepted(redirectionURL, headlessStatus) {
    try {
        browser = await puppeteer.launch({ headless: headlessStatus, executablePath: "/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome", defaultViewport: null });
        const page = await browser.newPage();
        const goto = await page.goto(redirectionURL, { waitUntil: 'networkidle0' });
        await page.select('select[name="result"]', 'succeeded');
        await page.click('#submitbutton', { button: "left" });
        await page.waitForNavigation({ waitUntil: 'networkidle0' });
        await browser.close();
        return {"httpstatus":200, "Status": "success" };
    } catch (err) {
        console.log(err);
        return {"httpstatus":500, "Status": err };
    }
};
async function HeadlessBancontactRefused(redirectionURL, headlessStatus) {
    try {
        browser = await puppeteer.launch({ headless: headlessStatus, executablePath: "/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome", defaultViewport: null });
        const page = await browser.newPage();
        const goto = await page.goto(redirectionURL, { waitUntil: 'networkidle0' });
        await page.select('select[name="result"]', 'failed_user_abort');
        await page.click('#submitbutton', { button: "left" });
        await page.waitForNavigation({ waitUntil: 'networkidle0' });
        await browser.close();
        return {"httpstatus":200, "Status": "success" };
    } catch (err) {
        console.log(err);
        return {"httpstatus":500, "Status": err };
    }
};
module.exports = { 
    HeadlessBancontactAccepted,
    HeadlessBancontactRefused
};