const TRSList = require('./createTransactionList');
const CKOpayment = require('./CKO/CKO.payment');
const CKOpaymentXPay = require('./CKO/CKO.XPay');
const CKOpaymentPayPal = require('./CKO/CKO.payment.PayPal');
const CKOpaymentIdeal = require('./CKO/CKO.payment.Ideal');
const CKOpaymentBancontact = require('./CKO/CKO.payment.Bancontact');
const CKOpaymentGiropay = require('./CKO/CKO.payment.Giropay');
const CKOpaymentMultibanco = require('./CKO/CKO.payment.Multibanco');
const AleatData = require('./Orderreferencegenerator');
const waitfor = require('./IdempotencyKey');
const Headless3DS = require('./Headless/Headless.3DS');
const PayPal = require('.././Controller/Headless/Headless.PayPal');
const Ideal = require('.././Controller/Headless/Headless.Ideal');
const Bancontact = require('.././Controller/Headless/Headless.Bancontact');
const GiroPay = require('.././Controller/Headless/Headless.Giropay');
const Multibanco = require('.././Controller/Headless/Headless.Multibanco');
const { ConsoleMessage } = require('puppeteer');
const { faker } = require('@faker-js/faker');

async function TRSBatch(acceptanceRate, numberofTransaction, CardRate, schemeDistribution, waitTime, headless, PayPalRate, ApplePayRate, GooglePayRate, IdealRate, BancontactRate, GiropayRate, MultiBancoRate, CurrencyList, RefundRate, processing_channel_id) {
    const transactionBatch = TRSList.generateTransactionArray(acceptanceRate, numberofTransaction, CardRate, schemeDistribution, PayPalRate, ApplePayRate, GooglePayRate, IdealRate, BancontactRate, GiropayRate, MultiBancoRate, CurrencyList, RefundRate, processing_channel_id);
    console.log("Nombre de transaction :", transactionBatch.length);
    Refundnumber = [];
    for (let i = 0; i < Math.round((RefundRate * (numberofTransaction)) / 100); i++) {
        Refundnumber.push(Math.round(Math.random() * numberofTransaction));
    };
    console.log("Nombre de refund :", Refundnumber.length, " pour un total de :", numberofTransaction, " transactions");
    a = 0
    for (let i = 0; i < transactionBatch.length; i++) {
        Randomtransaction = Math.floor(Math.random() * transactionBatch.length);
        TRSOrderRef = "Node_JS_" + AleatData.orderRef();
        if (transactionBatch[Randomtransaction].PaymentMethod === "Card") {
            console.log("Card Payment")
            try {
                TRS = await CKOpayment.CardPayment(transactionBatch[Randomtransaction].CardNumber, transactionBatch[Randomtransaction].Scheme, faker.finance.amount({ min: 1, max: 100000, dec: 0 }), TRSOrderRef, transactionBatch[Randomtransaction].Currency, "True", "Regular", "CKO demo batch", transactionBatch[Randomtransaction].Processing_Channel_ID);
                console.log(TRS);
                if (TRS.requiresRedirect === true) {
                    try {
                        headlessrun = await Headless3DS.Headless3DS(TRS.RedirectionURL, headless, "www.google.fr");
                    }
                    catch (err) {
                        console.log("Error for Card Headless:", err)
                    }
                }
            } catch (err) {
                console.log("Error for Card Payment:", err)
            }
        }
        if (transactionBatch[Randomtransaction].PaymentMethod === "PayPal") {
            try {
                console.log("PayPal Payment")
                TRS = await CKOpaymentPayPal.PayPalPayment(faker.finance.amount({ min: 1, max: 100000, dec: 0 }), TRSOrderRef, transactionBatch[Randomtransaction].Currency, true, "Regular", "Test", transactionBatch[Randomtransaction].Processing_Channel_ID);
                console.log(TRS);
                if (TRS.requiresRedirect === true) {
                    try {
                        headlessrun = await PayPal.HeadlessPayPal(TRS.RedirectionURL, headless);
                    }
                    catch (err) {
                        console.log("Error for PayPal Headless:", err)
                    }
                }
            }
            catch (err) {
                console.log("Error for PayPal Payment:", err)
            }
        }
        if (transactionBatch[Randomtransaction].PaymentMethod === "ApplePay") {
            console.log("ApplePay Payment");
            try {
                TRS = await CKOpaymentXPay.ApplePay(transactionBatch[Randomtransaction].CardNumber, faker.finance.amount({ min: 1, max: 100000, dec: 0 }), TRSOrderRef, transactionBatch[Randomtransaction].Currency, "True", "Regular", "CKO demo batch", transactionBatch[Randomtransaction].Processing_Channel_ID);
                console.log(TRS);
            }
            catch (err) {
                console.log("Error for ApplePay Payment:", err)
            }
        }
        if (transactionBatch[Randomtransaction].PaymentMethod === "GooglePay") {
            console.log("GooglePay Payment");
            try {
                TRS = await CKOpaymentXPay.GooglePay(transactionBatch[Randomtransaction].CardNumber, faker.finance.amount({ min: 1, max: 100000, dec: 0 }), TRSOrderRef, transactionBatch[Randomtransaction].Currency, "True", "Regular", "CKO demo batch", transactionBatch[Randomtransaction].Processing_Channel_ID);
                console.log(TRS);
            }
            catch (err) {
                console.log("Error for GooglePay Payment:", err)
            }
        }
        if (transactionBatch[Randomtransaction].PaymentMethod === "Ideal") {
            try {
                TRS = await CKOpaymentIdeal.IdealPayment(transactionBatch[Randomtransaction].amount || faker.finance.amount({ min: 1, max: 100000, dec: 0 }), TRSOrderRef, transactionBatch[Randomtransaction].Currency, true, "Regular", "Test", transactionBatch[Randomtransaction].Processing_Channel_ID);
                console.log(TRS);
                if (TRS.requiresRedirect === true) {
                    try {
                        headlessrun = await Ideal.HeadlessIdeal(TRS.RedirectionURL, headless);
                    }
                    catch (err) {
                        console.log("Error for Ideal Headless:", err)
                    }
                }
            }
            catch (err) {
                console.log("Error for Ideal Payment:", err)
            }
        }
        if (transactionBatch[Randomtransaction].PaymentMethod === "Bancontact") {
            console.log("Bancontact Payment")
            try {
                TRS = await CKOpaymentBancontact.BancontactPayment(faker.finance.amount({ min: 1, max: 100000, dec: 0 }), TRSOrderRef, transactionBatch[Randomtransaction].Currency, true, "Regular", "Test", transactionBatch[Randomtransaction].Processing_Channel_ID);
                console.log(TRS);
                if (TRS.requiresRedirect === true) {
                    try {
                        if (transactionBatch[Randomtransaction].Status === "Accepted") {
                            headlessrun = await Bancontact.HeadlessBancontactAccepted(TRS.RedirectionURL, headless);
                        }
                        else {
                            headlessrun = await Bancontact.HeadlessBancontactRefused(TRS.RedirectionURL, headless);
                        }
                    }
                    catch (err) {
                        console.log("Error for Bancontact Headless:", err)
                    }
                }
            }
            catch (err) {
                console.log("Error for Bancontact Payment:", err)
            }
        }
        if (transactionBatch[Randomtransaction].PaymentMethod === "Giropay") {
            console.log("Giropay Payment");
            try {
                TRS = await CKOpaymentGiropay.GiropayPayment(faker.finance.amount({ min: 1, max: 100000, dec: 0 }), TRSOrderRef, transactionBatch[Randomtransaction].Currency, true, "Regular", "Test", transactionBatch[Randomtransaction].Processing_Channel_ID);
                console.log(TRS);
                if (TRS.requiresRedirect === true) {
                    try {
                        headlessrun = await GiroPay.HeadlessGiropay(TRS.RedirectionURL, headless);
                    }
                    catch (err) {
                        console.log("Error for Giropay Headless:", err)
                    }
                }
            }
            catch (err) {
                console.log("Error for Giropay Payment:", err)
            }
        }
        if (transactionBatch[Randomtransaction].PaymentMethod === "Multibanco") {
            console.log("Multibanco Payment")
            try {
                TRS = await CKOpaymentMultibanco.MultibancoPayment(faker.finance.amount({ min: 1, max: 100000, dec: 0 }), TRSOrderRef, transactionBatch[Randomtransaction].Currency, true, "Regular", "Test", transactionBatch[Randomtransaction].Processing_Channel_ID);
                console.log(TRS);
                if (TRS.requiresRedirect === true) {
                    try {
                        headlessrun = await Multibanco.HeadlessMultibanco(TRS.RedirectionURL, headless);
                    }
                    catch (err) {
                        console.log("Error for Multibanco Headless:", err);
                    }
                }
            }
            catch (err) {
                console.log("Error for Multibanco Headless:", err.http_code, "Error message:", err.body)
            }
        }
        try {
            TRSResult = await CKOpayment.getPaymentDetails(TRS.PaymentId);
            if (transactionBatch[Randomtransaction].Refund === true && TRSResult.status === "Captured") {
                console.log("Transaction refunded :", TRS.PaymentId);
                try {
                    TRSRefund = await CKOpayment.Refund(TRS.PaymentId);
                    try {
                        TRSResult = await CKOpayment.getPaymentDetails(TRS.PaymentId);
                    }
                    catch (err) {
                        console.log("Error for GetPaymentDetails :", TRS.PaymentId, "error reason:", err)
                    }
                }
                catch (err) {
                    console.log("Error for refund payment:", TRS.PaymentId, "error reason:", err)
                }
            }
            console.log("Transaction ok :", TRSResult.approved, "Transaction Status :", TRSResult.status);
            transactionBatch.splice(Randomtransaction, 1);
            waitfor.delay(waitTime);
        }
        catch (err) {
            console.log("Error:", err)
        }
    }
}

module.exports = { TRSBatch }