export default function Home() {
  const games = [
    "GL5 Ball",
    "Tencent 2 Ball",
    "Tencent Car",
    "Tencent of King",
    "Lucky 5D",
    "GL Pick Up",
    "GL Racer",
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

      <div style={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:"20px"
      }}>
        <h1 style={{color:"#C86BFF"}}>GL Macau</h1>
        <div style={{
          width:"45px",
          height:"45px",
          borderRadius:"50%",
          background:"#A855F7",
          display:"flex",
          alignItems:"center",
          justifyContent:"center"
        }}>
          L
        </div>
      </div>

      <div style={{
        background:"linear-gradient(135deg,#5B21B6,#312E81)",
        borderRadius:"28px",
        padding:"25px",
        marginBottom:"20px"
      }}>
        <h1 style={{
          fontSize:"50px",
          lineHeight:"55px",
          margin:0
        }}>
          Welcome <br/>
          to <span style={{color:"#E056FD"}}>GL Macau</span>
        </h1>

        <p style={{opacity:0.8}}>
          Choose your game and start winning!
        </p>
      </div>

      <div style={{
        display:"grid",
        gridTemplateColumns:"1fr 1fr",
        gap:"15px"
      }}>
        {games.map((item,index)=>(
          <a
            key={index}
            href={`/game?id=${index}`}
            style={{
              textDecoration:"none",
              color:"white"
            }}
          >
            <div style={{
              background:"linear-gradient(135deg,#2E1065,#3B82F6)",
              borderRadius:"28px",
              padding:"25px",
              minHeight:"170px",
              display:"flex",
              flexDirection:"column",
              justifyContent:"center",
              alignItems:"center"
            }}>
              <div style={{
                width:"90px",
                height:"90px",
                borderRadius:"50%",
                border:"5px solid rgba(255,255,255,0.3)",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                fontSize:"40px",
                marginBottom:"20px"
              }}>
                🎲
              </div>

              <h2 style={{
                textAlign:"center",
                margin:0
              }}>
                {item}
              </h2>
            </div>
          </a>
        ))}
      </div>

      <div style={{
        position:"fixed",
        bottom:0,
        left:0,
        right:0,
        background:"#020617",
        borderTop:"1px solid rgba(255,255,255,0.1)",
        display:"flex",
        justifyContent:"space-around",
        padding:"14px"
      }}>
        <a href="/" style={{color:"#C86BFF"}}>Home</a>
        <a href="/withdraw" style={{color:"white"}}>Withdraw</a>
        <a href="/mine" style={{color:"white"}}>Mine</a>
        <a href="/maps" style={{color:"white"}}>Maps</a>
      </div>
    </div>
  );
}
