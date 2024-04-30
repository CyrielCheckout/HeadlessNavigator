const CKO = require('./CKO.connect');
const IdempotencyKeygen = require('../IdempotencyKey');
const { faker } = require('@faker-js/faker');

// Request CKO 3DS session
async function RequestSession(CardNumber, preferred_scheme, amount, orderReference, cvv, currency, paymenttype, authentication_category, challengeindicator, description, completiontype) {
    IdempotencyKeygenerated = IdempotencyKeygen.IdempotencyKey();
    var RequestSession =
    {
        source: {
            type: 'card',
            number: CardNumber,
            expiry_month: 6,
            expiry_year: 2029,
            cvv: cvv,
            scheme: preferred_scheme
        },
        currency: currency,
        amount: amount,
        reference: orderReference,
        authentication_type: paymenttype,
        authentication_category : authentication_category,
        challenge_indicator : challengeindicator,
        description: description,
        completion: {
            type: completiontype,
            success_url: "https://google.fr",
            failure_url: "https://google.fr",
            callback_url: "https://google.fr"
        },
        shipping_address: {
            
                address_line1: faker.location.street(),
                address_line2:  faker.location.streetAddress(false),
                city: faker.location.city(),
                state: faker.location.state({ abbreviated: true }),
                zip: faker.location.zipCode(),
                country: faker.location.countryCode('alpha-2')
            },
        shipping_address_matches_billing: true,
        channel_data: {
            channel: "browser",
            accept_header: "Accept: *.*",
            java_enabled: true,
            language: "FR-fr",
            color_depth: 16,
            screen_height: 1080,
            screen_width: 1920,
            timezone: 60,
            user_agent: faker.internet.userAgent(),
            three_ds_method_completion: "U",
            ip_address: faker.internet.ipv4()
        },
        account_info: {
            purchase_count: 999,
            account_age: "no_account",
            add_card_attempts: 10,
            shipping_address_age: "this_transaction",
            account_name_matches_shipping_name: true,
            suspicious_account_activity: true,
            transactions_today: 10,
            authentication_method: "no_authentication",
            cardholder_account_age_indicator: "no_account",
        account_change: faker.date.past(),
    account_change_indicator: "this_transaction",
        account_date: faker.date.past(),
        account_password_change: faker.date.past(),
        account_password_change_indicator: "no_change",
        transactions_per_year: 2,
        payment_account_age: faker.date.past(),
        shipping_address_usage: faker.date.past(),
        account_type: "not_applicable",
        account_id: "string",
        three_ds_requestor_authentication_info: {
            three_ds_req_auth_method: "no_threeds_requestor_authentication_occurred",
            three_ds_req_auth_timestamp: faker.date.past(),
            three_ds_req_auth_data: "string"
        }
        },
        merchant_risk_info: {
            delivery_email: faker.internet.email({allowSpecialCharacters: true }),
            delivery_timeframe: "electronic_delivery",
            is_preorder: true,
            is_reorder: false,
            shipping_indicator: "billing_address",
            reorder_items_indicator: "first_time_ordered",
        pre_order_purchase_indicator: "merchandise_available",
        pre_order_date: faker.date.past(),
        gift_card_amount: faker.finance.amount({ dec: 0}),
        gift_card_currency: "USD",
        gift_card_count: "04"
        },
        initial_transaction: {
            acs_transaction_id: "fa5b4ed1-9919-4357-8cb4-ffc003d53eb7",
            authentication_method: "frictionless_authentication",
            authentication_timestamp: faker.date.past(),
            authentication_data: "string",
            //initial_session_id: "sid_p6prbhogijnuxgv4grm3ber55u"
        }, 
        recurring: {
            days_between_payments: 28,
            expiry: 20220901
        },
        installment: {
            number_of_payments:3,
            days_between_payments: 28,
            expiry: 20220901
        }
    };
    RequestSession = await CKO.sessions.request(RequestSession);
    return RequestSession;
}
// GET CKO 3DS session
async function GetSessionDetails(SessionID) {
    GetSessionResult = await CKO.sessions.get(SessionID);
    return GetSessionResult;
}

module.exports = {
    RequestSession,
    GetSessionDetails
}