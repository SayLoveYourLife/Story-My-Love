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
          radial-gradient(circle at top, #ffe8f0 0%, transparent 30%),
          radial-gradient(circle at bottom right, #fff6fa 0%, transparent 35%),
          linear-gradient(180deg, #fffdfd 0%, #fff1f6 45%, #fff7f2 100%)
        `,
        fontFamily: "serif",
        padding: "60px 25px",
      }}
    >
      {/* музыка */}
      <audio
        ref={audioRef}
        loop
        src="https://files.catbox.moe/0r4h8w.mp3"
      />

      {/* glow */}
      <div
        style={{
          position: "absolute",
          width: "900px",
          height: "900px",
          background: "rgba(255,192,203,0.25)",
          borderRadius: "50%",
          filter: "blur(140px)",
          top: "-350px",
          left: "-250px",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "700px",
          height: "700px",
          background: "rgba(255,255,255,0.9)",
          borderRadius: "50%",
          filter: "blur(110px)",
          bottom: "-250px",
          right: "-150px",
        }}
      />

      {/* цветы */}
      {Array.from({ length: 45 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: `${30 + Math.random() * 80}px`,
            opacity: 0.14,
            userSelect: "none",
            transform: `rotate(${Math.random() * 360}deg)`,
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
          marginTop: "20px",
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
            fontSize: "96px",
            fontWeight: "400",
            color: "#52343e",
            lineHeight: "1.1",
            marginTop: "20px",
          }}
        >
          Сад
          <br />
          воспоминаний
        </h1>

        <p
          style={{
            marginTop: "25px",
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
            transition: "0.3s",
          }}
        >
          🎹 включить музыку
        </button>
      </div>

      {/* карточки */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          marginTop: "100px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "35px",
          maxWidth: "1300px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {[
          {
            title: "🌸 первая мысль",
            hidden:
              "Я подумал что ты выскочка 😭🤣",
          },
          {
            title: "💌 случайность",
            hidden:
              "Тогда в маленькой библиотеке ты случайно или специально легла ко мне на колени и заснула.",
          },
          {
            title: "✨ чувство",
            hidden:
              "Сначала были смешанные чувства, а теперь по большей части привязанность и ощущение влюблённости.",
          },
        ].map((card, index) => (
          <div
            key={index}
            onClick={() => toggleCard(index)}
            style={{
              padding: "42px",
              borderRadius: "38px",
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
                lineHeight: "1.9",
                color: "#7b5c65",
              }}
            >
              {opened[index]
                ? card.hidden
                : "нажми, чтобы открыть"}
            </p>
          </div>
        ))}
      </div>

      {/* кнопка */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          marginTop: "120px",
          textAlign: "center",
        }}
      >
        <button
          onClick={() => alert("🌸 секрет откроется чуть позже...")}
          style={{
            padding: "24px 65px",
            borderRadius: "999px",
            border: "none",
            cursor: "pointer",
            fontSize: "24px",
            color: "#7c5060",
            background:
              "linear-gradient(135deg, #ffffff 0%, #ffe0ea 100%)",
            boxShadow:
              "0 20px 45px rgba(255,182,193,0.35)",
          }}
        >
          ✨ узнать секрет
        </button>
      </div>
    </main>
  );
}
