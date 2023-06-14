const CKO = require('./CKO.connect');
const IdempotencyKeygen = require('../IdempotencyKey');
var random_name = require('node-random-name');
var randomEmail = require('random-email');
var randomip = require('random-ip');

async function IdealPayment(amount, orderReference, currency, captureauto, paymenttype, description) {
    var transaction;
    IdempotencyKeygenerated = IdempotencyKeygen.IdempotencyKey();
    transaction = await CKO.payments.request({
        source: {
            type: 'ideal',
            bic: "INGBNL2A",
            description: description,
            language: "nl",
        },
        currency: currency,
        amount: amount,
        reference: orderReference,
        capture: captureauto,
        //capture_on: capturedate,
        payment_type: paymenttype,
        description: description,
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
    IdealPayment
}