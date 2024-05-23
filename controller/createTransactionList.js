const { faker } = require('@faker-js/faker');
const AcceptedCard = {
    "Visa": ["4242424242424242", "4539152233316919", "4556975353021465", "4532061991095705", "4024007114139396", "4929798849248819", "4024007111434303", "4716809189614267", "4716004145419163", "4485295001434085", "4916279173204046", "4166997644650425", "4224278647527922", "4556702986252659", "4532076134733236", "4716590393949588", "4539301220462265", "4929567046522437", "4716683636419004", "4556608926153701", "4556506347769958", "4539103003065699", "4556208668106155", "4556448595130031", "4929661411708935", "4485974683742938", "4024007151530994", "4539103892384839", "4716175620868684", "4929012200843147", "4556555565581504", "4024007181318253", "4539562998150487", "4916865363515306", "4556568307027561", "4929354644263486", "4916161840354844", "4929329118937328", "4929261710196377", "4485289438187390", "4929361085140206", "4532791102219519", "4172582905631918", "4929520246238510", "4485385238454269", "4716431793332523", "4485024293177495", "4916399685403025", "4249518571600885", "4929974878014329", "4024007181275230", "4485971110721907", "4539020379564701", "4916203699832395", "4716143093043821", "4539212424418054", "4338197072573966", "4916865989788774", "4485242572484651", "4716925327535121", "4716848679869114", "4916534349162852", "4497766074714351", "4279216941222026", "4653689914840964", "4716088595915663", "4556616717671633", "4916804612323212", "4716445973699899", "4716638499915571", "4532109496003128", "4504834764867607", "4716280479882206", "4509628252722307", "4539508391362229", "4485166068809925", "4532023806921772", "4716864034548327", "4916832425436152", "4532211730604370", "4024007114650657", "4916660826716652", "4916745030928860", "4024007167523496", "4916312166472922", "4916363865032483", "4556677590275694", "4716251480747225", "4916621810466308", "4485663134733709", "4539054246487069", "4556892741491609", "4142728016682079", "4024007100909554", "4716451681627867", "4865925865286466", "4485504066476869", "4916819043129897", "4539132776519244", "4539775870453643", "4532943960465425", "4539204920923588", "4485033867871615", "4929157276379094", "4532255971293450", "4485297205567389", "4539340675944674", "4539644719825082", "4024007108131870", "4485657673769959", "4916206757589237", "4532021528668358", "4916586332065468", "4024007120644470", "4024007187993695", "4866486973628502", "4485289319818196", "4556584153902757", "4532085767719362", "4556357776581252", "4024007140152520", "4916928025793289", "4024007138114565", "4929895978033093", "4929375217148739", "4716277889123460", "4485984765239653", "4716919036983789", "4024007116963827", "4354542000041405", "4539519676144331", "4024007160493622", "4024007125090174", "4556989321457263"],
    "Mastercard": ["5588686116426417", "5385308360135181", "5118017153068343", "5462424543749313", "5421439603291972", "5290147670857876", "5221827671625109", "2221517520979040", "5541121010719762", "2221853580156074", "5227565510924416", "5482943433484232", "5285590006711670", "5395247599322640", "5388612253506938", "5175944447238087", "5591292161774333", "2720824616576466", "5355731920420197", "5521383754886868", "2720527030123449", "5360313105952378", "2720275882085403", "5165648195114273", "2720845919277270", "2221299223446821", "2221293278934195", "5592468804234542", "5392880161186853", "2221526052322081", "5283186779708332", "5377972782174670", "5434897303948164", "5231131485950367", "5417324867653297", "5239475732890484", "2221697056322367", "2221252930108200", "2221195227089528", "5570710108648125", "5572867365309706", "5595456918676903", "5332076113969743", "5559693190295192", "5487987330569467", "5435020463196834", "5567626709698340", "2221139041873220", "5324970117047250", "2720336305016332", "5392612149684976", "5123993511187582", "5235799718426474", "2221086422959708", "5534887667987030", "5516718832488160", "5167948788038725", "5289351208120483", "5450202986975502", "5133308503435360", "5152710567760342", "2720982266544232", "5407408128053363", "2720046126502564", "5152838311207748", "5267424062599815", "5264240337434247", "5104034771177287", "5147818738124427", "2720629216707076", "5562115401705863", "5505127666924741", "2720873742779296", "5284067348580932", "5536979716692113", "5103928555943841", "5554585968423201", "5205918608816208", "5219347574042330", "5417978401086999", "5123484126097093", "5155971766895704", "5468963582389105", "5177190226711575", "5378439340521809", "5219095444838904", "2221894416187891", "5412127473615286", "5303585633855724", "2221127912205143", "5192816316766852", "2720111541793063", "5532009824999293", "5403619515394665", "2221185063728586", "2720582108805757", "5426362236681143", "5488015071000234", "5416442513111790", "5189643951383123", "5386440917534738", "5213111494293308", "5415374324192308", "5464479012053561", "5396556489070856", "5297055700121390", "5275607149725045", "5572654583076535", "5463359963810469", "2720821074042221", "5599116816727341", "5198247388233874", "2720842185988078", "5334076470366606", "2221795913079442", "5276538731168477", "2720297499592134", "5378273572349823", "5429373738873838", "2221953780833082", "5383409004741251", "5326365586730569", "5478772694443157", "5504716377815262", "5163005449258673", "5584812919723743", "5262044759210982", "5535497111044963", "5112814262046293", "5210519259607848", "2221458230042979", "5276002123892517", "2221381922621191", "5513675039688054", "5491785266490573", "5524838987789285"],
    "Cartes_Bancaires": ["4010056200000018", "4010061700000021"],
    "Amex": ["345678901234564", "372688581899681", "344024391950511", "344349691236034", "344724729999920", "378110269525029", "346776718509951", "376126355758516", "370110200996196", "374739810752767", "370408453331420", "378516810204957", "344766025679573", "344156958882206", "346974961316519", "347506364199669", "341779683491952", "346213739309625", "347012886448692", "342019293786262", "343236200609622", "379092134891613", "374798887536321", "346851082690123", "378753254725847", "378051106074989", "345097616524138", "379880650522186", "370366055228321", "348952401197143", "346960036146833", "379419323371414", "348473001048875", "370975738251300", "378995738788277", "347718245104103", "378866638875938", "379087846443299", "371466938400094", "340863651773350", "341147372346533", "342494746582131", "341460695424451", "371381632409699", "341433357975854", "377497050873051", "371269269603116", "373710062367464", "344938966820702", "373527515872233", "377606664370995", "374963315992732", "376228980149960", "374344729537282", "374627806646061", "345884300509081", "378663294856470", "345665393970227", "346920016080808", "373841764036675", "373109347236646", "348737535188088", "349559865635572", "372178407852544", "370413196207408", "341030555900823", "379722701969992", "344060964686371", "377026208334656", "343804735855950", "344284378563725", "349981219058030", "343678864961148", "375521222549679", "375526224103375", "340408942603972", "349117816608543", "374953806556617", "346337609393946", "370748723973398", "379063202290079", "373757642814010", "378551825862416", "370071192779547", "349473004262258", "377207223536513", "346255134516346", "371971399184012", "342689839550354", "379104033519490", "378007888067195", "372375953350887", "370345960902436", "375008175151638", "377201852049955", "374719872707610", "343602418241286", "344536173671064", "344694380516687", "347449073181076", "349036948885094", "371695177297601", "377891915317488", "370968276662913", "344922950320606", "343300529113268", "344970605237873", "345403962108825", "349580434988391", "373674347236656", "377406578322863", "376331839786246", "370282746192679", "341790431360795", "343044120104405", "377754210110521", "377376847090809", "342692521695537", "374291747190018", "349448347000714", "373854271439001", "342322460207488", "375202876904102", "376839865212721", "370830317086363", "344091133399232", "341964544557858", "349939266621464", "376116575522792", "378044993316431", "376639180638729", "343767559449087", "340771514592869", "349578989717629"]
};

