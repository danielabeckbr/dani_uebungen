// Import the express in typescript file
//import express from 'express';
import express from "express";
import type { Request, Response } from "express";
import cors from 'cors'; // 1. Importiere das CORS-Paket

// Initialize the express engine
const app: express.Application = express();

// 2. CORS-Konfiguration
const corsOptions = {
    // Erlaubt NUR Anfragen vom Vite-Entwicklungs-Server (Port 5173)
    origin: 'http://localhost:5173', 
    methods: ['GET', 'OPTIONS'], // Erlaubt die verwendeten Methoden
};

app.use(cors(corsOptions)); // 3. Füge die CORS-Middleware hinzu

// Take a port 3000 for running server.
const port: number = 3005;

interface MyQueryParams {
  name?: string;
  alter?: string;
  // Hier kannst du weitere erwartete Parameter hinzufügen
}

app.get('/daten-empfangen', (req: Request<{}, {}, {}, MyQueryParams>, res: Response) => {
  // 1. Zugriff auf die übergebenen Daten
  const queryData = req.query;

  // 2. Die Daten auf der Server-Konsole ausgeben (die "Javascript Console" im Node.js-Kontext)
  console.log('--- GET /daten-empfangen Anfrage empfangen ---');
  console.log('Empfangene Query-Parameter:');
  
  // Wir geben die Parameter einzeln aus, um sie besser lesbar zu machen
  if (queryData.name) {
    console.log(`- Name: ${queryData.name}`);
  }
  if (queryData.alter) {
    console.log(`- Alter: ${queryData.alter}`);
  }
  
  // Wenn keine spezifischen Parameter erwartet, gib den gesamten Query-Block aus
  if (Object.keys(queryData).length === 0) {
      console.log('Keine Parameter übergeben.');
  }

  // 3. Den String "data ok" an den Client zurücksenden
  res.status(200).send("data ok");
})

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
  console.log(`Zum Testen im Browser aufrufen: http://localhost:${port}/daten-empfangen?name=Anna&alter=25`);
})

/*
// Handling '/' Request
app.get('/', (_req, _res) => {
    _res.send("TypeScript With Express2");
});

// Server setup
app.listen(port, () => {
    console.log(`TypeScript with Express 
         http://localhost:${port}/`);
});
*/


/*
// src/server.ts

//import express, { Request, Response } from "express";

import * as express from "express";
// Definieren des Ports
const PORT = 3000;
const app = express();

interface MyQueryParams {
  name?: string;
  alter?: string;
  // Hier kannst du weitere erwartete Parameter hinzufügen
}


app.get('/daten-empfangen', (req: Request<{}, {}, {}, MyQueryParams>, res: Response) => {
  // 1. Zugriff auf die übergebenen Daten
  const queryData = req.query;

  // 2. Die Daten auf der Server-Konsole ausgeben (die "Javascript Console" im Node.js-Kontext)
  console.log('--- GET /daten-empfangen Anfrage empfangen ---');
  console.log('Empfangene Query-Parameter:');
  
  // Wir geben die Parameter einzeln aus, um sie besser lesbar zu machen
  if (queryData.name) {
    console.log(`- Name: ${queryData.name}`);
  }
  if (queryData.alter) {
    console.log(`- Alter: ${queryData.alter}`);
  }
  
  // Wenn keine spezifischen Parameter erwartet, gib den gesamten Query-Block aus
  if (Object.keys(queryData).length === 0) {
      console.log('Keine Parameter übergeben.');
  }

  // 3. Den String "data ok" an den Client zurücksenden
  res.status(200).send("data ok");
});

// Server starten
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
  console.log(`Zum Testen im Browser aufrufen: http://localhost:${PORT}/daten-empfangen?name=Anna&alter=25`);
});

*/