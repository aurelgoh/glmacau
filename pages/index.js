import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const games = [
    {
      title: "GL5 Ball",
      color: "linear-gradient(135deg,#9333ea,#4f46e5)",
      link: "/gl5ball",
      no: 1,
    },
    {
      title: "Tencent 2 Ball",
      color: "linear-gradient(135deg,#2563eb,#38bdf8)",
      link: "/tencent2ball",
      no: 2,
    },
    {
      title: "Tencent Car",
      color: "linear-gradient(135deg,#ea580c,#f59e0b)",
      link: "/tencent2ball",
      no: 3,
    },
    {
      title: "Tencent of King",
      color: "linear-gradient(135deg,#059669,#14b8a6)",
      link: "/tencent2ball",
      no: 4,
    },
    {
      title: "Lucky 5D",
      color: "linear-gradient(135deg,#db2777,#ec4899)",
      link: "/tencent2ball",
      no: 5,
    },
    {
      title: "GL Pick Up",
      color: "linear-gradient(135deg,#6366f1,#8b5cf6)",
      link: "/tencent2ball",
      no: 6,
    },
    {
      title: "GL Racer",
      color: "linear-gradient(135deg,#dc2626,#ef4444)",
      link: "/tencent2ball",
      no: 7,
    },
  ];

  const menus = [
    { title: "Withdraw", icon: "💳", link: "/withdraw" },
    { title: "Mine", icon: "👤", link: "/mine" },
    { title: "Recharge", icon: "💬", link: "/recharge" },
    { title: "Maps", icon: "🔔", link: "/maps" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom, #020617, #020b3d, #071a52)",
        color: "white",
        paddingBottom: "90px",
        fontFamily: "sans-serif",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          padding: "18px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 55,
              height: 55,
              borderRadius: 16,
              background:
                "linear-gradient(to bottom right,#7c3aed,#3b82f6)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
            GL
          </div>

          <h1 style={{ color: "#d946ef", fontSize: 18 }}>
            GL Macau
          </h1>
        </div>

        <div
          style={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            background:
              "linear-gradient(to bottom right,#8b5cf6,#a855f7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
          }}
        >
          L
        </div>
      </div>

      {/* WELCOME */}
      <div
        style={{
          margin: 18,
          borderRadius: 30,
          padding: 25,
          background:
            "linear-gradient(to bottom right,#4c1d95,#312e81)",
        }}
      >
        <h1
          style={{
            fontSize: 44,
            fontWeight: "bold",
            lineHeight: "50px",
          }}
        >
          Welcome
          <br />
          to <span style={{ color: "#d946ef" }}>GL</span>
          <br />
          <span style={{ color: "#d946ef" }}>Macau</span>
        </h1>

        <p
          style={{
            marginTop: 20,
            color: "#d1d5db",
            fontSize: 18,
          }}
        >
          Choose your game and start winning!
        </p>
      </div>

      {/* GAME GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: 16,
          padding: "0 18px",
        }}
      >
        {games.map((game) => (
          <div
            key={game.title}
            onClick={() => router.push(game.link)}
            style={{
              background: game.color,
              borderRadius: 25,
              padding: 18,
              minHeight: 160,
              cursor: "pointer",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                right: 14,
                top: 14,
                background: "rgba(255,255,255,0.25)",
                padding: "8px 12px",
                borderRadius: 14,
                fontWeight: "bold",
              }}
            >
              {game.no}
            </div>

            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                border: "4px solid rgba(255,255,255,0.4)",
                margin: "20px auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 38,
              }}
            >
              🎲
            </div>

            <h2
              style={{
                textAlign: "center",
                fontSize: 24,
                fontWeight: "bold",
              }}
            >
              {game.title}
            </h2>
          </div>
        ))}
      </div>

      {/* MENU */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 14,
          padding: 18,
        }}
      >
        {menus.map((item) => (
          <div
            key={item.title}
            onClick={() => router.push(item.link)}
            style={{
              background: "#09154a",
              borderRadius: 24,
              padding: 20,
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <div style={{ fontSize: 34 }}>{item.icon}</div>
            <p style={{ marginTop: 10 }}>{item.title}</p>
          </div>
        ))}
      </div>

      {/* BOTTOM NAV */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          background: "#020617",
          display: "flex",
          justifyContent: "space-around",
          padding: 15,
          borderTop: "1px solid rgba(255,255,255,.1)",
        }}
      >
        <div style={{ color: "#a855f7" }}>Home</div>
        <div onClick={() => router.push("/withdraw")}>
          Withdraw
        </div>
        <div onClick={() => router.push("/mine")}>Mine</div>
        <div onClick={() => router.push("/recharge")}>
          Recharge
        </div>
        <div onClick={() => router.push("/maps")}>Maps</div>
      </div>
    </div>
  );
}
