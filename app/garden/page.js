export default function GardenPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #fff7fb 0%, #ffeef5 45%, #fff9fc 100%)",
        overflow: "hidden",
        position: "relative",
        padding: "60px 20px",
        fontFamily: "serif",
      }}
    >
      {/* Цветы на фоне */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/flowers.png')",
          opacity: 0.08,
          pointerEvents: "none",
        }}
      />

      {/* Плавающие цветочки */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "10%",
          fontSize: "40px",
          opacity: 0.4,
        }}
      >
        🌸
      </div>

      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "15%",
          fontSize: "50px",
          opacity: 0.3,
        }}
      >
        🌺
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "18%",
          left: "20%",
          fontSize: "45px",
          opacity: 0.3,
        }}
      >
        🌷
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "12%",
          fontSize: "55px",
          opacity: 0.3,
        }}
      >
        🌸
      </div>

      {/* Заголовок */}
      <h1
        style={{
          textAlign: "center",
          fontSize: "56px",
          color: "#5e3b4c",
          marginBottom: "15px",
          fontWeight: "300",
        }}
      >
        маленький сад воспоминаний
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#866575",
          fontSize: "20px",
          marginBottom: "70px",
        }}
      >
        некоторые вещи хочется сохранить чуть дольше 🌸
      </p>

      {/* Карточки */}
      <div
        style={{
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {/* Карточка 1 */}
        <div
          onClick={() =>
            alert(
              "🌸 я подумал что ты выскочка 😭"
            )
          }
          style={{
            width: "320px",
            background: "rgba(255,255,255,0.65)",
            borderRadius: "30px",
            padding: "40px",
            backdropFilter: "blur(10px)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          <h2
            style={{
              color: "#5c3948",
              fontSize: "40px",
              marginBottom: "20px",
            }}
          >
            🌸 первая мысль
          </h2>

          <p
            style={{
              color: "#6f5862",
              fontSize: "20px",
              lineHeight: "1.6",
            }}
          >
            нажми, чтобы открыть
          </p>
        </div>

        {/* Карточка 2 */}
        <div
          onClick={() =>
            alert(
              "📚 тогда в маленькой библиотеке ты случайно или специально легла ко мне на колени и заснула."
            )
          }
          style={{
            width: "320px",
            background: "rgba(255,255,255,0.65)",
            borderRadius: "30px",
            padding: "40px",
            backdropFilter: "blur(10px)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          <h2
            style={{
              color: "#5c3948",
              fontSize: "40px",
              marginBottom: "20px",
            }}
          >
            💌 случайность
          </h2>

          <p
            style={{
              color: "#6f5862",
              fontSize: "20px",
              lineHeight: "1.6",
            }}
          >
            нажми, чтобы открыть
          </p>
        </div>

        {/* Карточка 3 */}
        <div
          onClick={() =>
            alert(
              "✨ сначала были смешанные чувства, а теперь по большей части привязанность и ощущение влюблённости."
            )
          }
          style={{
            width: "320px",
            background: "rgba(255,255,255,0.65)",
            borderRadius: "30px",
            padding: "40px",
            backdropFilter: "blur(10px)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          <h2
            style={{
              color: "#5c3948",
              fontSize: "40px",
              marginBottom: "20px",
            }}
          >
            ✨ чувство
          </h2>

          <p
            style={{
              color: "#6f5862",
              fontSize: "20px",
              lineHeight: "1.6",
            }}
          >
            нажми, чтобы открыть
          </p>
        </div>
      </div>

      {/* Кнопка */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "90px",
        }}
      >
        <button
          onClick={() => (window.location.href = "/letter")}
          style={{
            padding: "22px 60px",
            border: "none",
            borderRadius: "999px",
            background:
              "linear-gradient(90deg, #ffd6e8 0%, #ffe8f3 100%)",
            color: "#5a3d4d",
            fontSize: "26px",
            cursor: "pointer",
            boxShadow: "0 10px 30px rgba(255,182,210,0.35)",
            transition: "0.3s",
          }}
        >
          ✨ узнать секрет
        </button>
      </div>
    </main>
  );
}
