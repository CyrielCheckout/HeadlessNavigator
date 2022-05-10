var express = require('express');
require('dotenv').config();
var router = express.Router();
const puppeteer = require('puppeteer');
const { scrollPageToBottom } = require('puppeteer-autoscroll-down');
var browser;


router.post('/3DSchallenge', async function(req, res, next) {
    console.log('Got url:', req.url);
    console.log("Request Params: ", req.body);
    try {
        browser = await puppeteer.launch({ headless: true, executablePath: "/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome", defaultViewport: null });
        const page = await browser.newPage();
        const goto = await page.goto(req.body.TRHEEDSURL, { waitUntil: 'networkidle0' });
        const frame = page.frames().find((frame) => frame.name() === 'cko-3ds2-iframe');
        const text = await frame.$eval('.title', (element) => element.textContent);
        console.log("Iframe status :", text);
        const password = await frame.type('#password', 'Checkout1!', { delay: 100 });
        const validate = await frame.click('#txtButton', { button: "left" });
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

router.post('/3DSFrictionless', async function(req, res, next) {
    console.log('Got url:', req.url);
    console.log("Request Params: ", req.body);
    try {
        browser = await puppeteer.launch({ headless: true, executablePath: "/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome", defaultViewport: null });
        const page = await browser.newPage();
        const goto = await page.goto(req.body.TRHEEDSURL, { waitUntil: 'networkidle0' });
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
        browser = await puppeteer.launch({ headless: false, executablePath: "/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome", defaultViewport: null });
        const page = await browser.newPage();
        const goto = await page.goto(req.body.PayPalURL, { waitUntil: 'networkidle0' });
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
module.exports = router;