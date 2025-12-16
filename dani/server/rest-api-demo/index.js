const express = require("express");
const cors = require('cors')
const app = express();

const PORT = 1080;
app.use(cors());

/* "/testdaten" generiert die Server URL, hier: http://localhost:3002/testdaten*/
let posts = [
    { datum: "heute", wetter: "schlecht" },
    { datum: "morgen", wetter: "besser" }
]

app.get("/testdaten", (req, res) => {

    res.json(posts);

});



app.listen(PORT, () => {

    console.log(`Server running on http://localhost:${PORT}`);

});