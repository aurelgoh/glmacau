import { useRouter } from "next/router";

export default function GamePage() {
  const router = useRouter();
  const { name } = router.query;

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
      <button
        onClick={() => router.push("/")}
        style={{
          marginBottom: "20px",
          padding: "10px 20px",
          background: "#6c3cff",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        Back
      </button>

      <h1>{name}</h1>

      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          background: "#111b4b",
          borderRadius: "20px",
        }}
      >
        <h2>Saldo: $0</h2>
        <p>Timer: 05:00</p>
      </div>
    </div>
  );
}
