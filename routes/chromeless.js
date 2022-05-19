var express = require('express');
require('dotenv').config();
var router = express.Router();
const puppeteer = require('puppeteer');
const { scrollPageToBottom } = require('puppeteer-autoscroll-down');
var browser;
var page;

router.post('/3DS', async function(req, res, next) {
    console.log('Got url:', req.url);
    console.log("Request Params: ", req.body);
    try {
        browser = await puppeteer.launch({ headless: req.body.Headless, executablePath: "/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome", defaultViewport: null });
        page = await browser.newPage();
        const goto = await page.goto(req.body.RedirectURL, { waitUntil: 'networkidle0' });
        const frame = page.frames().find((frame) => frame.name() === 'cko-3ds2-iframe');
        const exists = await frame.$eval('.title', () => true).catch(() => false);
        console.log(exists);
        if (exists === true) {
            const text = await frame.$eval('.title', (element) => element.textContent);
            console.log("Iframe status :", text);
            const password = await frame.type('#password', 'Checkout1!', { delay: 100 });
            const validate = await frame.click('#txtButton', { button: "left" });
            await page.waitForNavigation({ waitUntil: 'networkidle0' });
            browser.close();
            res
                .status(200)
                .json({ "Status": "Challenge : OK" });
        } else {
            url = page.url().split("?");
            if (url[0] === "http://localhost//notification.php") {
                browser.close();
            } else {
                await page.waitForNavigation({ waitUntil: 'domcontentloaded' });
                browser.close();
            }
            res
                .status(200)
                .json({ "Status": "Frictionless : OK" });
        }

    } catch (err) {
        console.log(err);
        res
            .status(500)
            .json(err);
    }
});

router.post('/3DSFrictionless', async function(req, res, next) {
    console.log('Got url:', req.url);
    console.log("Request Params: ", req.body);
    try {
        browser = await puppeteer.launch({ headless: true, executablePath: "/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome", defaultViewport: null });
        const page = await browser.newPage();
        const goto = await page.goto(req.body.RedirectURL, { waitUntil: 'networkidle0' });
        await page.waitForNavigation({ waitUntil: 'networkidle0' });
        browser.close();
        res
            .status(200)
            .json({ "Status": "success" });
    } catch (err) {
        console.log(err);
        res
            .status(500)
            .json(err);
    }
});

router.post('/PayPal', async function(req, res, next) {
    console.log('Got url:', req.url);
    console.log("Request Params: ", req.body);
    try {
        browser = await puppeteer.launch({ headless: req.body.Headless, executablePath: "/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome", defaultViewport: null });
        const page = await browser.newPage();
        const goto = await page.goto(req.body.RedirectURL, { waitUntil: 'networkidle0' });
        const text = await page.$eval('#headerText', (element) => element.textContent);
        const cookies = await page.click('#acceptAllButton', { button: "left" });
        const email = await page.type('#email', 'sb-20dly16238372@personal.example.com', { delay: 100 });
        const validateNext = await page.click('#btnNext', { button: "left", waitUntil: 'networkidle0' });
        await page.waitForSelector('#password', { visible: true });
        const password = await page.type('#password', '16238372', { delay: 100 });
        const validate = await page.click('#btnLogin', { button: "left" });
        await page.waitForNavigation({ waitUntil: 'networkidle0' });
        const lastPosition = await scrollPageToBottom(page, {
            size: 500,
            delay: 250
        })
        const payment = await page.click('#payment-submit-btn', { button: "left" });
        await page.waitForNavigation({ waitUntil: 'networkidle0' });
        const closebrowser = await browser.close();
        res
            .status(200)
            .json({ "Status": "success" });
    } catch (err) {
        console.log(err);
        res
            .status(500)
            .json(err);
    }
});
router.post('/Bancontact', async function(req, res, next) {
    console.log('Got url:', req.url);
    console.log("Request Params: ", req.body);
    try {
        browser = await puppeteer.launch({ headless: req.body.Headless, executablePath: "/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome", defaultViewport: null });
        const page = await browser.newPage();
        const goto = await page.goto(req.body.RedirectURL, { waitUntil: 'networkidle0' });
        await page.select('select[name="result"]', 'succeeded');
        await page.click('#submitbutton', { button: "left" });
        await page.waitForNavigation({ waitUntil: 'networkidle0' });
        await browser.close();
        res
            .status(200)
            .json({ "Status": "success" });
    } catch (err) {
        console.log(err);
        res
            .status(500)
            .json(err);
    }
});

