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
        background: "#050816",
        color: "white",
        padding: "30px",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ color: "#b06cff" }}>GL Macau</h1>

      <div
        style={{
          marginTop: "30px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
          gap: "20px",
        }}
      >
        {games.map((game) => (
          <div
            key={game}
            onClick={() =>
              router.push(`/game?name=${encodeURIComponent(game)}`)
            }
            style={{
              padding: "30px",
              borderRadius: "20px",
              background: "#111b4b",
              cursor: "pointer",
              textAlign: "center",
              border: "1px solid #2d3f8f",
            }}
          >
            <h3>{game}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
