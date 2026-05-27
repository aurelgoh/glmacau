import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Game() {
  const router = useRouter();
  const { name } = router.query;

  const gameName = name || "GL5 Ball";

  const [time, setTime] = useState(300);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) return 300;
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
  ];

  const toggleSelect = (item) => {
    if (selected.includes(item)) {
      setSelected(selected.filter((x) => x !== item));
    } else {
      setSelected([...selected, item]);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      {/* TOPBAR */}
      <div
        style={{
          height: 80,
          borderBottom: "1px solid rgba(255,255,255,.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 40px",
        }}
      >
        <h1 style={{ color: "#c084fc" }}>GLMacau</h1>

        <div
          style={{
            display: "flex",
            gap: 30,
            color: "#aaa",
          }}
        >
          <span>Home</span>
          <span>Withdraw</span>
          <span>Mine</span>
          <span>Recharge</span>
          <span>Maps</span>
        </div>

        <div
          style={{
            background: "#111827",
            padding: "10px 20px",
            borderRadius: 999,
            color: "#22c55e",
          }}
        >
          $0
        </div>
      </div>

      {/* CONTENT */}
      <div
        style={{
          maxWidth: 1400,
          margin: "30px auto",
          padding: 20,
        }}
      >
        {/* HEADER */}
        <div
          style={{
            background:
              "linear-gradient(to right,#9333ea,#2563eb)",
            borderRadius: 25,
            padding: 30,
          }}
        >
          <button
            onClick={() => router.push("/home")}
            style={{
              background: "#00000055",
              border: "none",
              color: "white",
              fontSize: 24,
              borderRadius: 12,
              width: 50,
              height: 50,
              cursor: "pointer",
            }}
          >
            ←
          </button>

          <div
            style={{
              textAlign: "center",
              marginTop: 10,
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

            <p
              style={{
                color: "#ddd",
              }}
            >
              Period:20260527-081 • WIB
            </p>
          </div>

          {/* SALDO */}
          <div
            style={{
              marginTop: 25,
              background: "#064e3b",
              padding: 20,
              borderRadius: 20,
              textAlign: "center",
              fontSize: 40,
              color: "#22c55e",
              fontWeight: "bold",
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
            gap: 20,
            marginTop: 20,
          }}
        >
          <div
            style={{
              background:
                "linear-gradient(to right,#581c87,#111827)",
              padding: 30,
              borderRadius: 20,
            }}
          >
            <p style={{ color: "#ccc" }}>
              Waktu Tersisa
            </p>

            <h1
              style={{
                fontSize: 55,
              }}
            >
              {Math.floor(time / 60)}:
              {String(time % 60).padStart(2, "0")}
            </h1>
          </div>

          <div
            style={{
              background:
                "linear-gradient(to right,#78350f,#111827)",
              padding: 30,
              borderRadius: 20,
            }}
          >
            <p style={{ color: "#ccc" }}>
              Odds K/B
            </p>

            <h1
              style={{
                fontSize: 55,
                color: "#facc15",
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
            borderRadius: 25,
            padding: 30,
            border: "1px solid rgba(255,255,255,.08)",
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
              marginBottom: 30,
            }}
          >
            Pilih satu atau lebih kategori taruhan
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(350px,1fr))",
              gap: 20,
            }}
          >
            {categories.map((item) => (
              <div
                key={item.name}
                onClick={() => toggleSelect(item.name)}
                style={{
                  background: "#1e293b",
                  borderRadius: 20,
                  padding: 40,
                  cursor: "pointer",
                  border: selected.includes(item.name)
                    ? "3px solid white"
                    : `2px solid ${item.color}`,
                  textAlign: "center",
                }}
              >
                <h1
                  style={{
                    color: item.color,
                    fontSize: 42,
                  }}
                >
                  {item.name}
                </h1>

                <p
                  style={{
                    color: "#999",
                    marginTop: 10,
                  }}
                >
                  {item.sub}
                </p>

                <div
                  style={{
                    marginTop: 20,
                    display: "inline-block",
                    background: "#a16207",
                    padding: "8px 18px",
                    borderRadius: 999,
                    fontWeight: "bold",
                  }}
                >
                  1.98x
                </div>
              </div>
            ))}
          </div>

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
                  padding: "20px 50px",
                  borderRadius: 999,
                  color: "white",
                  fontSize: 24,
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Lanjutkan Taruhan ({selected.length})
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
