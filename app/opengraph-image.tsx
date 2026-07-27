import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const runtime = "edge";
export const alt = `${profile.name} — Portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const accents = ["#5646e0", "#ee5586", "#8b5cf6", "#c2792f", "#0d9f9f"];

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#faf9fc",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 420,
            height: 420,
            borderRadius: 9999,
            background: "#ee5586",
            opacity: 0.18,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -140,
            right: 160,
            width: 380,
            height: 380,
            borderRadius: 9999,
            background: "#8b5cf6",
            opacity: 0.16,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            left: -100,
            width: 320,
            height: 320,
            borderRadius: 9999,
            background: "#5646e0",
            opacity: 0.14,
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 16, height: 16, background: "#5646e0", transform: "rotate(45deg)" }} />
          <div
            style={{
              fontSize: 26,
              color: "#5646e0",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
            }}
          >
            {profile.title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 600,
            color: "#17151f",
            fontFamily: "Georgia, serif",
            lineHeight: 1.15,
            marginTop: 24,
            marginBottom: 28,
          }}
        >
          Sabrina Schipper Portfolio
        </div>

        <div style={{ display: "flex", fontSize: 30, color: "#6e6b7a", maxWidth: 820 }}>
          {profile.tagline}
        </div>

        <div style={{ display: "flex", gap: 12, marginTop: 48 }}>
          {accents.map((color) => (
            <div key={color} style={{ width: 14, height: 14, borderRadius: 9999, background: color }} />
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
