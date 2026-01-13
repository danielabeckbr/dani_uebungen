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
            }
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