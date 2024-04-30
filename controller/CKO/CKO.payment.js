const CKO = require('./CKO.connect');
const IdempotencyKeygen = require('../IdempotencyKey');
const { faker } = require('@faker-js/faker');

async function CardPayment(CardNumber, preferred_scheme, amount, orderReference, currency, captureauto, paymenttype, description, Processing_Channel_ID, threeDSType, SessionID) {
    console.log("TRS :", CardNumber, "Scheme :", preferred_scheme, "Amount :", amount, "OrderRef :", orderReference, "Currency :", currency);
    if (threeDSType === "StandaloneSessionID") {
        ThreeDSsource = { enabled: true, authentication_id: SessionID }
        console.log(ThreeDSsource)
    }
    else {
        ThreeDSsource = { enabled: true }
    }
    if (preferred_scheme === "amex") {
        cvv = 1000;
        processing = {};
    }
    else {
        cvv = 100;
        processing = {
            preferred_scheme: preferred_scheme
        };
    }
    var transaction;
    IdempotencyKeygenerated = IdempotencyKeygen.IdempotencyKey();
    transaction = await CKO.payments.request({
        source: {
            type: 'card',
            number: CardNumber,
            expiry_month: 6,
            expiry_year: 2029,
            cvv: cvv,
            stored: faker.datatype.boolean(),
            store_for_future_use: faker.datatype.boolean(),
            billing_address: {
                address_line1: faker.location.street(),
                address_line2: faker.location.streetAddress(false),
                city: faker.location.city(),
                state: faker.location.state({ abbreviated: true }),
                zip: faker.location.zipCode(),
                country: faker.location.countryCode('alpha-2')
            },
            phone: {
                country_code: "+33",
                number: faker.string.numeric({ length: { min: 10, max: 10 } })
            }
        },
        currency: currency,
        processing_channel_id: Processing_Channel_ID,
        amount: amount,
        reference: orderReference,
        capture: captureauto,
        success_url: "https://google.fr",
        failure_url: "https://google.fr",
        //capture_on: capturedate,
        payment_type: paymenttype,
        description: faker.hacker.phrase(),
        processing: processing,
        "3ds": ThreeDSsource,
        payment_ip: faker.internet.ipv4(),
        customer: {
            //id: CustomerID,
            email: faker.internet.email({ allowSpecialCharacters: true }),
            name: faker.person.fullName()
        },
        billing_descriptor: {
            name: "CKO NODE JS TEST",
            city: "AixEnProvence"
        },
        shipping: {
            address: {
                address_line1: faker.location.street(),
                address_line2: faker.location.streetAddress(false),
                city: faker.location.city(),
                state: faker.location.state({ abbreviated: true }),
                zip: faker.location.zipCode(),
                country: faker.location.countryCode('alpha-2')
            },
            phone: {
                country_code: "+33",
                number: faker.string.numeric({ length: { min: 10, max: 10 } })
            }
        },
        previous_payment_id: null,
        risk: {
            enabled: true
        },
        /*recipient: {
            dob: "1995-05-31",
            account_number: "5555554444",
            zip: faker.location.zipCode(),
            last_name: faker.person.lastName(),
            first_name: faker.person.middleName(),
            country: faker.location.countryCode('alpha-2')
        },*/
        metadata: {
            "headless": false,
            "autoRun": true
        }
    }, IdempotencyKeygenerated);
    //console.log(transaction.status);
    if (transaction.status === "Pending" && transaction.requiresRedirect === true) {
        return { "requiresRedirect": transaction.requiresRedirect, "PaymentId": transaction.id, "TransactionStatus": transaction.status, "RedirectionURL": transaction._links.redirect.href }
    }
    else {
        return { "requiresRedirect": transaction.requiresRedirect, "TransactionStatus": transaction.status, "PaymentId": transaction.id }
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
    CardPayment,
    getPaymentDetails,
    getActionsDetails,
    Refund,
    Capture,
    PartialRefund,
    Void,
}