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
            height: 80,
            borderBottom:
              "1px solid rgba(255,255,255,.08)",

            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            padding: "0 40px",

            background: "#020617",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 15,
            }}
          >
            <div
              style={{
                width: 50,
                height: 50,
                borderRadius: 14,

                background:
                  "linear-gradient(135deg,#9333ea,#2563eb)",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                fontWeight: "bold",
                fontSize: 28,
              }}
            >
              G
            </div>

            <h1
              style={{
                color: "#c084fc",
              }}
            >
              GLMacau
            </h1>
          </div>

          <div
            style={{
              display: "flex",
              gap: 30,
              color: "#aaa",
              fontSize: 18,
            }}
          >
            <span>Home</span>
            <span>Withdraw</span>
            <span>Mine</span>
            <span>Recharge</span>
            <span>Maps</span>
          </div>

          <div
            style={{
              background: "#111827",
              padding: "10px 20px",
              borderRadius: 999,
              color: "#22c55e",
            }}
          >
            $0
          </div>
        </div>

        {/* CONTENT */}
        <div
          style={{
            maxWidth: 1450,
            margin: "30px auto",
            padding: 20,
          }}
        >
          {/* HERO */}
          <div
            style={{
              background:
                "linear-gradient(to right,#9333ea,#2563eb)",

              borderRadius: 28,

              padding: 35,

              marginBottom: 30,
            }}
          >
            <h1
              style={{
                fontSize: 55,
                margin: 0,
              }}
            >
              Welcome to GL Macau
            </h1>

            <p
              style={{
                color: "#ddd",
                marginTop: 10,
                fontSize: 20,
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
                "repeat(auto-fit,minmax(260px,1fr))",

              gap: 20,
            }}
          >
            {games.map((game) => (
              <div
                key={game.name}
                onClick={() =>
                  router.push(
                    `/game?name=${encodeURIComponent(
                      game.name
                    )}`
                  )
                }
                style={{
                  background: `linear-gradient(to bottom right,${game.color},#111827)`,

                  borderRadius: 25,

                  padding: 35,

                  cursor: "pointer",

                  textAlign: "center",

                  transition: ".2s",

                  border:
                    "1px solid rgba(255,255,255,.08)",
                }}
              >
                <div
                  style={{
                    width: 100,
                    height: 100,

                    borderRadius: "50%",

                    border:
                      "4px solid rgba(255,255,255,.3)",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    fontSize: 42,

                    margin: "0 auto 25px",
                  }}
                >
                  🎲
                </div>

                <h1
                  style={{
                    fontSize: 32,
                  }}
                >
                  {game.name}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
