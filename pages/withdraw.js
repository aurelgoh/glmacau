export default function Withdraw() {
  return (
    <div style={{
      minHeight:"100vh",
      background:"linear-gradient(180deg,#030B2B,#071B4D)",
      color:"white",
      fontFamily:"sans-serif",
      padding:"20px",
      maxWidth:"500px",
      margin:"0 auto"
    }}>
      <h1>Penarikan Dana</h1>

      <div style={{
        background:"#064E3B",
        padding:"25px",
        borderRadius:"25px",
        marginTop:"20px"
      }}>
        <h2>$0.00</h2>
      </div>

      <div style={{
        background:"rgba(255,255,255,0.05)",
        padding:"25px",
        borderRadius:"25px",
        marginTop:"20px"
      }}>
        <h2>Form Penarikan</h2>

        <input
          placeholder="Masukkan jumlah"
          style={{
            width:"100%",
            padding:"15px",
            borderRadius:"15px",
            border:"none",
            marginTop:"15px",
            background:"#0F172A",
            color:"white"
          }}
        />

        <input
          placeholder="Password"
          style={{
            width:"100%",
            padding:"15px",
            borderRadius:"15px",
            border:"none",
            marginTop:"15px",
            background:"#0F172A",
            color:"white"
          }}
        />

        <button style={{
          width:"100%",
          padding:"16px",
          border:"none",
          borderRadius:"15px",
          marginTop:"20px",
          background:"#10B981",
          color:"white",
          fontSize:"18px"
        }}>
          Ajukan Penarikan
        </button>
      </div>
    </div>
  );
}
