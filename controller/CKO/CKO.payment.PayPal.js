const CKO = require('./CKO.connect');
const IdempotencyKeygen = require('../IdempotencyKey');
var random_name = require('node-random-name');
var randomEmail = require('random-email');
var randomip = require('random-ip');

async function PayPalPayment(amount, orderReference, currency, captureauto, paymenttype, description) {
    var transaction;
    IdempotencyKeygenerated = IdempotencyKeygen.IdempotencyKey();
    transaction = await CKO.payments.request({
        source: {
            type: 'paypal',
            invoice_number: orderReference,
            recipient_name: random_name,
            logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
            brand_name: "Test PayPal"
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
        capture: captureauto,
        //capture_on: capturedate,
        payment_type: paymenttype,
        description: description,
        payment_ip : randomip('0.0.0.0', 24),
        customer: {
            //id: CustomerID,
            email: randomEmail({ domain: 'gmail.com' }),
            name: random_name
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