import styles from "./index.module.css";
import sqlLogo from "./assets/sql-server.png";
import { useState } from "react";
function App() {
  const [queryDesc, setQueryDesc] = useState("");
  const [generatedSql, setGeneratedSql] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const sqlQuery = await queryGenerator();
    setGeneratedSql(sqlQuery);
  };
  const queryGenerator = async () => {
    const response = await fetch("http://localhost:3005/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ queryDescription: queryDesc }),
    });
    const data = await response.json();
    return data.response.trim();
  };
  return (
    <main className={styles.main}>
      <img src={sqlLogo} alt="sql-logo" className={styles.icon} />
      <h3>Generate SQL with AI</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query-description"
          placeholder="Describe your query"
          onChange={(e) => setQueryDesc(e.target.value)}
        />

        <input type="submit" value="Generate query" />
        <pre>{generatedSql}</pre>
      </form>
    </main>
  );
}

export default App;