const FailedCard = {
    "Visa": ["4539628347117863", "4539467987109256", "4485899805156040"],
    "Mastercard": ["5309961755464047", "5585076576791786"],
    "Cartes_Bancaires": ["5132562600000029", "5132562600000029", "5132562600000060"],
    "Amex": ["371064645462927", "341829238058580"]
};

function GetOneProcessingChannelConfigured(ProcessingChannelCArray, PaymentMethod) {
    let AvailableProcessingChannel = [];
    for (let PCArray = 0; PCArray <= (Object.keys(ProcessingChannelCArray).length) - 1; PCArray++) {
        if (ProcessingChannelCArray[Object.keys(ProcessingChannelCArray)[PCArray]].includes(PaymentMethod)) {
            //console.log(`Processing channel ID ${Object.keys(ProcessingChannelCArray)[PCArray]} contient payment method ${PaymentMethod} :${ProcessingChannelCArray[Object.keys(ProcessingChannelCArray)[PCArray]].includes(PaymentMethod)}`)
            AvailableProcessingChannel.push(Object.keys(ProcessingChannelCArray)[PCArray]);
        }
    }
    if (AvailableProcessingChannel.length === 0) {
        return null
    }
    else if (AvailableProcessingChannel.length === 1) {
        ChooseProcessingChannelID = 0
    }
    else {
        ChooseProcessingChannelID = faker.number.int({ max: AvailableProcessingChannel.length - 1, min: 0 });
    }
    return Object.keys(ProcessingChannelCArray)[ChooseProcessingChannelID];
}

