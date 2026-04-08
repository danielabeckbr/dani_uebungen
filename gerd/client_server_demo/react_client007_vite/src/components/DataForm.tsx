import React, { useState } from 'react';

import type { FormEvent } from 'react';

// Die URL deines Service bbb
const SERVICE_URL = 'http://localhost:3005/daten-empfangen';


const DataForm: React.FC = () => {
  // 1. State für die Formulardaten
  const [name, setName] = useState<string>('');
  const [alter, setAlter] = useState<string>('');
  
  console.log("componente DataForm II")

  // 2. State für den Status/Meldungen
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  /**
   * 3. Handler-Funktion für das Absenden des Formulars
   * @param event Das Formular-Submit-Event
   */
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault(); // Standard-Formular-Submit verhindern
    
      console.log("componente DataForm > handleSubmit")

    // States zurücksetzen
    setMessage(null);
    setIsError(false);
    setIsLoading(true);

    debugger;

    // Sicherstellen, dass die Daten nicht leer sind (einfache Validierung)
    if (!name || !alter) {
        setMessage('Bitte Name und Alter eingeben.');
        setIsError(true);
        setIsLoading(false);
        return;
    }
    
    // 4. URL mit Query-Parametern zusammenstellen
    // Die URL wird http://localhost:3005/daten-empfangen?name=Max&alter=30 sein
    const fullUrl = `${SERVICE_URL}?name=${encodeURIComponent(name)}&alter=${encodeURIComponent(alter)}`;

    try {
      const response = await fetch(fullUrl, {
        method: 'GET', // Explizites GET ist gut, aber der Standard für fetch()
        // Da es ein GET-Request ist, senden wir keinen Body
      });

      // 5. Überprüfen, ob der Service erfolgreich geantwortet hat
      if (response.ok) {
        // Erfolgsmeldung anzeigen
        setMessage('Daten gespeichert! ✅');
        setIsError(false);


        // Optional: Felder nach dem Speichern leeren
        setName('');
        setAlter('');
        
        // Die Antwort des Servers auf der Browser-Konsole ausgeben (sollte "data ok" sein)
        const serverResponse = await response.text();
        console.log('Antwort des Services:', serverResponse); 
        
      } else {
        throw new Error(`URL: ${fullUrl}<br>Service-Fehler! Status: ${response.status}`);
      }
      
    } catch (err) {
      // Fehlerbehandlung (z.B. Service ist nicht erreichbar)
      const errorMsg = (err instanceof Error) ? err.message : 'Unbekannter Fehler beim Senden der Daten.';
      setMessage(`URL: ${fullUrl}<br>Speichern fehlgeschlagen: ${errorMsg}`);
      setIsError(true);
      console.error('Fehler beim Senden der Daten:', err);
      
    } finally {
      setIsLoading(false);
    }
  };

  // VARIANTE 1: POST (Senden im Body)
  const sendViaPost = async () => {
    if (!name || alter === '') return;
    await fetch(`${SERVICE_URL}/people`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, age: Number(age) }),
    })
  }

  // VARIANTE 2: GET (Senden in der URL)
  const sendViaGet = async () => {
    if (!name || alter === '') return;
    // Wir hängen die Daten als Query-String an: ?name=XYZ&age=123
    await fetch(`${SERVICE_URL}/add-get?name=${encodeURIComponent(name)}&age=${age}`)
  }

  // 6. Das UI der Komponente
  return (
    <div>
      <h1>Dateneingabe V1.4</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isLoading}
            required
          />
        </div>
        
        <div style={{ marginTop: '10px' }}>
          <label htmlFor="alter">Alter:</label>
          <input
            id="alter"
            type="number"
            value={alter}
            onChange={(e) => setAlter(e.target.value)}
            disabled={isLoading}
            required
          />
        </div>

        <button 
          type="submit" 
          disabled={isLoading} 
          style={{ marginTop: '20px', padding: '10px 20px' }}
        >
          {isLoading ? 'Sende Daten...' : 'Speichern (Save Button)'}
        </button>

        <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={sendViaPost} style={{ backgroundColor: '#4CAF50', color: 'white' }}>
          Per POST senden (Standard)
        </button>
        
        <button onClick={sendViaGet} style={{ backgroundColor: '#2196F3', color: 'white' }}>
          Per GET senden (URL-Parameter)
        </button>
      </div>

      </form>

      {/* 7. Anzeige der Statusmeldung */}
      {message && (
        <p 
          style={{ 
            marginTop: '20px', 
            color: isError ? 'red' : 'green', 
            fontWeight: 'bold' 
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default DataForm;