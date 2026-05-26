export default function GamePage() {
  const items = [
    "Kecil",
    "Besar",
    "Ganjil",
    "Genap",
    "Dragon",
    "Tiger",
    "Atas",
    "Bawah",
  ];

  return (
    <>
      <style jsx global>{`
        body {
          margin: 0;
          background: #e5e5e5;
          font-family: Arial;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>

      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          background: "#e5e5e5",
          padding: "0",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "575px",
            background: "#020b3f",
            minHeight: "100vh",
            color: "white",
          }}
        >
          {/* HEADER */}
          <div
            style={{
              background:
                "linear-gradient(135deg,#B14DFF,#4B52D1)",
              padding: "20px",
              textAlign: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 20,
                top: 20,
                fontSize: 30,
              }}
            >
              ←
            </div>

            <h1
              style={{
                marginTop: 60,
                fontSize: 42,
                marginBottom: 10,
              }}
            >
              GL5 Ball
            </h1>

            <div
              style={{
                color: "#ddd",
                fontSize: 18,
              }}
            >
              Period:20260525-191 • WIB
            </div>

            <div
              style={{
                marginTop: 25,
                background: "#005C3B",
                borderRadius: 20,
                padding: 20,
                fontSize: 30,
                fontWeight: "bold",
                color: "#00FF88",
              }}
            >
              Saldo: $0
            </div>
          </div>

          {/* INFO */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 15,
              padding: 20,
            }}
          >
            <div
              style={{
                background: "#3A1175",
                borderRadius: 24,
                padding: 25,
              }}
            >
              <div style={{ fontSize: 18 }}>
                Waktu Tersisa
              </div>

              <div
                style={{
                  fontSize: 34,
                  fontWeight: "bold",
                  marginTop: 20,
                }}
              >
                03:53
              </div>
            </div>

            <div
              style={{
                background: "#5A2208",
                borderRadius: 24,
                padding: 25,
              }}
            >
              <div style={{ fontSize: 18 }}>
                Odds K/B
              </div>

              <div
                style={{
                  fontSize: 34,
                  fontWeight: "bold",
                  marginTop: 20,
                }}
              >
                1.98x
              </div>
            </div>
          </div>

          {/* KATEGORI */}
          <div style={{ padding: 20 }}>
            <h2
              style={{
                fontSize: 28,
                marginBottom: 30,
              }}
            >
              Pilih Kategori
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 18,
              }}
            >
              {items.map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: "#14204E",
                    borderRadius: 24,
                    padding: "40px 20px",
                    textAlign: "center",
                    border:
                      "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <div
                    style={{
                      fontSize: 28,
                      fontWeight: "bold",
                      marginBottom: 20,
                    }}
                  >
                    {item}
                  </div>

                  <div
                    style={{
                      display: "inline-block",
                      background: "#9C7300",
                      padding: "8px 18px",
                      borderRadius: 999,
                      fontSize: 18,
                    }}
                  >
                    1.98x
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
