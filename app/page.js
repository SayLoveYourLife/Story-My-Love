export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        background: "#fff7fb",
        fontFamily: "serif",
      }}
    >
      <h1
        style={{
          fontSize: "60px",
          color: "#5e3b47",
          marginBottom: "20px",
        }}
      >
        Elina
      </h1>

      <a
        href="/garden"
        style={{
          padding: "18px 36px",
          borderRadius: "999px",
          background: "#ffdce9",
          color: "#5c3b46",
          textDecoration: "none",
          fontSize: "22px",
        }}
      >
        войти ✨
      </a>
    </main>
  );
}
