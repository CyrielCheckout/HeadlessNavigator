const Standalone3DS = require('../CKO/CKO.AuthStandalone');
const Headless3DS = require('../Headless/Headless.3DS');
const waitfor = require('../IdempotencyKey');
const orderrefgen = require('../orderReferencegenerator');
const CKOpayment = require('../CKO/CKO.payment');

//Full CKO 3DS standalone flow
async function Init3DSSession(CardNumber, preferred_scheme, amount, orderReference, cvv, currency, paymenttype, authentication_category, challengeindicator, description, completiontype,headless ,autoRun) {
    orderReference = "Node_JS_" + orderrefgen.orderRef();
    //Generate 3DS session
    RequestSession = await Standalone3DS.RequestSession(CardNumber, preferred_scheme, amount, orderReference, cvv, currency, paymenttype, authentication_category, challengeindicator, description, completiontype);
    //Check if flow is hosted or non-hosted
    if (completiontype === "hosted") {
        //Create the result object with part of CKO API response
        ResultRequestSession = { "SessionID": RequestSession.id, "RedirectURL": RequestSession._links.redirect_url.href }
        //check if autorun = true (autorun mean run in headless mode full auto)
        if(autoRun === true){
            //request the Headless process
            headlessrun = await Headless3DS.Headless3DS(RequestSession._links.redirect_url.href, headless, "www.google.fr");
            //get the 3DS Session result
            Sessionresult = await Standalone3DS.GetSessionDetails(ResultRequestSession.SessionID);
        }
        else{
            return ResultRequestSession;
            Sessionresult = await Standalone3DS.GetSessionDetails(ResultRequestSession.SessionID);
            while (Sessionresult.status !== "approved"){
                Sessionresult = await Standalone3DS.GetSessionDetails(ResultRequestSession.SessionID);
                console.log(Sessionresult.status);
                waitfor.delay(1000);
            };
        }
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
        if(autoRun === true){
            headlessrun = await Headless3DS.Headless3DS("http://localhost:8888/3DSecure/test3DSV2%20Checkout.html?actionUrl="+RequestSession.acs.url+"&creq="+CReq, headless, "www.google.fr");
            //get the 3DS Session result
            Sessionresult = await Standalone3DS.GetSessionDetails(ResultRequestSession.SessionID);
        }
        else{
            return ResultRequestSession;
        }
    }
    if (Sessionresult.status === "approved" || "attempted"){
        TRS = await CKOpayment.MakeAuthorization(CardNumber, preferred_scheme, amount, orderReference, cvv, currency, "True", paymenttype, "CKO demo batch", "StandaloneSessionID",ResultRequestSession.SessionID);
        console.log(TRS);
    }
}


module.exports = {
    Init3DSSession
}

