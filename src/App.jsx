import { useState } from "react";
import { checkApiConnection } from "./api/api";
import "./App.css";

function App() {
  const [status, setStatus] = useState("Not tested");
  const [loading, setloading] = useState(false);

  const handleTestConnection = async () => {
    setloading(true);
    setStatus("connectiong...");

    try {
      const data = await checkApiConnection();
      setStatus(data.message);
    } catch {
      setStatus("connection failed");
    } finally {
      setloading(false);
    }
  };
  return (
    <main>
      <h1>FleatTrackPro</h1>
      <p>bckend connection {status}</p>
      <button onClick={handleTestConnection} disabled={loading}>
        {loading ? "Testiong..." : "Testing Api connection"}
      </button>
    </main>
  );
}
export default App;
