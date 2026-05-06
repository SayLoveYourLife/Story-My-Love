export default function GardenPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #fff8fb 0%, #ffeef5 50%, #fff9fc 100%)",
        padding: "60px 20px",
        fontFamily: "serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* фон */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(#ffd6e7 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.35,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "64px",
            color: "#5e3b47",
            marginBottom: "15px",
          }}
        >
          ✿ сад воспоминаний ✿
        </h1>

        <p
          style={{
            color: "#8c6875",
            fontSize: "20px",
            marginBottom: "60px",
          }}
        >
          некоторые чувства остаются навсегда
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >
          {/* карточка 1 */}
          <div
            onClick={() =>
              alert(
                "я подумал что ты выскочка 😭🌸"
              )
            }
            style={cardStyle}
          >
            <h2 style={titleStyle}>🌸 первая мысль</h2>
            <p style={textStyle}>нажми чтобы открыть</p>
          </div>

          {/* карточка 2 */}
          <div
            onClick={() =>
              alert(
                "тогда в маленькой библиотеке ты случайно или специально легла ко мне на колени и заснула 🤍"
              )
            }
            style={cardStyle}
          >
            <h2 style={titleStyle}>📖 случайность</h2>
            <p style={textStyle}>нажми чтобы открыть</p>
          </div>

          {/* карточка 3 */}
          <div
            onClick={() =>
              alert(
                "сначала были смешанные чувства, а теперь привязанность и ощущение влюблённости ✨"
              )
            }
            style={cardStyle}
          >
            <h2 style={titleStyle}>✨ чувство</h2>
            <p style={textStyle}>нажми чтобы открыть</p>
          </div>
        </div>

        <a
          href="/letter"
          style={{
            display: "inline-block",
            marginTop: "70px",
            padding: "18px 40px",
            borderRadius: "999px",
            background: "#ffdce9",
            color: "#5c3b46",
            fontSize: "22px",
            textDecoration: "none",
            boxShadow: "0 10px 30px rgba(255, 182, 210, 0.4)",
            transition: "0.3s",
          }}
        >
          ✨ узнать секрет
        </a>
      </div>
    </main>
  );
}

const cardStyle = {
  background: "rgba(255,255,255,0.7)",
  backdropFilter: "blur(10px)",
  borderRadius: "30px",
  padding: "50px 30px",
  cursor: "pointer",
  boxShadow: "0 10px 30px rgba(255,192,203,0.15)",
  transition: "0.3s",
};

const titleStyle = {
  fontSize: "36px",
  color: "#5e3b47",
  marginBottom: "20px",
};

const textStyle = {
  fontSize: "18px",
  color: "#86626d",
};