router.post('/Sofort', async function(req, res, next) {
    console.log('Got url:', req.url);
    console.log("Request Params: ", req.body);
    try {
        browser = await puppeteer.launch({ headless: req.body.Headless, executablePath: "/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome", defaultViewport: null });
        const page = await browser.newPage();
        const goto = await page.goto(req.body.RedirectURL, { waitUntil: 'networkidle0' });
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
        res
            .status(200)
            .json({ "Status": "success" });
    } catch (err) {
        console.log(err);
        res
            .status(500)
            .json(err);
    }
});
router.post('/Ideal', async function(req, res, next) {
    console.log('Got url:', req.url);
    console.log("Request Params: ", req.body);
    try {
        browser = await puppeteer.launch({ headless: req.body.Headless, executablePath: "/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome", defaultViewport: null });
        const page = await browser.newPage();
        const goto = await page.goto(req.body.RedirectURL, { waitUntil: 'networkidle0' });
        await page.click('#data > table > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody > tr > td > form > table > tbody > tr:nth-child(3) > td:nth-child(1) > input', { button: "left" });
        await page.waitForNavigation({ waitUntil: 'networkidle0' });
        await browser.close();
        res
            .status(200)
            .json({ "Status": "success" });
    } catch (err) {
        console.log(err);
        res
            .status(500)
            .json(err);
    }
});

router.post('/EPS', async function(req, res, next) {
    console.log('Got url:', req.url);
    console.log("Request Params: ", req.body);
    try {
        browser = await puppeteer.launch({ headless: req.body.Headless, executablePath: "/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome", defaultViewport: null });
        const page = await browser.newPage();
        const goto = await page.goto(req.body.RedirectURL, { waitUntil: 'networkidle0' });
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
        res
            .status(200)
            .json({ "Status": "success" });
    } catch (err) {
        console.log(err);
        res
            .status(500)
            .json(err);
    }
});
router.post('/Multibanco', async function(req, res, next) {
    console.log('Got url:', req.url);
    console.log("Request Params: ", req.body);
    try {
        browser = await puppeteer.launch({ headless: req.body.Headless, executablePath: "/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome", defaultViewport: null });
        const page = await browser.newPage();
        const goto = await page.goto(req.body.RedirectURL, { waitUntil: 'networkidle0' });
        await page.click("#col-transaction-payment > div > div.panel-body > div:nth-child(2) > div:nth-child(2) > button", { button: "left" });
        await page.waitForSelector('#sim-container > div > div.container > div > div:nth-child(3) > button');
        await page.click("#sim-container > div > div.container > div > div:nth-child(3) > button", { button: "left" });
        await page.waitForNavigation({ waitUntil: 'networkidle0' });
        await browser.close();
        res
            .status(200)
            .json({ "Status": "success" });
    } catch (err) {
        console.log(err);
        res
            .status(500)
            .json(err);
    }
});

router.post('/P24', async function(req, res, next) {
    console.log('Got url:', req.url);
    console.log("Request Params: ", req.body);
    try {
        browser = await puppeteer.launch({ headless: req.body.Headless, executablePath: "/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome", defaultViewport: null });
        const page = await browser.newPage();
        const goto = await page.goto(req.body.RedirectURL, { waitUntil: 'networkidle0' });
        await page.click("#col-transaction-payment > div > div.panel-body > div:nth-child(2) > div:nth-child(2) > button", { button: "left" });
        await page.waitForSelector('#col-transaction-payment > div > div.panel-body > div:nth-child(2) > div:nth-child(2) > button');
        await page.click("#col-transaction-payment > div > div.panel-body > div:nth-child(2) > div:nth-child(2) > button", { button: "left" });
        await page.waitForSelector('#col-transaction-payment > div > div.panel-body > div:nth-child(2) > div:nth-child(2) > button');
        await page.click("#col-transaction-payment > div > div.panel-body > div:nth-child(2) > div:nth-child(2) > button", { button: "left" });
        await page.waitForSelector('#sim-container > div > div.container > div > div:nth-child(3) > button');
        await page.click("#sim-container > div > div.container > div > div:nth-child(3) > button", { button: "left" });
        await page.waitForNavigation({ waitUntil: 'networkidle0' });
        await browser.close();
        res
            .status(200)
            .json({ "Status": "success" });
    } catch (err) {
        console.log(err);
        res
            .status(500)
            .json(err);
    }
});

router.post('/GiroPay', async function(req, res, next) {
    console.log('Got url:', req.url);
    console.log("Request Params: ", req.body);
    try {
        browser = await puppeteer.launch({ headless: req.body.Headless, executablePath: "/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome", defaultViewport: null });
        const page = await browser.newPage();
        const goto = await page.goto(req.body.RedirectURL, { waitUntil: 'networkidle0' });
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
        res
            .status(200)
            .json({ "Status": "success" });
    } catch (err) {
        console.log(err);
        res
            .status(500)
            .json(err);
    }
});
module.exports = router;