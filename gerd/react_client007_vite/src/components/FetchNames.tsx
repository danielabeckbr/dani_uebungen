import React, { useState, useEffect } from 'react';

// 1. Interface zur Typisierung der Daten definieren (muss zur Server-Antwort passen)
interface NameData {
  id: number;
  name: string;
}

const FetchNames: React.FC = () => {
  // 2. State für die Speicherung der Daten und des Ladezustands
  const [names, setNames] = useState<NameData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // 3. useEffect Hook, um den Datenabruf beim Laden der Komponente auszuführen
  useEffect(() => {
    // Die URL deines lokalen REST Services
    const SERVICE_URL = 'http://localhost:3005/namen'; 
// http://localhost:3005/daten-empfangen?name=Anna&alter=25
    const fetchNames = async () => {
      try {
        const response = await fetch(SERVICE_URL);

        // Prüfen, ob die Antwort erfolgreich war (Status 200-299)
        if (!response.ok) {
          throw new Error(`HTTP-Fehler! Status: ${response.status}`);
        }

        // 4. Die Antwort als JSON parsen
        const data: NameData[] = await response.json();
        
        // 5. Die empfangenen Daten im Client-Browser auf der Konsole ausgeben
        console.log('Daten vom REST Service erfolgreich empfangen:');
        console.log(data); // 👈 Diese Ausgabe siehst du in der Browser-Konsole!

        // 6. Den State mit den Daten aktualisieren
        setNames(data);
        
      } catch (err) {
        // Fehlerbehandlung
        if (err instanceof Error) {
            setError(err.message);
            console.error('Fehler beim Abrufen der Daten:', err.message);
        } else {
             setError('Ein unbekannter Fehler ist aufgetreten.');
             console.error('Ein unbekannter Fehler ist aufgetreten');
        }
      } finally {
        // Ladezustand beenden
        setLoading(false);
      }
    };

    fetchNames();
  }, []); // Das leere Array [] sorgt dafür, dass der Effekt nur einmal beim Mounten ausgeführt wird

  // 7. Render-Logik (Ausgabe der Daten im UI)
  if (loading) {
    return <div>Lädt Daten...</div>;
  }

  if (error) {
    return <div>Fehler beim Laden: {error}. Stelle sicher, dass der Node.js Service läuft.</div>;
  }

  return (
    <div>
      <h1>Namen von Service (GET /namen)</h1>
      {names.length === 0 ? (
        <p>Keine Namen gefunden.</p>
      ) : (
        <ul>
          {names.map((item) => (
            <li key={item.id}>
              ID: {item.id}, Name: <strong>{item.name}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchNames;