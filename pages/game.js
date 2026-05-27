import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Game() {
  const router = useRouter();

  // WAJIB ADA
  const { name } = router.query;

  // NAMA GAME OTOMATIS
  const gameName = name || "GL5 Ball";

  // TIMER 5 MENIT
  const [time, setTime] = useState(300);

  // CATEGORY TERPILIH
  const [selected, setSelected] = useState([]);

  // TIMER LOOP
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          return 300;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // DATA CATEGORY
  const categories = [
    {
      name: "Kecil",
      sub: "1-24",
      color: "#22d3ee",
    },
    {
      name: "Besar",
      sub: "25-49",
      color: "#fb923c",
    },
    {
      name: "Ganjil",
      sub: "1,3,5...",
      color: "#ec4899",
    },
    {
      name: "Genap",
      sub: "2,4,6...",
      color: "#22c55e",
    },
    {
      name: "Dragon",
      sub: "Ekor>Kepala",
      color: "#f87171",
    },
    {
      name: "Tiger",
      sub: "Kepala>Ekor",
      color: "#facc15",
    },
    {
      name: "Merah",
      sub: "Red Ball",
      color: "#ef4444",
    },
    {
      name: "Hitam",
      sub: "Black Ball",
      color: "#64748b",
    },
  ];

  // PILIH CATEGORY
  const toggleSelect = (item) => {
    if (selected.includes(item)) {
      setSelected(
        selected.filter((x) => x !== item)
      );
    } else {
      setSelected([...selected, item]);
    }
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
        {/* TOPBAR */}
        <div
          style={{
            height: 80,
            borderBottom:
              "1px solid rgba(255,255,255,.08)",

            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            padding: "0 40px",

            background: "#020617",

            position: "sticky",
            top: 0,
            zIndex: 999,
          }}
        >
          {/* LOGO */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 15,
            }}
          >
            <div
              style={{
                width: 50,
                height: 50,
                borderRadius: 14,

                background:
                  "linear-gradient(135deg,#9333ea,#2563eb)",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                fontWeight: "bold",
                fontSize: 28,
              }}
            >
              G
            </div>

            <h1
              style={{
                color: "#c084fc",
              }}
            >
              GLMacau
            </h1>
          </div>

          {/* MENU */}
          <div
            style={{
              display: "flex",
              gap: 30,
              color: "#aaa",
              fontSize: 18,
            }}
          >
            <span>Home</span>
            <span>Withdraw</span>
            <span>Mine</span>
            <span>Recharge</span>
            <span>Maps</span>
          </div>

          {/* SALDO */}
          <div
            style={{
              background: "#111827",
              padding: "10px 20px",
              borderRadius: 999,
              color: "#22c55e",
              fontWeight: "bold",
            }}
          >
            $0
          </div>
        </div>

        {/* CONTENT */}
        <div
          style={{
            maxWidth: 1450,
            margin: "30px auto",
            padding: 20,
          }}
        >
          {/* HEADER GAME */}
          <div
            style={{
              background:
                "linear-gradient(to right,#9333ea,#2563eb)",

              borderRadius: 28,

              padding: 35,
            }}
          >
            {/* BACK */}
            <button
              onClick={() => router.push("/home")}
              style={{
                background: "#00000055",
                border: "none",
                color: "white",

                width: 55,
                height: 55,

                borderRadius: 14,

                fontSize: 28,

                cursor: "pointer",
              }}
            >
              ←
            </button>

            {/* TITLE */}
            <div
              style={{
                textAlign: "center",
                marginTop: 15,
              }}
            >
              {/* INI PENTING */}
              <h1
                style={{
                  fontSize: 55,
                  marginBottom: 10,
                }}
              >
                {gameName}
              </h1>

              <p
                style={{
                  color: "#ddd",
                  fontSize: 18,
                }}
              >
                Period:20260527-081 • WIB
              </p>
            </div>

            {/* BALANCE */}
            <div
              style={{
                marginTop: 25,

                background: "#064e3b",

                padding: 22,

                borderRadius: 20,

                textAlign: "center",

                fontSize: 42,

                color: "#22c55e",

                fontWeight: "bold",
              }}
            >
              Saldo: $0
            </div>
          </div>

          {/* INFO CARD */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",

              gap: 20,

              marginTop: 25,
            }}
          >
            {/* TIMER */}
            <div
              style={{
                background:
                  "linear-gradient(to right,#581c87,#111827)",

                padding: 30,

                borderRadius: 22,
              }}
            >
              <p
                style={{
                  color: "#ccc",
                  fontSize: 18,
                }}
              >
                Waktu Tersisa
              </p>

              <h1
                style={{
                  fontSize: 60,
                  marginTop: 15,
                }}
              >
                {Math.floor(time / 60)}:
                {String(time % 60).padStart(2, "0")}
              </h1>
            </div>

            {/* ODDS */}
            <div
              style={{
                background:
                  "linear-gradient(to right,#78350f,#111827)",

                padding: 30,

                borderRadius: 22,
              }}
            >
              <p
                style={{
                  color: "#ccc",
                  fontSize: 18,
                }}
              >
                Odds K/B
              </p>

              <h1
                style={{
                  fontSize: 60,
                  color: "#facc15",
                  marginTop: 15,
                }}
              >
                1.98x
              </h1>
            </div>
          </div>

          {/* CATEGORY */}
          <div
            style={{
              marginTop: 30,

              background: "#0f172a",

              borderRadius: 28,

              padding: 30,

              border:
                "1px solid rgba(255,255,255,.08)",
            }}
          >
            <h1
              style={{
                fontSize: 42,
              }}
            >
              Pilih Kategori
            </h1>

            <p
              style={{
                color: "#999",
                marginBottom: 35,
              }}
            >
              Pilih satu atau lebih kategori taruhan
            </p>

            {/* GRID */}
            <div
              style={{
                display: "grid",

                gridTemplateColumns:
                  "repeat(auto-fit,minmax(320px,1fr))",

                gap: 20,
              }}
            >
              {categories.map((item) => (
                <div
                  key={item.name}
                  onClick={() =>
                    toggleSelect(item.name)
                  }
                  style={{
                    background: "#1e293b",

                    borderRadius: 24,

                    padding: 40,

                    cursor: "pointer",

                    textAlign: "center",

                    transition: ".2s",

                    border: selected.includes(
                      item.name
                    )
                      ? "3px solid white"
                      : `2px solid ${item.color}`,
                  }}
                >
                  {/* TITLE */}
                  <h1
                    style={{
                      color: item.color,

                      fontSize: 42,

                      marginBottom: 15,
                    }}
                  >
                    {item.name}
                  </h1>

                  {/* SUB */}
                  <p
                    style={{
                      color: "#aaa",
                      fontSize: 18,
                    }}
                  >
                    {item.sub}
                  </p>

                  {/* ODDS */}
                  <div
                    style={{
                      marginTop: 25,

                      display: "inline-block",

                      background: "#a16207",

                      padding: "10px 20px",

                      borderRadius: 999,

                      fontWeight: "bold",

                      fontSize: 18,
                    }}
                  >
                    1.98x
                  </div>
                </div>
              ))}
            </div>

            {/* BUTTON */}
            {selected.length > 0 && (
              <div
                style={{
                  position: "fixed",

                  bottom: 30,

                  left: "50%",

                  transform: "translateX(-50%)",
                }}
              >
                <button
                  style={{
                    background:
                      "linear-gradient(to right,#a855f7,#3b82f6)",

                    border: "none",

                    padding: "20px 55px",

                    borderRadius: 999,

                    color: "white",

                    fontSize: 24,

                    fontWeight: "bold",

                    cursor: "pointer",

                    boxShadow:
                      "0 0 30px rgba(168,85,247,.5)",
                  }}
                >
                  Lanjutkan Taruhan (
                  {selected.length})
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
