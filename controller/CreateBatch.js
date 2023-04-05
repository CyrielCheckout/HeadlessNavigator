const TRSList = require('./createTransactionList');
const CKOpayment = require('./CKO/CKO.payment');
const AleatData = require('./Orderreferencegenerator');
const Headless3DS = require('./Headless/Headless.3DS');
async function TRSBatch(acceptanceRate, numberofTransaction, schemeDistribution) {
    const transactionBatch = TRSList.generateTransactionArray(acceptanceRate, numberofTransaction, schemeDistribution);
    console.log("Nombre de transaction :",transactionBatch.length);
    lengthtable = transactionBatch.length;
    a = 0
    for (let i = 0; i < lengthtable; i++) {
        Randomtransaction = Math.floor(Math.random() * transactionBatch.length);
        TRSamount = AleatData.orderAmount();
        TRSOrderRef = "Node_JS_" + AleatData.orderRef();
        if (transactionBatch[Randomtransaction].Scheme === "amex") { cvv = 1000; prefScheme = ""; } else { cvv = 100; prefScheme = transactionBatch[Randomtransaction].Scheme; }
        try {
            TRS = await CKOpayment.MakeAuthorization(transactionBatch[Randomtransaction].CardNumber, prefScheme, TRSamount, TRSOrderRef, cvv, "EUR", "True", "Regular", "description");
            console.log(TRS);
        } catch (err) {
            console.log(err)
        }
        if (TRS.requiresRedirect === true) {
            headlessrun = await Headless3DS.Headless3DS(TRS.RedirectionURL, true, "www.google.fr");
        }
        TRSResult = await CKOpayment.getPaymentDetails(TRS.PaymentId);
        console.log("Transaction ok :",TRSResult.approved);
        transactionBatch.splice(Randomtransaction, 1);
        
    }

}

module.exports = { TRSBatch }