const puppeteer = require('puppeteer');
const { scrollPageToBottom } = require('puppeteer-autoscroll-down');

async function HeadlessSofort(redirectionURL, headlessStatus) {
    try {
        browser = await puppeteer.launch({ headless: headlessStatus, executablePath: "/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome", defaultViewport: null });
        const page = await browser.newPage();
        const goto = await page.goto(redirectionURL, { waitUntil: 'networkidle0' });
        const button = await page.$('#modal-button-container > button.cookie-modal-accept-all.button-primary');
        await button.evaluate(b => b.click());
        const [bank] = await page.$x("//p[contains(., 'Demo Bank')]");
        if (bank) {
            await bank.evaluate(b => b.click());
        }
        await page.waitForNavigation({ waitUntil: 'networkidle0' });
        await page.waitForNavigation({ waitUntil: 'networkidle0' });
        //await page.click('#modal-button-container > button.cookie-modal-accept-all.button-primary', { button: "left" });
        await page.type('#BackendFormLOGINNAMEUSERID', '88888888', { delay: 100 });
        await page.type('#BackendFormUSERPIN', '12345678', { delay: 100 });
        const button2 = await page.$('#WizardForm > button');
        await button2.evaluate(b => b.click());
        await page.waitForNavigation({ waitUntil: 'networkidle0' });
        const button3 = await page.$('#WizardForm > button');
        await button3.evaluate(b => b.click());
        await page.waitForNavigation({ waitUntil: 'networkidle0' });
        await page.type('#BackendFormTan', '12345', { delay: 100 });
        const button4 = await page.$('#WizardForm > button');
        await button4.evaluate(b => b.click());
        await page.waitForNavigation({ waitUntil: 'networkidle0' });
        await browser.close();
        return {"httpstatus":200, "Status": "success" };
    } catch (err) {
        console.log(err);
        return {"httpstatus":500, "Status": err };
    }
};
module.exports = { HeadlessSofort };