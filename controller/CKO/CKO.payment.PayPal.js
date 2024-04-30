const CKO = require('./CKO.connect');
const IdempotencyKeygen = require('../IdempotencyKey');
const { faker } = require('@faker-js/faker');

async function PayPalPayment(amount, orderReference, currency, captureauto, paymenttype, description,Processing_Channel_ID) {
    var transaction;
    IdempotencyKeygenerated = IdempotencyKeygen.IdempotencyKey();
    transaction = await CKO.payments.request({
        source: {
            "type": "paypal"
        },
        items : [
            {
                name : "test",
                unit_price : amount,
                quantity : 1
        }
        ],
        currency: currency,
        amount: amount,
        reference: orderReference,
        //processing_channel_id: Processing_Channel_ID,
        capture: captureauto,
        //capture_on: capturedate,
        payment_type: paymenttype,
        success_url : "https://google.fr",
        failure_url : "https://google.fr",
        description: description,
        payment_ip : faker.internet.ipv4(),
        customer: {
            //id: CustomerID,
            email: faker.internet.email({ allowSpecialCharacters: true }),
            name: faker.person.fullName()
        }
    }, IdempotencyKeygenerated);
    //console.log(transaction.status);
    if (transaction.status === "Pending" && transaction.requiresRedirect === true) {
        return { "requiresRedirect": transaction.requiresRedirect, "PaymentId": transaction.id, "TransactionStatus": transaction.status, "RedirectionURL": transaction._links.redirect.href }
    }
    else {
        return { "requiresRedirect": transaction.requiresRedirect, "TransactionStatus": transaction.status,"PaymentId": transaction.id }
    }
};



module.exports = {
    PayPalPayment
}