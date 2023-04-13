const puppeteer = require('puppeteer');
const { scrollPageToBottom } = require('puppeteer-autoscroll-down');

async function HeadlessPayPal(redirectionURL, headlessStatus) {
    try {
        browser = await puppeteer.launch({ headless: headlessStatus, executablePath: "/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome", defaultViewport: null });
        const page = await browser.newPage();
        const goto = await page.goto(redirectionURL, { waitUntil: 'networkidle0' });
        const text = await page.$eval('#headerText', (element) => element.textContent);
        //const cookies = await page.click('#acceptAllButton', { button: "left" });
        const email = await page.type('#email', 'sb-20dly16238372@personal.example.com'/*, { delay: 100 }*/);
        const validateNext = await page.click('#btnNext', { button: "left", waitUntil: 'networkidle0' });
        await page.waitForSelector('#password', { visible: true });
        const password = await page.type('#password', '16238372'/*, { delay: 100 }*/);
        const validate = await page.click('#btnLogin', { button: "left" });
        await page.waitForNavigation({ waitUntil: 'networkidle0' });
        /*const lastPosition = await scrollPageToBottom(page, {
            size: 500,
            delay: 250
        });*/
        await page.waitForNavigation({ waitUntil: 'networkidle0' });
        await page.click('#button > button', { button: "left" });
        await page.waitForSelector('#confirmButtonTop', { visible: true });
        console.log("wait done")
        await page.click('#confirmButtonTop', { button: "left" });
        await page.waitForNavigation({ waitUntil: 'networkidle0' });
        await browser.close();
        return {"httpstatus":200, "Status": "success" };
    } catch (err) {
        console.log(err);
        return {"httpstatus":500, "Status": err };
    }
};
module.exports = { HeadlessPayPal };