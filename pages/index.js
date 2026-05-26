import Link from "next/link";

const games = [
  { name: "GL5 Ball", color: "#7B2FF7", link: "/gl5ball" },
  { name: "Tencent 2 Ball", color: "#00C6FF", link: "/tencent2" },
  { name: "Tencent Car", color: "#FF8C00", link: "/tencentcar" },
  { name: "Tencent of King", color: "#00FFB3", link: "/king" },
  { name: "Lucky 5D", color: "#FF4D8D", link: "/lucky5d" },
  { name: "GL Pick Up", color: "#7F7BFF", link: "/pickup" },
  { name: "GL Racer", color: "#FF4D4D", link: "/racer" },
];

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top,#091540,#020617 70%)",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      {/* NAVBAR */}
      <div
        style={{
          width: "100%",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(10px)",
          background: "rgba(5,10,30,0.88)",
          position: "sticky",
          top: 0,
          zIndex: 999,
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "18px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <div
              style={{
                width: "54px",
                height: "54px",
                borderRadius: "16px",
                background:
                  "linear-gradient(135deg,#9B4DFF,#4F8CFF)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
                fontWeight: "bold",
                boxShadow: "0 0 25px rgba(155,77,255,0.35)",
              }}
            >
              G
            </div>

            <h1
              style={{
                fontSize: "42px",
                margin: 0,
                background:
                  "linear-gradient(90deg,#C86BFF,#6EA8FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              GL Macau
            </h1>
          </div>

          <div
            style={{
              display: "flex",
              gap: "18px",
              fontSize: "20px",
              color: "#B6C2FF",
            }}
          >
            <span>Home</span>
            <span>Withdraw</span>
            <span>Mine</span>
            <span>Recharge</span>
            <span>Maps</span>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "40px 24px",
        }}
      >
        {/* HERO */}
        <div
          style={{
            background:
              "linear-gradient(135deg,#5424A8,#233B8F)",
            borderRadius: "30px",
            padding: "50px",
            marginBottom: "35px",
          }}
        >
          <h1
            style={{
              fontSize: "72px",
              lineHeight: 1.1,
              marginBottom: "20px",
            }}
          >
            Welcome to{" "}
            <span style={{ color: "#D86BFF" }}>
              GL Macau
            </span>
          </h1>

          <p
            style={{
              fontSize: "28px",
              color: "#D8D8D8",
            }}
          >
            Choose your game and start winning!
          </p>
        </div>

        {/* GAME GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(260px,1fr))",
            gap: "26px",
          }}
        >
          {games.map((game, index) => (
            <Link
              href={game.link}
              key={index}
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  background: `linear-gradient(135deg,${game.color},#3D63FF)`,
                  borderRadius: "28px",
                  padding: "40px 20px",
                  minHeight: "260px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  transition: "0.3s",
                  boxShadow:
                    "0 0 30px rgba(0,0,0,0.35)",
                }}
              >
                <div
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "999px",
                    border:
                      "6px solid rgba(255,255,255,0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "58px",
                    marginBottom: "28px",
                  }}
                >
                  🎲
                </div>

                <h2
                  style={{
                    fontSize: "38px",
                    textAlign: "center",
                    margin: 0,
                    color: "white",
                  }}
                >
                  {game.name}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
