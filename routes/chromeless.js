var express = require('express');
require('dotenv').config();
var router = express.Router();
const CreateBatch = require('.././Controller/CreateBatch');
const Headless3DS = require('.././Controller/Headless/Headless.3DS');
const PayPal = require('.././Controller/Headless/Headless.PayPal');
const Bancontact = require('.././Controller/Headless/Headless.Bancontact');
const Sofort = require('.././Controller/Headless/Headless.Sofort');
const Ideal = require('.././Controller/Headless/Headless.Ideal');
const EPS = require('.././Controller/Headless/Headless.EPS');
const Multibanco = require('.././Controller/Headless/Headless.Multibanco');
const Giropay = require('.././Controller/Headless/Headless.Giropay');
const P24 = require('.././Controller/Headless/Headless.P24');
const Issuing = require('.././Controller/CKO/CKO.issuing');
const AuthStandalone = require('.././Controller/CKO/CKO.AuthStandalone');
const Standalone3DSflow = require ("../controller/Workflow/Perform_a_standalone_authentication")
const CATCreateMerchant = require ("../controller/Cat_API/CAT.CreationBatch")

router.post('/3DS', async function (req, res, next) {
    console.log('Got url:', req.url);
    console.log("Request Params: ", req.body);
    ThreeDS = await Headless3DS.Headless3DS(req.body.RedirectURL, req.body.Headless, req.body.ReturnURL);
    res
        .status(ThreeDS.httpstatus)
        .json(ThreeDS);
});

router.post('/PayPal', async function (req, res, next) {
    console.log('Got url:', req.url);
    console.log("Request Params: ", req.body);
    PayPalResult = await PayPal.HeadlessPayPal(req.body.RedirectURL, req.body.Headless);
    res
        .status(PayPalResult.httpstatus)
        .json(PayPalResult);

});
router.post('/Bancontact', async function (req, res, next) {
    console.log('Got url:', req.url);
    console.log("Request Params: ", req.body);
    BancontactResult = await Bancontact.HeadlessBancontact(req.body.RedirectURL, req.body.Headless)
    res
        .status(BancontactResult.httpstatus)
        .json(BancontactResult);
});

router.post('/Sofort', async function (req, res, next) {
    console.log('Got url:', req.url);
    console.log("Request Params: ", req.body);
    SofortResult = await Sofort.HeadlessSofort(req.body.RedirectURL, req.body.Headless);
    res
        .status(SofortResult.httpstatus)
        .json(SofortResult);
});
router.post('/Ideal', async function (req, res, next) {
    console.log('Got url:', req.url);
    console.log("Request Params: ", req.body);
    IdealResult = await Ideal.HeadlessIdeal(req.body.RedirectURL, req.body.Headless);
    res
        .status(IdealResult.httpstatus)
        .json(IdealResult);
});

router.post('/EPS', async function (req, res, next) {
    console.log('Got url:', req.url);
    console.log("Request Params: ", req.body);
    EPSResult = await EPS.HeadlessEPS(req.body.RedirectURL, req.body.Headless);
    res
        .status(EPSResult.httpstatus)
        .json(EPSResult);
});
router.post('/Multibanco', async function (req, res, next) {
    console.log('Got url:', req.url);
    console.log("Request Params: ", req.body);
    MultibancoResult = await Multibanco.HeadlessMultibanco(req.body.RedirectURL, req.body.Headless);
    res
        .status(MultibancoResult.httpstatus)
        .json(MultibancoResult);
});

router.post('/P24', async function (req, res, next) {
    console.log('Got url:', req.url);
    console.log("Request Params: ", req.body);
    P24Result = await P24.HeadlessP24(req.body.RedirectURL, req.body.Headless);
    res
        .status(P24Result.httpstatus)
        .json(P24Result);
});

router.post('/GiroPay', async function (req, res, next) {
    console.log('Got url:', req.url);
    console.log("Request Params: ", req.body);
    GiropayResult = await Giropay.HeadlessGiropay(req.body.RedirectURL, req.body.Headless);
    res
        .status(GiropayResult.httpstatus)
        .json(GiropayResult);
});

router.post('/GetNewBatch', async function (req, res, next) {
    console.log("Got body :", req.body)
    const numberofTransaction = req.body.TRSNumber; // nombre de transactions souhaité
    const acceptanceRate = req.body.ACCPRate; // taux d'acceptation souhaité en pourcentage
    const schemeDistribution = req.body.SCHEMRep;
    CurrencyList = req.body.currency;
    try {
        batchresult = await CreateBatch.TRSBatch(acceptanceRate, numberofTransaction, schemeDistribution,req.body.WaitTime,req.body.headless,req.body.PayPalTRS,req.body.IdealTRS, req.body.BancontactTRS,req.body.GiropayTRS,req.body.MultiBancoTRS,CurrencyList, req.body.RefundRate)
        res
            .status(200)
            .json(batchresult);
    } catch (err) {
        console.log(err);
        res
            .status(500)
            .json(err);
    }
}),

router.post('/CreateSessionStandalone', async function (req, res, next) {
    console.log("Got body :", req.body)
    try {
        CreateAuth = await AuthStandalone.RequestSession(req.body.CardNumber, req.body.preferred_scheme, req.body.amount, req.body.orderReference, req.body.cvv, req.body.currency, req.body.paymenttype,req.body.authentication_category,req.body.challengeindicator, req.body.description, req.body.completiontype, req.body.headless, req.body.autoRun)
        res
            .status(200)
            .json(CreateAuth);
    } catch (err) {
        console.log(err);
        res
            .status(500)
            .json(err);
    }
}),

router.post('/PerformStandaloneAuthentication', async function (req, res, next) {
    console.log("Got body :", req.body)
    try {
        CreateAuth = await Standalone3DSflow.Init3DSSession(req.body.CardNumber, req.body.preferred_scheme, req.body.amount, req.body.orderReference, req.body.cvv, req.body.currency, req.body.paymenttype,req.body.authentication_category,req.body.challengeindicator, req.body.description, req.body.completiontype, req.body.headless, req.body.autoRun)
        res
            .status(200)
            .json(CreateAuth);
    } catch (err) {
        console.log(err);
        res
            .status(500)
            .json(err);
    }
}),

router.post('/CATCreateMerchant', async function (req, res, next) {
    console.log("Got body :", req.body)
    try {
        CreateMerchantCAT = await CATCreateMerchant.Createconf(req.body)
        res
            .status(200)
            .json(CreateMerchantCAT);
    } catch (err) {
        //console.log(err.name);
        console.log(err);
        res
            .status(500)
            .json(err);
    }
}),
router.post('/test', async function (req, res, next) {
    console.log("Got body :", req.body)
    try {
        testresult = await Issuing.test()
        console.log(testresult)
        res
            .status(200)
            .json(testresult);
    } catch (err) {
        //console.log(err.name);
        console.log(err);
        res
            .status(500)
            .json(err);
    }
}),

    module.exports = router;