import styles from "./index.module.css";
import sqlLogo from "./assets/sql-server.png";
import { useState } from "react";
function App() {
  const [queryDesc, setQueryDesc] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted :", queryDesc);
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
      </form>
    </main>
  );
}

export default App;
