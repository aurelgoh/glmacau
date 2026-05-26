export default function Mine() {
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
      <h1>Profile & Account</h1>

      <div style={{
        background:"rgba(255,255,255,0.05)",
        borderRadius:"25px",
        padding:"25px",
        marginTop:"20px"
      }}>
        <h2>LOLO99</h2>

        <input
          value="LOLO99"
          style={{
            width:"100%",
            padding:"15px",
            borderRadius:"15px",
            border:"none",
            background:"#0F172A",
            color:"white",
            marginTop:"20px"
          }}
        />

        <textarea
          placeholder="Bio"
          style={{
            width:"100%",
            height:"120px",
            padding:"15px",
            borderRadius:"15px",
            border:"none",
            background:"#0F172A",
            color:"white",
            marginTop:"20px"
          }}
        />

        <button style={{
          width:"100%",
          padding:"16px",
          border:"none",
          borderRadius:"15px",
          marginTop:"20px",
          background:"linear-gradient(135deg,#A855F7,#3B82F6)",
          color:"white",
          fontSize:"18px"
        }}>
          Save Changes
        </button>
      </div>
    </div>
  );
}
