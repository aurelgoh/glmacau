export default function Mine() {
  return (
    <div style={styles.page}>
      <h1>👤 My Profile</h1>

      <div style={styles.card}>
        <div style={styles.avatar}>
          L
        </div>

        <h2>User: Lune Club</h2>
        <p>ID: 1038281</p>

        <button style={styles.button}>
          Edit Profile
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
    textAlign: "center",
    fontFamily: "Arial",
  },

  card: {
    background: "#101c5d",
    borderRadius: "24px",
    padding: "30px",
    marginTop: "20px",
  },

  avatar: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    background: "#8e44ff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "34px",
    margin: "auto",
    marginBottom: "20px",
  },

  button: {
    marginTop: "18px",
    padding: "14px 20px",
    border: "none",
    borderRadius: "14px",
    background: "#8e44ff",
    color: "white",
  },
};
