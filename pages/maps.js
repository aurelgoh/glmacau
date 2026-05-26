export default function Maps() {
  const places = [
    "Grand Lisboa Palace",
    "Studio City",
    "Galaxy Macau",
    "The Venetian"
  ];

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
      <h1>Maps Interaktif</h1>

      <div style={{
        background:"rgba(255,255,255,0.05)",
        borderRadius:"25px",
        padding:"20px",
        marginTop:"20px",
        minHeight:"300px"
      }}>
        MAP AREA
      </div>

      <div style={{marginTop:"20px"}}>
        {places.map((item,index)=>(
          <div
            key={index}
            style={{
              background:"rgba(255,255,255,0.05)",
              borderRadius:"20px",
              padding:"20px",
              marginBottom:"15px"
            }}
          >
            <h3>{item}</h3>
            <p>⭐ 4.{index+6}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
