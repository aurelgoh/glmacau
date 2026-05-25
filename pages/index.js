import { useState } from "react";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(true);

  const user = {
    username: "admin8",
    saldo: 10000,
  };

  if (!loggedIn) {
    return <h1>Loading...</h1>;
  }

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h2 style={styles.logo}>GL Macau</h2>

        <button style={styles.menuBtn}>🏠 Dashboard</button>
        <button style={styles.menuBtn}>🎰 Casino</button>
        <button style={styles.menuBtn}>💸 Deposit</button>
        <button style={styles.menuBtn}>📤 Withdraw</button>
        <button style={styles.menuBtn}>📜 History</button>
        <button style={styles.logoutBtn}>
          🚪 Logout
        </button>
      </div>

      {/* Main */}
      <div style={styles.main}>
        <div style={styles.topCard}>
          <div>
            <h1>Welcome {user.username} 👋</h1>
            <p>Premium Casino Dashboard</p>
          </div>

          <div style={styles.balanceBox}>
            <p>Balance</p>
            <h2>${user.saldo}</h2>
          </div>
        </div>

        <h2 style={{ marginBottom: 20 }}>Popular Games</h2>

        <div style={styles.games}>
          <div style={styles.gameCard}>
            <h3>🎱 GL5 Ball</h3>
            <p>Live prediction game</p>
          </div>

          <div style={styles.gameCard}>
            <h3>🎰 Slot</h3>
            <p>1000+ slot providers</p>
          </div>

          <div style={styles.gameCard}>
            <h3>🃏 Baccarat</h3>
            <p>Live casino table</p>
          </div>

          <div style={styles.gameCard}>
            <h3>🎲 Roulette</h3>
            <p>Real casino experience</p>
          </div>
        </div>

        <div style={styles.transaction}>
          <h2>Recent Transactions</h2>

          <div style={styles.row}>
            <span>Deposit</span>
            <span style={{ color: "#00ff88" }}>+$500</span>
          </div>

          <div style={styles.row}>
            <span>GL5 Ball Win</span>
            <span style={{ color: "#00ff88" }}>+$1200</span>
          </div>

          <div style={styles.row}>
            <span>Slot Lose</span>
            <span style={{ color: "red" }}>-$300</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    background: "#050A30",
    color: "white",
    fontFamily: "Arial",
  },

  sidebar: {
    width: "260px",
    background: "#101B50",
    padding: "30px 20px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    boxShadow: "0 0 20px rgba(140,82,255,0.2)",
  },

  logo: {
    color: "#8f5bff",
    marginBottom: "30px",
    fontSize: "30px",
  },

  menuBtn: {
    background: "#1C2A6B",
    border: "none",
    color: "white",
    padding: "16px",
    borderRadius: "14px",
    cursor: "pointer",
    textAlign: "left",
    fontSize: "16px",
  },

  logoutBtn: {
    background: "#ff3b5f",
    border: "none",
    color: "white",
    padding: "16px",
    borderRadius: "14px",
    cursor: "pointer",
    marginTop: "auto",
  },

  main: {
    flex: 1,
    padding: "40px",
  },

  topCard: {
    display: "flex",
    justifyContent: "space-between",
    background: "#101B50",
    padding: "30px",
    borderRadius: "20px",
    marginBottom: "30px",
  },

  balanceBox: {
    background:
      "linear-gradient(135deg, #8A2BE2, #4169E1)",
    padding: "20px 40px",
    borderRadius: "20px",
    textAlign: "center",
  },

  games: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },

  gameCard: {
    background: "#101B50",
    padding: "25px",
    borderRadius: "20px",
    cursor: "pointer",
  },

  transaction: {
    background: "#101B50",
    marginTop: "30px",
    padding: "25px",
    borderRadius: "20px",
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "15px",
  },
};
