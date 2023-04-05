const CKO = require('./CKO.connect');
const IdempotencyKeygen = require('../IdempotencyKey')

async function MakeAuthorization(CardNumber, preferred_scheme, amount, orderReference, cvv, currency, captureauto, paymenttype, description) {
    var transaction;
    IdempotencyKeygenerated = IdempotencyKeygen.IdempotencyKey();
    transaction = await CKO.payments.request({
        source: {
            type: 'card',
            number: CardNumber,
            expiry_month: 6,
            expiry_year: 2029,
            cvv: cvv
        },
        currency: currency,
        amount: amount,
        reference: orderReference,
        capture: captureauto,
        //capture_on: capturedate,
        payment_type: paymenttype,
        description: description,
        processing: {
            preferred_scheme: preferred_scheme
        },
        threeDs: {
            enabled: false
        },
        /*customer: {
            id: CustomerID,
            email: CustomerEmail,
            name: CustomerName
        }*/
    }, IdempotencyKeygenerated);
    //console.log(transaction.status);
    if (transaction.status === "Pending" && transaction.requiresRedirect === true) {
        return { "requiresRedirect": transaction.requiresRedirect, "PaymentId": transaction.id, "TransactionStatus": transaction.status, "RedirectionURL": transaction._links.redirect.href }
    }
    else {
        return { "requiresRedirect": transaction.requiresRedirect, "TransactionStatus": transaction.status,"PaymentId": transaction.id }
    }
};

async function getPaymentDetails(payID) {
    IdempotencyKeygenerated = IdempotencyKeygen.IdempotencyKey();
    var getPaymentDetails = await CKO.payments.get(payID, IdempotencyKeygenerated);
    return getPaymentDetails;
}

async function getActionsDetails(payID) {
    IdempotencyKeygenerated = IdempotencyKeygen.IdempotencyKey();
    var getActionsDetails = await CKO.payments.getActions(payID, IdempotencyKeygenerated);
    return getActionsDetails;
}

async function Refund(payID) {
    IdempotencyKeygenerated = IdempotencyKeygen.IdempotencyKey();
    var Refund = await CKO.payments.refund(payID, '', IdempotencyKeygenerated);
    return Refund;
}

async function PartialRefund(payID, amount) {
    IdempotencyKeygenerated = IdempotencyKeygen.IdempotencyKey();
    var PartialRefund = await CKO.payments.refund(payID, IdempotencyKeygenerated, { "amount": amount });
    return PartialRefund;
}

async function Capture(payID) {
    IdempotencyKeygenerated = IdempotencyKeygen.IdempotencyKey();
    var Capture = await CKO.payments.capture(payID, '', IdempotencyKeygenerated);
    return Capture;
}

async function Void(payID) {
    IdempotencyKeygenerated = IdempotencyKeygen.IdempotencyKey();
    var Void = await CKO.payments.void(payID, IdempotencyKeygenerated);
    return Void;
}

module.exports = {
    MakeAuthorization,
    getPaymentDetails,
    getActionsDetails,
    Refund,
    Capture,
    Void,
    PartialRefund
}