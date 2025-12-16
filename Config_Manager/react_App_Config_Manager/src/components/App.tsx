
import React, { useEffect, useState } from "react";

interface ApiResponse {
  global?: {
    debugScope?: Record<string, number>; // Record gibt type für Objekte mit zusammengehörigen Elementen an, z.B. { "a": 1, "b": 0 }
    configname?: string;
    key: string
  };
}



const App: React.FC = () => {
  const [data, setData] = useState<ApiResponse[] | null>(null);
  /*
data ist ein array, weil das ursprüngliche json vom server als array gesendet wird (es steht in [])
*/
  const [debugScope, setDebugScope] = useState<Record<string, number> | null>(
    null
  );
  /*debugScope ist der State-Wert (das aktuelle Objekt)
setDebugScope ist die Funktion zum Ändern dieses States 
Das funktioniert immer nach dem Prinzip:
const [state, setState] = useState(initialValue);
Record<string, number> legt fest, welche types keys und vlues im ergebnis

data ist ein array, weil das ursprüngliche json vom server als array gesendet wird (es steht in [])
*/
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Daten laden
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch("http://localhost:1080/testdaten", {
          method: "GET",
        });

        if (!response.ok) {
          return "Serverfehler";
        }

        const json = await response.json();
        console.log("Antwort:", json);

        setData(json);
        // Nur den ersten Datensatz betrachten
        const first = json[0];
        setDebugScope(first.global?.debugScope || null);
      } catch (err: any) {
        setError(err.message || "Unbekannter Fehler");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Lade Daten...</p>;
  if (error) return <p style={{ color: "red" }}>Fehler: {error}</p>;
  if (!debugScope) return <p>Keine DebugScope-Daten gefunden.</p>;

  // ✅ Click-Handler für Checkbox
  const toggleValue = (key: string) => {
    setDebugScope((alterWert) =>
      alterWert
        ? {
          ...alterWert,
          [key]: alterWert[key] === 1 ? 0 : 1,
        }
        : alterWert
    );
  };

  const renderDebugScope = () => {
    console.log("Ergebnis:" + Object.entries(debugScope));
    return Object.entries(debugScope).map(([key, value]) => (
      <label key={key}>
        <input
          type="checkbox"
          checked={value === 1}
          onChange={() => toggleValue(key)}
        />
        {" "}
        {key} ({value})
        <div><br /></div>
      </label>
    ));
  };


  return (
    <div>
      <h1>Debugwerte</h1>
      <div>{renderDebugScope()}</div>

      <h3>Zustand auf dem Server:</h3>
      <pre>{JSON.stringify(debugScope, null, 2)}</pre>
      <button
        onClick={async () => {
          await fetch("http://localhost:1080/testdaten", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ debugScope }),
          });
          alert("Änderungen gesendet!");
        }}
      >
        Änderungen speichern
      </button>
    </div>

  );
};

export default App;
