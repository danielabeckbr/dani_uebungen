const express = require("express");
const cors = require('cors')
const app = express();
app.use(express.json());

const PORT = 1080;
app.use(cors());

/* "/testdaten" generiert die Server URL, hier: http://localhost:3002/testdaten*/
let posts = [
    {
        "global": {
            "cron": "",
            "logLevel": "",
            "cirrusDelInterval": 20,
            "debugScope": {
                "maxLenGlobalLog": 0,
                "noValuesForWeatherParam": 0,
                "resetWeathersituation": 0,
                "showMosValues": 0,
                "displaySQL": 0,
                "displayDupOBS": 0,
                "fetchURL": 0,
                "wrtObsNoData": 0,
                "wrtObsNoDataStations": 0,
                "countKoorinMos": 0,
                "countCirrusMos": 0,
                "badWetterZustand": 0,
                "sunMoonValues": 0,
                "copy_report": 0,
                "delOldData": 0,
                "makeWeatherValuesLog": 0,
                "makeKoorinWindChill": 1,
                "wrtObsModulo": 0,
                "wrtObs": 0
            },
            "functionsOnOff": {
                "use_mos_min_test": 0,
                "use_test_tables": 0,
                "resetCirrusWeathersituation": 0,
                "dtgFromUtc": 0,
                "breakImportOnLoop": 0,
                "copyReports": 0,
                "makeWeatherValues": 1,
                "importOBS": 0
            },
            "configname": "default.json"
        },
        "weatherTablesTest": {
            "koorinObs": "observation_test",
            "koorinMos": "mos_test",
            "cirrusLongRep": "BR_BAVARIA_LONG_REPORT_test",
            "cirrusShortRep": "BR_BAVARIA_SHORT_REPORT_test",
            "cirrusRegioRep": "BR_REGIONAL_REPORT_test",
            "cirrusTrendRep": "BR_TREND_REPORT_test",
            "cirrusObs": "BR_OBSERVATION_test",
            "cirrusMos": "BR_MODEL_OUTPUT_STATISTIC_test"
        },
        "weatherTables": {
            "koorinObs": "observation",
            "koorinMos": "mos",
            "cirrusLongRep": "BR_BAVARIA_LONG_REPORT",
            "cirrusShortRep": "BR_BAVARIA_SHORT_REPORT",
            "cirrusRegioRep": "BR_REGIONAL_REPORT",
            "cirrusTrendRep": "BR_TREND_REPORT",
            "cirrusObs": "BR_OBSERVATION",
            "cirrusMos": "BR_MODEL_OUTPUT_STATISTIC"
        },
        "obs": {
            "__//urlPaket5dt": "https://api.test.wetterdaten.hr.de/api/v1/messwerte/stuendlich_paket5_DWD_DEUTSCHLAND",
            "__//test_neu": "https://api.wetterdaten.hr.de/api/v1/messwerte/stuendlich_aktuell",
            "__//urlPaket5dt_live_alt": "https://api.prod.wetterdaten.hr.de/api/v1/messwerte/stuendlich_paket5_DWD_DEUTSCHLAND",

            "urlPaket5dt": "https://api.wetterdaten.hr.de/api/v1/messwerte/stuendlich_aktuell",
            "__stations": {
                "__//": " München",
                "M_DWD_W_010_865": {
                    "cirrus": [
                        "10865"
                    ],
                    "koorin": [
                        "10865"
                    ]
                },
                "__//": " Muehldorf",
                "M_DWD_W_010_875": {
                    "cirrus": [
                        "10875"
                    ],
                    "koorin": [
                        "10875"
                    ]
                },
                "__//": " Muenchen-Flughafen",

                "M_DWD_W_010_870": {
                    "cirrus": [
                        "10870"
                    ],
                    "koorin": [
                        "10870"
                    ]
                },
                "__//": " Nürnberg",
                "M_DWD_W_010_763": {
                    "cirrus": [
                        "10763"
                    ],
                    "koorin": [
                        "10763"
                    ]
                }
            },
            "stations": {

                "M_DWD_SH_M888_A009": {
                    "cirrus": [
                        "10564"
                    ]
                },
                "M_DWD_SH_O951_A072": {
                    "cirrus": [
                        "3010592"
                    ]
                },
                "M_DWD_SH_P153_UNKNOWN": {
                    "cirrus": [
                        "3210675"
                    ]
                },
                "M_DWD_SH_P176_A009": {
                    "cirrus": [
                        "10677"
                    ]
                },
                "M_DWD_SH_P256_A003": {
                    "cirrus": [
                        "3210763"
                    ]
                },
                "M_DWD_SH_P334_UNKNOWN": {
                    "cirrus": [
                        "10980",
                        "3310980"
                    ]
                },
                "M_DWD_SH_P564_UNKNOWN": {
                    "cirrus": [
                        "3010972"
                    ]
                },
                "M_DWD_S_L592": {
                    "cirrus": [
                        "3010553"
                    ]
                },
                "M_DWD_S_L678": {
                    "cirrus": [
                        "3010548"
                    ]
                },
                "M_DWD_S_L771": {
                    "cirrus": [
                        "3110651"
                    ]
                },
                "M_DWD_S_L773": {
                    "cirrus": [
                        "3010652"
                    ]
                },
                "M_DWD_S_L894": {
                    "cirrus": [
                        "3010660"
                    ]
                },
                "M_DWD_S_L947": {
                    "cirrus": [
                        "3010661"
                    ]
                },
                "M_DWD_S_M805": {
                    "cirrus": [
                        "3110546"
                    ]
                },
                "M_DWD_S_M909": {
                    "cirrus": [
                        "3010664"
                    ]
                },
                "M_DWD_S_M927": {
                    "cirrus": [
                        "3110569"
                    ]
                },
                "M_DWD_S_M965": {
                    "cirrus": [
                        "3010579"
                    ]
                },
                "M_DWD_S_M978": {
                    "cirrus": [
                        "3010685"
                    ]
                },
                "M_DWD_S_M998": {
                    "cirrus": [
                        "3110566"
                    ]
                },
                "M_DWD_S_P004": {
                    "cirrus": [
                        "3010665"
                    ]
                },
                "M_DWD_S_P013": {
                    "cirrus": [
                        "3010666"
                    ]
                },
                "M_DWD_S_P022": {
                    "cirrus": [
                        "3010667"
                    ]
                },
                "M_DWD_S_P029": {
                    "cirrus": [
                        "3010670"
                    ]
                },
                "M_DWD_S_P032": {
                    "cirrus": [
                        "3110671"
                    ]
                },
                "M_DWD_S_P033": {
                    "cirrus": [
                        "3010671"
                    ]
                },
                "M_DWD_S_P038": {
                    "cirrus": [
                        "3010672"
                    ]
                },
                "M_DWD_S_P058": {
                    "cirrus": [
                        "3010679"
                    ]
                },
                "M_DWD_S_P062": {
                    "cirrus": [
                        "3010680"
                    ]
                },
                "M_DWD_S_P066": {
                    "cirrus": [
                        "3010681"
                    ]
                },
                "M_DWD_S_P068": {
                    "cirrus": [
                        "3010682"
                    ]
                },
                "M_DWD_S_P071": {
                    "cirrus": [
                        "3010683"
                    ]
                },
                "M_DWD_S_P073": {
                    "cirrus": [
                        "3010684"
                    ]
                },
                "M_DWD_S_P079": {
                    "cirrus": [
                        "3010686"
                    ]
                },
                "M_DWD_S_P088": {
                    "cirrus": [
                        "3010688"
                    ]
                },
                "M_DWD_S_P095": {
                    "cirrus": [
                        "3010689"
                    ]
                },
                "M_DWD_S_P099": {
                    "cirrus": [
                        "3110679"
                    ]
                },
                "M_DWD_S_P100": {
                    "cirrus": [
                        "3010752"
                    ]
                },
                "M_DWD_S_P104": {
                    "cirrus": [
                        "3010753"
                    ]
                },
                "M_DWD_S_P113": {
                    "cirrus": [
                        "3010755"
                    ]
                },
                "M_DWD_S_P125": {
                    "cirrus": [
                        "3010756"
                    ]
                },
                "M_DWD_S_P131": {
                    "cirrus": [
                        "3010767"
                    ]
                },
                "M_DWD_S_P137": {
                    "cirrus": [
                        "3010761"
                    ]
                },
                "M_DWD_S_P138": {
                    "cirrus": [
                        "3010757"
                    ]
                },
                "M_DWD_S_P141": {
                    "cirrus": [
                        "3010762"
                    ]
                },
                "M_DWD_S_P148": {
                    "cirrus": [
                        "3010763"
                    ]
                },
                "M_DWD_S_P151": {
                    "cirrus": [
                        "3010691"
                    ]
                },
                "M_DWD_S_P158": {
                    "cirrus": [
                        "3010692"
                    ]
                },
                "M_DWD_S_P164": {
                    "cirrus": [
                        "3010693"
                    ]
                },
                "M_DWD_S_P168": {
                    "cirrus": [
                        "3010695"
                    ]
                },
                "M_DWD_S_P175": {
                    "cirrus": [
                        "3010697"
                    ]
                },
                "M_DWD_S_P179": {
                    "cirrus": [
                        "3010698"
                    ]
                },
                "M_DWD_S_P182": {
                    "cirrus": [
                        "3010699"
                    ]
                },
                "M_DWD_S_P185": {
                    "cirrus": [
                        "3010786"
                    ]
                },
                "M_DWD_S_P189": {
                    "cirrus": [
                        "3010788"
                    ]
                },
                "M_DWD_S_P190": {
                    "cirrus": [
                        "3010789"
                    ]
                },
                "M_DWD_S_P197": {
                    "cirrus": [
                        "3010790"
                    ]
                },
                "M_DWD_S_P198": {
                    "cirrus": [
                        "3110793"
                    ]
                },
                "M_DWD_S_P222": {
                    "cirrus": [
                        "3010766"
                    ]
                },
                "M_DWD_S_P228": {
                    "cirrus": [
                        "3010768"
                    ]
                },
                "M_DWD_S_P232": {
                    "cirrus": [
                        "3010769"
                    ]
                },
                "M_DWD_S_P236": {
                    "cirrus": [
                        "3010771"
                    ]
                },
                "M_DWD_S_P237": {
                    "cirrus": [
                        "3010855"
                    ]
                },
                "M_DWD_S_P238": {
                    "cirrus": [
                        "3010772"
                    ]
                },
                "M_DWD_S_P257": {
                    "cirrus": [
                        "3010774"
                    ]
                },
                "M_DWD_S_P262": {
                    "cirrus": [
                        "3010777"
                    ]
                },
                "M_DWD_S_P265": {
                    "cirrus": [
                        "3110681"
                    ]
                },
                "M_DWD_S_P270": {
                    "cirrus": [
                        "3010779"
                    ]
                },
                "M_DWD_S_P280": {
                    "cirrus": [
                        "3110780"
                    ]
                },
                "M_DWD_S_P287": {
                    "cirrus": [
                        "3010781"
                    ]
                },
                "M_DWD_S_P294": {
                    "cirrus": [
                        "3110794"
                    ]
                },
                "M_DWD_S_P298": {
                    "cirrus": [
                        "3010782"
                    ]
                },
                "M_DWD_S_P299": {
                    "cirrus": [
                        "3010783"
                    ]
                },
                "M_DWD_S_P300": {
                    "cirrus": [
                        "3010852"
                    ]
                },
                "M_DWD_S_P302": {
                    "cirrus": [
                        "3010853"
                    ]
                },
                "M_DWD_S_P305": {
                    "cirrus": [
                        "3010843"
                    ]
                },
                "M_DWD_S_P308": {
                    "cirrus": [
                        "3010845"
                    ]
                },
                "M_DWD_S_P315": {
                    "cirrus": [
                        "3010856"
                    ]
                },
                "M_DWD_S_P317": {
                    "cirrus": [
                        "3010857"
                    ]
                },
                "M_DWD_S_P319": {
                    "cirrus": [
                        "3010859"
                    ]
                },
                "M_DWD_S_P321": {
                    "cirrus": [
                        "3010784"
                    ]
                },
                "M_DWD_S_P327": {
                    "cirrus": [
                        "3010785"
                    ]
                },
                "M_DWD_S_P333": {
                    "cirrus": [
                        "3010864"
                    ]
                },
                "M_DWD_S_P337": {
                    "cirrus": [
                        "3010865"
                    ]
                },
                "M_DWD_S_P343": {
                    "cirrus": [
                        "3010793"
                    ]
                },
                "M_DWD_S_P350": {
                    "cirrus": [
                        "3110866"
                    ]
                },
                "M_DWD_S_P354": {
                    "cirrus": [
                        "3010795"
                    ]
                },
                "M_DWD_S_P355": {
                    "cirrus": [
                        "3110647"
                    ]
                },
                "M_DWD_S_P356": {
                    "cirrus": [
                        "3010796"
                    ]
                },
                "M_DWD_S_P359": {
                    "cirrus": [
                        "3010797"
                    ]
                },
                "M_DWD_S_P363": {
                    "cirrus": [
                        "3010871"
                    ]
                },
                "M_DWD_S_P366": {
                    "cirrus": [
                        "3010872"
                    ]
                },
                "M_DWD_S_P370": {
                    "cirrus": [
                        "3010799"
                    ]
                },
                "M_DWD_S_P372": {
                    "cirrus": [
                        "3010880"
                    ]
                },
                "M_DWD_S_P374": {
                    "cirrus": [
                        "3010881"
                    ]
                },
                "M_DWD_S_P379": {
                    "cirrus": [
                        "3010876"
                    ]
                },
                "M_DWD_S_P389": {
                    "cirrus": [
                        "3010891"
                    ]
                },
                "M_DWD_S_P405": {
                    "cirrus": [
                        "3010849"
                    ]
                },
                "M_DWD_S_P411": {
                    "cirrus": [
                        "3010861"
                    ]
                },
                "M_DWD_S_P412": {
                    "cirrus": [
                        "3110650"
                    ]
                },
                "M_DWD_S_P418": {
                    "cirrus": [
                        "3010850"
                    ]
                },
                "M_DWD_S_P421": {
                    "cirrus": [
                        "3010867"
                    ]
                },
                "M_DWD_S_P425": {
                    "cirrus": [
                        "3010870"
                    ]
                },
                "M_DWD_S_P433": {
                    "cirrus": [
                        "3010873"
                    ]
                },
                "M_DWD_S_P441": {
                    "cirrus": [
                        "3010875"
                    ]
                },
                "M_DWD_S_P444": {
                    "cirrus": [
                        "3010877"
                    ]
                },
                "M_DWD_S_P448": {
                    "cirrus": [
                        "3010878"
                    ]
                },
                "M_DWD_S_P453": {
                    "cirrus": [
                        "3010884"
                    ]
                },
                "M_DWD_S_P460": {
                    "cirrus": [
                        "3010885"
                    ]
                },
                "M_DWD_S_P463": {
                    "cirrus": [
                        "3010888"
                    ]
                },
                "M_DWD_S_P467": {
                    "cirrus": [
                        "3010890"
                    ]
                },
                "M_DWD_S_P472": {
                    "cirrus": [
                        "3110783"
                    ]
                },
                "M_DWD_S_P477": {
                    "cirrus": [
                        "3010894"
                    ]
                },
                "M_DWD_S_P481": {
                    "cirrus": [
                        "3010895"
                    ]
                },
                "M_DWD_S_P501": {
                    "cirrus": [
                        "3010851"
                    ]
                },
                "M_DWD_S_P505": {
                    "cirrus": [
                        "3110645"
                    ]
                },
                "M_DWD_S_P515": {
                    "cirrus": [
                        "3010874"
                    ]
                },
                "M_DWD_S_P521": {
                    "cirrus": [
                        "3010847"
                    ]
                },
                "M_DWD_S_P522": {
                    "cirrus": [
                        "3010846"
                    ]
                },
                "M_DWD_S_P532": {
                    "cirrus": [
                        "3010844"
                    ]
                },
                "M_DWD_S_P548": {
                    "cirrus": [
                        "3010887"
                    ]
                },
                "M_DWD_S_P551": {
                    "cirrus": [
                        "3110874"
                    ]
                },
                "M_DWD_S_P557": {
                    "cirrus": [
                        "3010973"
                    ]
                },
                "M_DWD_S_P571": {
                    "cirrus": [
                        "3010899"
                    ]
                },
                "M_DWD_S_P572": {
                    "cirrus": [
                        "3110788"
                    ]
                },
                "M_DWD_S_P581": {
                    "cirrus": [
                        "3110796"
                    ]
                },
                "M_DWD_S_P585": {
                    "cirrus": [
                        "3110797"
                    ]
                },
                "M_DWD_S_P594": {
                    "cirrus": [
                        "3010994"
                    ]
                },
                "M_DWD_S_P597": {
                    "cirrus": [
                        "3110940"
                    ]
                },
                "M_DWD_S_P599": {
                    "cirrus": [
                        "3010997"
                    ]
                },
                "M_DWD_S_P602": {
                    "cirrus": [
                        "3110844"
                    ]
                },
                "M_DWD_S_P606": {
                    "cirrus": [
                        "3010839"
                    ]
                },
                "M_DWD_S_P618": {
                    "cirrus": [
                        "3010836"
                    ]
                },
                "M_DWD_S_P621": {
                    "cirrus": [
                        "3010835"
                    ]
                },
                "M_DWD_S_P629": {
                    "cirrus": [
                        "3010958"
                    ]
                },
                "M_DWD_S_P637": {
                    "cirrus": [
                        "3010963"
                    ]
                },
                "M_DWD_S_P639": {
                    "cirrus": [
                        "3010971"
                    ]
                },
                "M_DWD_S_P642": {
                    "cirrus": [
                        "3010964"
                    ]
                },
                "M_DWD_S_P645": {
                    "cirrus": [
                        "3010965"
                    ]
                },
                "M_DWD_S_P655": {
                    "cirrus": [
                        "3110943",
                        "3210007"
                    ]
                },
                "M_DWD_S_P659": {
                    "cirrus": [
                        "3110868"
                    ]
                },
                "M_DWD_S_P663": {
                    "cirrus": [
                        "3110790"
                    ]
                },
                "M_DWD_S_P666": {
                    "cirrus": [
                        "3010976"
                    ]
                },
                "M_DWD_S_P674": {
                    "cirrus": [
                        "3010979"
                    ]
                },
                "M_DWD_S_P678": {
                    "cirrus": [
                        "3010981"
                    ]
                },
                "M_DWD_S_P681": {
                    "cirrus": [
                        "3110958"
                    ]
                },
                "M_DWD_S_P687": {
                    "cirrus": [
                        "3010998"
                    ]
                },
                "M_DWD_S_P688": {
                    "cirrus": [
                        "3110898"
                    ]
                },
                "M_DWD_S_P689": {
                    "cirrus": [
                        "3010999"
                    ]
                },
                "M_DWD_S_P699": {
                    "cirrus": [
                        "3010990"
                    ]
                },
                "M_DWD_S_P702": {
                    "cirrus": [
                        "3010832"
                    ]
                },
                "M_DWD_S_P741": {
                    "cirrus": [
                        "3010959"
                    ]
                },
                "M_DWD_S_P760": {
                    "cirrus": [
                        "3110853"
                    ]
                },
                "M_DWD_S_P765": {
                    "cirrus": [
                        "3010970"
                    ]
                },
                "M_DWD_S_P768": {
                    "cirrus": [
                        "3110869"
                    ]
                },
                "M_DWD_S_P788": {
                    "cirrus": [
                        "3010988"
                    ]
                },
                "M_DWD_S_P794": {
                    "cirrus": [
                        "3010989"
                    ]
                },
                "M_DWD_S_P801": {
                    "cirrus": [
                        "10947",
                        "3110941",
                        "3210947"
                    ]
                },
                "M_DWD_S_P803": {
                    "cirrus": [
                        "3010948"
                    ]
                },
                "M_DWD_S_P804": {
                    "cirrus": [
                        "3010961"
                    ]
                },
                "M_DWD_S_P817": {
                    "cirrus": [
                        "3010953"
                    ]
                },
                "M_DWD_S_P818": {
                    "cirrus": [
                        "3010946"
                    ]
                },
                "M_DWD_S_P821": {
                    "cirrus": [
                        "3010957"
                    ]
                },
                "M_DWD_S_P824": {
                    "cirrus": [
                        "3010962"
                    ]
                },
                "M_DWD_S_P829": {
                    "cirrus": [
                        "3010954"
                    ]
                },
                "M_DWD_S_P830": {
                    "cirrus": [
                        "3110953"
                    ]
                },
                "M_DWD_S_P831": {
                    "cirrus": [
                        "3010967"
                    ]
                },
                "M_DWD_S_P846": {
                    "cirrus": [
                        "3010952"
                    ]
                },
                "M_DWD_S_P856": {
                    "cirrus": [
                        "3110980"
                    ]
                },
                "M_DWD_S_P862": {
                    "cirrus": [
                        "3110957"
                    ]
                },
                "M_DWD_S_P870": {
                    "cirrus": [
                        "3110981"
                    ]
                },
                "M_DWD_S_P873": {
                    "cirrus": [
                        "3110955"
                    ]
                },
                "M_DWD_S_P874": {
                    "cirrus": [
                        "3110982",
                        "3210030"
                    ]
                },
                "M_DWD_S_P875": {
                    "cirrus": [
                        "3110983"
                    ]
                },
                "M_DWD_S_P877": {
                    "cirrus": [
                        "3110984"
                    ]
                },
                "M_DWD_S_P881": {
                    "cirrus": [
                        "3110987"
                    ]
                },
                "M_DWD_S_P887": {
                    "cirrus": [
                        "3010935"
                    ]
                },
                "M_DWD_S_P892": {
                    "cirrus": [
                        "3110985"
                    ]
                },
                "M_DWD_S_P893": {
                    "cirrus": [
                        "3110986"
                    ]
                },
                "M_DWD_S_P894": {
                    "cirrus": [
                        "3110944"
                    ]
                },
                "M_DWD_S_P900": {
                    "cirrus": [
                        "3110997"
                    ]
                },
                "M_DWD_S_P903": {
                    "cirrus": [
                        "3210935"
                    ]
                },
                "M_DWD_S_P904": {
                    "cirrus": [
                        "3110988"
                    ]
                },
                "M_DWD_S_P908": {
                    "cirrus": [
                        "3010944"
                    ]
                },
                "M_DWD_S_P914": {
                    "cirrus": [
                        "3010943"
                    ]
                },
                "M_DWD_S_P916": {
                    "cirrus": [
                        "3010942"
                    ]
                },
                "M_DWD_S_P924": {
                    "cirrus": [
                        "3010938"
                    ]
                },
                "M_DWD_S_P935": {
                    "cirrus": [
                        "3110939"
                    ]
                },
                "M_DWD_S_P942": {
                    "cirrus": [
                        "3110965"
                    ]
                },
                "M_DWD_S_P944": {
                    "cirrus": [
                        "3110966"
                    ]
                },
                "M_DWD_S_P946": {
                    "cirrus": [
                        "3110875"
                    ]
                },
                "M_DWD_S_P948": {
                    "cirrus": [
                        "3110942"
                    ]
                },
                "M_DWD_S_P949": {
                    "cirrus": [
                        "3110952"
                    ]
                },
                "M_DWD_S_P956": {
                    "cirrus": [
                        "3110970"
                    ]
                },
                "M_DWD_S_P960": {
                    "cirrus": [
                        "3110991"
                    ]
                },
                "M_DWD_S_P966": {
                    "cirrus": [
                        "3110956"
                    ]
                },
                "M_DWD_S_P971": {
                    "cirrus": [
                        "3110995"
                    ]
                },
                "M_DWD_S_P975": {
                    "cirrus": [
                        "3110960"
                    ]
                },
                "M_DWD_S_P982": {
                    "cirrus": [
                        "3110959"
                    ]
                },
                "M_DWD_S_P991": {
                    "cirrus": [
                        "3110899"
                    ]
                },
                "M_DWD_S_P994": {
                    "cirrus": [
                        "3110975"
                    ]
                },
                "M_DWD_S_Q055": {
                    "cirrus": [
                        "3110648"
                    ]
                },
                "M_DWD_S_Q062": {
                    "cirrus": [
                        "3110646"
                    ]
                },
                "M_DWD_S_Q076": {
                    "cirrus": [
                        "3010824"
                    ]
                },
                "M_DWD_S_Q295": {
                    "cirrus": [
                        "3110753"
                    ]
                },
                "M_DWD_S_Q485": {
                    "cirrus": [
                        "3010926"
                    ]
                },
                "M_DWD_S_Q491": {
                    "cirrus": [
                        "3010925"
                    ]
                },
                "M_DWD_S_Q794": {
                    "cirrus": [
                        "3110839"
                    ]
                },
                "M_DWD_S_Q999": {
                    "cirrus": [
                        "3110946"
                    ]
                },
                "M_DWD_S_T546": {
                    "cirrus": [
                        "3110652"
                    ]
                },
                "M_DWD_S_U264": {
                    "cirrus": [
                        "10687"
                    ]
                },
                "M_DWD_S_U302": {
                    "cirrus": [
                        "3210771"
                    ]
                },
                "M_DWD_S_U335": {
                    "cirrus": [
                        "3210038"
                    ]
                },
                "M_DWD_S_U362": {
                    "cirrus": [
                        "3010792"
                    ]
                },
                "M_DWD_S_U393": {
                    "cirrus": [
                        "10770"
                    ]
                },
                "M_DWD_S_U406": {
                    "cirrus": [
                        "6310870"
                    ]
                },
                "M_DWD_S_U494": {
                    "cirrus": [
                        "3010833"
                    ]
                },
                "M_DWD_S_U590": {
                    "cirrus": [
                        "3210983"
                    ]
                },
                "M_DWD_S_U601": {
                    "cirrus": [
                        "3210859"
                    ]
                },
                "M_DWD_S_U668": {
                    "cirrus": [
                        "3110973"
                    ]
                },
                "M_DWD_S_U687": {
                    "cirrus": [
                        "3110954"
                    ]
                },
                "M_DWD_W_010_015": {
                    "koorin": [
                        "10120"
                    ]
                },
                "M_DWD_W_010_020": {
                    "koorin": [
                        "10020"
                    ]
                },
                "M_DWD_W_010_028": {
                    "koorin": [
                        "10028"
                    ]
                },
                "M_DWD_W_010_046": {
                    "koorin": [
                        "10046"
                    ]
                },
                "M_DWD_W_010_091": {
                    "koorin": [
                        "10091"
                    ]
                },
                "M_DWD_W_010_113": {
                    "koorin": [
                        "10113"
                    ]
                },
                "M_DWD_W_010_131": {
                    "koorin": [
                        "10131"
                    ]
                },
                "M_DWD_W_010_381": {
                    "koorin": [
                        "10385"
                    ]
                },
                "M_DWD_W_010_147": {
                    "koorin": [
                        "10147"
                    ]
                },
                "M_DWD_W_010_224": {
                    "koorin": [
                        "10224"
                    ]
                },
                "M_DWD_W_010_162": {
                    "koorin": [
                        "10162"
                    ]
                },
                "M_DWD_W_010_338": {
                    "koorin": [
                        "10338"
                    ]
                },
                "M_DWD_W_010_348": {
                    "koorin": [
                        "10348"
                    ]
                },
                "M_DWD_W_010_361": {
                    "koorin": [
                        "10361"
                    ]
                },
                "M_DWD_W_010_379": {
                    "koorin": [
                        "10379"
                    ]
                },
                "M_DWD_W_010_384": {
                    "koorin": [
                        "10384"
                    ]
                },
                "M_DWD_W_010_385": {
                    "koorin": [
                        "10385"
                    ]
                },
                "M_DWD_W_010_400": {
                    "koorin": [
                        "10400"
                    ]
                },
                "M_DWD_W_010_410": {
                    "koorin": [
                        "10410"
                    ]
                },
                "M_DWD_W_010_427": {
                    "koorin": [
                        "10427"
                    ]
                },
                "M_DWD_W_010_453": {
                    "koorin": [
                        "10453"
                    ]
                },
                "M_DWD_W_010_469": {
                    "koorin": [
                        "10469"
                    ]
                },
                "M_DWD_W_010_471": {
                    "koorin": [
                        "10471"
                    ]
                },
                "M_DWD_W_010_488": {
                    "koorin": [
                        "10488"
                    ]
                },
                "M_DWD_W_010_496": {
                    "koorin": [
                        "10496"
                    ]
                },
                "M_DWD_W_010_505": {
                    "koorin": [
                        "10501"
                    ]
                },
                "M_DWD_W_010_513": {
                    "koorin": [
                        "10513"
                    ]
                },
                "M_DWD_W_010_537": {
                    "cirrus": [
                        "10537"
                    ]
                },
                "M_DWD_W_010_544": {
                    "koorin": [
                        "10544"
                    ]
                },
                "M_DWD_W_010_548": {
                    "cirrus": [
                        "10548"
                    ],
                    "koorin": [
                        "10548"
                    ]
                },
                "M_DWD_W_010_554": {
                    "koorin": [
                        "10554"
                    ]
                },
                "M_DWD_W_010_557": {
                    "cirrus": [
                        "10557",
                        "3410557"
                    ],
                    "koorin": [
                        "10557"
                    ]
                },
                "M_DWD_W_010_578": {
                    "koorin": [
                        "10578"
                    ]
                },
                "M_DWD_W_010_609": {
                    "koorin": [
                        "10609"
                    ]
                },
                "M_DWD_W_010_637": {
                    "cirrus": [
                        "10637"
                    ],
                    "koorin": [
                        "10637"
                    ]
                },
                "M_DWD_W_010_641": {
                    "cirrus": [
                        "10641"
                    ]
                },
                "M_DWD_W_010_646": {
                    "cirrus": [
                        "10646"
                    ],
                    "koorin": [
                        "10646"
                    ]
                },
                "M_DWD_W_010_648": {
                    "cirrus": [
                        "10648"
                    ]
                },
                "M_DWD_W_010_655": {
                    "cirrus": [
                        "10655"
                    ],
                    "koorin": [
                        "10655"
                    ]
                },
                "M_DWD_W_010_658": {
                    "cirrus": [
                        "10658"
                    ],
                    "koorin": [
                        "10658"
                    ]
                },
                "M_DWD_W_010_671": {
                    "cirrus": [
                        "10671"
                    ],
                    "koorin": [
                        "10671"
                    ]
                },
                "M_DWD_W_010_675": {
                    "cirrus": [
                        "10675"
                    ],
                    "koorin": [
                        "10675"
                    ]
                },
                "M_DWD_W_010_685": {
                    "cirrus": [
                        "10685"
                    ],
                    "koorin": [
                        "10685"
                    ]
                },
                "M_DWD_W_010_686": {
                    "cirrus": [
                        "10686"
                    ],
                    "koorin": [
                        "10686"
                    ]
                },
                "M_DWD_W_010_688": {
                    "cirrus": [
                        "10688"
                    ],
                    "koorin": [
                        "10688"
                    ]
                },
                "M_DWD_W_010_708": {
                    "koorin": [
                        "10708"
                    ]
                },
                "M_DWD_W_010_739": {
                    "koorin": [
                        "10738"
                    ]
                },
                "M_DWD_W_010_729": {
                    "koorin": [
                        "10729"
                    ]
                },
                "M_DWD_W_010_733": {
                    "cirrus": [
                        "10733"
                    ]
                },
                "M_DWD_W_010_738": {
                    "koorin": [
                        "10738"
                    ]
                },
                "M_DWD_W_010_742": {
                    "cirrus": [
                        "10742"
                    ]
                },
                "M_DWD_W_010_743": {
                    "cirrus": [
                        "10743"
                    ],
                    "koorin": [
                        "10743"
                    ]
                },
                "M_DWD_W_010_747": {
                    "cirrus": [
                        "10747"
                    ]
                },
                "M_DWD_W_010_756": {
                    "cirrus": [
                        "10756"
                    ],
                    "koorin": [
                        "10756"
                    ]
                },
                "M_DWD_W_010_761": {
                    "cirrus": [
                        "10761"
                    ],
                    "koorin": [
                        "10761"
                    ]
                },
                "M_DWD_W_010_763": {
                    "cirrus": [
                        "10763"
                    ],
                    "koorin": [
                        "10763"
                    ]
                },
                "M_DWD_W_010_765": {
                    "cirrus": [
                        "10765"
                    ],
                    "koorin": [
                        "10765"
                    ]
                },
                "M_DWD_W_010_771": {
                    "cirrus": [
                        "10771"
                    ],
                    "koorin": [
                        "10771"
                    ]
                },
                "M_DWD_W_010_776": {
                    "cirrus": [
                        "10776"
                    ],
                    "koorin": [
                        "10776"
                    ]
                },
                "M_DWD_W_010_777": {
                    "cirrus": [
                        "10777"
                    ],
                    "koorin": [
                        "10777"
                    ]
                },
                "M_DWD_W_010_782": {
                    "cirrus": [
                        "10782"
                    ],
                    "koorin": [
                        "10782"
                    ]
                },
                "M_DWD_W_010_788": {
                    "cirrus": [
                        "10788"
                    ],
                    "koorin": [
                        "10788"
                    ]
                },
                "M_DWD_W_010_791": {
                    "cirrus": [
                        "10791"
                    ],
                    "koorin": [
                        "10791"
                    ]
                },
                "M_DWD_W_010_796": {
                    "cirrus": [
                        "10796"
                    ],
                    "koorin": [
                        "10796"
                    ]
                },
                "M_DWD_W_010_803": {
                    "koorin": [
                        "10803"
                    ]
                },
                "M_DWD_W_010_827": {
                    "cirrus": [
                        "10827"
                    ],
                    "koorin": [
                        "10827"
                    ]
                },
                "M_DWD_W_010_836": {
                    "cirrus": [
                        "10836"
                    ],
                    "koorin": [
                        "10836"
                    ]
                },
                "M_DWD_W_010_837": {
                    "cirrus": [
                        "10837"
                    ],
                    "koorin": [
                        "10837"
                    ]
                },
                "M_DWD_W_010_840": {
                    "koorin": [
                        "10840"
                    ]
                },
                "M_DWD_W_010_850": {
                    "cirrus": [
                        "10850"
                    ],
                    "koorin": [
                        "10850"
                    ]
                },
                "M_DWD_W_010_852": {
                    "cirrus": [
                        "10852"
                    ],
                    "koorin": [
                        "10852"
                    ]
                },
                "M_DWD_W_010_853": {
                    "cirrus": [
                        "10853"
                    ],
                    "koorin": [
                        "10853"
                    ]
                },
                "M_DWD_W_010_856": {
                    "cirrus": [
                        "10856"
                    ],
                    "koorin": [
                        "10856"
                    ]
                },
                "M_DWD_W_010_860": {
                    "cirrus": [
                        "10860"
                    ],
                    "koorin": [
                        "10860"
                    ]
                },
                "M_DWD_W_010_863": {
                    "cirrus": [
                        "10863"
                    ],
                    "koorin": [
                        "10863"
                    ]
                },
                "M_DWD_W_010_865": {
                    "cirrus": [
                        "10865"
                    ],
                    "koorin": [
                        "10865"
                    ]
                },
                "M_DWD_W_010_870": {
                    "cirrus": [
                        "10870"
                    ],
                    "koorin": [
                        "10870"
                    ]
                },
                "M_DWD_W_010_872": {
                    "cirrus": [
                        "10872"
                    ],
                    "koorin": [
                        "10872"
                    ]
                },
                "M_DWD_W_010_875": {
                    "cirrus": [
                        "10875"
                    ],
                    "koorin": [
                        "10875"
                    ]
                },
                "M_DWD_W_010_895": {
                    "cirrus": [
                        "10895"
                    ],
                    "koorin": [
                        "10895"
                    ]
                },
                "M_DWD_W_010_908": {
                    "koorin": [
                        "10908"
                    ]
                },
                "M_DWD_W_010_929": {
                    "koorin": [
                        "10929"
                    ]
                },
                "M_DWD_W_010_945": {
                    "cirrus": [
                        "10945"
                    ]
                },
                "M_DWD_W_010_946": {
                    "cirrus": [
                        "10946"
                    ],
                    "koorin": [
                        "10946"
                    ]
                },
                "M_DWD_W_010_948": {
                    "cirrus": [
                        "10948"
                    ],
                    "koorin": [
                        "10948"
                    ]
                },
                "M_DWD_W_010_954": {
                    "cirrus": [
                        "10954"
                    ],
                    "koorin": [
                        "10954"
                    ]
                },
                "M_DWD_W_010_961": {
                    "cirrus": [
                        "10961"
                    ],
                    "koorin": [
                        "10961"
                    ]
                },
                "M_DWD_W_010_962": {
                    "cirrus": [
                        "10962"
                    ],
                    "koorin": [
                        "10962"
                    ]
                },
                "M_DWD_W_010_963": {
                    "cirrus": [
                        "10963"
                    ],
                    "koorin": [
                        "10963"
                    ]
                },
                "M_DWD_W_010_982": {
                    "cirrus": [
                        "10982"
                    ],
                    "koorin": [
                        "10982"
                    ]
                },
                "M_MG_S_11101": {
                    "koorin": [
                        "11101"
                    ]
                },
                "M_MG_S_11120": {
                    "koorin": [
                        "11120"
                    ]
                },
                "M_MG_S_11126": {
                    "koorin": [
                        "11126"
                    ]
                },
                "M_MG_S_11130": {
                    "koorin": [
                        "11130"
                    ]
                },
                "M_MG_S_11150": {
                    "koorin": [
                        "11150"
                    ]
                },
                "M_MG_S_11155": {
                    "koorin": [
                        "11155"
                    ]
                },
                "M_MG_S_11343": {
                    "koorin": [
                        "11146"
                    ]
                },
                "M_MG_S_11406": {
                    "koorin": [
                        "11406"
                    ]
                },
                "M_MG_S_11414": {
                    "koorin": [
                        "11414"
                    ]
                },
                "M_MG_S_11518": {
                    "koorin": [
                        "11518"
                    ]
                },
                "M_MG_S_16022": {
                    "koorin": [
                        "16022"
                    ]
                },
                "M_MG_S_16033": {
                    "koorin": [
                        "16033"
                    ]
                },
                "M_MG_S_6310532": {
                    "cirrus": [
                        "10532"
                    ]
                },
                "M_MG_S_6510171": {
                    "koorin": [
                        "10170",
                        "K10224"
                    ]
                },
                "M_MG_S_6510534": {
                    "cirrus": [
                        "6510534"
                    ]
                },
                "M_MG_S_6510546": {
                    "cirrus": [
                        "6510546"
                    ]
                },
                "M_MG_S_6510558": {
                    "cirrus": [
                        "10558"
                    ]
                },
                "M_MG_S_6510647": {
                    "cirrus": [
                        "3210649",
                        "6510647"
                    ]
                },
                "M_MG_S_6510656": {
                    "cirrus": [
                        "6510656"
                    ]
                },
                "M_MG_S_6510657": {
                    "cirrus": [
                        "6510657"
                    ]
                },
                "M_MG_S_6510667": {
                    "cirrus": [
                        "6510667"
                    ]
                },
                "M_MG_S_6510670": {
                    "cirrus": [
                        "6510670"
                    ]
                },
                "M_MG_S_6510686": {
                    "cirrus": [
                        "6510686"
                    ]
                },
                "M_MG_S_6510695": {
                    "cirrus": [
                        "6510695"
                    ]
                },
                "M_MG_S_6510727": {
                    "koorin": [
                        "10727"
                    ]
                },
                "M_MG_S_6510753": {
                    "cirrus": [
                        "6510753"
                    ]
                },
                "M_MG_S_6510762": {
                    "cirrus": [
                        "6510762"
                    ]
                },
                "M_MG_S_6510767": {
                    "cirrus": [
                        "6510767"
                    ]
                },
                "M_MG_S_6510769": {
                    "cirrus": [
                        "6510769"
                    ]
                },
                "M_MG_S_6510778": {
                    "cirrus": [
                        "6510778"
                    ]
                },
                "M_MG_S_6510789": {
                    "cirrus": [
                        "6510789"
                    ]
                },
                "M_MG_S_6510790": {
                    "cirrus": [
                        "6510790"
                    ]
                },
                "M_MG_S_6510843": {
                    "cirrus": [
                        "6510843"
                    ]
                },
                "M_MG_S_6510861": {
                    "cirrus": [
                        "6510861"
                    ]
                },
                "M_MG_S_6510862": {
                    "cirrus": [
                        "6510862"
                    ]
                },
                "M_MG_S_6510867": {
                    "cirrus": [
                        "6510867"
                    ]
                },
                "M_MG_S_6510872": {
                    "cirrus": [
                        "3210788"
                    ]
                },
                "M_MG_S_6510890": {
                    "cirrus": [
                        "6510890"
                    ]
                },
                "M_MG_S_6510899": {
                    "cirrus": [
                        "6510899"
                    ]
                },
                "M_MG_S_6510941": {
                    "cirrus": [
                        "6510941"
                    ]
                },
                "M_MG_S_6510944": {
                    "cirrus": [
                        "6510944"
                    ]
                },
                "M_MG_S_6510946": {
                    "cirrus": [
                        "6510946"
                    ]
                },
                "M_MG_S_6510948": {
                    "cirrus": [
                        "6510948"
                    ]
                },
                "M_MG_S_6510949": {
                    "cirrus": [
                        "3210946",
                        "6510949"
                    ]
                },
                "M_MG_S_6510950": {
                    "cirrus": [
                        "6510950"
                    ]
                },
                "M_MG_S_6510951": {
                    "cirrus": [
                        "6510951"
                    ]
                },
                "M_MG_S_6510952": {
                    "cirrus": [
                        "6510952"
                    ]
                },
                "M_MG_S_6510953": {
                    "cirrus": [
                        "6510953"
                    ]
                },
                "M_MG_S_6510954": {
                    "cirrus": [
                        "6510954"
                    ]
                },
                "M_MG_S_6510955": {
                    "cirrus": [
                        "6510955"
                    ]
                },
                "M_MG_S_6510956": {
                    "cirrus": [
                        "6510956"
                    ]
                },
                "M_MG_S_6510958": {
                    "cirrus": [
                        "6510958"
                    ]
                },
                "M_MG_S_6510964": {
                    "cirrus": [
                        "6510964"
                    ]
                },
                "M_MG_S_6510966": {
                    "cirrus": [
                        "6510966"
                    ]
                },
                "M_MG_S_6510967": {
                    "cirrus": [
                        "6510967"
                    ]
                },
                "M_MG_S_6510968": {
                    "cirrus": [
                        "6510968"
                    ]
                },
                "M_MG_S_6510969": {
                    "cirrus": [
                        "6510969"
                    ]
                },
                "M_MG_S_6510970": {
                    "cirrus": [
                        "6510970"
                    ]
                },
                "M_MG_S_6510976": {
                    "cirrus": [
                        "6510976"
                    ]
                },
                "M_MG_S_6650": {
                    "koorin": [
                        "6650"
                    ]
                },
                "M_MG_S_6670": {
                    "koorin": [
                        "6670"
                    ]
                },
                "M_MG_S_6674": {
                    "cirrus": [
                        "3210791"
                    ]
                },
                "M_MG_S_6700": {
                    "koorin": [
                        "6700"
                    ]
                },
                "M_MG_S_6730": {
                    "koorin": [
                        "6730"
                    ]
                },
                "M_MG_S_6770": {
                    "koorin": [
                        "6770"
                    ]
                }
            }
        },
        "dbConfig": {
            "host": "yourhost",
            "user": "youruser",
            "databaseKoorin": "yourdatabase",
            "databaseCirrus": "yourdatabase"
        },
        "koorinObsParamIds": {
            "lufttemperatur": 1,
            "luftdruck": 651,
            "mittlereWindrichtung": 250,
            "mittlereWindgeschwindigkeit": 251,
            "maxWindboee": 252,
            "relativeFeuchtigkeit": 102,
            "bewoelkung": 550,
            "bewoelkung2": 551,
            "niederschlagsMenge": 401,
            "horizontaleSichtweite": 750,
            "sonnenscheindauer": 701,
            "wetterzustand": 350
        },
        "hr2koorinWetterzustand": {
            "0": 0,
            "1": -1,
            "2": -1,
            "3": -1,
            "4": 4,
            "5": 5,
            "6": 5,
            "7": 7,
            "8": 7,
            "9": 7,
            "10": 11,
            "11": 11,
            "12": 11,
            "13": 13,
            "14": 0,
            "15": 0,
            "16": 0,
            "17": 95,
            "18": 18,
            "19": 19,
            "20": 50,
            "21": 58,
            "22": 72,
            "23": 69,
            "24": 66,
            "25": 81,
            "26": 69,
            "27": 90,
            "28": 45,
            "29": 95,
            "30": 7,
            "31": 7,
            "32": 7,
            "33": 7,
            "34": 7,
            "35": 7,
            "36": 72,
            "37": 72,
            "38": 72,
            "39": 72,
            "40": 45,
            "41": 45,
            "42": 45,
            "43": 45,
            "44": 45,
            "45": 45,
            "46": 45,
            "47": 45,
            "48": 48,
            "49": 48,
            "50": 50,
            "51": 50,
            "52": 50,
            "53": 50,
            "54": 50,
            "55": 50,
            "56": 66,
            "57": 66,
            "58": 60,
            "59": 58,
            "60": 60,
            "61": 60,
            "62": 58,
            "63": 58,
            "64": 64,
            "65": 64,
            "66": 66,
            "67": 66,
            "68": 58,
            "69": 58,
            "70": 71,
            "71": 71,
            "72": 72,
            "73": 72,
            "74": 74,
            "75": 74,
            "76": 76,
            "77": 76,
            "78": 78,
            "79": 79,
            "80": 80,
            "81": 81,
            "82": 82,
            "83": 83,
            "84": 84,
            "85": 83,
            "86": 84,
            "87": 87,
            "88": 88,
            "89": 89,
            "90": 90,
            "91": 95,
            "92": 95,
            "93": 95,
            "94": 95,
            "95": 95,
            "96": 95,
            "97": 97,
            "98": 97,
            "99": 97,
            "100": -2,
            "101": -1,
            "102": -1,
            "103": -1,
            "104": 5,
            "105": 5,
            "110": 11,
            "111": 76,
            "112": 13,
            "118": 18,
            "120": 45,
            "121": 0,
            "122": 50,
            "123": 58,
            "124": 72,
            "125": 66,
            "126": 95,
            "127": 72,
            "128": 72,
            "129": 72,
            "130": 45,
            "131": 45,
            "132": 45,
            "133": 45,
            "134": 45,
            "135": 48,
            "140": 0,
            "141": 0,
            "142": 0,
            "143": 58,
            "144": 64,
            "145": 90,
            "146": 90,
            "147": 66,
            "148": 66,
            "150": 50,
            "151": 50,
            "152": 50,
            "153": 50,
            "154": 66,
            "155": 66,
            "156": 66,
            "157": 50,
            "158": 50,
            "160": 58,
            "161": 60,
            "162": 58,
            "163": 64,
            "164": 66,
            "165": 66,
            "166": 66,
            "167": 58,
            "168": 58,
            "170": 72,
            "171": 71,
            "172": 72,
            "173": 74,
            "174": 79,
            "175": 79,
            "176": 79,
            "177": 76,
            "178": 76,
            "180": 81,
            "181": 80,
            "182": 81,
            "183": 82,
            "184": 82,
            "185": 85,
            "186": 85,
            "187": 86,
            "189": 90,
            "190": 95,
            "191": 95,
            "192": 95,
            "193": 95,
            "194": 97,
            "195": 97,
            "196": 97,
            "199": 19,
            "204": 0,
            "206": 5,
            "207": 45,
            "208": 7,
            "209": 95,
            "210": 72,
            "211": 0,
            "213": 95,
            "217": 95,
            "219": 19,
            "220": 0,
            "221": 0,
            "222": 45,
            "223": 72,
            "224": 0,
            "225": 0,
            "226": 0,
            "227": 66,
            "228": 66,
            "230": 7,
            "239": 72,
            "241": 45,
            "242": 45,
            "243": 48,
            "244": 45,
            "245": 45,
            "246": 45,
            "247": 47,
            "248": 47,
            "249": 47,
            "250": 50,
            "251": 50,
            "252": 50,
            "253": 50,
            "254": 50,
            "255": 50,
            "256": 50,
            "257": 50,
            "259": 50,
            "260": 60,
            "261": 60,
            "262": 58,
            "263": 58,
            "264": 58,
            "265": 64,
            "266": 64,
            "267": 64,
            "270": 71,
            "271": 72,
            "272": 72,
            "273": 72,
            "274": 72,
            "275": 74,
            "276": 74,
            "277": 74,
            "278": 76,
            "279": 66,
            "280": 58,
            "281": 66,
            "282": 69,
            "283": 72,
            "284": 79,
            "285": 79,
            "286": 79,
            "287": 79,
            "288": 90,
            "289": 90,
            "290": 90,
            "291": 90,
            "292": 95,
            "293": 95,
            "301": "-2",
            "302": "-2",
            "303": "-2",
            "304": "-2",
            "305": "-2",
            "508": 0,
            "509": 0,
            "510": 0,
            "511": 0
        },
        "hr2cirrusWetterzustand": {
            "0": 0,
            "1": 0,
            "2": 0,
            "3": 0,
            "4": -1,
            "5": 5,
            "6": 5,
            "7": 7,
            "8": 8,
            "9": 9,
            "10": 5,
            "11": 12,
            "12": 12,
            "13": 13,
            "14": -1,
            "15": -1,
            "16": -1,
            "17": 95,
            "18": 18,
            "19": 19,
            "20": 52,
            "21": 58,
            "22": 72,
            "23": 69,
            "24": 24,
            "25": 25,
            "26": 69,
            "27": 90,
            "28": 43,
            "29": 95,
            "30": 9,
            "31": 9,
            "32": 9,
            "33": 9,
            "34": 9,
            "35": 9,
            "36": 72,
            "37": 72,
            "38": 72,
            "39": 72,
            "40": 43,
            "41": 43,
            "42": 43,
            "43": 43,
            "44": 43,
            "45": 43,
            "46": 43,
            "47": 43,
            "48": 48,
            "49": 48,
            "50": 50,
            "51": 50,
            "52": 52,
            "53": 52,
            "54": 52,
            "55": 52,
            "56": 24,
            "57": 24,
            "58": 60,
            "59": 58,
            "60": 60,
            "61": 60,
            "62": 58,
            "63": 58,
            "64": 64,
            "65": 64,
            "66": 24,
            "67": 24,
            "68": 58,
            "69": 58,
            "70": 71,
            "71": 71,
            "72": 72,
            "73": 72,
            "74": 74,
            "75": 74,
            "76": 76,
            "77": 76,
            "78": 78,
            "79": 87,
            "80": 80,
            "81": 25,
            "82": 82,
            "83": 83,
            "84": 84,
            "85": 83,
            "86": 84,
            "87": 87,
            "88": 88,
            "89": 89,
            "90": 90,
            "91": 91,
            "92": 91,
            "93": 95,
            "94": 95,
            "95": 95,
            "96": 95,
            "97": 97,
            "98": 97,
            "99": 97,
            "100": 0,
            "101": 0,
            "102": 0,
            "103": 0,
            "104": 5,
            "105": 5,
            "110": 5,
            "111": 76,
            "112": 13,
            "118": 18,
            "120": 43,
            "121": -1,
            "122": 52,
            "123": 58,
            "124": 72,
            "125": 24,
            "126": 95,
            "127": 72,
            "128": 72,
            "129": 72,
            "130": 43,
            "131": 43,
            "132": 43,
            "133": 43,
            "134": 43,
            "135": 48,
            "140": -1,
            "141": -1,
            "142": -1,
            "143": 58,
            "144": 64,
            "145": 90,
            "146": 90,
            "147": 24,
            "148": 24,
            "150": 52,
            "151": 50,
            "152": 52,
            "153": 52,
            "154": 24,
            "155": 24,
            "156": 24,
            "157": 52,
            "158": 52,
            "160": 58,
            "161": 60,
            "162": 58,
            "163": 64,
            "164": 24,
            "165": 24,
            "166": 24,
            "167": 58,
            "168": 58,
            "170": 72,
            "171": 71,
            "172": 72,
            "173": 74,
            "174": 87,
            "175": 87,
            "176": 87,
            "177": 76,
            "178": 76,
            "180": 25,
            "181": 80,
            "182": 25,
            "183": 82,
            "184": 82,
            "185": 85,
            "186": 85,
            "187": 86,
            "189": 90,
            "190": 95,
            "191": 95,
            "192": 95,
            "193": 95,
            "194": 97,
            "195": 97,
            "196": 97,
            "199": 19,
            "204": -1,
            "206": 5,
            "207": 43,
            "208": 8,
            "209": 95,
            "210": 72,
            "211": 0,
            "213": 95,
            "217": 95,
            "219": 19,
            "220": -1,
            "221": -1,
            "222": 43,
            "223": 72,
            "224": -1,
            "225": -1,
            "226": -1,
            "227": 24,
            "228": 24,
            "230": 9,
            "239": 72,
            "241": 43,
            "242": 43,
            "243": 48,
            "244": 43,
            "245": 43,
            "246": 43,
            "247": 43,
            "248": 43,
            "249": 43,
            "250": 52,
            "251": 52,
            "252": 52,
            "253": 52,
            "254": 52,
            "255": 52,
            "256": 52,
            "257": 52,
            "259": 52,
            "260": 60,
            "261": 60,
            "262": 58,
            "263": 58,
            "264": 58,
            "265": 64,
            "266": 64,
            "267": 64,
            "270": 71,
            "271": 72,
            "272": 72,
            "273": 72,
            "274": 72,
            "275": 74,
            "276": 74,
            "277": 74,
            "278": 76,
            "279": 24,
            "280": 58,
            "281": 24,
            "282": 69,
            "283": 72,
            "284": 79,
            "285": 79,
            "286": 79,
            "287": 79,
            "288": 90,
            "289": 90,
            "290": 90,
            "291": 90,
            "292": 95,
            "293": 95,
            "301": 0,
            "302": 0,
            "303": 0,
            "304": 0,
            "305": 0,
            "508": -1,
            "509": -1,
            "510": -1,
            "511": -1
        }
    }
]

app.get("/testdaten", (req, res) => {

    res.json(posts);

});


app.post("/testdaten", (req, res) => {
    const { debugScope } = req.body;

    if (!debugScope) {
        return res.status(400).json({ error: "debugScope fehlt" });
    }

    posts[0].global.debugScope = debugScope;

    console.log("Neuer debugScope:", posts[0].global.debugScope);

    res.json({ status: "ok" });
});

app.listen(PORT, () => {

    console.log(`Server running on http://localhost:${PORT}`);

});