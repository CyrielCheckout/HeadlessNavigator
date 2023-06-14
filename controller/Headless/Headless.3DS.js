const puppeteer = require('puppeteer');
const { scrollPageToBottom } = require('puppeteer-autoscroll-down');

async function Headless3DS(redirectionURL, headlessStatus, NotifURL) {
    try {
        browser = await puppeteer.launch({ headless: headlessStatus, executablePath: "/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome", defaultViewport: null });
        page = await browser.newPage();
        await page.goto(redirectionURL, { waitUntil: 'networkidle0' });
        await page.setViewport({ width: 1800, height: 951 })
        if ((await page.$('body > .main-div > button')) !== null) {
            await page.click('body > .main-div > button');
            console.log("Intermediate action required");
            result =  {"httpstatus":500,"authentication_type" : "Intermediate action required"};
        }
        if (await page.$('iframe[name="cko-3ds2-iframe"]') === null) {
            console.log("Frictionless");
            result =  {"httpstatus":200,"authentication_type" : "frictionless"}
        }
        else {
            console.log("Challenge");
            const frame = page.frames().find((frame) => frame.name() === 'cko-3ds2-iframe');
            const text = await frame.$eval('.title', (element) => element.textContent);
            console.log("Iframe status :", text);
            const password = await frame.type('#password', 'Checkout1!', { delay: 100 });
            const validate = await frame.click('#txtButton', { button: "left" });
            await page.waitForNavigation({ waitUntil: 'networkidle0' });
            result =  {"httpstatus":200,"authentication_type" : "Challenge"}
        }
        await browser.close();
        console.log("Browser closed");
        return result;
    } catch (err) {
        console.log(err);
        err2 =  {"httpstatus":500,"Error" : err}
        return err2;
    }
};
module.exports = { Headless3DS };