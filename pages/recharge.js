export default function Recharge() {
  return (
    <div style={styles.page}>
      <h1>💳 Recharge</h1>

      <div style={styles.card}>
        <h3>Select Amount</h3>

        <div style={styles.grid}>
          {[10, 50, 100, 500].map((amount) => (
            <button
              key={amount}
              style={styles.amountBtn}
            >
              ${amount}
            </button>
          ))}
        </div>

        <button style={styles.button}>
          Recharge Now
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
    padding: "20px",
    marginTop: "20px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: "12px",
    marginTop: "16px",
    marginBottom: "20px",
  },

  amountBtn: {
    padding: "18px",
    borderRadius: "16px",
    border: "none",
    background: "#1d2c7c",
    color: "white",
    cursor: "pointer",
  },

  button: {
    width: "100%",
    padding: "16px",
    border: "none",
    borderRadius: "14px",
    background: "#8e44ff",
    color: "white",
  },
};
