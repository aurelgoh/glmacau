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
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          fontSize: "50px",
          marginBottom: "40px",
          color: "#b06cff",
        }}
      >
        GL Macau
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
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
              background: "#111b4b",
              border: "1px solid #2d3f8f",
              borderRadius: "20px",
              padding: "40px",
              cursor: "pointer",
              textAlign: "center",
              transition: "0.3s",
            }}
          >
            <h2>{game}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
