const CKO = require('./CKO.connect');
const IdempotencyKeygen = require('../IdempotencyKey');
const { faker } = require('@faker-js/faker');

async function SepaPayment(amount, orderReference, currency, captureauto, paymenttype, processing_channel_id) {
    var transaction;
    IdempotencyKeygenerated = IdempotencyKeygen.IdempotencyKey();
    transaction = await CKO.payments.request({
        source: {
            type: "sepa",
            country: "FR",
            account_number: "FR7630006000011234567890189",
            currency: "EUR",
            mandate_id: "123456",
            date_of_signature: "2022-08-22",
            account_holder: {
                first_name: faker.person.middleName(),
                last_name: faker.person.lastName(),
                billing_address: {
                    address_line1: faker.location.street(),
                    address_line2: faker.location.streetAddress(false),
                    city: faker.location.city(),
                    state: faker.location.state({ abbreviated: true }),
                    zip: faker.location.zipCode(),
                    country: faker.location.countryCode('alpha-2')
                }
            }
        },
        customer: {
            // id: {{CustomerID}},
            email: faker.internet.email({ allowSpecialCharacters: true }),
            name: faker.person.fullName()
        },
        processing_channel_id: processing_channel_id,
        amount: amount,
        currency: "EUR",
        payment_type: "Regular",
        reference: orderReference,
        description: faker.hacker.phrase(),
        success_url: "https://google.fr",
        failure_url: "https://google.fr",
    }, IdempotencyKeygenerated);
    //console.log(transaction.status);
    if (transaction.status === Pending && transaction.requiresRedirect === true) {
        return { requiresRedirect: transaction.requiresRedirect, PaymentId: transaction.id, TransactionStatus: transaction.status, RedirectionURL: transaction._links.redirect.href }
    }
    else {
        return { requiresRedirect: transaction.requiresRedirect, TransactionStatus: transaction.status, PaymentId: transaction.id }
    }
};



module.exports = {
    SepaPayment
}