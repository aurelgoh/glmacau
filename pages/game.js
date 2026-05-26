import { useRouter } from "next/router";

export default function GamePage() {
  const router = useRouter();

  const gameName =
    typeof window !== "undefined"
      ? decodeURIComponent(
          new URLSearchParams(window.location.search).get(
            "name"
          ) || "GL5 Ball"
        )
      : "GL5 Ball";

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
          background: #020617;
          font-family: Arial;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>

      <div
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(to bottom,#020617,#020b3f)",
          color: "white",
        }}
      >
        {/* DESKTOP CONTAINER */}
        <div
          style={{
            width: "100%",
            maxWidth: 1500,
            margin: "0 auto",
            padding: 20,
          }}
        >
          {/* HEADER IMAGE */}
          <div
            style={{
              position: "relative",
              height: 280,
              borderRadius: 25,
              overflow: "hidden",
              marginBottom: 20,
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
                  "linear-gradient(to bottom,rgba(0,0,0,.3),rgba(0,0,0,.6))",
              }}
            />

            <button
              onClick={() => router.push("/")}
              style={{
                position: "absolute",
                top: 20,
                left: 20,
                width: 50,
                height: 50,
                borderRadius: 14,
                border: "none",
                background: "#111827",
                color: "white",
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
                  margin: 0,
                  fontSize: 50,
                }}
              >
                {gameName}
              </h1>

              <div
                style={{
                  marginTop: 10,
                  color: "#ddd",
                  fontSize: 18,
                }}
              >
                Period:20260527-077 • WIB
              </div>

              <div
                style={{
                  marginTop: 20,
                  background: "#005C3B",
                  borderRadius: 18,
                  padding: 18,
                  fontSize: 30,
                  fontWeight: "bold",
                  color: "#00FF88",
                  maxWidth: 1300,
                  marginLeft: "auto",
                  marginRight: "auto",
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
              gap: 20,
              marginBottom: 20,
            }}
          >
            <div
              style={{
                background:
                  "linear-gradient(135deg,#2e1065,#111827)",
                borderRadius: 24,
                padding: 30,
              }}
            >
              <div
                style={{
                  color: "#ddd",
                  fontSize: 20,
                }}
              >
                Waktu Tersisa
              </div>

              <div
                style={{
                  marginTop: 15,
                  fontSize: 50,
                  fontWeight: "bold",
                }}
              >
                02:41
              </div>
            </div>

            <div
              style={{
                background:
                  "linear-gradient(135deg,#5A2208,#111827)",
                borderRadius: 24,
                padding: 30,
              }}
            >
              <div
                style={{
                  color: "#ddd",
                  fontSize: 20,
                }}
              >
                Odds K/B
              </div>

              <div
                style={{
                  marginTop: 15,
                  fontSize: 50,
                  fontWeight: "bold",
                }}
              >
                1.98x / 1.98x
              </div>
            </div>
          </div>

          {/* CATEGORY */}
          <div
            style={{
              background: "rgba(0,0,0,.2)",
              borderRadius: 24,
              padding: 30,
            }}
          >
            <h2
              style={{
                marginTop: 0,
                fontSize: 42,
              }}
            >
              Pilih Kategori
            </h2>

            <div
              style={{
                color: "#aaa",
                marginBottom: 30,
                fontSize: 18,
              }}
            >
              Pilih satu atau lebih kategori taruhan
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(2,minmax(0,1fr))",
                gap: 20,
              }}
            >
              {categories.map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: "#1E293B",
                    borderRadius: 22,
                    padding: "45px 20px",
                    textAlign: "center",
                    border:
                      "1px solid rgba(255,255,255,.1)",
                  }}
                >
                  <div
                    style={{
                      fontSize: 40,
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
                      padding: "10px 20px",
                      borderRadius: 999,
                      fontSize: 20,
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
