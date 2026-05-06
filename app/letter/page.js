export default function LetterPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#fff7fb",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "serif",
        padding: "40px",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "50px",
          borderRadius: "30px",
          maxWidth: "700px",
          textAlign: "center",
          boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
        }}
      >
        <h1
          style={{
            color: "#5e3b47",
            marginBottom: "30px",
          }}
        >
          секретная комната ✨
        </h1>

        <p
          style={{
            color: "#7d5b66",
            fontSize: "22px",
            lineHeight: "1.8",
          }}
        >
          не так быстро моя хорошая,
          <br />
          сначала напиши мне
          <br />
          и получи код 🤍
        </p>
      </div>
    </main>
  );
}
