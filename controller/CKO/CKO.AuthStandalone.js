const CKO = require('./CKO.connect');
const IdempotencyKeygen = require('../IdempotencyKey');
const orderrefgen = require('../orderReferencegenerator');
var random_name = require('node-random-name');
var randomEmail = require('random-email');
var randomip = require('random-ip');


async function RequestSession(CardNumber, preferred_scheme, amount, orderReference, cvv, currency, paymenttype, description, completiontype) {
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
        reference: "Node_JS_" + orderrefgen.orderRef(),
        authentication_type: paymenttype,
        description: description,
        completion: {
            type: completiontype,
            success_url: "https://google.fr",
            failure_url: "https://google.fr",
            callback_url: "https://google.fr"
        },
        channel_data: {
            channel: "browser",
            accept_header: "Accept: *.*",
            java_enabled: true,
            language: "FR-fr",
            color_depth: 16,
            screen_height: 1080,
            screen_width: 1920,
            timezone: 60,
            user_agent: "test",
            three_ds_method_completion: "U",
            ip_address: "127.0.0.1"
        },
    };
    console.log(RequestSession)
    RequestSession = await CKO.sessions.request(RequestSession);
    if (completiontype === "hosted") {
        ResultRequestSession = { "SessionID": RequestSession.id, "RedirectURL": RequestSession._links.redirect_url.href }
    } else {
        CReq =
        {
            "threeDSServerTransID": RequestSession.transaction_id,
            "acsTransID": RequestSession.acs.transaction_id,
            "messageType": "CReq",
            "messageVersion": RequestSession.protocol_version,
            "challengeWindowSize": "05"
        }
        CReq = Buffer.from(JSON.stringify(CReq)).toString('base64')
        ResultRequestSession = { "SessionID": RequestSession.id, "CReq": CReq, "ACSURL": RequestSession.acs.url }
    }
    return ResultRequestSession;
}

module.exports = {
    RequestSession
}