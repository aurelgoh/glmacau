export default function Home() {
  return (
    <div
      style={{
        background: "#020B2D",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          width: "360px",
          background: "#081230",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 0 40px rgba(120,0,255,0.4)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
            fontSize: "42px",
          }}
        >
          GL Macau
        </h1>

        <input
          placeholder="Username"
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "30px",
            border: "none",
            marginBottom: "15px",
          }}
        />

        <input
          placeholder="Password"
          type="password"
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "30px",
            border: "none",
            marginBottom: "20px",
          }}
        />

        <button
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "30px",
            border: "none",
            background:
              "linear-gradient(to right, #A100FF, #2EA8FF)",
            color: "white",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
