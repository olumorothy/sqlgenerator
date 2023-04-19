import styles from "./index.module.css";
import sqlLogo from "./assets/sql-server.png";
function App() {
  return (
    <main className={styles.main}>
      <img src={sqlLogo} alt="sql-logo" className={styles.icon} />
      <h3>Generate SQL with AI</h3>

      <form>
        <input
          type="text"
          name="query-description"
          placeholder="Describe your query"
        />
        <input type="submit" value="Generate query" />
      </form>
    </main>
  );
}

export default App;
