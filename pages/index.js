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
        <div style={styles.logoArea}>
          <div style={styles.logo}>GL</div>
          <h2 style={styles.logoText}>GL Macau</h2>
        </div>

        <div style={styles.menu}>
          {["Home", "Withdraw", "Mine", "Recharge", "Maps"].map(
            (item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                style={{
                  ...styles.menuBtn,
                  background:
                    active === item
                      ? "rgba(153,90,255,0.25)"
                      : "transparent",
                }}
              >
                {item}
              </button>
            )
          )}
        </div>

        <div style={styles.rightMenu}>
          <div style={styles.balance}>💵 $0</div>
          <div style={styles.profile}>L</div>
        </div>
      </div>

      {/* HERO */}
      <div style={styles.hero}>
        <div>
          <h1 style={styles.title}>
            Welcome to <span style={styles.purple}>GL Macau</span>
          </h1>
          <p style={styles.subtitle}>
            Choose your game and start winning!
          </p>
        </div>

        <div style={styles.heroIcon}>🎮</div>
      </div>

      {/* GAME GRID */}
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
                borderColor:
                  game.number === 1
                    ? "#d16cff"
                    : game.number === 2
                    ? "#34c3ff"
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
        <div style={styles.bottomCard}>
          <div style={styles.bottomIcon}>💳</div>
          <h3>Withdraw</h3>
        </div>

        <div style={styles.bottomCard}>
          <div style={styles.bottomIcon}>👤</div>
          <h3>Mine</h3>
        </div>

        <div style={styles.bottomCard}>
          <div style={styles.bottomIcon}>💬</div>
          <h3>Customer Service</h3>
        </div>

        <div style={styles.bottomCard}>
          <div style={styles.bottomIcon}>🔔</div>
          <h3>Notify</h3>
        </div>
      </div>

      <div style={styles.notice}>
        🔔 Enjoy exciting games and win big.
        Recharge now to start playing!
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#040b2d",
    color: "white",
    padding: "30px 40px",
    fontFamily: "Arial",
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    paddingBottom: "20px",
  },

  logoArea: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },

  logo: {
    width: "60px",
    height: "60px",
    borderRadius: "18px",
    background:
      "linear-gradient(135deg,#6d28d9,#a855f7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "28px",
    boxShadow: "0 0 30px rgba(168,85,247,.5)",
  },

  logoText: {
    color: "#c084fc",
  },

  menu: {
    display: "flex",
    gap: "15px",
  },

  menuBtn: {
    border: "none",
    color: "white",
    padding: "12px 18px",
    borderRadius: "14px",
    cursor: "pointer",
    fontSize: "15px",
  },

  rightMenu: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
  },

  balance: {
    background: "#065f46",
    padding: "12px 20px",
    borderRadius: "20px",
    fontWeight: "bold",
  },

  profile: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background:
      "linear-gradient(135deg,#7c3aed,#8b5cf6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "22px",
  },

  hero: {
    marginTop: "35px",
    background:
      "linear-gradient(135deg,#26186d,#223a89)",
    borderRadius: "35px",
    padding: "50px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: "58px",
    marginBottom: "10px",
  },

  purple: {
    color: "#a855f7",
  },

  subtitle: {
    fontSize: "20px",
    opacity: 0.9,
  },

  heroIcon: {
    fontSize: "70px",
  },

  gamesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: "18px",
    marginTop: "35px",
  },

  gameCard: {
    height: "220px",
    borderRadius: "28px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },

  diceCircle: {
    width: "95px",
    height: "95px",
    borderRadius: "50%",
    border: "4px solid",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(0,0,0,.2)",
    fontSize: "40px",
    marginBottom: "20px",
  },

  gameTitle: {
    fontSize: "20px",
    fontWeight: "bold",
  },

  numberBadge: {
    position: "absolute",
    top: "14px",
    right: "14px",
    width: "34px",
    height: "34px",
    borderRadius: "12px",
    background: "rgba(255,255,255,.25)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },

  bottomGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: "18px",
    marginTop: "30px",
  },

  bottomCard: {
    background: "#10195a",
    borderRadius: "25px",
    height: "170px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  bottomIcon: {
    fontSize: "40px",
    marginBottom: "10px",
  },

  notice: {
    marginTop: "25px",
    background:
      "linear-gradient(90deg,#32216f,#223a89)",
    padding: "20px",
    borderRadius: "25px",
    fontSize: "18px",
  },
};
