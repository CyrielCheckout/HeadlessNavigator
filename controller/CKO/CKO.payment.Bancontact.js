const CKO = require('./CKO.connect');
const IdempotencyKeygen = require('../IdempotencyKey');
const { faker } = require('@faker-js/faker');

async function BancontactPayment(amount, orderReference, currency, captureauto, paymenttype, description, Processing_Channel_ID) {
    var transaction;
    IdempotencyKeygenerated = IdempotencyKeygen.IdempotencyKey();
    transaction = await CKO.payments.request({
        source: {
            type: 'bancontact',
            payment_country: "BE",
            billing_descriptor: "CKO NODE JS DEMO",
            account_holder_name: faker.person.fullName(),
        },
        currency: currency,
        amount: amount,
        reference: orderReference,
        capture: captureauto,
        processing_channel_id: Processing_Channel_ID,
        //capture_on: capturedate,
        payment_type: paymenttype,
        description: description,
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
        success_url: "https://google.fr",
        failure_url: "https://google.fr",
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
        recipient: {
            dob: "1995-05-31",
            account_number: "5555554444",
            zip: faker.location.zipCode(),
            last_name: faker.person.lastName(),
            first_name: faker.person.middleName(),
            country: faker.location.countryCode('alpha-2')
        },
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



module.exports = {
    BancontactPayment
}