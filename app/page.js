export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #fff8f8 0%, #ffeef5 40%, #fff5ef 100%)",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        fontFamily: "serif",
      }}
    >
      {/* большие световые пятна */}
      <div
        style={{
          position: "absolute",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "rgba(255,182,193,0.30)",
          filter: "blur(100px)",
          top: "-250px",
          right: "-150px",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.95)",
          filter: "blur(80px)",
          bottom: "-200px",
          left: "-150px",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "rgba(255,220,230,0.45)",
          filter: "blur(90px)",
          top: "200px",
          left: "30%",
        }}
      />

      {/* лепестки */}
      <div
        style={{
          position: "absolute",
          top: "80px",
          left: "100px",
          fontSize: "70px",
          opacity: "0.25",
        }}
      >
        🌸
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "120px",
          right: "140px",
          fontSize: "90px",
          opacity: "0.2",
        }}
      >
        🌸
      </div>

      <div
        style={{
          maxWidth: "950px",
          textAlign: "center",
          zIndex: 2,
        }}
      >
        <p
          style={{
            color: "#d98ca2",
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
            fontSize: "78px",
            color: "#4a2d35",
            fontWeight: "400",
            lineHeight: "1.1",
            marginBottom: "35px",
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
            fontSize: "25px",
            color: "#7b5b63",
            lineHeight: "1.9",
            maxWidth: "720px",
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

        <a
          href="/story"
          style={{
            display: "inline-block",
            marginTop: "65px",
            padding: "20px 46px",
            background:
              "linear-gradient(135deg, #ffffff 0%, #ffe4ec 100%)",
            color: "#7b4c5a",
            borderRadius: "999px",
            textDecoration: "none",
            fontSize: "20px",
            fontWeight: "600",
            boxShadow: "0 15px 35px rgba(255,182,193,0.45)",
            border: "1px solid rgba(255,255,255,0.7)",
            transition: "0.3s",
          }}
        >
          ✨ начать историю
        </a>

        <div
          style={{
            marginTop: "90px",
            color: "#d6a5b4",
            fontSize: "18px",
            letterSpacing: "3px",
          }}
        >
          made with feelings
        </div>
      </div>
    </main>
  );
}
