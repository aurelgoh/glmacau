import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const games = [
    {
      name: "GL5 Ball",
      color: "#7c3aed",
    },
    {
      name: "Tencent 2 Ball",
      color: "#2563eb",
    },
    {
      name: "Tencent Car",
      color: "#ea580c",
    },
    {
      name: "Tencent of King",
      color: "#059669",
    },
    {
      name: "Lucky 5D",
      color: "#db2777",
    },
    {
      name: "GL Pick Up",
      color: "#6366f1",
    },
    {
      name: "GL Racer",
      color: "#dc2626",
    },
  ];

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
      `}</style>

      <div
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(to bottom,#020617,#020b3f)",
          color: "white",
        }}
      >
        {/* TOPBAR */}
        <div
          style={{
            height: 70,
            borderBottom: "1px solid rgba(255,255,255,.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 20px",
            position: "sticky",
            top: 0,
            background: "#020617",
            zIndex: 999,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                width: 50,
                height: 50,
                borderRadius: 14,
                background:
                  "linear-gradient(135deg,#7c3aed,#2563eb)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 28,
                fontWeight: "bold",
              }}
            >
              G
            </div>

            <div
              style={{
                fontSize: 22,
                fontWeight: "bold",
              }}
            >
              GL Macau
            </div>
          </div>

          <div
            style={{
              width: 45,
              height: 45,
              borderRadius: "50%",
              background:
                "linear-gradient(135deg,#a855f7,#6366f1)",
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
        <div
          style={{
            width: "100%",
            maxWidth: 1400,
            margin: "0 auto",
            padding: 20,
          }}
        >
          {/* WELCOME */}
          <div
            style={{
              background:
                "linear-gradient(135deg,#4c1d95,#172554)",
              borderRadius: 25,
              padding: 30,
              marginBottom: 25,
            }}
          >
            <h1
              style={{
                fontSize: 45,
                margin: 0,
              }}
            >
              Welcome to GL Macau
            </h1>

            <p
              style={{
                color: "#cbd5e1",
                marginTop: 10,
                fontSize: 18,
              }}
            >
              Choose your game and start winning!
            </p>
          </div>

          {/* GAMES */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(180px,1fr))",
              gap: 20,
            }}
          >
            {games.map((game, index) => (
              <div
                key={index}
                onClick={() =>
                  router.push(
                    `/game?name=${encodeURIComponent(
                      game.name
                    )}`
                  )
                }
                style={{
                  background: `linear-gradient(135deg,${game.color},#1e293b)`,
                  borderRadius: 24,
                  padding: 25,
                  cursor: "pointer",
                  transition: ".2s",
                }}
              >
                <div
                  style={{
                    width: 90,
                    height: 90,
                    borderRadius: "50%",
                    border: "4px solid rgba(255,255,255,.5)",
                    margin: "0 auto 20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 38,
                  }}
                >
                  🎲
                </div>

                <div
                  style={{
                    textAlign: "center",
                    fontSize: 26,
                    fontWeight: "bold",
                  }}
                >
                  {game.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
