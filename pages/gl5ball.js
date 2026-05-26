export default function GL5Ball() {
  return (
    <div style={styles.page}>
      <h1>🎲 GL5 Ball</h1>

      <div style={styles.card}>
        <h2>Place Your Bet</h2>

        <div style={styles.balls}>
          {[1,2,3,4,5].map((num)=>(
            <div key={num} style={styles.ball}>
              {num}
            </div>
          ))}
        </div>

        <button style={styles.button}>
          Play Now
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    background: "#040b2d",
    minHeight: "100vh",
    color: "white",
    padding: "20px",
    fontFamily: "Arial",
  },

  card: {
    background: "#101c5d",
    borderRadius: "24px",
    padding: "24px",
    marginTop: "20px",
  },

  balls: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    marginTop: "20px",
    marginBottom: "20px",
  },

  ball: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background: "#8e44ff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "20px",
  },

  button: {
    width: "100%",
    padding: "16px",
    border: "none",
    borderRadius: "14px",
    background: "#8e44ff",
    color: "white",
    cursor: "pointer",
  },
};
