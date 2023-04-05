const AcceptedCard = {
    "Visa": ["4242424242424242"],
    "Mastercard": ["5588686116426417", "5385308360135181"],
    "Cartes_Bancaires": ["4010056200000018", "4010061700000021"],
    "Amex": ["345678901234564", "372688581899681"]
};

const FailedCard = {
    "Visa": ["4539628347117863", "4539467987109256", "4485899805156040"],
    "Mastercard": ["5309961755464047", "5585076576791786"],
    "Cartes_Bancaires": ["4022050100000000"],
    "Amex": ["371064645462927", "341829238058580"]
};

function generateTransactionArray(AcceptanceRate, numberofTransaction, schemeDistribution) {
    //Check if acceptance rate is greater than 0 and less than 100
    if (AcceptanceRate <= 0 || AcceptanceRate > 100) {
        throw new Error('The acceptance rate must be greater than 0 and less than 100.');
    }
    //Check if scheme repartion is ok
    let totalPercentage = 0;
    Object.values(schemeDistribution).forEach((percentage) => {
        if (percentage < 0 || percentage > 100) {
            console.error('Les pourcentages de répartition doivent être compris entre 0 et 100.');
            return transactions;
        }
        totalPercentage += percentage;
    });

    if (totalPercentage !== 100) {
        console.error('La somme des pourcentages de répartition doit être égale à 100.');
        return transactions;
    }
    // Calculate the number of accepted transactions
    const numAccepted = Math.floor(numberofTransaction * AcceptanceRate / 100);
    console.log("number of accepted trs :", numAccepted)
    const numRefused = numberofTransaction - Math.floor(numberofTransaction * AcceptanceRate / 100);
    console.log("number of Refused trs :", numRefused)
    // Calculate the number of transactions for each scheme
    const numVisa = Math.round(numAccepted * schemeDistribution["Visa"] / 100);
    const numMastercard = Math.round(numAccepted * schemeDistribution["Mastercard"] / 100);
    const numCB = Math.round(numAccepted * schemeDistribution["CB"] / 100);
    const numAmex = Math.round(numAccepted * schemeDistribution["Amex"] / 100);
    const numVisar = Math.round(numRefused * schemeDistribution["Visa"] / 100);
    const numMastercardr = Math.round(numRefused * schemeDistribution["Mastercard"] / 100);
    const numCBr = Math.round(numRefused * schemeDistribution["CB"] / 100);
    const numAmexr = Math.round(numRefused * schemeDistribution["Amex"] / 100);
    console.log("number of Visa trs :", numVisa)
    console.log("number of Mastercard trs :", numMastercard)
    console.log("number of CB trs :", numCB)
    console.log("number of Amex trs :", numAmex)
    console.log("number of Visa trs :", numVisar)
    console.log("number of Mastercard trs :", numMastercardr)
    console.log("number of CB trs :", numCBr)
    console.log("number of Amex trs :", numAmexr)
    console.log("Somme de la repartition :",numVisa+numMastercard+numCB+numAmex+numVisar+numMastercardr+numCBr+numAmexr);
    let ResutArray = [];

    //Generate Visa accepted TRS
    for (let i = 0; i < numVisa; i++) {
        ChooseCardVisa = Math.floor(Math.random() * AcceptedCard.Visa.length);
        ResutArray.push({ "CardNumber": AcceptedCard.Visa[ChooseCardVisa], "Scheme": "visa", "Status": "Accepted" });
    }
    //Generate Mastercard accepted TRS
    for (let i = 0; i < numMastercard; i++) {
        ChooseCardMastercard = Math.floor(Math.random() * AcceptedCard.Mastercard.length);
        ResutArray.push({ "CardNumber": AcceptedCard.Mastercard[ChooseCardMastercard], "Scheme": "mastercard", "Status": "Accepted" });
    }
    //Generate CartesBancaires accepted TRS
    for (let i = 0; i < numCB; i++) {
        ChooseCardCB = Math.floor(Math.random() * AcceptedCard.Cartes_Bancaires.length);
        ResutArray.push({ "CardNumber": AcceptedCard.Cartes_Bancaires[ChooseCardCB], "Scheme": "cartes_bancaires", "Status": "Accepted" });
    }
    //Generate Amex accepted TRS
    for (let i = 0; i < numAmex; i++) {
        ChooseCardAmex = Math.floor(Math.random() * AcceptedCard.Amex.length);
        ResutArray.push({ "CardNumber": AcceptedCard.Amex[ChooseCardAmex], "Scheme": "amex", "Status": "Accepted" });
    }

    //Generate Visa Refused TRS
    for (let i = 0; i < numVisar; i++) {
        ChooseCardVisa = Math.floor(Math.random() * FailedCard.Visa.length);
        ResutArray.push({ "CardNumber": FailedCard.Visa[ChooseCardVisa], "Scheme": "visa", "Status": "Refused" });
    }
    //Generate Mastercard Refused TRS
    for (let i = 0; i < numMastercardr; i++) {
        ChooseCardMastercard = Math.floor(Math.random() * FailedCard.Mastercard.length);
        ResutArray.push({ "CardNumber": FailedCard.Mastercard[ChooseCardMastercard], "Scheme": "mastercard", "Status": "Refused" });
    }
    //Generate CartesBancaires Refused TRS
    for (let i = 0; i < numCBr; i++) {
        ChooseCardCB = Math.floor(Math.random() * FailedCard.Cartes_Bancaires.length);
        ResutArray.push({ "CardNumber": FailedCard.Cartes_Bancaires[ChooseCardCB], "Scheme": "cartes_bancaires", "Status": "Refused" });
    }
    //Generate Amex Refused TRS
    for (let i = 0; i < numAmexr; i++) {
        ChooseCardAmex = Math.floor(Math.random() * FailedCard.Amex.length);
        ResutArray.push({ "CardNumber": FailedCard.Amex[ChooseCardAmex], "Scheme": "amex", "Status": "Refused" });
    }

    return ResutArray;
}
module.exports = { generateTransactionArray }