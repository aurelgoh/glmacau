import { useRouter } from "next/router";

export default function GL5Ball() {
  const router = useRouter();

  const games = [
    ["GL5 Ball", "#7B2FFF,#4D3DFF"],
    ["Tencent 2 Ball", "#1E63FF,#4CC9FF"],
    ["Tencent Car", "#FF7A00,#FF9F1C"],
    ["Tencent of King", "#00A86B,#24D6A5"],
    ["Lucky 5D", "#FF2D8D,#FF4FA3"],
    ["GL Pick Up", "#6C63FF,#8A7CFF"],
    ["GL Racer", "#FF3131,#FF4B4B"],
  ];

  return (
    <div
      style={{
        background:
          "linear-gradient(180deg,#020617,#071028,#0B1736)",
        minHeight: "100vh",
        color: "white",
        fontFamily: "sans-serif",
        paddingBottom: "90px",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 999,
          padding: "14px 16px",
          background: "rgba(5,10,30,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom:
            "1px solid rgba(255,255,255,0.05)",

          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
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

              boxShadow:
                "0 0 18px rgba(123,47,255,0.35)",
            }}
          >
            GL
          </div>

          <h2
            style={{
              margin: 0,
              color: "#D96CFF",
              fontSize: "20px",
            }}
          >
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

      {/* BANNER */}
      <div style={{ padding: "16px" }}>
        <div
          style={{
            borderRadius: "26px",
            padding: "28px",
            background:
              "linear-gradient(135deg,#5520B5,#3A2D91)",

            boxShadow:
              "0 0 25px rgba(123,47,255,0.25)",
          }}
        >
          <h1
            style={{
              margin: 0,
              lineHeight: 1.1,
              fontSize: "38px",
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
              opacity: 0.8,
              marginTop: "18px",
              fontSize: "15px",
            }}
          >
            Choose your game and start winning!
          </p>
        </div>
      </div>

      {/* GAME GRID */}
      <div
        style={{
          padding: "0 16px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "14px",
        }}
      >
        {games.map((game, index) => (
          <div
            key={index}
            style={{
              background: `linear-gradient(135deg,${game[1]})`,
              borderRadius: "24px",
              padding: "18px 12px",

              position: "relative",

              border:
                "1px solid rgba(255,255,255,0.08)",

              boxShadow:
                "0 0 22px rgba(255,255,255,0.08)",
            }}
          >
            {/* NUMBER */}
            <div
              style={{
                position: "absolute",
                top: "12px",
                right: "12px",

                width: "36px",
                height: "36px",

                borderRadius: "12px",

                background: "rgba(255,255,255,0.2)",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              {index + 1}
            </div>

            {/* ICON */}
            <div
              style={{
                width: "92px",
                height: "92px",
                borderRadius: "50%",

                border:
                  "5px solid rgba(255,255,255,0.25)",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                margin: "0 auto",

                fontSize: "42px",
              }}
            >
              🎲
            </div>

            {/* TITLE */}
            <h2
              style={{
                textAlign: "center",
                marginTop: "22px",
                marginBottom: "8px",
                fontSize: "18px",
              }}
            >
              {game[0]}
            </h2>
          </div>
        ))}
      </div>

      {/* NAVBAR */}
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

          padding: "10px 0",
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
              fontSize: "13px",
            }}
          >
            <div style={{ fontSize: "22px" }}>
              {item[0]}
            </div>

            <div>{item[1]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
