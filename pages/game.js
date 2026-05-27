import { useRouter } from "next/router";

export default function Game() {
  const router = useRouter();
  const { name } = router.query;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050816",
        color: "white",
        padding: "40px",
        fontFamily: "sans-serif",
      }}
    >
      <button
        onClick={() => router.push("/")}
        style={{
          padding: "10px 20px",
          borderRadius: "10px",
          border: "none",
          background: "#7c3aed",
          color: "white",
          cursor: "pointer",
        }}
      >
        Back
      </button>

      <h1 style={{ marginTop: "40px" }}>
        {name || "Loading..."}
      </h1>

      <div
        style={{
          marginTop: "30px",
          padding: "30px",
          borderRadius: "20px",
          background: "#111a3a",
        }}
      >
        <h2>Saldo: $0</h2>
        <h2>Timer: 05:00</h2>
      </div>
    </div>
  );
}
