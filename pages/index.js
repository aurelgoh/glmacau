export default function Home() {
  const games = [
    "GL5 Ball",
    "Tencent 2 Ball",
    "Tencent Car",
    "Tencent of King",
    "Lucky 5D",
    "GL Pick Up",
    "GL Racer",
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050B2E",
        color: "white",
        fontFamily: "sans-serif",
        paddingBottom: "100px",
      }}
    >
      <div
        style={{
          padding: "15px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#07103A",
          borderBottom:
            "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "14px",
              background:
                "linear-gradient(135deg,#7B2FFF,#5EA8FF)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: "22px",
            }}
          >
            GL
          </div>

          <h2 style={{ color: "#D96CFF" }}>
            GL Macau
          </h2>
        </div>

        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background:
              "linear-gradient(135deg,#7B2FFF,#D96CFF)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          L
        </div>
      </div>

      <div style={{ padding: "15px" }}>
        <div
          style={{
            borderRadius: "26px",
            padding: "28px",
            background:
              "linear-gradient(135deg,#5520B5,#3A2D91)",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "42px",
              lineHeight: 1.1,
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

          <p style={{ marginTop: "16px", opacity: 0.8 }}>
            Choose your game and start winning!
          </p>
        </div>
      </div>

      <div
        style={{
          padding: "15px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px",
        }}
      >
        {games.map((game, index) => (
          <div
            key={index}
            style={{
              borderRadius: "24px",
              padding: "18px",
              position: "relative",

              background:
                index % 2 === 0
                  ? "linear-gradient(135deg,#7B2FFF,#4D3DFF)"
                  : "linear-gradient(135deg,#1E63FF,#4CC9FF)",

              border:
                "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                width: "34px",
                height: "34px",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.2)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
              }}
            >
              {index + 1}
            </div>

            <div
              style={{
                width: "85px",
                height: "85px",
                borderRadius: "50%",
                border:
                  "5px solid rgba(255,255,255,0.25)",

                margin: "0 auto",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                fontSize: "40px",
              }}
            >
              🎲
            </div>

            <h2
              style={{
                textAlign: "center",
                marginTop: "18px",
                fontSize: "18px",
              }}
            >
              {game}
            </h2>
          </div>
        ))}
      </div>

      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "#020617",
          display: "flex",
          justifyContent: "space-around",
          padding: "12px 0",
          borderTop:
            "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {[
          "Home",
          "Withdraw",
          "Mine",
          "Recharge",
          "Maps",
        ].map((item, index) => (
          <div
            key={index}
            style={{
              textAlign: "center",
              color:
                index === 0 ? "#B26BFF" : "white",
              fontSize: "13px",
            }}
          >
            <div style={{ fontSize: "22px" }}>
              {index === 0
                ? "⌂"
                : index === 1
                ? "💳"
                : index === 2
                ? "👤"
                : index === 3
                ? "▶"
                : "🗺"}
            </div>

            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
