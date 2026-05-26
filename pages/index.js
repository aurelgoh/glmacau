import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState("Home");

  const games = [
    {
      title: "GL5 Ball",
      color: "linear-gradient(135deg,#662D91,#8E44FF)",
      number: 1,
    },
    {
      title: "Tencent 2 Ball",
      color: "linear-gradient(135deg,#1B4FFF,#34C3FF)",
      number: 2,
    },
    {
      title: "Tencent Car",
      color: "linear-gradient(135deg,#8A3D00,#FF8C1A)",
      number: 3,
    },
    {
      title: "Tencent of King",
      color: "linear-gradient(135deg,#00664D,#00D49C)",
      number: 4,
    },
    {
      title: "Lucky 5D",
      color: "linear-gradient(135deg,#8B004B,#FF4F9D)",
      number: 5,
    },
    {
      title: "GL Pick Up",
      color: "linear-gradient(135deg,#4136D6,#8B7CFF)",
      number: 6,
    },
    {
      title: "GL Racer",
      color: "linear-gradient(135deg,#6E1010,#FF4A4A)",
      number: 7,
    },
  ];

  return (
    <div style={styles.page}>
      {/* NAVBAR */}
      <div style={styles.navbar}>
        <div style={styles.logoWrap}>
          <div style={styles.logo}>GL</div>
          <h2 style={styles.logoText}>GL Macau</h2>
        </div>

        <div style={styles.menu}>
          {["Home", "Withdraw", "Mine", "Recharge", "Maps"].map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              style={{
                ...styles.menuBtn,
                background:
                  active === item
                    ? "rgba(142,68,255,0.3)"
                    : "transparent",
              }}
            >
              {item}
            </button>
          ))}
        </div>

        <div style={styles.profileWrap}>
          <div style={styles.balance}>💵 $0</div>
          <div style={styles.avatar}>L</div>
        </div>
      </div>

      {/* WELCOME */}
      <div style={styles.banner}>
        <div>
          <h1 style={styles.title}>
            Welcome to <span style={styles.glText}>GL Macau</span>
          </h1>
          <p>Choose your game and start winning!</p>
        </div>

        <div style={styles.controller}>🎮</div>
      </div>

      {/* GAME LIST */}
      <div style={styles.gamesGrid}>
        {games.map((game) => (
          <div
            key={game.title}
            onClick={() => alert(`${game.title} clicked`)}
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
                borderColor:
                  game.number === 1
                    ? "#d16cff"
                    : game.number === 2
                    ? "#34cdff"
                    : game.number === 3
                    ? "#ff9800"
                    : game.number === 4
                    ? "#1affc6"
                    : game.number === 5
                    ? "#ff5fa2"
                    : game.number === 6
                    ? "#8a7cff"
                    : "#ff5b5b",
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

      {/* MENU BOX */}
      <div style={styles.bottomGrid}>
        {[
          "Withdraw",
          "Mine",
          "Customer Service",
          "Notify",
        ].map((item) => (
          <div
            key={item}
            onClick={() => alert(item)}
            style={styles.bottomCard}
          >
            <div style={styles.bottomIcon}>
              {item === "Withdraw"
                ? "💳"
                : item === "Mine"
                ? "👤"
                : item === "Customer Service"
                ? "💬"
                : "🔔"}
            </div>

            <h3>{item}</h3>
          </div>
        ))}
      </div>

      <div style={styles.footer}>
        🔔 Enjoy exciting games and win big.
        Recharge now to start playing!
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
    flexWrap: "wrap",
    gap: "15px",
    marginBottom: "20px",
  },

  logoWrap: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  logo: {
    width: "60px",
    height: "60px",
    borderRadius: "20px",
    background:
      "linear-gradient(135deg,#7b2ff7,#b14cff)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "22px",
  },

  logoText: {
    color: "#cc77ff",
  },

  menu: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },

  menuBtn: {
    border: "none",
    color: "white",
    padding: "12px 18px",
    borderRadius: "14px",
    cursor: "pointer",
  },

  profileWrap: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
  },

  balance: {
    background: "#0c6a43",
    padding: "12px 16px",
    borderRadius: "16px",
    fontWeight: "bold",
  },

  avatar: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background: "#8E44FF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },

  banner: {
    background:
      "linear-gradient(135deg,#2d1b73,#243b84)",
    borderRadius: "35px",
    padding: "35px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
  },

  title: {
    fontSize: "48px",
  },

  glText: {
    color: "#bb6cff",
  },

  controller: {
    fontSize: "60px",
  },

  gamesGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(180px,1fr))",
    gap: "20px",
  },

  gameCard: {
    borderRadius: "28px",
    padding: "25px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    minHeight: "220px",
  },

  diceCircle: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    border: "4px solid",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "42px",
    background: "rgba(0,0,0,0.2)",
    marginBottom: "20px",
  },

  gameTitle: {
    fontWeight: "bold",
    fontSize: "24px",
    textAlign: "center",
  },

  numberBadge: {
    position: "absolute",
    top: "15px",
    right: "15px",
    width: "38px",
    height: "38px",
    borderRadius: "12px",
    background: "rgba(255,255,255,0.2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },

  bottomGrid: {
    marginTop: "25px",
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(180px,1fr))",
    gap: "20px",
  },

  bottomCard: {
    background: "#101c5d",
    borderRadius: "30px",
    minHeight: "150px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },

  bottomIcon: {
    fontSize: "42px",
    marginBottom: "10px",
  },

  footer: {
    marginTop: "25px",
    background: "#2a2375",
    padding: "18px",
    borderRadius: "20px",
  },
};
