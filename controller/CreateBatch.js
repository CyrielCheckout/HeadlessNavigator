const TRSList = require('./createTransactionList');
const CKOpayment = require('./CKO/CKO.payment');
const CKOpaymentPayPal = require('./CKO/CKO.payment.PayPal');
const AleatData = require('./Orderreferencegenerator');
const Headless3DS = require('./Headless/Headless.3DS');
const PayPal = require('.././Controller/Headless/Headless.PayPal');
async function TRSBatch(acceptanceRate, numberofTransaction, schemeDistribution, waitTime, headless, PayPalTRS) {
    if (waitTime <= 100) {
        throw new Error('The wait time must be greater than 100.');
    };
    const transactionBatch = TRSList.generateTransactionArray(acceptanceRate, numberofTransaction, schemeDistribution, PayPalTRS);
    console.log("Nombre de transaction :", transactionBatch.length);
    lengthtable = transactionBatch.length;
    a = 0
    for (let i = 0; i < lengthtable; i++) {
        Randomtransaction = Math.floor(Math.random() * transactionBatch.length);
        TRSamount = AleatData.orderAmount();
        TRSOrderRef = "Node_JS_" + AleatData.orderRef();
        if (transactionBatch[Randomtransaction].PaymentMethod === "Card") {
            if (transactionBatch[Randomtransaction].Scheme === "amex") { cvv = 1000; prefScheme = ""; } else { cvv = 100; prefScheme = transactionBatch[Randomtransaction].Scheme; }
            try {
                TRS = await CKOpayment.MakeAuthorization(transactionBatch[Randomtransaction].CardNumber, prefScheme, TRSamount, TRSOrderRef, cvv, "EUR", "True", "Regular", "description");
                console.log(TRS);
            } catch (err) {
                console.log(err)
            }
            if (TRS.requiresRedirect === true) {
                headlessrun = await Headless3DS.Headless3DS(TRS.RedirectionURL, headless, "www.google.fr");
            }
        }
        if (transactionBatch[Randomtransaction].PaymentMethod === "PayPal") { 
            TRS = await CKOpaymentPayPal.PayPalPayment(TRSamount, TRSOrderRef, "EUR", true, "Regular", "Test");
            console.log(TRS);
            if (TRS.requiresRedirect === true) {
                headlessrun = await PayPal.HeadlessPayPal(TRS.RedirectionURL, headless);
            }
         }
        TRSResult = await CKOpayment.getPaymentDetails(TRS.PaymentId);
        console.log("Transaction ok :", TRSResult.approved, "Transaction Status :",TRSResult.status);
        transactionBatch.splice(Randomtransaction, 1);
        //await sleep(waitTime);
    }

}

module.exports = { TRSBatch }