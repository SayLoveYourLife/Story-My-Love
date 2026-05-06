export default function GardenPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #fff8fb 0%, #ffeef5 45%, #fff9fc 100%)",
        overflow: "hidden",
        position: "relative",
        padding: "60px 20px",
        fontFamily: "serif",
      }}
    >
      {/* Мягкое свечение */}
      <div
        style={{
          position: "absolute",
          width: "700px",
          height: "700px",
          background: "#ffd9ea",
          borderRadius: "50%",
          filter: "blur(140px)",
          top: "-200px",
          left: "-150px",
          opacity: 0.35,
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          background: "#ffeef6",
          borderRadius: "50%",
          filter: "blur(140px)",
          bottom: "-200px",
          right: "-150px",
          opacity: 0.45,
        }}
      />

      {/* Цветочки */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "10%",
          fontSize: "42px",
          opacity: 0.45,
        }}
      >
        🌸
      </div>

      <div
        style={{
          position: "absolute",
          top: "18%",
          right: "14%",
          fontSize: "54px",
          opacity: 0.3,
        }}
      >
        🌺
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "16%",
          left: "18%",
          fontSize: "48px",
          opacity: 0.35,
        }}
      >
        🌷
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "12%",
          fontSize: "56px",
          opacity: 0.35,
        }}
      >
        🌸
      </div>

      {/* Заголовок */}
      <h1
        style={{
          textAlign: "center",
          fontSize: "58px",
          color: "#5b3948",
          marginBottom: "12px",
          fontWeight: "300",
          position: "relative",
          zIndex: 2,
        }}
      >
        маленький сад воспоминаний
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#866575",
          fontSize: "20px",
          marginBottom: "55px",
          position: "relative",
          zIndex: 2,
        }}
      >
        некоторые вещи хочется сохранить чуть дольше 🌸
      </p>

      {/* Карточки */}
      <div
        style={{
          display: "flex",
          gap: "28px",
          justifyContent: "center",
          flexWrap: "wrap",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Карточка 1 */}
        <div
          onClick={() =>
            alert("🌸 я подумал что ты выскочка 😭")
          }
          style={{
            width: "320px",
            background: "rgba(255,255,255,0.68)",
            borderRadius: "30px",
            padding: "38px",
            backdropFilter: "blur(12px)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          <h2
            style={{
              color: "#5c3948",
              fontSize: "38px",
              marginBottom: "16px",
            }}
          >
            🌸 первая мысль
          </h2>

          <p
            style={{
              color: "#6f5862",
              fontSize: "19px",
              lineHeight: "1.5",
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
            background: "rgba(255,255,255,0.68)",
            borderRadius: "30px",
            padding: "38px",
            backdropFilter: "blur(12px)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          <h2
            style={{
              color: "#5c3948",
              fontSize: "38px",
              marginBottom: "16px",
            }}
          >
            💌 случайность
          </h2>

          <p
            style={{
              color: "#6f5862",
              fontSize: "19px",
              lineHeight: "1.5",
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
            background: "rgba(255,255,255,0.68)",
            borderRadius: "30px",
            padding: "38px",
            backdropFilter: "blur(12px)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          <h2
            style={{
              color: "#5c3948",
              fontSize: "38px",
              marginBottom: "16px",
            }}
          >
            ✨ чувство
          </h2>

          <p
            style={{
              color: "#6f5862",
              fontSize: "19px",
              lineHeight: "1.5",
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
          marginTop: "70px",
          position: "relative",
          zIndex: 2,
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
          }}
        >
          ✨ узнать секрет
        </button>
      </div>
    </main>
  );
}
