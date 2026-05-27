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
    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        padding: 40,
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          fontSize: 60,
          color: "#c084fc",
        }}
      >
        GL Macau
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: 20,
          marginTop: 40,
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
              background: game.color,
              padding: 40,
              borderRadius: 20,
              cursor: "pointer",
            }}
          >
            <h1>{game.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
