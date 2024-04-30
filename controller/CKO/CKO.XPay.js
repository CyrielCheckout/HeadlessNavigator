const CKO = require('./CKO.connect');
const IdempotencyKeygen = require('../IdempotencyKey');
const { faker } = require('@faker-js/faker');

async function ApplePay(CardNumber, amount, orderReference, currency, captureauto, paymenttype, description,Processing_Channel_ID) {
    console.log("TRS :", CardNumber, "Amount :", amount, "OrderRef :", orderReference, "Currency :", currency);
    var transaction;
    IdempotencyKeygenerated = IdempotencyKeygen.IdempotencyKey();
    transaction = await CKO.payments.request({
        source: {
            type: 'network_token',
            token: CardNumber,
            expiry_month: 6,
            expiry_year: 2029,
            cryptogram: "AgAAAAAAAIR8CQrXcIhbQAAAAAA=",
            token_type : "applepay",
            eci : "05",
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
    return { "requiresRedirect": transaction.requiresRedirect, "TransactionStatus": transaction.status, "PaymentId": transaction.id }
};

async function GooglePay(CardNumber, amount, orderReference, currency, captureauto, paymenttype, description,Processing_Channel_ID) {
    console.log("TRS :", CardNumber, "Amount :", amount, "OrderRef :", orderReference, "Currency :", currency);
    var transaction;
    IdempotencyKeygenerated = IdempotencyKeygen.IdempotencyKey();
    transaction = await CKO.payments.request({
        source: {
            type: 'network_token',
            token: CardNumber,
            expiry_month: 6,
            expiry_year: 2029,
            cryptogram: "AgAAAAAAAIR8CQrXcIhbQAAAAAA=",
            token_type : "googlepay",
            eci : "05",
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
    return { "requiresRedirect": transaction.requiresRedirect, "TransactionStatus": transaction.status, "PaymentId": transaction.id }
};

module.exports = {
    ApplePay,
    GooglePay
}