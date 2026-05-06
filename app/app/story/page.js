export default function StoryPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: `
          radial-gradient(circle at top left, #ffe8ef 0%, transparent 35%),
          linear-gradient(180deg, #fffafc 0%, #fff2f6 100%)
        `,
        padding: "80px 25px",
        position: "relative",
        overflow: "hidden",
        fontFamily: "serif",
      }}
    >
      {/* цветы */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "5%",
          fontSize: "70px",
          opacity: 0.2,
        }}
      >
        🌸
      </div>

      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "8%",
          fontSize: "90px",
          opacity: 0.15,
        }}
      >
        🌸
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "10%",
          fontSize: "80px",
          opacity: 0.18,
        }}
      >
        🌸
      </div>

      {/* карточка */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "rgba(255,255,255,0.55)",
          backdropFilter: "blur(18px)",
          borderRadius: "40px",
          padding: "80px 60px",
          boxShadow: "0 25px 80px rgba(255,182,193,0.2)",
          border: "1px solid rgba(255,255,255,0.7)",
        }}
      >
        <p
          style={{
            textAlign: "center",
            color: "#c591a0",
            letterSpacing: "7px",
            fontSize: "12px",
            textTransform: "uppercase",
            marginBottom: "40px",
          }}
        >
          chapter one
        </p>

        <h1
          style={{
            fontSize: "72px",
            textAlign: "center",
            color: "#50343d",
            marginBottom: "60px",
            lineHeight: "1.1",
            fontWeight: "400",
          }}
        >
          Всё началось
          <br />
          неожиданно.
        </h1>

        <div
          style={{
            fontSize: "28px",
            lineHeight: "2.1",
            color: "#73545e",
            textAlign: "center",
          }}
        >
          <p>
            Я не думал,
            <br />
            что один человек
            <br />
            сможет стать
            <br />
            настолько важным.
          </p>

          <br />

          <p>
            Сначала это были
            <br />
            просто сообщения.
            <br />
            Просто интерес.
            <br />
            Просто внимание.
          </p>

          <br />

          <p>
            Но потом
            <br />
            ты начала
            <br />
            оставаться в мыслях
            <br />
            слишком надолго.
          </p>

          <br />

          <p>
            И я понял,
            <br />
            что ты —
            <br />
            уже не случайность.
          </p>
        </div>

        {/* кнопка */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "70px",
          }}
        >
          <a
            href="/memories"
            style={{
              padding: "20px 50px",
              borderRadius: "999px",
              textDecoration: "none",
              background:
                "linear-gradient(135deg, #fff 0%, #ffd9e6 100%)",
              color: "#7d4f5f",
              fontSize: "20px",
              fontWeight: "600",
              boxShadow:
                "0 15px 35px rgba(255,182,193,0.35)",
            }}
          >
            ✨ дальше
          </a>
        </div>
      </div>
    </main>
  );
}
