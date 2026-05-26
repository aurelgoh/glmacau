import { useRouter } from "next/router";

export default function Game() {
  const router = useRouter();

  const names = [
    "GL5 Ball",
    "Tencent 2 Ball",
    "Tencent Car",
    "Tencent of King",
    "Lucky 5D",
    "GL Pick Up",
    "GL Racer"
  ];

  const gameName = names[router.query.id] || "GL5 Ball";

  const categories = [
    "Kecil","Besar",
    "Ganjil","Genap",
    "Dragon","Tiger",
    "Atas","Bawah",
    "Merah","Hitam",
    "Prima","Komposit",
    "Tengah","Pinggir",
    "Kombinasi","Tunggal",
    "Jumbo","Mini",
    "Super","Normal"
  ];

  return (
    <div style={{
      minHeight:"100vh",
      background:"linear-gradient(180deg,#030B2B,#071B4D)",
      color:"white",
      fontFamily:"sans-serif",
      maxWidth:"500px",
      margin:"0 auto",
      paddingBottom:"100px"
    }}>

      <div style={{
        height:"230px",
        background:"linear-gradient(135deg,#9333EA,#1E3A8A)",
        padding:"20px",
        borderBottomLeftRadius:"25px",
        borderBottomRightRadius:"25px"
      }}>
        <a href="/" style={{
          color:"white",
          textDecoration:"none",
          fontSize:"25px"
        }}>
          ←
        </a>

        <h1 style={{
          textAlign:"center",
          marginTop:"40px"
        }}>
          {gameName}
        </h1>

        <p style={{
          textAlign:"center",
          opacity:0.8
        }}>
          Period:20260525-191 • WIB
        </p>

        <div style={{
          marginTop:"20px",
          background:"#064E3B",
          padding:"15px",
          borderRadius:"18px",
          textAlign:"center",
          fontSize:"30px",
          fontWeight:"bold",
          color:"#22C55E"
        }}>
          Saldo: $0
        </div>
      </div>

      <div style={{
        display:"grid",
        gridTemplateColumns:"1fr 1fr",
        gap:"15px",
        padding:"20px"
      }}>
        <div style={{
          background:"#2E1065",
          borderRadius:"22px",
          padding:"20px"
        }}>
          <p>Waktu Tersisa</p>
          <h1>03:53</h1>
        </div>

        <div style={{
          background:"#3F1D0F",
          borderRadius:"22px",
          padding:"20px"
        }}>
          <p>Odds K/B</p>
          <h1>1.98x</h1>
        </div>
      </div>

      <div style={{padding:"20px"}}>
        <h2>Pilih Kategori</h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"1fr 1fr",
          gap:"15px"
        }}>
          {categories.map((item,index)=>(
            <div
              key={index}
              style={{
                background:"rgba(255,255,255,0.06)",
                border:"1px solid rgba(255,255,255,0.1)",
                borderRadius:"22px",
                padding:"25px",
                textAlign:"center"
              }}
            >
              <h2>{item}</h2>

              <div style={{
                marginTop:"10px",
                display:"inline-block",
                background:"#6B4F00",
                padding:"5px 12px",
                borderRadius:"999px"
              }}>
                1.98x
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
