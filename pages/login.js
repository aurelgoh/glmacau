import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  const login = () => {
    localStorage.setItem("login", "true");
    router.push("/home");
  };

  return (
    <div
      style={{
        height: "100vh",
        background: "#020617",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          width: 420,
          background: "#071028",
          padding: 40,
          borderRadius: 25,
          border: "1px solid rgba(255,255,255,.1)",
        }}
      >
        <h1 style={{ textAlign: "center" }}>GLMacau</h1>

        <input
          placeholder="Username"
          style={input}
        />

        <input
          placeholder="Password"
          type="password"
          style={input}
        />

        <button
          onClick={login}
          style={button}
        >
          Sign In
        </button>

        <div
          style={{
            textAlign: "center",
            marginTop: 20,
          }}
        >
          <span
            style={{
              color: "#a855f7",
              cursor: "pointer",
            }}
            onClick={() => router.push("/register")}
          >
            Register now
          </span>
        </div>
      </div>
    </div>
  );
}

const input = {
  width: "100%",
  padding: 15,
  marginTop: 15,
  borderRadius: 12,
  border: "1px solid #333",
  background: "#020617",
  color: "white",
};

const button = {
  width: "100%",
  marginTop: 20,
  padding: 15,
  border: "none",
  borderRadius: 12,
  background:
    "linear-gradient(to right,#a855f7,#3b82f6)",
  color: "white",
  fontSize: 18,
  cursor: "pointer",
};
