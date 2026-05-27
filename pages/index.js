import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

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
        background: "#020617",
        color: "white",
        padding: 40,
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          color: "#c084fc",
          fontSize: 50,
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
            key={game}
            onClick={() =>
              router.push(
                `/game?name=${encodeURIComponent(game)}`
              )
            }
            style={{
              background: "#1e293b",
              padding: 40,
              borderRadius: 20,
              cursor: "pointer",
            }}
          >
            <h1>{game}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
