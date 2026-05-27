import { useRouter } from "next/router";

export default function Register() {
  const router = useRouter();

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
          width: 450,
          background: "#071028",
          padding: 40,
          borderRadius: 25,
          border: "1px solid rgba(255,255,255,.1)",
        }}
      >
        <h1 style={{ textAlign: "center" }}>
          Create New Account
        </h1>

        <input placeholder="Referral Code" style={input} />
        <input placeholder="Username" style={input} />
        <input placeholder="Password" style={input} />
        <input placeholder="Confirm Password" style={input} />
        <input placeholder="Withdrawal Password" style={input} />

        <button style={button}>
          Register
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
            onClick={() => router.push("/login")}
          >
            Sign in here
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
};
