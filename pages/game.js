import { useRouter } from "next/router";

export default function GamePage() {
  const router = useRouter();

  const { name } = router.query;

  const gameName = name || "GL5 Ball";

  const categories = [
    "Kecil",
    "Besar",
    "Ganjil",
    "Genap",
    "Dragon",
    "Tiger",
    "Atas",
    "Bawah",
    "Merah",
    "Hitam",
    "Prima",
    "Komposit",
  ];

  const bannerMap = {
    "GL5 Ball":
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200",
    "Tencent 2 Ball":
      "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1200",
    "Tencent Car":
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200",
    "Tencent of King":
      "https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=1200",
    "Lucky 5D":
      "https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=1200",
    "GL Pick Up":
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200",
    "GL Racer":
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200",
  };

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
              position: "relative",
              height: 320,
              overflow: "hidden",
            }}
          >
            <img
              src={
                bannerMap[gameName] ||
                bannerMap["GL5 Ball"]
              }
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom,rgba(0,0,0,.2),rgba(73,0,130,.5))",
              }}
            />

            <button
              onClick={() => router.push("/")}
              style={{
                position: "absolute",
                top: 20,
                left: 20,
                background: "#111827",
                color: "white",
                border: "none",
                width: 50,
                height: 50,
                borderRadius: 12,
                fontSize: 24,
                cursor: "pointer",
              }}
            >
              ←
            </button>

            <div
              style={{
                position: "absolute",
                bottom: 30,
                width: "100%",
                textAlign: "center",
                padding: "0 20px",
              }}
            >
              <h1
                style={{
                  fontSize: 48,
                  marginBottom: 10,
                }}
              >
                {gameName}
              </h1>

              <div
                style={{
                  color: "#ddd",
                  fontSize: 18,
                  marginBottom: 20,
                }}
              >
                Period:20260527-077 • WIB
              </div>

              <div
                style={{
                  background: "#005C3B",
                  borderRadius: 18,
                  padding: 18,
                  fontSize: 30,
                  fontWeight: "bold",
                  color: "#00FF88",
                }}
              >
                Saldo: $0
              </div>
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
              <div>Waktu Tersisa</div>

              <div
                style={{
                  fontSize: 34,
                  fontWeight: "bold",
                  marginTop: 20,
                }}
              >
                02:41
              </div>
            </div>

            <div
              style={{
                background: "#5A2208",
                borderRadius: 24,
                padding: 25,
              }}
            >
              <div>Odds K/B</div>

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
              {categories.map((item, i) => (
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
