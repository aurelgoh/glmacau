import { useRouter } from "next/router";

export default function GL5Ball() {
  const router = useRouter();

  const games = [
    {
      name: "GL5 Ball",
      color: "linear-gradient(135deg,#7B2FFF,#4D3DFF)",
      glow: "0 0 25px rgba(123,47,255,0.35)",
      id: 1,
    },
    {
      name: "Tencent 2 Ball",
      color: "linear-gradient(135deg,#1E63FF,#4CC9FF)",
      glow: "0 0 25px rgba(76,201,255,0.35)",
      id: 2,
    },
    {
      name: "Tencent Car",
      color: "linear-gradient(135deg,#FF7A00,#FF9F1C)",
      glow: "0 0 25px rgba(255,122,0,0.35)",
      id: 3,
    },
    {
      name: "Tencent of King",
      color: "linear-gradient(135deg,#00A86B,#24D6A5)",
      glow: "0 0 25px rgba(36,214,165,0.35)",
      id: 4,
    },
    {
      name: "Lucky 5D",
      color: "linear-gradient(135deg,#FF2D8D,#FF4FA3)",
      glow: "0 0 25px rgba(255,45,141,0.35)",
      id: 5,
    },
    {
      name: "GL Pick Up",
      color: "linear-gradient(135deg,#6C63FF,#8A7CFF)",
      glow: "0 0 25px rgba(138,124,255,0.35)",
      id: 6,
    },
    {
      name: "GL Racer",
      color: "linear-gradient(135deg,#FF3131,#FF4B4B)",
      glow: "0 0 25px rgba(255,49,49,0.35)",
      id: 7,
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg,#020617,#071028,#0B1736)",
        color: "white",
        fontFamily: "sans-serif",
        paddingBottom: "120px",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 999,
          backdropFilter: "blur(12px)",
          background: "rgba(5,10,30,0.88)",
          borderBottom:
            "1px solid rgba(255,255,255,0.05)",
          padding: "18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "58px",
              height: "58px",
              borderRadius: "18px",
              background:
                "linear-gradient(135deg,#7B2FFF,#5EA8FF)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: "22px",
              boxShadow:
                "0 0 20px rgba(123,47,255,0.35)",
            }}
          >
            GL
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "22px",
              color: "#D36BFF",
            }}
          >
            GL Macau
          </h1>
        </div>

        <div
          style={{
            width: "55px",
            height: "55px",
            borderRadius: "50%",
            background:
              "linear-gradient(135deg,#7B2FFF,#D36BFF)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: "24px",
            boxShadow:
              "0 0 20px rgba(211,107,255,0.4)",
          }}
        >
          L
        </div>
      </div>

      {/* WELCOME */}
      <div style={{ padding: "18px" }}>
        <div
          style={{
            borderRadius: "30px",
            padding: "40px 30px",
            background:
              "linear-gradient(135deg,#5520B5,#3A2D91)",
            boxShadow:
              "0 0 30px rgba(123,47,255,0.25)",
          }}
        >
          <h1
            style={{
              fontSize: "64px",
              lineHeight: 1,
              margin: 0,
              fontWeight: "bold",
            }}
          >
            Welcome
            <br />
            to{" "}
            <span style={{ color: "#E056FD" }}>
              GL
            </span>
            <br />
            <span style={{ color: "#E056FD" }}>
              Macau
            </span>
          </h1>

          <p
            style={{
              marginTop: "30px",
              fontSize: "18px",
              opacity: 0.8,
            }}
          >
            Choose your game and start winning!
          </p>
        </div>
      </div>

      {/* GAME GRID */}
      <div
        style={{
          padding: "0 18px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
        }}
      >
        {games.map((game) => (
          <div
            key={game.id}
            style={{
              background: game.color,
              borderRadius: "32px",
              padding: "25px 15px",
              position: "relative",
              boxShadow: game.glow,
              border:
                "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                width: "48px",
                height: "48px",
                borderRadius: "16px",
                background: "rgba(255,255,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              {game.id}
            </div>

            <div
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                border:
                  "6px solid rgba(255,255,255,0.25)",
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "55px",
              }}
            >
              🎲
            </div>

            <h2
              style={{
                textAlign: "center",
                marginTop: "35px",
                fontSize: "28px",
              }}
            >
              {game.name}
            </h2>
          </div>
        ))}
      </div>

      {/* BOTTOM NAVBAR */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "rgba(2,6,23,0.96)",
          backdropFilter: "blur(12px)",
          borderTop:
            "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          justifyContent: "space-around",
          padding: "14px 0",
          zIndex: 999,
        }}
      >
        {[
          ["⌂", "Home"],
          ["💳", "Withdraw"],
          ["👤", "Mine"],
          ["▶", "Recharge"],
          ["🗺", "Maps"],
        ].map((item, index) => (
          <div
            key={index}
            style={{
              textAlign: "center",
              color:
                index === 0 ? "#B26BFF" : "white",
              fontSize: "15px",
            }}
          >
            <div style={{ fontSize: "24px" }}>
              {item[0]}
            </div>

            <div style={{ marginTop: "5px" }}>
              {item[1]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
