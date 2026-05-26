export default function History() {
  const data = [
    {
      type: "Deposit",
      amount: "+Rp 100.000",
      date: "26 Mei 2026",
    },
    {
      type: "Withdraw",
      amount: "-Rp 50.000",
      date: "25 Mei 2026",
    },
    {
      type: "Deposit",
      amount: "+Rp 250.000",
      date: "24 Mei 2026",
    },
  ];

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

      <h1>History</h1>

      <div style={{ marginTop: "20px" }}>
        {data.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#121A2F",
              padding: "18px",
              borderRadius: "18px",
              marginBottom: "15px",
            }}
          >
            <h3 style={{ margin: 0 }}>{item.type}</h3>

            <p
              style={{
                margin: "10px 0",
                color:
                  item.type === "Deposit"
                    ? "#4DFF91"
                    : "#FF6B6B",
              }}
            >
              {item.amount}
            </p>

            <small style={{ color: "#aaa" }}>
              {item.date}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}
