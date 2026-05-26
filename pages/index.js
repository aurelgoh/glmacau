export default function Home() {
  return (
    <div style={{
      minHeight:"100vh",
      background:"linear-gradient(180deg,#030B2B,#071B4D)",
      color:"white",
      fontFamily:"sans-serif",
      padding:"20px"
    }}>
      <h1>GL Macau</h1>

      <a href="/game">
        <div style={{
          background:"#312E81",
          padding:"30px",
          borderRadius:"20px",
          marginTop:"20px"
        }}>
          GL5 Ball
        </div>
      </a>
    </div>
  );
}
