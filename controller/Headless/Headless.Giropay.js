const puppeteer = require('puppeteer');
const { scrollPageToBottom } = require('puppeteer-autoscroll-down');

async function HeadlessGiropay(redirectionURL, headlessStatus) {
    try {
        browser = await puppeteer.launch({ headless: headlessStatus, executablePath: "/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome", defaultViewport: null });
        const page = await browser.newPage();
        const goto = await page.goto(redirectionURL, { waitUntil: 'networkidle0' });
        await page.type('#tags', 'TESTDETT421', { delay: 100 });
        await page.waitForSelector('#ui-id-2');
        const button1 = await page.$('#ui-id-2');
        await button1.evaluate(b => b.click());
        await page.click("#idtoGiropayDiv > input", { button: "left" });
        await page.click("#yes", { button: "left" });
        await page.waitForNavigation({ waitUntil: 'networkidle0' });
        await page.type('#XjAAADYfePJarVlf', 'chiptanscatest2', { delay: 100 });
        await page.type('#WdGSSNPyXoBJOdNW', '12345', { delay: 100 });
        await page.click("body > section > div > div > div.contentcontainerMainLayout > div.loginformgrund > div > form > div > div.stdBoxLayout.osppinfoinhalt.floatLeft > div > input", { button: "left" });
        const lastPosition = await scrollPageToBottom(page, {
            size: 500,
            delay: 250
        });
        const button2 = await page.$('input[name="weiterButton"]');
        await button2.evaluate(b => b.click());
        await page.waitForSelector('#iwmEuVJUMIPRnoma');
        await page.type('#iwmEuVJUMIPRnoma', '123456', { delay: 100 });
        const button3 = await page.$('body > section > div > div > div > div.stdBoxLayout > div.osppbuttonbereich > div.buttonWrap.hiddenXsSpk > input');
        await button3.evaluate(b => b.click());
        await page.waitForNavigation({ waitUntil: 'networkidle0' });
        const lastPosition2 = await scrollPageToBottom(page, {
            size: 500,
            delay: 250
        });
        const button4 = await page.$('input[name="weiterButton"]');
        await button4.evaluate(b => b.click());
        await page.waitForSelector('#iwmEuVJUMIPRnoma');
        await page.type('#iwmEuVJUMIPRnoma', '123456', { delay: 100 });
        const button5 = await page.$('body > section > div > div > div > div.stdBoxLayout > div.osppbuttonbereich > div.buttonWrap.hiddenXsSpk > input');
        await button5.evaluate(b => b.click());
        await page.waitForNavigation({ waitUntil: 'networkidle0' });
        await page.waitForNavigation({ waitUntil: 'networkidle0' });
        await browser.close();
        return {"httpstatus":200, "Status": "success" };
    } catch (err) {
        console.log(err);
        return {"httpstatus":500, "Status": err };
    }
};
module.exports = { HeadlessGiropay };