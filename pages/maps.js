export default function Maps() {
  return (
    <div style={styles.page}>
      <h1>🗺️ Maps</h1>

      <div style={styles.card}>
        <p>Game Maps Coming Soon...</p>
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
    padding: "30px",
    marginTop: "20px",
    textAlign: "center",
  },
};
