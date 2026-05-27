import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const games = [
    {
      name: "GL5 Ball",
      color: "linear-gradient(135deg,#5b1d8d,#1d2d7a)",
      badge: 1,
    },
    {
      name: "Tencent 2 Ball",
      color: "linear-gradient(135deg,#1a3d8f,#0d5ea8)",
      badge: 2,
    },
    {
      name: "Tencent Car",
      color: "linear-gradient(135deg,#6b2d10,#b86b00)",
      badge: 3,
    },
    {
      name: "Tencent of King",
      color: "linear-gradient(135deg,#004d40,#00695c)",
      badge: 4,
    },
    {
      name: "Lucky 5D",
      color: "linear-gradient(135deg,#6a114d,#b0005a)",
      badge: 5,
    },
    {
      name: "GL Pick Up",
      color: "linear-gradient(135deg,#312e81,#4338ca)",
      badge: 6,
    },
    {
      name: "GL Racer",
      color: "linear-gradient(135deg,#5f2120,#9f1239)",
      badge: 7,
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg,#020617 0%, #020b2d 50%, #030712 100%)",
        color: "white",
        fontFamily: "Arial",
        paddingBottom: "100px",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          height: "75px",
          background: "#050816",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 18px",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "14px",
              background: "linear-gradient(135deg,#7c3aed,#4338ca)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: "24px",
              boxShadow: "0 0 20px rgba(124,58,237,0.5)",
            }}
          >
            G
          </div>

          <h2
            style={{
              margin: 0,
              color: "#d8b4fe",
              fontSize: "20px",
            }}
          >
            GL Macau
          </h2>
        </div>

        <div
          style={{
            width: "45px",
            height: "45px",
            borderRadius: "50%",
            background: "linear-gradient(135deg,#8b5cf6,#6366f1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          G
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ padding: "16px" }}>
        <div
          style={{
            background:
              "linear-gradient(135deg,rgba(91,33,182,0.5),rgba(30,41,59,0.8))",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "24px",
            overflow: "hidden",
          }}
        >
          {/* TOP */}
          <div
            style={{
              padding: "20px",
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <div
              style={{
                width: "58px",
                height: "58px",
                borderRadius: "18px",
                background: "linear-gradient(135deg,#8b5cf6,#6366f1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "22px",
                boxShadow: "0 0 25px rgba(139,92,246,0.5)",
              }}
            >
              🎮
            </div>

            <div>
              <h2 style={{ margin: 0 }}>Welcome to GL Macau</h2>

              <p
                style={{
                  marginTop: "6px",
                  color: "#cbd5e1",
                  fontSize: "14px",
                }}
              >
                Choose your game and start winning!
              </p>
            </div>
          </div>

          {/* GAME GRID */}
          <div
            style={{
              padding: "16px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "14px",
            }}
          >
            {games.map((game) => (
              <div
                key={game.name}
                onClick={() =>
                  router.push(
                    `/game?name=${encodeURIComponent(game.name)}`
                  )
                }
                style={{
                  position: "relative",
                  height: "120px",
                  borderRadius: "20px",
                  background: game.color,
                  cursor: "pointer",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
<div
  style={{
    width: "52px",
    height: "52px",
    borderRadius: "50%",
    border: "3px solid rgba(255,255,255,0.7)",
    marginBottom: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(6px)",
    boxShadow: "0 0 18px rgba(255,255,255,0.25)",
    fontSize: "18px",
  }}
>
  🎮
</div>

                <span
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: "15px",
                  }}
                >
                  {game.name}
                </span>

                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    width: "26px",
                    height: "26px",
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  {game.badge}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MENU */}
        <div
          style={{
            marginTop: "20px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "14px",
          }}
        >
          {["Withdraw", "Mine", "Customer Service", "Notify"].map((item) => (
            <div
              key={item}
              style={{
                height: "110px",
                background: "rgba(15,23,42,0.9)",
                borderRadius: "22px",
                border: "1px solid rgba(255,255,255,0.06)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  background: "rgba(139,92,246,0.2)",
                }}
              ></div>

              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* INFO */}
        <div
          style={{
            marginTop: "20px",
            background: "rgba(91,33,182,0.25)",
            borderRadius: "20px",
            padding: "18px",
            color: "#ddd6fe",
          }}
        >
          Enjoy exciting games and win big. Recharge now to start
          playing!
        </div>
      </div>

      {/* BOTTOM NAV */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: "72px",
          background: "#050816",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          color: "#cbd5e1",
          fontSize: "13px",
        }}
      >
        <div style={{ color: "#c084fc" }}>Home</div>
        <div>Withdraw</div>
        <div>Mine</div>
        <div>Recharge</div>
        <div>Maps</div>
      </div>
    </div>
  );
}
