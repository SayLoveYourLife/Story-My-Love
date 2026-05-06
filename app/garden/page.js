"use client";

import { useRef, useState } from "react";

export default function GardenPage() {
  const audioRef = useRef(null);
  const [opened, setOpened] = useState([false, false, false]);

  const toggleCard = (index) => {
    const updated = [...opened];
    updated[index] = !updated[index];
    setOpened(updated);
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        overflow: "hidden",
        position: "relative",
        background: `
          radial-gradient(circle at top, #ffe4ee 0%, transparent 30%),
          radial-gradient(circle at bottom right, #fff4f8 0%, transparent 35%),
          linear-gradient(180deg, #fffdfd 0%, #fff3f7 45%, #fff8f2 100%)
        `,
        fontFamily: "serif",
        padding: "60px 25px",
      }}
    >
      {/* музыка */}
      <audio
        ref={audioRef}
        loop
        src="https://files.catbox.moe/8h2m7v.mp3"
      />

      {/* glow */}
      <div
        style={{
          position: "absolute",
          width: "800px",
          height: "800px",
          background: "rgba(255,192,203,0.25)",
          borderRadius: "50%",
          filter: "blur(130px)",
          top: "-300px",
          left: "-200px",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          background: "rgba(255,255,255,0.9)",
          borderRadius: "50%",
          filter: "blur(100px)",
          bottom: "-250px",
          right: "-150px",
        }}
      />

      {/* цветы */}
      {Array.from({ length: 25 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: `${30 + Math.random() * 70}px`,
            opacity: 0.12,
            userSelect: "none",
          }}
        >
          🌸
        </div>
      ))}

      {/* заголовок */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          marginTop: "30px",
        }}
      >
        <p
          style={{
            color: "#ca8e9d",
            letterSpacing: "8px",
            fontSize: "12px",
            textTransform: "uppercase",
          }}
        >
          secret garden
        </p>

        <h1
          style={{
            fontSize: "92px",
            fontWeight: "400",
            color: "#52343e",
            lineHeight: "1.1",
            marginTop: "25px",
          }}
        >
          Сад
          <br />
          воспоминаний
        </h1>

        <p
          style={{
            marginTop: "30px",
            fontSize: "28px",
            color: "#795963",
            lineHeight: "1.8",
          }}
        >
          Некоторые чувства
          <br />
          слишком долго
          <br />
          остаются внутри нас.
        </p>

        {/* музыка */}
        <button
          onClick={() => audioRef.current.play()}
          style={{
            marginTop: "45px",
            padding: "18px 42px",
            borderRadius: "999px",
            border: "none",
            cursor: "pointer",
            fontSize: "20px",
            background:
              "linear-gradient(135deg, #ffffff 0%, #ffdbe8 100%)",
            color: "#7b4d5d",
            boxShadow:
              "0 15px 35px rgba(255,182,193,0.35)",
          }}
        >
          🎵 включить музыку
        </button>
      </div>

      {/* карточки */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          marginTop: "100px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "35px",
          maxWidth: "1200px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {[
          {
            title: "🌸 первая мысль",
            hidden:
              "Ты появилась неожиданно. И почему-то сразу осталась.",
          },
          {
            title: "💌 случайность",
            hidden:
              "Иногда одна переписка меняет больше, чем годы.",
          },
          {
            title: "✨ чувство",
            hidden:
              "Есть люди, рядом с которыми даже молчание становится уютным.",
          },
        ].map((card, index) => (
          <div
            key={index}
            onClick={() => toggleCard(index)}
            style={{
              padding: "40px",
              borderRadius: "35px",
              background: "rgba(255,255,255,0.45)",
              backdropFilter: "blur(18px)",
              border: "1px solid rgba(255,255,255,0.7)",
              boxShadow:
                "0 20px 45px rgba(255,182,193,0.18)",
              cursor: "pointer",
              transition: "0.35s",
            }}
          >
            <h2
              style={{
                fontSize: "34px",
                color: "#5f3b46",
                marginBottom: "25px",
                fontWeight: "400",
              }}
            >
              {card.title}
            </h2>

            <p
              style={{
                fontSize: "22px",
                lineHeight: "1.8",
                color: "#7b5c65",
              }}
            >
              {opened[index]
                ? card.hidden
                : "нажми, чтобы открыть воспоминание"}
            </p>
          </div>
        ))}
      </div>

      {/* письмо */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          marginTop: "110px",
          textAlign: "center",
        }}
      >
        <a
          href="/letter"
          style={{
            display: "inline-block",
            padding: "24px 65px",
            borderRadius: "999px",
            textDecoration: "none",
            fontSize: "24px",
            color: "#7c5060",
            background:
              "linear-gradient(135deg, #ffffff 0%, #ffe0ea 100%)",
            boxShadow:
              "0 20px 45px rgba(255,182,193,0.35)",
          }}
        >
          💌 открыть письмо
        </a>
      </div>
    </main>
  );
}
