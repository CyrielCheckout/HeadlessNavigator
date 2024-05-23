const CKO = require('./CKO.connect');
const IdempotencyKeygen = require('../IdempotencyKey');
const { faker } = require('@faker-js/faker');

async function CardPayment(CardNumber, preferred_scheme, amount, orderReference, currency, captureauto, paymenttype, description, Disputes ,Processing_Channel_ID, threeDSType, SessionID) {
    console.log("TRS :", CardNumber, "Scheme :", preferred_scheme, "Amount :", amount, "OrderRef :", orderReference, "Currency :", currency, "Disputes :",Disputes);
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
    if (Disputes === true) {
        amountDisputes = [1042,1312,4857,4861,105,1311,4837,4856,104,131,4855,486,1043,1313,4858,4862,1314,1044,4859,4863,1045,1315,485,4864,1046,1316,4851,4865,1047,1317,4852,4866,1049,1319,4854,4868,1048,1318,4853,4867];
        amountDisputesChoice = faker.number.int({ max: amountDisputes.length - 1 });
        amount = amountDisputes[amountDisputesChoice];
        currency = "GBP";
        expiry_month =1;
        expiry_year = 2099;
    }
    else {
        expiry_month =1;
        expiry_year = 2027;
    }
    var transaction;
    IdempotencyKeygenerated = IdempotencyKeygen.IdempotencyKey();
    transaction = await CKO.payments.request({
        source: {
            type: 'card',
            number: CardNumber,
            expiry_month: expiry_month,
            expiry_year: expiry_year,
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