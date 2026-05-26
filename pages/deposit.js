export default function Deposit() {
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

      <h1>Deposit</h1>

      <div
        style={{
          background: "#121A2F",
          padding: "20px",
          borderRadius: "20px",
          marginTop: "20px",
        }}
      >
        <p style={{ color: "#aaa" }}>Choose payment</p>

        <div
          style={{
            background: "#1A235F",
            padding: "15px",
            borderRadius: "14px",
            marginTop: "10px",
          }}
        >
          QRIS
        </div>

        <div
          style={{
            background: "#1A235F",
            padding: "15px",
            borderRadius: "14px",
            marginTop: "10px",
          }}
        >
          DANA
        </div>

        <div
          style={{
            background: "#1A235F",
            padding: "15px",
            borderRadius: "14px",
            marginTop: "10px",
          }}
        >
          GOPAY
        </div>
      </div>
    </div>
  );
}
