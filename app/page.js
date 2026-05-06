export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #fffaf8 0%, #ffeef3 100%)",
        overflow: "hidden",
        position: "relative",
        fontFamily: "serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "rgba(255,182,193,0.18)",
          filter: "blur(80px)",
          top: "-200px",
          right: "-100px",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.8)",
          filter: "blur(60px)",
          bottom: "-150px",
          left: "-100px",
        }}
      />

      <div
        style={{
          maxWidth: "900px",
          textAlign: "center",
          zIndex: 2,
        }}
      >
        <p
          style={{
            color: "#d48fa3",
            letterSpacing: "6px",
            textTransform: "uppercase",
            fontSize: "12px",
            marginBottom: "30px",
          }}
        >
          private story for elina
        </p>

        <h1
          style={{
            fontSize: "72px",
            color: "#3d2a2f",
            fontWeight: "400",
            lineHeight: "1.15",
            marginBottom: "30px",
          }}
        >
          Некоторые люди
          <br />
          появляются
          <br />
          слишком неожиданно.
        </h1>

        <p
          style={{
            fontSize: "24px",
            color: "#7b5b63",
            lineHeight: "1.8",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          И в какой-то момент
          <br />
          обычной ночью
          <br />
          ты понимаешь,
          <br />
          что человек стал для тебя
          <br />
          чем-то гораздо большим.
        </p>

        <div
          style={{
            marginTop: "80px",
            fontSize: "80px",
            opacity: "0.25",
          }}
        >
          🌸
        </div>
      </div>
    </main>
  );
}
