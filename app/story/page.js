"use client";

import { useState } from "react";

export default function StoryPage() {
  const [clicked, setClicked] = useState(false);

  return (
    <main
      style={{
        minHeight: "100vh",
        overflow: "hidden",
        position: "relative",
        padding: "70px 20px",
        background: `
          radial-gradient(circle at top left, #ffe3ec 0%, transparent 30%),
          radial-gradient(circle at bottom right, #fff0f5 0%, transparent 35%),
          linear-gradient(180deg, #fffdfd 0%, #fff5f7 45%, #fff8f1 100%)
        `,
        fontFamily: "serif",
      }}
    >
      {/* glow */}
      <div
        style={{
          position: "absolute",
          width: "700px",
          height: "700px",
          background: "rgba(255,182,193,0.25)",
          borderRadius: "50%",
          filter: "blur(120px)",
          top: "-250px",
          right: "-200px",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          background: "rgba(255,255,255,0.9)",
          borderRadius: "50%",
          filter: "blur(90px)",
          bottom: "-180px",
          left: "-100px",
        }}
      />

      {/* цветы */}
      {[
        ["8%", "10%", "70px"],
        ["18%", "82%", "90px"],
        ["70%", "12%", "80px"],
        ["80%", "84%", "65px"],
        ["40%", "6%", "50px"],
        ["52%", "92%", "55px"],
      ].map((f, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: f[0],
            left: f[1],
            fontSize: f[2],
            opacity: 0.18,
            userSelect: "none",
          }}
        >
          🌸
        </div>
      ))}

      {/* лепестки */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "40%",
          fontSize: "22px",
          opacity: 0.2,
        }}
      >
        ✿
      </div>

      <div
        style={{
          position: "absolute",
          top: "60%",
          left: "70%",
          fontSize: "26px",
          opacity: 0.2,
        }}
      >
        ❀
      </div>

      {/* карточка */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "950px",
          margin: "0 auto",
          background: "rgba(255,255,255,0.45)",
          backdropFilter: "blur(18px)",
          borderRadius: "40px",
          padding: "85px 60px",
          boxShadow: "0 30px 80px rgba(255,182,193,0.22)",
          border: "1px solid rgba(255,255,255,0.7)",
          textAlign: "center",
        }}
      >
        {/* верх */}
        <p
          style={{
            color: "#ca8e9d",
            letterSpacing: "8px",
            fontSize: "12px",
            textTransform: "uppercase",
            marginBottom: "35px",
          }}
        >
          chapter one
        </p>

        {/* заголовок */}
        <h1
          style={{
            fontSize: "72px",
            lineHeight: "1.15",
            color: "#50343d",
            fontWeight: "400",
            marginBottom: "50px",
          }}
        >
          Всё началось
          <br />
          неожиданно.
        </h1>

        {/* текст */}
        <div
          style={{
            color: "#73545e",
            fontSize: "28px",
            lineHeight: "1.7",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          <p>
            Я не думал,
            что один человек
            сможет стать
            настолько важным.
          </p>

          <br />

          <p>
            Сначала это были
            просто сообщения.
            Просто интерес.
            Просто внимание.
          </p>

          <br />

          <p>
            Но потом
            ты начала
            оставаться в мыслях
            слишком надолго.
          </p>

          <br />

          <p>
            И я понял,
            что ты —
            уже не случайность.
          </p>
        </div>

        {/* кнопка */}
        <button
          onClick={() => setClicked(!clicked)}
          style={{
            marginTop: "65px",
            padding: "22px 55px",
            borderRadius: "999px",
            border: "none",
            cursor: "pointer",
            fontSize: "21px",
            fontWeight: "600",
            color: "#7d4f5f",
            background: clicked
              ? "linear-gradient(135deg, #ffd4e3 0%, #ffffff 100%)"
              : "linear-gradient(135deg, #ffffff 0%, #ffe2eb 100%)",
            boxShadow: clicked
              ? "0 0 40px rgba(255,182,193,0.6)"
              : "0 18px 40px rgba(255,182,193,0.35)",
            transform: clicked ? "scale(1.05)" : "scale(1)",
            transition: "all 0.35s ease",
          }}
        >
          {clicked ? "💗 ты нажала..." : "✨ прикоснуться"}
        </button>

        {/* скрытый текст */}
        {clicked && (
          <div
            style={{
              marginTop: "40px",
              color: "#8a6571",
              fontSize: "24px",
              lineHeight: "1.8",
              animation: "fade 0.6s ease",
            }}
          >
            Иногда
            самые важные чувства
            начинаются
            с одного случайного сообщения.
          </div>
        )}

        {/* низ */}
        <div
          style={{
            marginTop: "70px",
            color: "#d0a1af",
            fontSize: "15px",
            letterSpacing: "5px",
          }}
        >
          made with love
        </div>
      </div>
    </main>
  );
}
