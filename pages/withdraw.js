export default function Withdraw() {
  return (
    <div style={styles.page}>
      <h1>💸 Withdraw</h1>

      <div style={styles.card}>
        <h3>Available Balance</h3>
        <h2>$1,250.00</h2>

        <input
          placeholder="Enter withdraw amount"
          style={styles.input}
        />

        <button style={styles.button}>
          Withdraw Now
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
    padding: "20px",
    borderRadius: "24px",
    marginTop: "20px",
  },

  input: {
    width: "100%",
    padding: "14px",
    borderRadius: "14px",
    border: "none",
    marginTop: "16px",
    marginBottom: "16px",
  },

  button: {
    width: "100%",
    padding: "16px",
    border: "none",
    borderRadius: "14px",
    background: "#8e44ff",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
};
