const CKO = require('./CKO.connect');
const IdempotencyKeygen = require('../IdempotencyKey');
var random_name = require('node-random-name');
var randomEmail = require('random-email');
var randomip = require('random-ip');

async function MakeAuthorization(CardNumber, preferred_scheme, amount, orderReference, cvv, currency, captureauto, paymenttype, description, threeDSType, SessionID) {
    console.log("TRS :",CardNumber, "Scheme :", preferred_scheme, "Amount :", amount, "OrderRef :",orderReference, "CVV :",cvv, "Currency :", currency);
    if (threeDSType === "StandaloneSessionID" ){
        ThreeDSsource = { enabled: true, authentication_id: SessionID}
        console.log(ThreeDSsource)
    }
    else {
        ThreeDSsource = { enabled: true}
    }
    var transaction;
    IdempotencyKeygenerated = IdempotencyKeygen.IdempotencyKey();
    if (preferred_scheme === "amex"){
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
        success_url : "https://google.fr",
        failure_url : "https://google.fr",
        //capture_on: capturedate,
        payment_type: paymenttype,
        description: description,
        "3ds": ThreeDSsource,
        payment_ip : randomip('0.0.0.0', 16,24),
        customer: {
            //id: CustomerID,
            email: randomEmail({ domain: 'gmail.com' }),
            name: random_name()
        }
    }, IdempotencyKeygenerated);
}
else {transaction = await CKO.payments.request({
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
    success_url : "https://google.fr",
    failure_url : "https://google.fr",
    //capture_on: capturedate,
    payment_type: paymenttype,
    description: description,
    processing: {
        preferred_scheme: preferred_scheme
    },
    "3ds": ThreeDSsource,
    payment_ip : randomip('192.168.2.0', 24),
    customer: {
        //id: CustomerID,
        email: randomEmail({ domain: 'gmail.com' }),
        name: random_name()
    },
    billing_descriptor : {
        name : "CKO NODE JS TEST",
        city : "AixEnProvence"
    },
    shipping: {
        address: {
            address_line1: "20 bis rue la Fayette",
            address_line2: "20 bis rue la Fayette",
            city: "Paris",
            state: "",
            zip: "75000",
            country: "FR"
        },
        phone: {
            country_code: "+33",
            number: "0606060606"
        }
    },
    previous_payment_id: null,
    risk: {
        enabled: true
    },
    recipient: {
        dob: "1995-05-31",
        account_number: "5555554444",
        zip: "W1T",
        last_name: random_name(),
        first_name: random_name(),
        country: "FR"
    },
    metadata: {
        "headless": false,
        "autoRun": true
    }
}, IdempotencyKeygenerated);}
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
}