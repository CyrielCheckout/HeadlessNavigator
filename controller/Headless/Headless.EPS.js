const puppeteer = require('puppeteer');
const { scrollPageToBottom } = require('puppeteer-autoscroll-down');

async function HeadlessEPS(redirectionURL, headlessStatus) {
    try {
        browser = await puppeteer.launch({ headless: headlessStatus, executablePath: "/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome", defaultViewport: null });
        const page = await browser.newPage();
        const goto = await page.goto(redirectionURL, { waitUntil: 'networkidle0' });
        await page.type('#tags', 'HYPTAT22XXX', { delay: 100 });
        await page.waitForSelector('#ui-id-2');
        const button1 = await page.$('#ui-id-2');
        await button1.evaluate(b => b.click());
        await page.click("#idtoGiropayDiv > input", { button: "left" });
        await page.click("#yes", { button: "left" });
        await page.waitForNavigation({ waitUntil: 'networkidle0' });
        await page.click("#sbtnLogin", { button: "left" });
        await page.waitForSelector('#sbtnSign');
        await page.click("#sbtnSign", { button: "left" });
        await page.waitForSelector('#sbtnSignSingle');
        await page.click("#sbtnSignSingle", { button: "left" });
        await page.waitForSelector('#mobileTan');
        await page.type('#mobileTan', '123456', { delay: 100 });
        await page.click("#sbtnOk", { button: "left" });
        await page.waitForSelector('#content > div:nth-child(4) > div > form > div.actions > input[type=submit]');
        await page.click("#content > div:nth-child(4) > div > form > div.actions > input[type=submit]", { button: "left" });
        //await page.waitForNavigation({ waitUntil: 'networkidle0' });
        await browser.close();
        return {"httpstatus":200, "Status": "success" };
    } catch (err) {
        console.log(err);
        return {"httpstatus":500, "Status": err };
    }
};
module.exports = { HeadlessEPS };