function generateTransactionArray(AcceptanceRate, numberofTransaction, CardRate, schemeDistribution, PayPalRate, ApplePayRate, GooglePayRate, IdealRate, BancontactRate, GiropayRate, MultiBancoRate, CurrencyList, RefundRate, DisputeRate, processing_channel_id) {
    // Calculate the number of accepted transactions
    const numAccepted = Math.floor(numberofTransaction * AcceptanceRate / 100);
    console.log("number of accepted trs :", numAccepted)
    const numRefused = numberofTransaction - Math.floor(numberofTransaction * AcceptanceRate / 100);
    console.log("number of Refused trs :", numRefused)
    //Calculate the number of Accepted card Payment
    const numAcceptedCard = Math.floor(numAccepted * CardRate / 100);
    const numRefusedCard = Math.floor(numRefused * CardRate / 100);
    // Calculate the number of transactions for card payment for each scheme
    const numVisa = Math.round(numAcceptedCard * (schemeDistribution["Visa"] / 100));
    const numMastercard = Math.round(numAcceptedCard * (schemeDistribution["Mastercard"] / 100));
    const numCB = Math.round(numAcceptedCard * (schemeDistribution["CB"] / 100));
    const numAmex = Math.round(numAcceptedCard * (schemeDistribution["Amex"] / 100));
    const numVisaRefused = Math.round(numRefusedCard * (schemeDistribution["Visa"] / 100));
    const numMastercardRefused = Math.round(numRefusedCard * (schemeDistribution["Mastercard"] / 100));
    const numCBRefused = Math.round(numRefusedCard * (schemeDistribution["CB"] / 100));
    const numAmexRefused = Math.round(numRefusedCard * (schemeDistribution["Amex"] / 100));
    const numApplePayVisa = Math.round(numVisa * (ApplePayRate / 100));
    const numApplePayMastercard = Math.round(numMastercard * (ApplePayRate / 100));
    const numApplePayCB = Math.round(numCB * (ApplePayRate / 100));
    const numApplePayAmex = Math.round(numAmex * (ApplePayRate / 100));
    const numGooglePayVisa = Math.round(numVisa * (GooglePayRate / 100));
    const numGooglePayMastercard = Math.round(numMastercard * (GooglePayRate / 100));
    const numGooglePayCB = Math.round(numCB * (GooglePayRate / 100));
    const numGooglePayAmex = Math.round(numAmex * (GooglePayRate / 100));
    const numApplePayRefusedVisa = Math.round(numVisaRefused * (ApplePayRate / 100));
    const numApplePayRefusedMastercard = Math.round(numMastercardRefused * (ApplePayRate / 100));
    const numApplePayRefusedCB = Math.round(numCBRefused * (ApplePayRate / 100));
    const numApplePayRefusedAmex = Math.round(numAmexRefused * (ApplePayRate / 100));
    const numGooglePayRefusedVisa = Math.round(numVisaRefused * (GooglePayRate / 100));
    const numGooglePayRefusedMastercard = Math.round(numMastercardRefused * (GooglePayRate / 100));
    const numGooglePayRefusedCB = Math.round(numCBRefused * (GooglePayRate / 100));
    const numGooglePayRefusedAmex = Math.round(numAmexRefused * (GooglePayRate / 100));
    const numPayPalRate = Math.round(numberofTransaction * (PayPalRate / 100));
    const numIdealRate = Math.round(numAccepted * (IdealRate / 100));
    const numIdealRefusedRate = Math.round(numRefused * (IdealRate / 100));
    const numBancontactRate = Math.round(numAccepted * (BancontactRate / 100));
    const numBancontactRefusedRate = Math.round(numRefused * (BancontactRate / 100));
    const numGiropayRate = Math.round(numberofTransaction * (GiropayRate / 100));
    const numMultiBancoRate = Math.round(numberofTransaction * (MultiBancoRate / 100));
    const numRefundRate = Math.round(numAccepted * (RefundRate / 100));
    const numDisputeRate = Math.round(numAccepted * (DisputeRate / 100));
    console.log(`Somme des transactions après AR : ${numVisa+numMastercard+numCB+numAmex+numVisaRefused+numMastercardRefused+numCBRefused+numAmexRefused+numApplePayVisa+numApplePayMastercard+numApplePayCB+numApplePayAmex+numGooglePayVisa+numGooglePayMastercard+numGooglePayCB+numGooglePayAmex+numApplePayRefusedVisa+numApplePayRefusedMastercard+numApplePayRefusedCB+numApplePayRefusedAmex+numGooglePayRefusedVisa+numGooglePayRefusedMastercard+numGooglePayRefusedCB+numGooglePayRefusedAmex+numPayPalRate+numIdealRate+numIdealRefusedRate+numBancontactRate+numBancontactRefusedRate+numGiropayRate+numMultiBancoRate+numRefundRate+numDisputeRate}, vs requested number : ${numberofTransaction}, that mean there is a ${numberofTransaction - (numVisa+numMastercard+numCB+numAmex+numVisaRefused+numMastercardRefused+numCBRefused+numAmexRefused+numApplePayVisa+numApplePayMastercard+numApplePayCB+numApplePayAmex+numGooglePayVisa+numGooglePayMastercard+numGooglePayCB+numGooglePayAmex+numApplePayRefusedVisa+numApplePayRefusedMastercard+numApplePayRefusedCB+numApplePayRefusedAmex+numGooglePayRefusedVisa+numGooglePayRefusedMastercard+numGooglePayRefusedCB+numGooglePayRefusedAmex+numPayPalRate+numIdealRate+numIdealRefusedRate+numBancontactRate+numBancontactRefusedRate+numGiropayRate+numMultiBancoRate+numRefundRate+numDisputeRate)} difference`)
    console.log("Liste des currency :", CurrencyList);
    let ResutArray = [];
    //Generate Visa transactions
    if (schemeDistribution["Visa"] > 0) {
        //Generate Visa accepted TRS
        for (let i = 0; i < (numVisa - (numApplePayVisa + numGooglePayVisa)); i++) {
            ChooseCardVisa = Math.floor(Math.random() * AcceptedCard.Visa.length);
            ChooseCurrency = Math.floor(Math.random() * CurrencyList.length);
            ResutArray.push({ "PaymentMethod": "Card", "CardNumber": AcceptedCard.Visa[ChooseCardVisa], "Scheme": "visa", "Status": "Accepted", "Currency": CurrencyList[ChooseCurrency], "Processing_Channel_ID": GetOneProcessingChannelConfigured(processing_channel_id, "Visa") });
        }
        //Generate Visa Apple Pay accepted TRS
        for (let i = 0; i < numApplePayVisa; i++) {
            ChooseCardVisa = Math.floor(Math.random() * AcceptedCard.Visa.length);
            ChooseCurrency = Math.floor(Math.random() * CurrencyList.length);
            ResutArray.push({ "PaymentMethod": "ApplePay", "CardNumber": AcceptedCard.Visa[ChooseCardVisa], "Scheme": "visa", "Status": "Accepted", "Currency": CurrencyList[ChooseCurrency], "Processing_Channel_ID": GetOneProcessingChannelConfigured(processing_channel_id, "Visa") });
        }
        //Generate Visa Google Pay accepted TRS
        for (let i = 0; i < numGooglePayVisa; i++) {
            ChooseCardVisa = Math.floor(Math.random() * AcceptedCard.Visa.length);
            ChooseCurrency = Math.floor(Math.random() * CurrencyList.length);
            ResutArray.push({ "PaymentMethod": "GooglePay", "CardNumber": AcceptedCard.Visa[ChooseCardVisa], "Scheme": "visa", "Status": "Accepted", "Currency": CurrencyList[ChooseCurrency], "Processing_Channel_ID": GetOneProcessingChannelConfigured(processing_channel_id, "Visa") });
        }
        //Generate Visa Refused TRS
        for (let i = 0; i < (numVisaRefused - (numApplePayRefusedVisa + numGooglePayRefusedVisa)); i++) {
            ChooseCardVisa = Math.floor(Math.random() * FailedCard.Visa.length);
            ChooseCurrency = Math.floor(Math.random() * CurrencyList.length);
            ResutArray.push({ "PaymentMethod": "Card", "CardNumber": FailedCard.Visa[ChooseCardVisa], "Scheme": "visa", "Status": "Refused", "Currency": CurrencyList[ChooseCurrency], "Processing_Channel_ID": GetOneProcessingChannelConfigured(processing_channel_id, "Visa") });
        }
        //Generate Visa Apple Pay Refused TRS
        for (let i = 0; i < numApplePayRefusedVisa; i++) {
            ChooseCardVisa = Math.floor(Math.random() * FailedCard.Visa.length);
            ChooseCurrency = Math.floor(Math.random() * CurrencyList.length);
            ResutArray.push({ "PaymentMethod": "ApplePay", "CardNumber": FailedCard.Visa[ChooseCardVisa], "Scheme": "visa", "Status": "Refused", "Currency": CurrencyList[ChooseCurrency], "Processing_Channel_ID": GetOneProcessingChannelConfigured(processing_channel_id, "Visa") });
        }
        //Generate Visa Google Pay Refused TRS
        for (let i = 0; i < numGooglePayRefusedVisa; i++) {
            ChooseCardVisa = Math.floor(Math.random() * FailedCard.Visa.length);
            ChooseCurrency = Math.floor(Math.random() * CurrencyList.length);
            ResutArray.push({ "PaymentMethod": "GooglePay", "CardNumber": FailedCard.Visa[ChooseCardVisa], "Scheme": "visa", "Status": "Refused", "Currency": CurrencyList[ChooseCurrency], "Processing_Channel_ID": GetOneProcessingChannelConfigured(processing_channel_id, "Visa") });
        }
    }
    //Generate Mastercard transactions
    if (schemeDistribution["Mastercard"] > 0) {
        //Generate Mastercard accepted TRS
        for (let i = 0; i < (numMastercard - (numApplePayMastercard + numGooglePayMastercard)); i++) {
            ChooseCardMastercard = Math.floor(Math.random() * AcceptedCard.Mastercard.length);
            ChooseCurrency = Math.floor(Math.random() * CurrencyList.length);
            ResutArray.push({ "PaymentMethod": "Card", "CardNumber": AcceptedCard.Mastercard[ChooseCardMastercard], "Scheme": "mastercard", "Status": "Accepted", "Currency": CurrencyList[ChooseCurrency], "Processing_Channel_ID": GetOneProcessingChannelConfigured(processing_channel_id, "Mastercard") });
        }
        //Generate Mastercard ApplePay accepted TRS
        for (let i = 0; i < numApplePayMastercard; i++) {
            ChooseCardMastercard = Math.floor(Math.random() * AcceptedCard.Mastercard.length);
            ChooseCurrency = Math.floor(Math.random() * CurrencyList.length);
            ResutArray.push({ "PaymentMethod": "ApplePay", "CardNumber": AcceptedCard.Mastercard[ChooseCardMastercard], "Scheme": "mastercard", "Status": "Accepted", "Currency": CurrencyList[ChooseCurrency], "Processing_Channel_ID": GetOneProcessingChannelConfigured(processing_channel_id, "Mastercard") });
        }
        //Generate Mastercard GooglePay accepted TRS
        for (let i = 0; i < numGooglePayMastercard; i++) {
            ChooseCardMastercard = Math.floor(Math.random() * AcceptedCard.Mastercard.length);
            ChooseCurrency = Math.floor(Math.random() * CurrencyList.length);
            ResutArray.push({ "PaymentMethod": "GooglePay", "CardNumber": AcceptedCard.Mastercard[ChooseCardMastercard], "Scheme": "mastercard", "Status": "Accepted", "Currency": CurrencyList[ChooseCurrency], "Processing_Channel_ID": GetOneProcessingChannelConfigured(processing_channel_id, "Mastercard") });
        }
        //Generate Mastercard Refused TRS
        for (let i = 0; i < (numMastercardRefused - (numApplePayRefusedMastercard + numGooglePayRefusedMastercard)); i++) {
            ChooseCardMastercard = Math.floor(Math.random() * FailedCard.Mastercard.length);
            ChooseCurrency = Math.floor(Math.random() * CurrencyList.length);
            ResutArray.push({ "PaymentMethod": "Card", "CardNumber": FailedCard.Mastercard[ChooseCardMastercard], "Scheme": "mastercard", "Status": "Refused", "Currency": CurrencyList[ChooseCurrency], "Processing_Channel_ID": GetOneProcessingChannelConfigured(processing_channel_id, "Mastercard") });
        }
        //Generate Mastercard ApplePay Refused TRS
        for (let i = 0; i < numApplePayRefusedMastercard; i++) {
            ChooseCardMastercard = Math.floor(Math.random() * FailedCard.Mastercard.length);
            ChooseCurrency = Math.floor(Math.random() * CurrencyList.length);
            ResutArray.push({ "PaymentMethod": "ApplePay", "CardNumber": FailedCard.Mastercard[ChooseCardMastercard], "Scheme": "mastercard", "Status": "Refused", "Currency": CurrencyList[ChooseCurrency], "Processing_Channel_ID": GetOneProcessingChannelConfigured(processing_channel_id, "Mastercard") });
        }
        //Generate Mastercard GooglePay Refused TRS
        for (let i = 0; i < numGooglePayRefusedMastercard; i++) {
            ChooseCardMastercard = Math.floor(Math.random() * FailedCard.Mastercard.length);
            ChooseCurrency = Math.floor(Math.random() * CurrencyList.length);
            ResutArray.push({ "PaymentMethod": "GooglePay", "CardNumber": FailedCard.Mastercard[ChooseCardMastercard], "Scheme": "mastercard", "Status": "Refused", "Currency": CurrencyList[ChooseCurrency], "Processing_Channel_ID": GetOneProcessingChannelConfigured(processing_channel_id, "Mastercard") });
        }
    }
    //Generate CB transactions
    if (schemeDistribution["CB"] > 0) {
        //Generate CartesBancaires accepted TRS
        for (let i = 0; i < (numCB - (numApplePayCB + numGooglePayCB)); i++) {
            ChooseCardCB = Math.floor(Math.random() * AcceptedCard.Cartes_Bancaires.length);
            ChooseCurrency = Math.floor(Math.random() * CurrencyList.length);
            ResutArray.push({ "PaymentMethod": "Card", "CardNumber": AcceptedCard.Cartes_Bancaires[ChooseCardCB], "Scheme": "cartes_bancaires", "Status": "Accepted", "Currency": CurrencyList[ChooseCurrency], "Processing_Channel_ID": GetOneProcessingChannelConfigured(processing_channel_id, 'CB') });
        }
        //Generate CartesBancaires ApplePay accepted TRS
        for (let i = 0; i < numApplePayCB; i++) {
            ChooseCardCB = Math.floor(Math.random() * AcceptedCard.Cartes_Bancaires.length);
            ChooseCurrency = Math.floor(Math.random() * CurrencyList.length);
            ResutArray.push({ "PaymentMethod": "ApplePay", "CardNumber": AcceptedCard.Cartes_Bancaires[ChooseCardCB], "Scheme": "cartes_bancaires", "Status": "Accepted", "Currency": CurrencyList[ChooseCurrency], "Processing_Channel_ID": GetOneProcessingChannelConfigured(processing_channel_id, 'CB') });
        }
        //Generate CartesBancaires GooglePay accepted TRS
        for (let i = 0; i < numGooglePayCB; i++) {
            ChooseCardCB = Math.floor(Math.random() * AcceptedCard.Cartes_Bancaires.length);
            ChooseCurrency = Math.floor(Math.random() * CurrencyList.length);
            ResutArray.push({ "PaymentMethod": "GooglePay", "CardNumber": AcceptedCard.Cartes_Bancaires[ChooseCardCB], "Scheme": "cartes_bancaires", "Status": "Accepted", "Currency": CurrencyList[ChooseCurrency], "Processing_Channel_ID": GetOneProcessingChannelConfigured(processing_channel_id, 'CB') });
        }
        //Generate CartesBancaires Refused TRS
        for (let i = 0; i < (numCBRefused - (numApplePayRefusedCB + numGooglePayRefusedCB)); i++) {
            ChooseCardCB = Math.floor(Math.random() * FailedCard.Cartes_Bancaires.length);
            ChooseCurrency = Math.floor(Math.random() * CurrencyList.length);
            ResutArray.push({ "PaymentMethod": "Card", "CardNumber": FailedCard.Cartes_Bancaires[ChooseCardCB], "Scheme": "cartes_bancaires", "Status": "Refused", "Currency": CurrencyList[ChooseCurrency], "Processing_Channel_ID": GetOneProcessingChannelConfigured(processing_channel_id, 'CB') });
        }
        //Generate CartesBancaires ApplePay Refused TRS
        for (let i = 0; i < numApplePayRefusedCB; i++) {
            ChooseCardCB = Math.floor(Math.random() * FailedCard.Cartes_Bancaires.length);
            ChooseCurrency = Math.floor(Math.random() * CurrencyList.length);
            ResutArray.push({ "PaymentMethod": "ApplePay", "CardNumber": FailedCard.Cartes_Bancaires[ChooseCardCB], "Scheme": "cartes_bancaires", "Status": "Refused", "Currency": CurrencyList[ChooseCurrency], "Processing_Channel_ID": GetOneProcessingChannelConfigured(processing_channel_id, 'CB') });
        }
        //Generate CartesBancaires GooglePay Refused TRS
        for (let i = 0; i < numGooglePayRefusedCB; i++) {
            ChooseCardCB = Math.floor(Math.random() * FailedCard.Cartes_Bancaires.length);
            ChooseCurrency = Math.floor(Math.random() * CurrencyList.length);
            ResutArray.push({ "PaymentMethod": "GooglePay", "CardNumber": FailedCard.Cartes_Bancaires[ChooseCardCB], "Scheme": "cartes_bancaires", "Status": "Refused", "Currency": CurrencyList[ChooseCurrency], "Processing_Channel_ID": GetOneProcessingChannelConfigured(processing_channel_id, 'CB') });
        }
    }
    //Generate AMEX transactions
    if (schemeDistribution["Amex"] > 0) {
        //Generate Amex accepted TRS
        for (let i = 0; i < (numAmex - (numApplePayAmex + numGooglePayAmex)); i++) {
            ChooseCardAmex = Math.floor(Math.random() * AcceptedCard.Amex.length);
            ChooseCurrency = Math.floor(Math.random() * CurrencyList.length);
            ResutArray.push({ "PaymentMethod": "Card", "CardNumber": AcceptedCard.Amex[ChooseCardAmex], "Scheme": "amex", "Status": "Accepted", "Currency": CurrencyList[ChooseCurrency], "Processing_Channel_ID": GetOneProcessingChannelConfigured(processing_channel_id, 'Amex') });
        }
        //Generate Amex ApplePay accepted TRS
        for (let i = 0; i < numApplePayAmex; i++) {
            ChooseCardAmex = Math.floor(Math.random() * AcceptedCard.Amex.length);
            ChooseCurrency = Math.floor(Math.random() * CurrencyList.length);
            ResutArray.push({ "PaymentMethod": "ApplePay", "CardNumber": AcceptedCard.Amex[ChooseCardAmex], "Scheme": "amex", "Status": "Accepted", "Currency": CurrencyList[ChooseCurrency], "Processing_Channel_ID": GetOneProcessingChannelConfigured(processing_channel_id, 'Amex') });
        }
        //Generate Amex GooglePay accepted TRS
        for (let i = 0; i < numGooglePayAmex; i++) {
            ChooseCardAmex = Math.floor(Math.random() * AcceptedCard.Amex.length);
            ChooseCurrency = Math.floor(Math.random() * CurrencyList.length);
            ResutArray.push({ "PaymentMethod": "GooglePay", "CardNumber": AcceptedCard.Amex[ChooseCardAmex], "Scheme": "amex", "Status": "Accepted", "Currency": CurrencyList[ChooseCurrency], "Processing_Channel_ID": GetOneProcessingChannelConfigured(processing_channel_id, 'Amex') });
        }
        //Generate Amex Refused TRS
        for (let i = 0; i < (numAmexRefused - (numApplePayRefusedAmex + numGooglePayRefusedAmex)); i++) {
            ChooseCardAmex = Math.floor(Math.random() * FailedCard.Amex.length);
            ChooseCurrency = Math.floor(Math.random() * CurrencyList.length);
            ResutArray.push({ "PaymentMethod": "Card", "CardNumber": FailedCard.Amex[ChooseCardAmex], "Scheme": "amex", "Status": "Refused", "Currency": CurrencyList[ChooseCurrency], "Processing_Channel_ID": GetOneProcessingChannelConfigured(processing_channel_id, 'Amex') });
        }
        //Generate Amex ApplePay Refused TRS
        for (let i = 0; i < numApplePayRefusedAmex; i++) {
            ChooseCardAmex = Math.floor(Math.random() * FailedCard.Amex.length);
            ChooseCurrency = Math.floor(Math.random() * CurrencyList.length);
            ResutArray.push({ "PaymentMethod": "ApplePay", "CardNumber": FailedCard.Amex[ChooseCardAmex], "Scheme": "amex", "Status": "Refused", "Currency": CurrencyList[ChooseCurrency], "Processing_Channel_ID": GetOneProcessingChannelConfigured(processing_channel_id, 'Amex') });
        }
        //Generate Amex GooglePay Refused TRS
        for (let i = 0; i < numGooglePayRefusedAmex; i++) {
            ChooseCardAmex = Math.floor(Math.random() * FailedCard.Amex.length);
            ChooseCurrency = Math.floor(Math.random() * CurrencyList.length);
            ResutArray.push({ "PaymentMethod": "GooglePay", "CardNumber": FailedCard.Amex[ChooseCardAmex], "Scheme": "amex", "Status": "Refused", "Currency": CurrencyList[ChooseCurrency], "Processing_Channel_ID": GetOneProcessingChannelConfigured(processing_channel_id, 'Amex') });
        }
    }
    /*
    //Generate ApplePay TRS
    if (numberApplePayTRS > 0) {
        AcceptedApplePayTRS = Math.floor(numberApplePayTRS * AcceptanceRate / 100);
        RefusedApplePayTRS = numberApplePayTRS - AcceptedApplePayTRS;
        for (let i = 0; i < AcceptedApplePayTRS; i++) {
            ChooseCurrency = Math.floor(Math.random() * CurrencyList.length);
            randomSchemeApplePay = Math.floor(Math.random() * (Object.keys(AcceptedCard).length - 1))
            randomSchemeApplePay = Object.keys(AcceptedCard)[randomSchemeApplePay];
            AcceptedApplePayCard = Math.floor(Math.random() * AcceptedCard[randomSchemeApplePay].length);
            ResutArray.push({ "PaymentMethod": "ApplePay", "CardNumber": AcceptedCard[randomSchemeApplePay][AcceptedApplePayCard], "Scheme": "N/A", "Status": "Accepted", "Currency": "EUR", "Processing_Channel_ID": GetOneProcessingChannelConfigured(processing_channel_id,Multibanco) });
        }
        for (let i = 0; i < RefusedApplePayTRS; i++) {
            ChooseCurrency = Math.floor(Math.random() * CurrencyList.length);
            randomSchemeApplePay = Math.floor(Math.random() * (Object.keys(FailedCard).length - 1))
            randomSchemeApplePay = Object.keys(FailedCard)[randomSchemeApplePay];
            refusedApplePayCard = Math.floor(Math.random() * FailedCard[randomSchemeApplePay].length)
            ResutArray.push({ "PaymentMethod": "ApplePay", "CardNumber": FailedCard[randomSchemeApplePay][refusedApplePayCard], "Scheme": "N/A", "Status": "Refused", "Currency": "EUR", "Processing_Channel_ID": GetOneProcessingChannelConfigured(processing_channel_id,Multibanco) });
        }
    }
    //Generate GooglePay TRS
    if (numberGooglePayTRS > 0) {
        AcceptedGooglePayTRS = Math.floor(numberGooglePayTRS * AcceptanceRate / 100);
        RefusedGooglePayTRS = numberGooglePayTRS - AcceptedGooglePayTRS;
        for (let i = 0; i < AcceptedGooglePayTRS; i++) {
            ChooseCurrency = Math.floor(Math.random() * CurrencyList.length);
            
            randomSchemeGooglePay = Math.floor(Math.random() * (Object.keys(AcceptedCard).length - 1))
            randomSchemeGooglePay = Object.keys(AcceptedCard)[randomSchemeGooglePay];
            AcceptedGooglePayCard = Math.floor(Math.random() * AcceptedCard[randomSchemeGooglePay].length)
            ResutArray.push({ "PaymentMethod": "GooglePay", "CardNumber": AcceptedCard[randomSchemeGooglePay][AcceptedGooglePayCard], "Scheme": "N/A", "Status": "Accepted", "Currency": "EUR", "Processing_Channel_ID": GetOneProcessingChannelConfigured(processing_channel_id,Multibanco) });
        }
        for (let i = 0; i < RefusedGooglePayTRS; i++) {
            ChooseCurrency = Math.floor(Math.random() * CurrencyList.length);
            
            randomSchemeGooglePay = Math.floor(Math.random() * (Object.keys(FailedCard).length - 1))
            randomSchemeGooglePay = Object.keys(FailedCard)[randomSchemeGooglePay];
            refusedGooglePayCard = Math.floor(Math.random() * FailedCard[randomSchemeGooglePay].length)
            ResutArray.push({ "PaymentMethod": "GooglePay", "CardNumber": FailedCard[randomSchemeGooglePay][refusedGooglePayCard], "Scheme": "N/A", "Status": "Refused", "Currency": "EUR", "Processing_Channel_ID": GetOneProcessingChannelConfigured(processing_channel_id,Multibanco) });
        }
    }
*/
    //Generate PayPal TRS
    if (PayPalRate > 0) {
        for (let i = 0; i < numPayPalRate; i++) {
            ChooseCurrency = Math.floor(Math.random() * CurrencyList.length);
            ResutArray.push({ "PaymentMethod": "PayPal", "CardNumber": "N/A", "Scheme": "N/A", "Status": "N/A", "Currency": "EUR", "Processing_Channel_ID": GetOneProcessingChannelConfigured(processing_channel_id, 'PayPal') });
        }
    }
    //Generate IDEAL TRS
    if (IdealRate > 0) {
        for (let i = 0; i < numIdealRate; i++) {
            ChooseCurrency = Math.floor(Math.random() * CurrencyList.length);
            ResutArray.push({ "PaymentMethod": "Ideal", "CardNumber": "N/A", "Scheme": "N/A", "Status": "Accepted", "Currency": "EUR", "Processing_Channel_ID": GetOneProcessingChannelConfigured(processing_channel_id, 'Ideal') });
        }
        for (let i = 0; i < numIdealRefusedRate; i++) {
            ChooseCurrency = Math.floor(Math.random() * CurrencyList.length);
            refusedAmount = [200, 300, 400, 500]
            randomamountIdeal = Math.floor(Math.random() * refusedAmount.length)
            ResutArray.push({ "PaymentMethod": "Ideal", "CardNumber": "N/A", "Scheme": "N/A", "Status": "Refused", "Currency": "EUR", "Processing_Channel_ID": GetOneProcessingChannelConfigured(processing_channel_id, 'Ideal'), "amount": refusedAmount[randomamountIdeal] });
        }
    }
    //Generate Bancontact TRS
    if (BancontactRate > 0) {
        for (let i = 0; i < numBancontactRate; i++) {
            ResutArray.push({ "PaymentMethod": "Bancontact", "CardNumber": "N/A", "Scheme": "N/A", "Status": "Accepted", "Currency": "EUR", "Processing_Channel_ID": GetOneProcessingChannelConfigured(processing_channel_id, 'Bancontact') });
        }
        for (let i = 0; i < numBancontactRefusedRate; i++) {
            ResutArray.push({ "PaymentMethod": "Bancontact", "CardNumber": "N/A", "Scheme": "N/A", "Status": "Refused", "Currency": "EUR", "Processing_Channel_ID": GetOneProcessingChannelConfigured(processing_channel_id, 'Bancontact') });
        }
    }
    //Generate Giropay TRS
    if (GiropayRate > 0) {
        for (let i = 0; i < numGiropayRate; i++) {
            ChooseCurrency = Math.floor(Math.random() * CurrencyList.length);
            ResutArray.push({ "PaymentMethod": "Giropay", "CardNumber": "N/A", "Scheme": "N/A", "Status": "N/A", "Currency": "EUR", "Processing_Channel_ID": GetOneProcessingChannelConfigured(processing_channel_id, 'Giropay') });
        }
    }
    //Generate Multibanco TRS
    if (MultiBancoRate > 0) {
        for (let i = 0; i < numMultiBancoRate; i++) {
            ChooseCurrency = Math.floor(Math.random() * CurrencyList.length);
            ResutArray.push({ "PaymentMethod": "Multibanco", "CardNumber": "N/A", "Scheme": "N/A", "Status": "N/A", "Currency": "EUR", "Processing_Channel_ID": GetOneProcessingChannelConfigured(processing_channel_id, 'Multibanco') });
        }
    }
    console.log(`Number of transactions : ${ResutArray.length}, number of refund ${numRefundRate}, number of disputes ${numDisputeRate}`);
    //add refund to transactions
    for (let D = 0; D < ResutArray.length; D++) { ResutArray[D].Refund = false }
    for (let C = 1; C < numRefundRate; C++) {
        ChooseTRSRefund = faker.number.int({ max: ResutArray.length - 1 });
        if (ResutArray[ChooseTRSRefund].Status === "Accepted") {
            ResutArray[ChooseTRSRefund].Refund = true
        }
        else {
            C--
        }
    }
    //add disputes to transactions
    for (let F = 0; F < ResutArray.length; F++) { ResutArray[F].Disputes = false }
    for (let G = 1; G < numDisputeRate; G++) {
        ChooseTRSDispute = faker.number.int({ max: ResutArray.length - 1 });
        if (ResutArray[ChooseTRSDispute].Status === "Accepted" && ResutArray[ChooseTRSDispute].PaymentMethod === "Card" || ResutArray[ChooseTRSDispute].Status === "Accepted" && ResutArray[ChooseTRSDispute].PaymentMethod === "ApplePay" || ResutArray[ChooseTRSDispute].Status === "Accepted" && ResutArray[ChooseTRSDispute].PaymentMethod === "GooglePay") {
            ResutArray[ChooseTRSDispute].Disputes = true
        }
        else {
            G--
        }
    }

    console.log(`Result array transaction count = ${ResutArray.length}`);
    checkresult = {
        total: {
            Accepted: 0,
            Refused: 0
        },
        Card: {
            Visa: {
                Accepted: 0,
                Refused: 0
            },
            Mastercard: {
                Accepted: 0,
                Refused: 0
            },
            Amex: {
                Accepted: 0,
                Refused: 0
            },
            CB: {
                Accepted: 0,
                Refused: 0
            }
        },
        ApplePay: {
            Visa: {
                Accepted: 0,
                Refused: 0
            },
            Mastercard: {
                Accepted: 0,
                Refused: 0
            },
            Amex: {
                Accepted: 0,
                Refused: 0
            },
            CB: {
                Accepted: 0,
                Refused: 0
            }
        },
        GooglePay: {
            Visa: {
                Accepted: 0,
                Refused: 0
            },
            Mastercard: {
                Accepted: 0,
                Refused: 0
            },
            Amex: {
                Accepted: 0,
                Refused: 0
            },
            CB: {
                Accepted: 0,
                Refused: 0
            }
        },
        Ideal: {
            Accepted: 0,
            Refused: 0
        },
        Bancontact: {
            Accepted: 0,
            Refused: 0
        },
        Giropay: {
            transactions: 0
        },
        PayPal: {
            transactions: 0
        },
        Multibanco: {
            transactions: 0
        },
        Refund: {
            RefundNumber: 0
        },
        Disputes: {
            DisputesNumber: 0
        }
    }
    for (let Z = 0; Z < ResutArray.length; Z++) {
        if (ResutArray[Z].Status === 'Accepted') {
            checkresult.total.Accepted++;
        }
        else {
            checkresult.total.Refused++;
        }
        if (ResutArray[Z].PaymentMethod === 'Card') {
            if (ResutArray[Z].Scheme === 'visa') {
                if (ResutArray[Z].Status === 'Accepted') {
                    checkresult.Card.Visa.Accepted++;
                }
                else {
                    checkresult.Card.Visa.Refused++;
                }
            }
            if (ResutArray[Z].Scheme === 'mastercard') {
                if (ResutArray[Z].Status === 'Accepted') {
                    checkresult.Card.Mastercard.Accepted++;
                }
                else {
                    checkresult.Card.Mastercard.Refused++;
                }
            }
            if (ResutArray[Z].Scheme === 'amex') {
                if (ResutArray[Z].Status === 'Accepted') {
                    checkresult.Card.Amex.Accepted++;
                }
                else {
                    checkresult.Card.Amex.Refused++;
                }
            }
            if (ResutArray[Z].Scheme === 'cartes_bancaires') {
                if (ResutArray[Z].Status === 'Accepted') {
                    checkresult.Card.CB.Accepted++;
                }
                else {
                    checkresult.Card.CB.Refused++;
                }
            }
        }
        if (ResutArray[Z].PaymentMethod === 'ApplePay') {
            if (ResutArray[Z].Scheme === 'visa') {
                if (ResutArray[Z].Status === 'Accepted') {
                    checkresult.ApplePay.Visa.Accepted++;
                }
                else {
                    checkresult.ApplePay.Visa.Refused++;
                }
            }
            if (ResutArray[Z].Scheme === 'mastercard') {
                if (ResutArray[Z].Status === 'Accepted') {
                    checkresult.ApplePay.Mastercard.Accepted++;
                }
                else {
                    checkresult.ApplePay.Mastercard.Refused++;
                }
            }
            if (ResutArray[Z].Scheme === 'amex') {
                if (ResutArray[Z].Status === 'Accepted') {
                    checkresult.ApplePay.Amex.Accepted++;
                }
                else {
                    checkresult.ApplePay.Amex.Refused++;
                }
            }
            if (ResutArray[Z].Scheme === 'cartes_bancaires') {
                if (ResutArray[Z].Status === 'Accepted') {
                    checkresult.ApplePay.CB.Accepted++;
                }
                else {
                    checkresult.ApplePay.CB.Refused++;
                }
            }
        }
        if (ResutArray[Z].PaymentMethod === 'GooglePay') {
            if (ResutArray[Z].Scheme === 'visa') {
                if (ResutArray[Z].Status === 'Accepted') {
                    checkresult.GooglePay.Visa.Accepted++;
                }
                else {
                    checkresult.GooglePay.Visa.Refused++;
                }
            }
            if (ResutArray[Z].Scheme === 'mastercard') {
                if (ResutArray[Z].Status === 'Accepted') {
                    checkresult.GooglePay.Mastercard.Accepted++;
                }
                else {
                    checkresult.GooglePay.Mastercard.Refused++;
                }
            }
            if (ResutArray[Z].Scheme === 'amex') {
                if (ResutArray[Z].Status === 'Accepted') {
                    checkresult.GooglePay.Amex.Accepted++;
                }
                else {
                    checkresult.GooglePay.Amex.Refused++;
                }
            }
            if (ResutArray[Z].Scheme === 'cartes_bancaires') {
                if (ResutArray[Z].Status === 'Accepted') {
                    checkresult.GooglePay.CB.Accepted++;
                }
                else {
                    checkresult.GooglePay.CB.Refused++;
                }
            }
        }
        if (ResutArray[Z].PaymentMethod === 'Ideal') {
            if (ResutArray[Z].Status === 'Accepted') {
                checkresult.Ideal.Accepted++;
            }
            else {
                checkresult.Ideal.Refused++;
            }
        }
        if (ResutArray[Z].PaymentMethod === 'Bancontact') {
            if (ResutArray[Z].Status === 'Accepted') {
                checkresult.Bancontact.Accepted++;
            }
            else {
                checkresult.Bancontact.Refused++;
            }
        }
        if (ResutArray[Z].PaymentMethod === 'Giropay') {
            checkresult.Giropay.transactions++;
        }
        if (ResutArray[Z].PaymentMethod === 'PayPal') {
            checkresult.PayPal.transactions++;
        }
        if (ResutArray[Z].PaymentMethod === 'Multibanco') {
            checkresult.Multibanco.transactions++;
        }
        if (ResutArray[Z].Disputes === true) {
            checkresult.Disputes.DisputesNumber++;
        }
        if (ResutArray[Z].Refund === true) {
            checkresult.Refund.RefundNumber++;
        }
    }

    //Calculate Real AR 
    function calculateAR(Accepted, Refused) {
        AR = (Accepted / (Accepted + Refused)) * 100;
        AR = Math.round((AR + Number.EPSILON) * 100) / 100;
        return AR
    }
    checkresult.total.AR = calculateAR(checkresult.total.Accepted, checkresult.total.Refused);
    checkresult.Card.Visa.AR = calculateAR(checkresult.Card.Visa.Accepted, checkresult.Card.Visa.Refused);
    checkresult.Card.Mastercard.AR = calculateAR(checkresult.Card.Mastercard.Accepted, checkresult.Card.Mastercard.Refused);
    checkresult.Card.Amex.AR = calculateAR(checkresult.Card.Amex.Accepted, checkresult.Card.Amex.Refused);
    checkresult.Card.CB.AR = calculateAR(checkresult.Card.CB.Accepted, checkresult.Card.CB.Refused);
    checkresult.ApplePay.Visa.AR = calculateAR(checkresult.ApplePay.Visa.Accepted, checkresult.ApplePay.Visa.Refused);
    checkresult.ApplePay.Mastercard.AR = calculateAR(checkresult.ApplePay.Mastercard.Accepted, checkresult.ApplePay.Mastercard.Refused);
    checkresult.ApplePay.Amex.AR = calculateAR(checkresult.ApplePay.Amex.Accepted, checkresult.ApplePay.Amex.Refused);
    checkresult.ApplePay.CB.AR = calculateAR(checkresult.ApplePay.CB.Accepted, checkresult.ApplePay.CB.Refused);
    checkresult.GooglePay.Visa.AR = calculateAR(checkresult.GooglePay.Visa.Accepted, checkresult.GooglePay.Visa.Refused);
    checkresult.GooglePay.Mastercard.AR = calculateAR(checkresult.GooglePay.Mastercard.Accepted, checkresult.GooglePay.Mastercard.Refused);
    checkresult.GooglePay.Amex.AR = calculateAR(checkresult.GooglePay.Amex.Accepted, checkresult.GooglePay.Amex.Refused);
    checkresult.GooglePay.CB.AR = calculateAR(checkresult.GooglePay.CB.Accepted, checkresult.GooglePay.CB.Refused);
    checkresult.Ideal.AR = calculateAR(checkresult.Ideal.Accepted, checkresult.Ideal.Refused);
    checkresult.Bancontact.AR = calculateAR(checkresult.Bancontact.Accepted, checkresult.Bancontact.Refused);
    checkresult.PayPal.AR = calculateAR(checkresult.PayPal, checkresult.PayPal);
    checkresult.Multibanco.AR = calculateAR(checkresult.Multibanco, checkresult.Multibanco);
    checkresult.Giropay.AR = calculateAR(checkresult.Giropay, checkresult.Giropay);

    //Check calculation 
    function checkcalculation(expected, reality) {
        if (expected === reality) { return true }
        else { return expected}
    }
    checkresult.Card.Visa.AcceptedCorrect = checkcalculation(numVisa, checkresult.Card.Visa.Accepted);
    checkresult.Card.Visa.RefusedCorrect = checkcalculation(numVisaRefused, checkresult.Card.Visa.Refused);
    checkresult.Card.Mastercard.AcceptedCorrect = checkcalculation(numMastercard, checkresult.Card.Mastercard.Accepted);
    checkresult.Card.Mastercard.RefusedCorrect = checkcalculation(numMastercardRefused, checkresult.Card.Mastercard.Refused);
    checkresult.Card.Amex.AcceptedCorrect = checkcalculation(numAmex, checkresult.Card.Amex.Accepted);
    checkresult.Card.Amex.RefusedCorrect = checkcalculation(numAmexRefused, checkresult.Card.Amex.Refused);
    checkresult.Card.CB.AcceptedCorrect = checkcalculation(numCB, checkresult.Card.CB.Accepted);
    checkresult.Card.CB.RefusedCorrect = checkcalculation(numCBRefused, checkresult.Card.CB.Refused);
    checkresult.ApplePay.Visa.AcceptedCorrect = checkcalculation(numApplePayVisa, checkresult.ApplePay.Visa.Accepted);
    checkresult.ApplePay.Visa.RefusedCorrect = checkcalculation(numApplePayRefusedVisa, checkresult.ApplePay.Visa.Refused);
    checkresult.ApplePay.Mastercard.AcceptedCorrect = checkcalculation(numApplePayMastercard, checkresult.ApplePay.Mastercard.Accepted);
    checkresult.ApplePay.Mastercard.RefusedCorrect = checkcalculation(numApplePayRefusedMastercard, checkresult.ApplePay.Mastercard.Refused);
    checkresult.ApplePay.Amex.AcceptedCorrect = checkcalculation(numApplePayAmex, checkresult.ApplePay.Amex.Accepted);
    checkresult.ApplePay.Amex.RefusedCorrect = checkcalculation(numApplePayRefusedAmex, checkresult.ApplePay.Amex.Refused);
    checkresult.ApplePay.CB.AcceptedCorrect = checkcalculation(numApplePayCB, checkresult.ApplePay.CB.Accepted);
    checkresult.ApplePay.CB.RefusedCorrect = checkcalculation(numApplePayRefusedCB, checkresult.ApplePay.CB.Refused);
    checkresult.GooglePay.Visa.AcceptedCorrect = checkcalculation(numGooglePayVisa, checkresult.GooglePay.Visa.Accepted);
    checkresult.GooglePay.Visa.RefusedCorrect = checkcalculation(numGooglePayRefusedVisa, checkresult.GooglePay.Visa.Refused);
    checkresult.GooglePay.Mastercard.AcceptedCorrect = checkcalculation(numGooglePayMastercard, checkresult.GooglePay.Mastercard.Accepted);
    checkresult.GooglePay.Mastercard.RefusedCorrect = checkcalculation(numGooglePayRefusedMastercard, checkresult.GooglePay.Mastercard.Refused);
    checkresult.GooglePay.Amex.AcceptedCorrect = checkcalculation(numGooglePayAmex, checkresult.GooglePay.Amex.Accepted);
    checkresult.GooglePay.Amex.RefusedCorrect = checkcalculation(numGooglePayRefusedAmex, checkresult.GooglePay.Amex.Refused);
    checkresult.GooglePay.CB.AcceptedCorrect = checkcalculation(numGooglePayCB, checkresult.GooglePay.CB.Accepted);
    checkresult.GooglePay.CB.RefusedCorrect = checkcalculation(numGooglePayRefusedCB, checkresult.GooglePay.CB.Refused);
    checkresult.PayPal.transactionCorrect = checkcalculation(numPayPalRate, checkresult.PayPal.transactions);
    checkresult.Ideal.RefusedCorrect = checkcalculation(numIdealRate, checkresult.Ideal.Refused);
    checkresult.Ideal.RefusedCorrect = checkcalculation(numIdealRefusedRate, checkresult.Ideal.Refused);
    checkresult.Bancontact.RefusedCorrect = checkcalculation(numBancontactRate, checkresult.Bancontact.Refused);
    checkresult.Bancontact.RefusedCorrect = checkcalculation(numBancontactRefusedRate, checkresult.Bancontact.Refused);
    checkresult.Giropay.transactionCorrect = checkcalculation(numGiropayRate, checkresult.Giropay.transactions);
    checkresult.Multibanco.transactionCorrect = checkcalculation(numMultiBancoRate, checkresult.Multibanco.transactions);
    checkresult.Refund.RefundNumberCorrect = checkcalculation(numRefundRate, checkresult.Refund.RefundNumber);
    checkresult.Disputes.DisputesNumberCorrect = checkcalculation(numDisputeRate, checkresult.Disputes.DisputesNumber);

    console.log(checkresult)

   // throw checkresult
    function randomize(tab) {
        var i, j, tmp;
        for (i = tab.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            tmp = tab[i];
            tab[i] = tab[j];
            tab[j] = tmp;
        }
        return tab;
    }
    return randomize(ResutArray);
}
module.exports = { generateTransactionArray, GetOneProcessingChannelConfigured }