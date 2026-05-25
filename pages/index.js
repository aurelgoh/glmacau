export default function Home() {
  return (
    <div style={{
      background:"#050b23",
      minHeight:"100vh",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      color:"white"
    }}>
      <div style={{
        width:"360px",
        background:"#101936",
        padding:"35px",
        borderRadius:"30px",
        boxShadow:"0 0 40px rgba(110,80,255,.35)"
      }}>
        <h1 style={{
          textAlign:"center",
          fontSize:"50px",
          color:"#7c5cff"
        }}>
          GL Macau
        </h1>

        <h2 style={{textAlign:"center"}}>
          Welcome Back!
        </h2>

        <p style={{
          textAlign:"center",
          color:"#aaa"
        }}>
          Sign in to continue
        </p>

        <input
          placeholder="Username"
          style={{
            width:"100%",
            padding:"16px",
            marginTop:"12px",
            borderRadius:"18px",
            border:"none",
            background:"#1c2550",
            color:"white"
          }}
        />

        <input
          placeholder="Password"
          type="password"
          style={{
            width:"100%",
            padding:"16px",
            marginTop:"12px",
            borderRadius:"18px",
            border:"none",
            background:"#1c2550",
            color:"white"
          }}
        />

        <button style={{
          width:"100%",
          marginTop:"20px",
          padding:"16px",
          border:"none",
          borderRadius:"18px",
          background:"linear-gradient(to right,#9333ea,#2563eb)",
          color:"white",
          fontSize:"20px",
          fontWeight:"bold"
        }}>
          Sign In
        </button>
      </div>
    </div>
  )
}
