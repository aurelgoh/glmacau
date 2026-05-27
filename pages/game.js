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
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <button
        onClick={() => router.push("/")}
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "10px",
          background: "#7b4dff",
          color: "white",
          cursor: "pointer",
          marginBottom: "30px",
        }}
      >
        Back
      </button>

      <h1
        style={{
          fontSize: "50px",
          color: "#b06cff",
        }}
      >
        {name}
      </h1>

      <div
        style={{
          marginTop: "30px",
          background: "#111b4b",
          padding: "30px",
          borderRadius: "20px",
        }}
      >
        <h2>Saldo: $0</h2>
        <h3>Timer: 05:00</h3>
      </div>
    </div>
  );
}
