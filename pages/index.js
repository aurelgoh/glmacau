export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050B2E",
        color: "white",
        padding: "20px",
        fontFamily: "sans-serif",
      }}
    >
      <h1>GL Macau</h1>

      <div
        style={{
          marginTop: "20px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px",
        }}
      >
        {[
          "GL5 Ball",
          "Tencent 2 Ball",
          "Tencent Car",
          "Lucky 5D",
        ].map((game, index) => (
          <div
            key={index}
            style={{
              background: "#1A235F",
              padding: "30px 20px",
              borderRadius: "20px",
              textAlign: "center",
            }}
          >
            🎲

            <h2>{game}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
