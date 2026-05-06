export default function Home() {
  const flowers = [
    { top: "8%", left: "10%", size: "50px", opacity: 0.35 },
    { top: "18%", left: "82%", size: "70px", opacity: 0.2 },
    { top: "72%", left: "14%", size: "65px", opacity: 0.25 },
    { top: "78%", left: "85%", size: "55px", opacity: 0.3 },
    { top: "45%", left: "6%", size: "45px", opacity: 0.18 },
    { top: "58%", left: "92%", size: "60px", opacity: 0.2 },
    { top: "30%", left: "40%", size: "35px", opacity: 0.15 },
    { top: "15%", left: "55%", size: "40px", opacity: 0.18 },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        background: `
          radial-gradient(circle at top right, #ffdbe7 0%, transparent 35%),
          radial-gradient(circle at bottom left, #fff1f5 0%, transparent 40%),
          linear-gradient(180deg, #fffdfd 0%, #fff3f7 45%, #fff7f1 100%)
        `,
        fontFamily: "serif",
      }}
    >
      {/* ГЛОУ */}
      <div
        style={{
          position: "absolute",
          width: "900px",
          height: "900px",
          borderRadius: "50%",
          background: "rgba(255,192,203,0.25)",
          filter: "blur(120px)",
          top: "-350px",
          right: "-250px",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.95)",
          filter: "blur(100px)",
          bottom: "-300px",
          left: "-200px",
        }}
      />

      {/* ЦВЕТЫ */}
      {flowers.map((flower, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: flower.top,
            left: flower.left,
            fontSize: flower.size,
            opacity: flower.opacity,
            transform: "rotate(-10deg)",
            userSelect: "none",
          }}
        >
          🌸
        </div>
      ))}

      {/* ЛЕПЕСТКИ */}
      <div
        style={{
          position: "absolute",
          top: "12%",
          left: "25%",
          fontSize: "22px",
          opacity: "0.4",
        }}
      >
        ✿
      </div>

      <div
        style={{
          position: "absolute",
          top: "70%",
          left: "60%",
          fontSize: "28px",
          opacity: "0.25",
        }}
      >
        ❀
      </div>

      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "75%",
          fontSize: "18px",
          opacity: "0.2",
        }}
      >
        ✿
      </div>

      {/* СТЕКЛЯННАЯ КАРТОЧКА */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "950px",
          padding: "90px 70px",
          borderRadius: "40px",
          background: "rgba(255,255,255,0.45)",
          backdropFilter: "blur(18px)",
          border: "1px solid rgba(255,255,255,0.6)",
          boxShadow: "0 25px 80px rgba(255,182,193,0.25)",
          textAlign: "center",
        }}
      >
        {/* верхняя надпись */}
        <p
          style={{
            color: "#d28ca0",
            letterSpacing: "8px",
            textTransform: "uppercase",
            fontSize: "12px",
            marginBottom: "35px",
          }}
        >
          a story made with feelings
        </p>

        {/* ЗАГОЛОВОК */}
        <h1
          style={{
            fontSize: "82px",
            lineHeight: "1.08",
            color: "#4f2f38",
            fontWeight: "400",
            marginBottom: "45px",
            textShadow: "0 5px 25px rgba(255,255,255,0.7)",
          }}
        >
          Иногда
          <br />
          самые важные люди
          <br />
          появляются
          <br />
          совершенно случайно.
        </h1>

        {/* ТЕКСТ */}
        <p
          style={{
            color: "#7d6068",
            fontSize: "25px",
            lineHeight: "2",
            maxWidth: "760px",
            margin: "0 auto",
          }}
        >
          И сначала это выглядит
          <br />
          как обычный разговор.
          <br />
          Как ещё один вечер.
          <br />
          Как что-то временное.
          <br />
          <br />
          Но потом человек
          <br />
          становится местом,
          <br />
          куда хочется возвращаться.
        </p>

        {/* КНОПКА */}
        <a
          href="/story"
          style={{
            display: "inline-block",
            marginTop: "70px",
            padding: "22px 54px",
            borderRadius: "999px",
            background:
              "linear-gradient(135deg, #ffffff 0%, #ffe3ec 100%)",
            color: "#7b4e5c",
            textDecoration: "none",
            fontSize: "21px",
            fontWeight: "600",
            boxShadow:
              "0 20px 40px rgba(255,182,193,0.35)",
            border: "1px solid rgba(255,255,255,0.8)",
          }}
        >
          ✨ открыть историю
        </a>

        {/* НИЗ */}
        <div
          style={{
            marginTop: "80px",
            color: "#d3a3b1",
            fontSize: "17px",
            letterSpacing: "4px",
          }}
        >
          for someone special
        </div>
      </div>
    </main>
  );
}
