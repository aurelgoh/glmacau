export default function Withdraw() {
  return (
    <div
      style={{
        background: "#0B0F1A",
        minHeight: "100vh",
        color: "white",
        padding: "20px",
        fontFamily: "sans-serif",
      }}
    >
      <button
        onClick={() => window.history.back()}
        style={{
          background: "#1A235F",
          border: "none",
          color: "white",
          width: "45px",
          height: "45px",
          borderRadius: "12px",
          fontSize: "20px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        ←
      </button>

      <h1>Withdraw</h1>

      <div
        style={{
          background: "#121A2F",
          padding: "20px",
          borderRadius: "20px",
          marginTop: "20px",
        }}
      >
        <p style={{ color: "#aaa" }}>Bank Account</p>

        <input
          placeholder="Enter bank number"
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "14px",
            border: "none",
            marginTop: "10px",
            background: "#1A235F",
            color: "white",
          }}
        />

        <button
          style={{
            marginTop: "20px",
            width: "100%",
            padding: "15px",
            border: "none",
            borderRadius: "14px",
            background: "#4DA3FF",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Withdraw Now
        </button>
      </div>
    </div>
  );
}
