import { useState } from "react";

export default function Home() {
  const [register, setRegister] = useState(false);

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
            marginBottom: "10px",
          }}
        >
          GL Macau
        </h1>

        <h2 style={{ textAlign: "center" }}>
          {register ? "Create Account" : "Welcome Back!"}
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#aaa",
            marginBottom: "20px",
          }}
        >
          {register
            ? "Register your new account"
            : "Sign in to continue"}
        </p>

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
          onClick={() =>
            alert(
              register
                ? "Register berhasil (sementara demo)"
                : "Login berhasil (sementara demo)"
            )
          }
          style={buttonStyle}
        >
          {register ? "Register" : "Sign In"}
        </button>

        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
            color: "#bbb",
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
              fontWeight: "bold",
              marginLeft: "5px",
              cursor: "pointer",
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
  outline: "none",
  background: "#1c2550",
  color: "white",
  fontSize: "16px",
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
