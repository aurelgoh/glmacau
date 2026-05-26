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

  const menus = [
    { name: "Home", icon: "🏠" },
    { name: "Withdraw", icon: "💳" },
    { name: "Mine", icon: "👤" },
    { name: "Recharge", icon: "▶️" },
    { name: "Maps", icon: "🗺️" },
  ];

  return (
    <div style={styles.page}>
      {/* TOP NAVBAR */}
      <div style={styles.navbar}>
        <div style={styles.leftNav}>
          <div style={styles.logoBox}>GL</div>
          <h2 style={styles.logoText}>GL Macau</h2>

          <div style={styles.menuWrap}>
            {menus.map((menu) => (
              <button
                key={menu.name}
                onClick={() => setActive(menu.name)}
                style={{
                  ...styles.navButton,
                  background:
                    active === menu.name
                      ? "rgba(145,88,255,0.25)"
                      : "transparent",
                  color:
                    active === menu.name ? "#b57cff" : "#9ca3af",
                }}
              >
                <span>{menu.icon}</span> {menu.name}
              </button>
            ))}
          </div>
        </div>

        <div style={styles.rightNav}>
          <div style={styles.balanceBox}>💵 $0</div>
          <div style={styles.avatar}>L</div>
        </div>
      </div>

      {/* WELCOME CARD */}
      <div style={styles.heroCard}>
        <div>
          <h1 style={styles.heroTitle}>
            Welcome to <span style={{ color: "#9b5cff" }}>GL Macau</span>
          </h1>
          <p style={styles.heroSub}>
            Choose your game and start winning!
          </p>
        </div>

        <div style={styles.heroImage}>🎮</div>
      </div>

      {/* GAME LIST */}
      <div style={styles.gameGrid}>
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
          game.number === 1 ? "#d16cff" :
          game.number === 2 ? "#34c3ff" :
          game.number === 3 ? "#ff9800" :
          game.number === 4 ? "#1affc6" :
          game.number === 5 ? "#ff5fa2" :
          game.number === 6 ? "#8a7cff" :
          "#ff5b5b",
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

      {/* INFO BAR */}
      <div style={styles.noticeBar}>
        🔔 Enjoy exciting games and win big. Recharge now to
        start playing!
      </div>
    </div>
  );
}

const styles = {
  page: {
    background: "#040b2d",
    minHeight: "100vh",
    color: "white",
    padding: "20px 50px",
    fontFamily: "Arial",
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    paddingBottom: 20,
  },

  leftNav: {
    display: "flex",
    alignItems: "center",
    gap: 20,
  },

  logoBox: {
    width: 60,
    height: 60,
    borderRadius: 20,
    background: "linear-gradient(135deg,#6d28d9,#9333ea)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 20,
    boxShadow: "0 0 30px rgba(145,88,255,.5)",
  },

  logoText: {
    color: "#b57cff",
  },

  menuWrap: {
    display: "flex",
    gap: 10,
    marginLeft: 20,
  },

  navButton: {
    border: "none",
    borderRadius: 14,
    padding: "12px 18px",
    cursor: "pointer",
    fontSize: 15,
  },

  rightNav: {
    display: "flex",
    alignItems: "center",
    gap: 16,
  },

  balanceBox: {
    background: "#0d4031",
    padding: "12px 20px",
    borderRadius: 20,
    color: "#34d399",
    fontWeight: "bold",
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    background: "linear-gradient(135deg,#8b5cf6,#6366f1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 20,
  },

  heroCard: {
    background: "linear-gradient(90deg,#24175d,#182963)",
    borderRadius: 30,
    padding: 30,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },

  heroTitle: {
    fontSize: 42,
    marginBottom: 8,
  },

  heroSub: {
    color: "#c4c4c4",
  },

  heroImage: {
    fontSize: 60,
  },

  gameGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: 20,
    marginBottom: 30,
  },

  gameCard: {
    borderRadius: 24,
    padding: 30,
    position: "relative",
    textAlign: "center",
    cursor: "pointer",
  },

  badge: {
    position: "absolute",
    right: 15,
    top: 15,
    background: "rgba(255,255,255,.2)",
    borderRadius: 10,
    padding: "4px 10px",
  },

  gameIcon: {
    fontSize: 42,
    marginBottom: 15,
  },

  bottomGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: 20,
    marginBottom: 20,
  },

  bottomCard: {
    background: "#0d153d",
    borderRadius: 24,
    padding: 30,
    textAlign: "center",
  },

  bottomIcon: {
    fontSize: 40,
    marginBottom: 10,
  },

  noticeBar: {
    background: "linear-gradient(90deg,#24175d,#182963)",
    borderRadius: 24,
    padding: 20,
    color: "#d1d5db",
  },},

gamesGrid: {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "18px",
  marginTop: "20px",
},

gameCard: {
  height: "180px",
  borderRadius: "22px",
  padding: "20px",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "inset 0 0 20px rgba(255,255,255,0.08)",
  cursor: "pointer",
},
  
diceCircle: {
  width: "90px",
  height: "90px",
  borderRadius: "50%",
  border: "4px solid",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "34px",
  background: "rgba(0,0,0,0.25)",
  marginBottom: "18px",
},
  gameTitle: {
  fontSize: "20px",
  fontWeight: "bold",
  color: "white",
},

numberBadge: {
  position: "absolute",
  top: "14px",
  right: "14px",
  width: "34px",
  height: "34px",
  borderRadius: "12px",
  background: "rgba(255,255,255,0.3)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  color: "white",
},
  
  innerDice: {
  width: "65px",
  height: "65px",
  borderRadius: "50%",
  background: "rgba(0,0,0,0.25)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "36px",
},

};
