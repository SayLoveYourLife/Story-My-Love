export default function GardenPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#fff7fb",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "serif",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "60px",
          color: "#5e3b47",
          marginBottom: "20px",
        }}
      >
        ✿ сад воспоминаний ✿
      </h1>

      <p
        style={{
          fontSize: "22px",
          color: "#7d5b66",
          maxWidth: "700px",
          lineHeight: "1.8",
        }}
      >
        некоторые чувства остаются навсегда
      </p>

      <div
        style={{
          marginTop: "50px",
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <button
          onClick={() =>
            alert("я подумал что ты выскочка 😭🌸")
          }
          style={buttonStyle}
        >
          🌸 первая мысль
        </button>

        <button
          onClick={() =>
            alert(
              "тогда в маленькой библиотеке ты случайно или специально легла ко мне на колени и заснула 🤍"
            )
          }
          style={buttonStyle}
        >
          📖 случайность
        </button>

        <button
          onClick={() =>
            alert(
              "сначала были смешанные чувства, а теперь привязанность и ощущение влюблённости ✨"
            )
          }
          style={buttonStyle}
        >
          ✨ чувство
        </button>
      </div>

      <a
        href="/letter"
        style={{
          marginTop: "60px",
          textDecoration: "none",
          background: "#ffdce9",
          color: "#5e3b47",
          padding: "18px 40px",
          borderRadius: "999px",
          fontSize: "22px",
        }}
      >
        узнать секрет ✨
      </a>
    </main>
  );
}

const buttonStyle = {
  background: "white",
  border: "none",
  padding: "20px 30px",
  borderRadius: "20px",
  fontSize: "20px",
  cursor: "pointer",
  color: "#5e3b47",
  boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
};
