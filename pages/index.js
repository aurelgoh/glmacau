import Link from "next/link";

const games = [
  { name: "GL5 Ball", color: "#7B2FF7", link: "/game" },
  { name: "Tencent 2 Ball", color: "#00C6FF", link: "/game" },
  { name: "Tencent Car", color: "#FF8C00", link: "/game" },
  { name: "Tencent of King", color: "#00FFB3", link: "/game" },
  { name: "Lucky 5D", color: "#FF4D8D", link: "/game" },
  { name: "GL Pick Up", color: "#7F7BFF", link: "/game" },
  { name: "GL Racer", color: "#FF4D4D", link: "/game" },
];

export default function Home() {
  return (
    <>
      <style jsx global>{`
        body {
          margin: 0;
          background: #020617;
          font-family: Arial;
        }

        * {
          box-sizing: border-box;
        }

        @media (max-width: 900px) {
          .desktop-menu {
            display: none !important;
          }

          .hero-title {
            font-size: 42px !important;
          }

          .game-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .container {
            padding: 15px !important;
          }
        }

        @media (min-width: 901px) {
          .game-grid {
            grid-template-columns: repeat(7, 1fr) !important;
          }
        }
      `}</style>

      <div
        style={{
          minHeight: "100vh",
          background:
            "radial-gradient(circle at top,#091540,#020617 70%)",
          color: "white",
        }}
      >
        {/* NAVBAR */}
        <div
          style={{
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(3,7,18,0.92)",
            position: "sticky",
            top: 0,
            zIndex: 1000,
            backdropFilter: "blur(10px)",
          }}
        >
          <div
            className="container"
            style={{
              maxWidth: "1500px",
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
                  fontWeight: "bold",
                  fontSize: "28px",
                  boxShadow:
                    "0 0 30px rgba(155,77,255,0.35)",
                }}
              >
                G
              </div>

              <h1
                style={{
                  margin: 0,
                  fontSize: "40px",
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
              className="desktop-menu"
              style={{
                display: "flex",
                gap: "28px",
                fontSize: "18px",
                color: "#B7C4FF",
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
          className="container"
          style={{
            maxWidth: "1500px",
            margin: "0 auto",
            padding: "30px",
          }}
        >
          {/* HERO */}
          <div
            style={{
              background:
                "linear-gradient(135deg,#5424A8,#233B8F)",
              borderRadius: "28px",
              padding: "35px",
              marginBottom: "25px",
            }}
          >
            <h1
              className="hero-title"
              style={{
                fontSize: "64px",
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              Welcome to{" "}
              <span style={{ color: "#D86BFF" }}>
                GL Macau
              </span>
            </h1>

            <p
              style={{
                color: "#D6D6D6",
                marginTop: "15px",
                fontSize: "22px",
              }}
            >
              Choose your game and start winning!
            </p>
          </div>

          {/* GAME GRID */}
          <div
            className="game-grid"
            style={{
              display: "grid",
              gap: "18px",
            }}
          >
            {games.map((game, index) => (
              <Link
                key={index}
                href={game.link}
                style={{
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    background: `linear-gradient(135deg,${game.color},#304FFE)`,
                    borderRadius: "22px",
                    minHeight: "160px",
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow:
                      "0 0 25px rgba(0,0,0,0.3)",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      width: "74px",
                      height: "74px",
                      borderRadius: "999px",
                      border:
                        "4px solid rgba(255,255,255,0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "34px",
                      marginBottom: "14px",
                    }}
                  >
                    🎲
                  </div>

                  <div
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    {game.name}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
