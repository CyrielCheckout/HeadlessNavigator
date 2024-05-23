var express = require('express');
require('dotenv').config();
var router = express.Router();
const CreateBatch = require('.././controller/CreateBatch');
const CheckPCAv = require('.././controller/createTransactionList');
const Headless3DS = require('.././controller/Headless/Headless.3DS');
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
const Standalone3DSflow = require("../controller/Workflow/Perform_a_standalone_authentication")

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
    BancontactResult = await Bancontact.HeadlessBancontactAccepted(req.body.RedirectURL, req.body.Headless)
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
    AvailableProcessingChannelForPaymentMethod = []
    if (req.body.Card.SCHEMRep.Visa > 0) {
        AvailableProcessingChannelForPaymentMethod.push(CheckPCAv.GetOneProcessingChannelConfigured(req.body.Processing_Channel_ID, "Visa"))
    }
    if (req.body.Card.SCHEMRep.Mastercard > 0) {
        AvailableProcessingChannelForPaymentMethod.push(CheckPCAv.GetOneProcessingChannelConfigured(req.body.Processing_Channel_ID, "Mastercard"))
    }
    if (req.body.Card.SCHEMRep.CB > 0) {
        AvailableProcessingChannelForPaymentMethod.push(CheckPCAv.GetOneProcessingChannelConfigured(req.body.Processing_Channel_ID, "CB"))
    }
    if (req.body.Card.SCHEMRep.Amex > 0) {
        AvailableProcessingChannelForPaymentMethod.push(CheckPCAv.GetOneProcessingChannelConfigured(req.body.Processing_Channel_ID, "Amex"))
    }
    if (req.body.PayPalRate > 0) {
        AvailableProcessingChannelForPaymentMethod.push(CheckPCAv.GetOneProcessingChannelConfigured(req.body.Processing_Channel_ID, "PayPal"))
    }
    if (req.body.IdealRate > 0) {
        AvailableProcessingChannelForPaymentMethod.push(CheckPCAv.GetOneProcessingChannelConfigured(req.body.Processing_Channel_ID, "Ideal"))
    }
    if (req.body.BancontactRate > 0) {
        AvailableProcessingChannelForPaymentMethod.push(CheckPCAv.GetOneProcessingChannelConfigured(req.body.Processing_Channel_ID, "Bancontact"))
    }
    if (req.body.GiropayRate > 0) {
        AvailableProcessingChannelForPaymentMethod.push(CheckPCAv.GetOneProcessingChannelConfigured(req.body.Processing_Channel_ID, "Giropay"))
    }
    if (req.body.MultiBancoRate > 0) {
        AvailableProcessingChannelForPaymentMethod.push(CheckPCAv.GetOneProcessingChannelConfigured(req.body.Processing_Channel_ID, "Multibanco"))
    }
    console.log(AvailableProcessingChannelForPaymentMethod);
    if (req.body.Card.CardRate + req.body.PayPalRate + req.body.IdealRate + req.body.BancontactRate + req.body.GiropayRate + req.body.MultiBancoRate != 100) {
        console.log(req?.body?.Card?.CardRate + req?.body?.PayPalRate + req?.body?.IdealRate + req?.body?.BancontactRate + req?.body?.GiropayRate + req?.body?.MultiBancoRate)
        console.log("Total need to equal 100");
        res
            .status(500)
            .json({ "Error": "Total need to equal 100" });
    }
    else if (req.body.ACCPRate <= 0 || req.body.ACCPRate > 100) {
        console.log("The acceptance rate must be greater than 0 and less than 100.");
        res
            .status(500)
            .json({ "Error": "The acceptance rate must be greater than 0 and less than 100." });
    }
    else if (req.body.Card.SCHEMRep.Visa + req.body.Card.SCHEMRep.Mastercard + req.body.Card.SCHEMRep.CB + req.body.Card.SCHEMRep.Amex > 100) {
        console.log("Total of scheme repartition can't be superior to 100");
        res
            .status(500)
            .json({ "Error": "Total of scheme repartition can't be superior to 100" });
    }
    else if (req.body.WaitTime <= 100) {
        console.log("The wait time must be greater than 100 ms");
        res
            .status(500)
            .json({ "Error": "The wait time must be greater than 100 ms" });
    }
    else if (AvailableProcessingChannelForPaymentMethod.includes(null)) {
        console.log("Error, no processing channel configured for one or many payment method");
        res
            .status(500)
            .json({ "Error": "Error, no processing channel configured for one or many payment method" });
    }
    else {
        try {
            batchresult = await CreateBatch.TRSBatch(req.body.ACCPRate, req.body.TRSNumber, req.body.Card.CardRate, req.body.Card.SCHEMRep, req.body.WaitTime, req.body.headless, req.body.PayPalRate, req.body.Card.ApplePayRate, req.body.Card.GooglePayRate, req.body.IdealRate, req.body.BancontactRate, req.body.GiropayRate, req.body.MultiBancoRate, req.body.currency, req.body.RefundRate, req.body.DisputeRate, req.body.Processing_Channel_ID)
            res
                .status(200)
                .json(batchresult);
        } catch (err) {
            console.log(err);
            res
                .status(500)
                .json(err);
        }
    }

}),

    router.post('/CreateSessionStandalone', async function (req, res, next) {
        console.log("Got body :", req.body)
        try {
            CreateAuth = await AuthStandalone.RequestSession(req.body.CardNumber, req.body.preferred_scheme, req.body.amount, req.body.orderReference, req.body.cvv, req.body.currency, req.body.paymenttype, req.body.authentication_category, req.body.challengeindicator, req.body.description, req.body.completiontype, req.body.headless, req.body.autoRun)
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
            CreateAuth = await Standalone3DSflow.Init3DSSession(req.body.CardNumber, req.body.preferred_scheme, req.body.amount, req.body.orderReference, req.body.cvv, req.body.currency, req.body.paymenttype, req.body.authentication_category, req.body.challengeindicator, req.body.description, req.body.completiontype, req.body.headless, req.body.autoRun)
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