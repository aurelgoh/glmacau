import { useState, useEffect } from "react";

export default function GL5Ball() {
  const [time, setTime] = useState(240);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 240));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min.toString().padStart(2, "0")}:${sec
      .toString()
      .padStart(2, "0")}`;
  };

  const categories = [
    "Kecil",
    "Besar",
    "Ganjil",
    "Genap",
    "Dragon",
    "Tiger",
    "Tengah",
    "Pinggir",
    "Kombinasi",
    "Tunggal",
    "Jumbo",
    "Mini",
    "Super",
    "Normal",
  ];

  return (
    <div
      style={{
        background: "#050A2D",
        minHeight: "100vh",
        color: "white",
        paddingBottom: "100px",
      }}
    >
      {/* Header */}
      <div
        style={{
          position: "sticky",
          top: 0,
          background: "#08103D",
          padding: "15px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 999,
          borderBottom: "1px solid #1a235f",
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
          }}
        >
          ←
        </button>

        <h2 style={{ margin: 0 }}>GL 5 Ball</h2>

        <div
          style={{
            width: "45px",
            height: "45px",
            borderRadius: "12px",
            background: "#1A235F",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ↻
        </div>
      </div>

      {/* Banner */}
      <div
        style={{
          margin: "15px",
          borderRadius: "20px",
          overflow: "hidden",
          background:
            "linear-gradient(135deg,#9B4DFF,#2E3192)",
        }}
      >
        <img
          src="https://i.imgur.com/fj2rA6Y.png"
          style={{
            width: "100%",
            height: "180px",
            objectFit: "cover",
          }}
        />

        <div style={{ padding: "15px" }}>
          <h1 style={{ margin: 0 }}>GL 5 Ball</h1>

          <p style={{ opacity: 0.8 }}>
            Period: 20260525-191 • WIB
          </p>

          <div
            style={{
              background: "#064E3B",
              padding: "15px",
              borderRadius: "16px",
              marginTop: "10px",
              fontSize: "28px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Saldo: $0
          </div>
        </div>
      </div>

      {/* Time + Odds */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "15px",
          padding: "0 15px",
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(135deg,#40106E,#160D4D)",
            borderRadius: "20px",
            padding: "20px",
          }}
        >
          <p>Waktu Tersisa</p>
          <h1>{formatTime(time)}</h1>
        </div>

        <div
          style={{
            background:
              "linear-gradient(135deg,#522200,#3A0B0B)",
            borderRadius: "20px",
            padding: "20px",
          }}
        >
          <p>Odds K/B</p>
          <h1>1.98x</h1>
        </div>
      </div>

      {/* Kategori */}
      <div style={{ padding: "15px" }}>
        <div
          style={{
            background: "#0B123E",
            borderRadius: "24px",
            padding: "20px",
          }}
        >
          <h2>Pilih Kategori</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "15px",
            }}
          >
            {categories.map((item, index) => (
              <button
                key={index}
                style={{
                  background: "#1A234B",
                  border: "2px solid #343C8F",
                  borderRadius: "22px",
                  padding: "25px 15px",
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                {item}
                <div
                  style={{
                    marginTop: "10px",
                    color: "#FFC107",
                    fontSize: "15px",
                  }}
                >
                  1.98x
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
