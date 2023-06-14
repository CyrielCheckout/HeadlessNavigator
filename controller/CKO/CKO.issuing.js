const CKO = require('./CKO.connect');
const IdempotencyKeygen = require('../IdempotencyKey');
var random_name = require('node-random-name');

async function test() {
    IdempotencyKeygenerated = IdempotencyKeygen.IdempotencyKey();
    createCardholder = await CKO.issuing.createCardholder({
       type : "individual",
       first_name : "test",
       last_name : "teste",
       billing_address: {
        address_line1: "Checkout.com",
        address_line2: "90 Tottenham Court Road",
        city: "London",
        state: "London",
        zip: "W1T 4TJ",
        country: "GB"
      },
    }, IdempotencyKeygenerated);
}

async function mcreateCard() {
    IdempotencyKeygenerated = IdempotencyKeygen.IdempotencyKey();
    CreateCard = await CKO.issuing.createCard({
        type: "virtual",
        cardholder_id: "test",
        lifetime: {
            unit: "Months",
            value: 6
        },
        reference: orderReference,
        card_product_id: "test",
        display_name: random_name,
        is_single_use: false,
        activate_card: true
    }, IdempotencyKeygenerated);
}

module.exports = {
    test
}