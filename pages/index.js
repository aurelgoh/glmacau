import { useState } from "react";

export default function Home() {
  const [register, setRegister] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  if (loggedIn) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#050b23",
          color: "white",
          padding: "20px",
        }}
      >
        <h1 style={{ color: "#7c5cff" }}>
          GL Macau Dashboard
        </h1>

        <div
          style={{
            background: "#101936",
            padding: "20px",
            borderRadius: "20px",
            marginTop: "20px",
          }}
        >
          <h2>Welcome admin8 👋</h2>
          <p>Saldo: $10,000</p>
          <p>Game GL5 Ball akan tampil di sini.</p>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        background: "#050b23",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "380px",
          background: "#101936",
          padding: "35px",
          borderRadius: "30px",
          boxShadow: "0 0 45px rgba(110,80,255,.35)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "48px",
            color: "#7c5cff",
          }}
        >
          GL Macau
        </h1>

        <h2 style={{ textAlign: "center" }}>
          {register ? "Create Account" : "Welcome Back!"}
        </h2>

        {register && (
          <input
            placeholder="Phone Number"
            style={inputStyle}
          />
        )}

        <input
          placeholder="Username"
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          style={inputStyle}
        />

        {register && (
          <input
            type="password"
            placeholder="Confirm Password"
            style={inputStyle}
          />
        )}

        <button
          onClick={() => {
            if (register) {
              alert("Register berhasil");
              setRegister(false);
            } else {
              setLoggedIn(true);
            }
          }}
          style={buttonStyle}
        >
          {register ? "Register" : "Sign In"}
        </button>

        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          {register
            ? "Already have account?"
            : "Don't have an account?"}

          <span
            onClick={() =>
              setRegister(!register)
            }
            style={{
              color: "#8b5cf6",
              cursor: "pointer",
              marginLeft: "5px",
              fontWeight: "bold",
            }}
          >
            {register ? "Login" : "Register now"}
          </span>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "16px",
  marginTop: "12px",
  borderRadius: "18px",
  border: "none",
  background: "#1c2550",
  color: "white",
};

const buttonStyle = {
  width: "100%",
  marginTop: "22px",
  padding: "16px",
  border: "none",
  borderRadius: "18px",
  background:
    "linear-gradient(to right,#9333ea,#2563eb)",
  color: "white",
  fontSize: "20px",
  fontWeight: "bold",
  cursor: "pointer",
};
