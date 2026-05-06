"use client";

import { useState } from "react";

export default function LetterPage() {
  const [lightOn, setLightOn] = useState(false);
  const [safeOpen, setSafeOpen] = useState(false);
  const [code, setCode] = useState("");
  const [success, setSuccess] = useState(false);

  const checkCode = () => {
    if (code === "01:16:27") {
      setSuccess(true);
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: lightOn
          ? "linear-gradient(180deg, #fff6f8 0%, #fff0f5 100%)"
          : "#0b0b0f",
        transition: "1s",
        position: "relative",
        overflow: "hidden",
        fontFamily: "serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      {/* glow */}
      {lightOn && (
        <>
          <div
            style={{
              position: "absolute",
              width: "700px",
              height: "700px",
              borderRadius: "50%",
              background: "rgba(255,182,193,0.25)",
              filter: "blur(120px)",
              top: "-250px",
              right: "-150px",
            }}
          />

          <div
            style={{
              position: "absolute",
              width: "500px",
              height: "500px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.9)",
              filter: "blur(90px)",
              bottom: "-150px",
              left: "-120px",
            }}
          />
        </>
      )}

      {/* комната */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1000px",
          height: "700px",
          borderRadius: "45px",
          background: lightOn
            ? "rgba(255,255,255,0.45)"
            : "rgba(20,20,25,0.95)",
          backdropFilter: "blur(18px)",
          border: lightOn
            ? "1px solid rgba(255,255,255,0.7)"
            : "1px solid rgba(255,255,255,0.08)",
          boxShadow: lightOn
            ? "0 30px 80px rgba(255,182,193,0.25)"
            : "0 30px 80px rgba(0,0,0,0.6)",
          transition: "1s",
          padding: "60px",
        }}
      >
        {/* лампа */}
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "70px",
            filter: lightOn
              ? "drop-shadow(0 0 25px #fff7b0)"
              : "none",
            transition: "0.6s",
          }}
        >
          💡
        </div>

        {/* переключатель */}
        <button
          onClick={() => setLightOn(!lightOn)}
          style={{
            position: "absolute",
            top: "140px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "90px",
            height: "45px",
            borderRadius: "999px",
            border: "none",
            background: lightOn ? "#ffdbe8" : "#2a2a35",
            cursor: "pointer",
            transition: "0.5s",
            boxShadow: lightOn
              ? "0 0 25px rgba(255,182,193,0.5)"
              : "none",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "white",
              transform: lightOn
                ? "translateX(22px)"
                : "translateX(-22px)",
              transition: "0.4s",
              margin: "0 auto",
            }}
          />
        </button>

        {/* текст */}
        {lightOn && (
          <div
            style={{
              marginTop: "230px",
              textAlign: "center",
              animation: "fade 1s ease",
            }}
          >
            <h1
              style={{
                fontSize: "60px",
                color: "#52343e",
                fontWeight: "400",
                lineHeight: "1.2",
              }}
            >
              не так быстро,
              <br />
              моя хорошая 🌸
            </h1>

            <p
              style={{
                marginTop: "35px",
                fontSize: "28px",
                color: "#7b5a65",
                lineHeight: "1.8",
              }}
            >
              сначала напиши мне
              <br />
              и получи код.
            </p>

            {/* сейф */}
            <div
              onClick={() => setSafeOpen(true)}
              style={{
                marginTop: "80px",
                fontSize: "90px",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              🔐
            </div>
          </div>
        )}

        {/* ввод кода */}
        {safeOpen && (
          <div
            style={{
              position: "absolute",
              bottom: "50px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "420px",
              padding: "35px",
              borderRadius: "30px",
              background: "rgba(255,255,255,0.7)",
              backdropFilter: "blur(18px)",
              textAlign: "center",
              boxShadow:
                "0 20px 50px rgba(255,182,193,0.25)",
            }}
          >
            <p
              style={{
                fontSize: "22px",
                color: "#6f505b",
                marginBottom: "20px",
              }}
            >
              введи код:
            </p>

            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="00:00:00"
              style={{
                width: "100%",
                padding: "18px",
                borderRadius: "18px",
                border: "none",
                fontSize: "22px",
                textAlign: "center",
                outline: "none",
                marginBottom: "20px",
              }}
            />

            <button
              onClick={checkCode}
              style={{
                padding: "16px 40px",
                borderRadius: "999px",
                border: "none",
                background:
                  "linear-gradient(135deg, #ffffff 0%, #ffdce8 100%)",
                fontSize: "20px",
                cursor: "pointer",
                color: "#7a5060",
              }}
            >
              открыть
            </button>

            {success && (
              <div
                style={{
                  marginTop: "30px",
                  fontSize: "28px",
                  color: "#52343e",
                  lineHeight: "1.7",
                }}
              >
                🌸 Вечное сияние
                <br />
                чистого разума
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
