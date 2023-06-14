const TRSList = require('./createTransactionList');
const CKOpayment = require('./CKO/CKO.payment');
const CKOpaymentPayPal = require('./CKO/CKO.payment.PayPal');
const CKOpaymentIdeal = require('./CKO/CKO.payment.Ideal');
const CKOpaymentBancontact = require('./CKO/CKO.payment.Bancontact');
const CKOpaymentGiropay = require('./CKO/CKO.payment.Giropay');
const CKOpaymentMultibanco = require('./CKO/CKO.payment.Multibanco');
const AleatData = require('./Orderreferencegenerator');
const Headless3DS = require('./Headless/Headless.3DS');
const PayPal = require('.././Controller/Headless/Headless.PayPal');
const Ideal = require('.././Controller/Headless/Headless.Ideal');
const Bancontact = require('.././Controller/Headless/Headless.Bancontact');
const GiroPay = require('.././Controller/Headless/Headless.Giropay');
const Multibanco = require('.././Controller/Headless/Headless.Multibanco');
const { ConsoleMessage } = require('puppeteer');

async function TRSBatch(acceptanceRate, numberofTransaction, schemeDistribution, waitTime, headless, PayPalTRS, numberIdealTRS, numberBancontactTRS, numberGiropayTRS, numberMultiBancoTRS, CurrencyList, RefundRate) {
    if (waitTime <= 100) {
        throw new Error('The wait time must be greater than 100.');
    };
    const transactionBatch = TRSList.generateTransactionArray(acceptanceRate, numberofTransaction, schemeDistribution, PayPalTRS, numberIdealTRS, numberBancontactTRS, numberGiropayTRS, numberMultiBancoTRS, CurrencyList, RefundRate);
    console.log("Nombre de transaction :", transactionBatch.length);
    Refundnumber = [];
    for (let i = 0; i < Math.round((RefundRate * (numberofTransaction + PayPalTRS + numberIdealTRS + numberBancontactTRS + numberGiropayTRS + numberMultiBancoTRS)) / 100); i++) {
        Refundnumber.push(Math.round(Math.random() * (numberofTransaction + PayPalTRS + numberIdealTRS + numberBancontactTRS + numberGiropayTRS + numberMultiBancoTRS)));
    };
    console.log("Nombre de refund :", Refundnumber.length, " pour un total de :", numberofTransaction + PayPalTRS + numberIdealTRS + numberBancontactTRS + numberGiropayTRS + numberMultiBancoTRS, " transactions");
    lengthtable = transactionBatch.length;
    //console.log(transactionBatch);
    a = 0
    for (let i = 0; i < lengthtable; i++) {
        Randomtransaction = Math.floor(Math.random() * transactionBatch.length);
        TRSamount = AleatData.orderAmount();
        TRSOrderRef = "Node_JS_" + AleatData.orderRef();
        if (transactionBatch[Randomtransaction].PaymentMethod === "Card") {
            if (transactionBatch[Randomtransaction].Scheme === "amex") { cvv = 1000; prefScheme = "amex"; } else { cvv = 100; prefScheme = transactionBatch[Randomtransaction].Scheme; }
            try {
                console.log(transactionBatch[Randomtransaction].Currency)
                TRS = await CKOpayment.MakeAuthorization(transactionBatch[Randomtransaction].CardNumber, prefScheme, TRSamount, TRSOrderRef, cvv, transactionBatch[Randomtransaction].Currency, "True", "Regular", "CKO demo batch");
                console.log(TRS);
            } catch (err) {
                console.log(err)
            }
            if (TRS.requiresRedirect === true) {
                headlessrun = await Headless3DS.Headless3DS(TRS.RedirectionURL, headless, "www.google.fr");
            }
        }
        if (transactionBatch[Randomtransaction].PaymentMethod === "PayPal") {
            TRS = await CKOpaymentPayPal.PayPalPayment(TRSamount, TRSOrderRef, transactionBatch[Randomtransaction].Currency, true, "Regular", "Test");
            console.log(TRS);
            if (TRS.requiresRedirect === true) {
                headlessrun = await PayPal.HeadlessPayPal(TRS.RedirectionURL, headless);
            }
        }
        if (transactionBatch[Randomtransaction].PaymentMethod === "Ideal") {
            TRS = await CKOpaymentIdeal.IdealPayment(TRSamount, TRSOrderRef, transactionBatch[Randomtransaction].Currency, true, "Regular", "Test");
            console.log(TRS);
            if (TRS.requiresRedirect === true) {
                headlessrun = await Ideal.HeadlessIdeal(TRS.RedirectionURL, headless);
            }
        }
        if (transactionBatch[Randomtransaction].PaymentMethod === "Bancontact") {
            TRS = await CKOpaymentBancontact.BancontactPayment(TRSamount, TRSOrderRef, transactionBatch[Randomtransaction].Currency, true, "Regular", "Test");
            console.log(TRS);
            if (TRS.requiresRedirect === true) {
                headlessrun = await Bancontact.HeadlessBancontact(TRS.RedirectionURL, headless);
            }
        }
        if (transactionBatch[Randomtransaction].PaymentMethod === "Giropay") {
            TRS = await CKOpaymentGiropay.GiropayPayment(TRSamount, TRSOrderRef, transactionBatch[Randomtransaction].Currency, true, "Regular", "Test");
            console.log(TRS);
            if (TRS.requiresRedirect === true) {
                headlessrun = await GiroPay.HeadlessGiropay(TRS.RedirectionURL, headless);
            }
        }
        if (transactionBatch[Randomtransaction].PaymentMethod === "Multibanco") {
            TRS = await CKOpaymentMultibanco.MultibancoPayment(TRSamount, TRSOrderRef, transactionBatch[Randomtransaction].Currency, true, "Regular", "Test");
            console.log(TRS);
            if (TRS.requiresRedirect === true) {
                headlessrun = await Multibanco.HeadlessMultibanco(TRS.RedirectionURL, headless);
            }
        }
        TRSResult = await CKOpayment.getPaymentDetails(TRS.PaymentId);
        NeedRefund = Math.floor(Math.random() * (numberofTransaction + PayPalTRS + numberIdealTRS + numberBancontactTRS + numberGiropayTRS + numberMultiBancoTRS));
        console.log("NeedRefund value :",NeedRefund, " Refundnumber include :",Refundnumber.includes(NeedRefund), " index value :"),Refundnumber.indexOf(NeedRefund);
        if (Refundnumber.includes(NeedRefund)=== true && TRSResult.status === "Captured") {
            console.log("Transaction refunded :", TRS.PaymentId);
            TRSRefund = await CKOpayment.Refund(TRS.PaymentId);
            TRSResult = await CKOpayment.getPaymentDetails(TRS.PaymentId);
            var index = Refundnumber.indexOf(NeedRefund);
            Refundnumber.splice(index, 1);
        }
        console.log("Number of refund left :", Refundnumber.length);
        console.log("Transaction ok :", TRSResult.approved, "Transaction Status :", TRSResult.status);
        transactionBatch.splice(Randomtransaction, 1);
    }

}

module.exports = { TRSBatch }