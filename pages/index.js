import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState("Home");

  const games = [
    {
      title: "GL5 Ball",
      color: "linear-gradient(135deg,#6A1B9A,#9C4DFF)",
      link: "/gl5ball",
      emoji: "🎲",
    },
    {
      title: "Tencent 2 Ball",
      color: "linear-gradient(135deg,#0057FF,#3EC6FF)",
      link: "/tencent2ball",
      emoji: "🎲",
    },
    {
      title: "Tencent Car",
      color: "linear-gradient(135deg,#A64B00,#FF9800)",
      link: "/tencentcar",
      emoji: "🚗",
    },
    {
      title: "Tencent of King",
      color: "linear-gradient(135deg,#00796B,#00D9A5)",
      link: "/king",
      emoji: "👑",
    },
    {
      title: "Lucky 5D",
      color: "linear-gradient(135deg,#A0005A,#FF5BA6)",
      link: "/lucky5d",
      emoji: "🎰",
    },
    {
      title: "GL Pick Up",
      color: "linear-gradient(135deg,#4E3CFF,#8F82FF)",
      link: "/pickup",
      emoji: "🚚",
    },
  ];

  const menu = [
    { name: "Home", link: "/" },
    { name: "Withdraw", link: "/withdraw" },
    { name: "Mine", link: "/mine" },
    { name: "Recharge", link: "/recharge" },
    { name: "Maps", link: "/maps" },
  ];

  return (
    <div style={styles.page}>
      {/* NAVBAR */}
      <div style={styles.navbar}>
        <div style={styles.logoWrap}>
          <div style={styles.logo}>GL</div>
          <div>
            <h2 style={styles.logoText}>GL Macau</h2>
          </div>
        </div>

        <div style={styles.balance}>💰 $0.00</div>
      </div>

      {/* MENU */}
      <div style={styles.menuWrap}>
        {menu.map((item) => (
          <button
            key={item.name}
            style={{
              ...styles.menuButton,
              background:
                active === item.name
                  ? "#8e44ff"
                  : "rgba(255,255,255,0.08)",
            }}
            onClick={() => {
              setActive(item.name);
              window.location.href = item.link;
            }}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* BANNER */}
      <div style={styles.banner}>
        <div>
          <h1 style={styles.title}>
            Welcome to <span style={{ color: "#b56cff" }}>GL Macau</span>
          </h1>
          <p style={styles.subtitle}>
            Choose your game and start winning!
          </p>
        </div>

        <div style={styles.bannerEmoji}>🎮</div>
      </div>

      {/* GAMES */}
      <div style={styles.gamesGrid}>
        {games.map((game) => (
          <div
            key={game.title}
            style={{
              ...styles.gameCard,
              background: game.color,
            }}
            onClick={() =>
              (window.location.href = game.link)
            }
          >
            <div style={styles.circle}>
              {game.emoji}
            </div>

            <div style={styles.gameTitle}>
              {game.title}
            </div>
          </div>
        ))}
      </div>

      {/* BOTTOM MENU */}
      <div style={styles.bottomGrid}>
        <div
          style={styles.bottomCard}
          onClick={() =>
            (window.location.href = "/withdraw")
          }
        >
          💸
          <p>Withdraw</p>
        </div>

        <div
          style={styles.bottomCard}
          onClick={() =>
            (window.location.href = "/mine")
          }
        >
          👤
          <p>Mine</p>
        </div>

        <div
          style={styles.bottomCard}
          onClick={() =>
            (window.location.href = "/recharge")
          }
        >
          💳
          <p>Recharge</p>
        </div>

        <div
          style={styles.bottomCard}
          onClick={() =>
            (window.location.href = "/maps")
          }
        >
          🗺️
          <p>Maps</p>
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
    padding: "14px",
    fontFamily: "Arial",
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "14px",
  },

  logoWrap: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  logo: {
    width: "50px",
    height: "50px",
    borderRadius: "16px",
    background:
      "linear-gradient(135deg,#7d2cff,#bb65ff)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "20px",
  },

  logoText: {
    margin: 0,
    color: "#d27aff",
  },

  balance: {
    background: "#008d57",
    padding: "10px 14px",
    borderRadius: "14px",
    fontWeight: "bold",
  },

  menuWrap: {
    display: "flex",
    gap: "8px",
    overflowX: "auto",
    marginBottom: "16px",
  },

  menuButton: {
    border: "none",
    color: "white",
    padding: "10px 14px",
    borderRadius: "14px",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },

  banner: {
    background:
      "linear-gradient(135deg,#2b1d73,#2f4c97)",
    borderRadius: "26px",
    padding: "24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "18px",
  },

  title: {
    fontSize: "28px",
    marginBottom: "8px",
  },

  subtitle: {
    color: "#ddd",
  },

  bannerEmoji: {
    fontSize: "50px",
  },

  gamesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: "12px",
  },

  gameCard: {
    borderRadius: "22px",
    minHeight: "150px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    padding: "14px",
  },

  circle: {
    width: "68px",
    height: "68px",
    borderRadius: "50%",
    border: "3px solid rgba(255,255,255,0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "30px",
    marginBottom: "12px",
    background: "rgba(0,0,0,0.15)",
  },

  gameTitle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "15px",
  },

  bottomGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: "10px",
    marginTop: "16px",
  },

  bottomCard: {
    background: "#101c5d",
    borderRadius: "18px",
    padding: "14px 8px",
    textAlign: "center",
    cursor: "pointer",
    fontSize: "14px",
  },
};
