import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState("Home");

  const games = [
    {
      title: "GL5 Ball",
      color: "linear-gradient(135deg,#662D91,#9B4DFF)",
      number: 1,
      border: "#d16cff",
    },
    {
      title: "Tencent 2 Ball",
      color: "linear-gradient(135deg,#2455ff,#46c0ff)",
      number: 2,
      border: "#34dcff",
    },
    {
      title: "Tencent Car",
      color: "linear-gradient(135deg,#8f4300,#ff9300)",
      number: 3,
      border: "#ff9800",
    },
    {
      title: "Tencent of King",
      color: "linear-gradient(135deg,#00795c,#00d8a0)",
      number: 4,
      border: "#1affc6",
    },
    {
      title: "Lucky 5D",
      color: "linear-gradient(135deg,#b1005c,#ff4fa2)",
      number: 5,
      border: "#ff5fa2",
    },
    {
      title: "GL Pick Up",
      color: "linear-gradient(135deg,#4b3cff,#8f7cff)",
      number: 6,
      border: "#8a7cff",
    },
    {
      title: "GL Racer",
      color: "linear-gradient(135deg,#9e1515,#ff4747)",
      number: 7,
      border: "#ff5b5b",
    },
  ];

  return (
    <div style={styles.page}>
      {/* NAVBAR */}
      <div style={styles.navbar}>
        <div style={styles.logoSection}>
          <div style={styles.logo}>GL</div>
          <h2 style={styles.logoText}>GL Macau</h2>
        </div>

        <div style={styles.balanceBox}>💵 $0</div>
      </div>

      {/* HERO */}
      <div style={styles.hero}>
        <div>
          <h1 style={styles.heroTitle}>
            Welcome to <span style={{ color: "#b15eff" }}>GL Macau</span>
          </h1>
          <p style={styles.heroText}>
            Choose your game and start winning!
          </p>
        </div>

        <div style={styles.heroIcon}>🎮</div>
      </div>

      {/* GAME LIST */}
      <div style={styles.gamesGrid}>
        {games.map((game) => (
          <div
            key={game.title}
            style={{
              ...styles.gameCard,
              background: game.color,
            }}
          >
            <div style={styles.numberBadge}>
              {game.number}
            </div>

            <div
              style={{
                ...styles.diceCircle,
                border: `4px solid ${game.border}`,
              }}
            >
              🎲
            </div>

            <div style={styles.gameTitle}>
              {game.title}
            </div>
          </div>
        ))}
      </div>

      {/* MENU */}
      <div style={styles.bottomGrid}>
        <div style={styles.bottomCard}>
          💳
          <p>Withdraw</p>
        </div>

        <div style={styles.bottomCard}>
          👤
          <p>Mine</p>
        </div>

        <div style={styles.bottomCard}>
          💬
          <p>Customer Service</p>
        </div>

        <div style={styles.bottomCard}>
          🔔
          <p>Notify</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    background: "#040b2d",
    minHeight: "100vh",
    color: "white",
    padding: "20px",
    fontFamily: "Arial",
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "25px",
    flexWrap: "wrap",
    gap: "12px",
  },

  logoSection: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  logo: {
    width: "55px",
    height: "55px",
    borderRadius: "18px",
    background: "linear-gradient(135deg,#6f2cff,#b15eff)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "24px",
  },

  logoText: {
    color: "#c26cff",
    margin: 0,
  },

  balanceBox: {
    background: "#009d62",
    padding: "12px 18px",
    borderRadius: "18px",
    fontWeight: "bold",
  },

  hero: {
    background:
      "linear-gradient(135deg,#24156f,#26398d)",
    borderRadius: "30px",
    padding: "35px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
    flexWrap: "wrap",
    gap: "20px",
  },

  heroTitle: {
    fontSize: "48px",
    marginBottom: "10px",
  },

  heroText: {
    color: "#ddd",
  },

  heroIcon: {
    fontSize: "70px",
  },

  gamesGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "18px",
  },

  gameCard: {
    borderRadius: "28px",
    padding: "24px",
    textAlign: "center",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    minHeight: "220px",
    justifyContent: "center",
  },

  diceCircle: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "42px",
    background: "rgba(0,0,0,0.2)",
    marginBottom: "18px",
  },

  gameTitle: {
    fontWeight: "bold",
    fontSize: "28px",
  },

  numberBadge: {
    position: "absolute",
    top: "14px",
    right: "14px",
    width: "36px",
    height: "36px",
    borderRadius: "12px",
    background: "rgba(255,255,255,0.25)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },

  bottomGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "18px",
    marginTop: "25px",
  },

  bottomCard: {
    background: "#101c62",
    borderRadius: "25px",
    padding: "35px",
    textAlign: "center",
    fontSize: "40px",
    fontWeight: "bold",
  },
};
