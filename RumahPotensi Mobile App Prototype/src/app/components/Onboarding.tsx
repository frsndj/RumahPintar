import { useState } from "react";
import { ChevronRight } from "lucide-react";

type Screen = "home" | "pelatihan" | "konseling" | "komunitas" | "profil" | "onboarding" | "auth" | "test" | "modul" | "progress";

interface OnboardingProps {
  onNavigate: (screen: Screen) => void;
}

const slides = [
  {
    illustration: (
      <svg width="220" height="200" viewBox="0 0 220 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Laptop */}
        <rect x="40" y="80" width="140" height="90" rx="8" fill="#E8F7F1" stroke="#1D9E75" strokeWidth="2"/>
        <rect x="50" y="90" width="120" height="68" rx="4" fill="#1D9E75" opacity="0.15"/>
        <rect x="55" y="95" width="50" height="6" rx="3" fill="#1D9E75" opacity="0.6"/>
        <rect x="55" y="107" width="70" height="4" rx="2" fill="#1D9E75" opacity="0.4"/>
        <rect x="55" y="117" width="60" height="4" rx="2" fill="#1D9E75" opacity="0.4"/>
        <rect x="55" y="127" width="80" height="4" rx="2" fill="#1D9E75" opacity="0.4"/>
        <rect x="55" y="137" width="55" height="12" rx="6" fill="#1D9E75"/>
        {/* Stand */}
        <rect x="80" y="170" width="60" height="6" rx="3" fill="#E0E0E0"/>
        <rect x="95" y="168" width="30" height="4" rx="2" fill="#CCCCCC"/>
        {/* Certificate icon top-right */}
        <circle cx="160" cy="65" r="22" fill="#FFF3E8"/>
        <rect x="150" y="57" width="20" height="16" rx="3" fill="#E07B39" opacity="0.7"/>
        <rect x="153" y="61" width="14" height="2" rx="1" fill="#fff"/>
        <rect x="153" y="65" width="10" height="2" rx="1" fill="#fff"/>
        <circle cx="160" cy="73" r="4" fill="#E07B39"/>
        {/* Star decorations */}
        <circle cx="35" cy="60" r="5" fill="#1D9E75" opacity="0.3"/>
        <circle cx="185" cy="110" r="4" fill="#E07B39" opacity="0.3"/>
        <circle cx="25" cy="130" r="3" fill="#1D9E75" opacity="0.2"/>
      </svg>
    ),
    headline: "Kembangkan Potensimu",
    desc: "Akses ratusan modul pelatihan skill yang dirancang khusus untuk teman-teman disabilitas.",
    color: "#E8F7F1",
    accent: "#1D9E75",
  },
  {
    illustration: (
      <svg width="220" height="200" viewBox="0 0 220 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Mentor figure */}
        <circle cx="90" cy="70" r="28" fill="#E8F7F1" stroke="#1D9E75" strokeWidth="2"/>
        <circle cx="90" cy="62" r="14" fill="#1D9E75" opacity="0.3"/>
        <rect x="68" y="86" width="44" height="30" rx="12" fill="#1D9E75" opacity="0.2"/>
        {/* Student figure */}
        <circle cx="150" cy="90" r="22" fill="#FFF3E8" stroke="#E07B39" strokeWidth="2"/>
        <circle cx="150" cy="83" r="11" fill="#E07B39" opacity="0.3"/>
        <rect x="132" y="103" width="36" height="26" rx="10" fill="#E07B39" opacity="0.2"/>
        {/* Connection line */}
        <path d="M114 80 Q130 60 140 78" stroke="#1D9E75" strokeWidth="2.5" strokeDasharray="5 3" strokeLinecap="round"/>
        {/* Chat bubble */}
        <rect x="60" y="130" width="100" height="36" rx="10" fill="#1D9E75"/>
        <rect x="68" y="138" width="60" height="5" rx="2.5" fill="#fff" opacity="0.9"/>
        <rect x="68" y="148" width="45" height="5" rx="2.5" fill="#fff" opacity="0.7"/>
        <polygon points="90,166 100,166 95,174" fill="#1D9E75"/>
        {/* Stars */}
        <circle cx="35" cy="80" r="5" fill="#E07B39" opacity="0.3"/>
        <circle cx="190" cy="70" r="4" fill="#1D9E75" opacity="0.3"/>
      </svg>
    ),
    headline: "Dapatkan Mentor Terbaikmu",
    desc: "Belajar langsung dari para profesional berpengalaman yang siap membimbingmu.",
    color: "#FFF3E8",
    accent: "#E07B39",
  },
  {
    illustration: (
      <svg width="220" height="200" viewBox="0 0 220 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Psychologist */}
        <circle cx="90" cy="68" r="30" fill="#E8F7F1" stroke="#1D9E75" strokeWidth="2"/>
        <circle cx="90" cy="60" r="15" fill="#1D9E75" opacity="0.25"/>
        <rect x="66" y="86" width="48" height="32" rx="14" fill="#1D9E75" opacity="0.15"/>
        {/* Heart */}
        <path d="M86 55 C84 51 79 51 79 56 C79 61 86 67 86 67 C86 67 93 61 93 56 C93 51 88 51 86 55Z" fill="#1D9E75" opacity="0.5"/>
        {/* User */}
        <circle cx="152" cy="88" r="24" fill="#F5F5F5" stroke="#888780" strokeWidth="1.5"/>
        <circle cx="152" cy="80" r="12" fill="#888780" opacity="0.2"/>
        <rect x="132" y="100" width="40" height="28" rx="12" fill="#888780" opacity="0.1"/>
        {/* Privacy shield */}
        <path d="M165 140 L165 152 C165 157 172 162 172 162 C172 162 179 157 179 152 L179 140 Z" fill="#1D9E75" opacity="0.8"/>
        <path d="M169 149 L171 152 L176 146" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Decorations */}
        <circle cx="35" cy="110" r="6" fill="#1D9E75" opacity="0.2"/>
        <circle cx="190" cy="60" r="5" fill="#E07B39" opacity="0.25"/>
        <rect x="30" y="150" width="20" height="4" rx="2" fill="#E07B39" opacity="0.2"/>
      </svg>
    ),
    headline: "Konseling Bersama Psikolog Profesional",
    desc: "Ceritakan perasaanmu kepada psikolog berpengalaman. Aman, rahasia, dan terpercaya.",
    color: "#E8F7F1",
    accent: "#1D9E75",
  },
];

export function Onboarding({ onNavigate }: OnboardingProps) {
  const [current, setCurrent] = useState(0);

  const goNext = () => {
    if (current < slides.length - 1) {
      setCurrent(current + 1);
    } else {
      onNavigate("auth");
    }
  };

  const slide = slides[current];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        background: "#FFFFFF",
        fontFamily: "Inter, system-ui, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Skip button */}
      <div style={{ display: "flex", justifyContent: "flex-end", padding: "20px 24px 0" }}>
        <button
          onClick={() => onNavigate("auth")}
          style={{
            background: "none",
            border: "none",
            color: "#888780",
            fontSize: 14,
            fontWeight: 500,
            cursor: "pointer",
            padding: "8px 0",
          }}
        >
          Lewati
        </button>
      </div>

      {/* Illustration area */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: slide.color,
          margin: "24px 24px 0",
          borderRadius: 20,
          minHeight: 240,
        }}
      >
        {slide.illustration}
      </div>

      {/* Content */}
      <div style={{ padding: "32px 28px 40px" }}>
        <h1
          style={{
            fontSize: 26,
            fontWeight: 700,
            color: "#2C2C2A",
            marginBottom: 12,
            lineHeight: 1.3,
          }}
        >
          {slide.headline}
        </h1>
        <p
          style={{
            fontSize: 15,
            color: "#888780",
            lineHeight: 1.6,
            marginBottom: 32,
          }}
        >
          {slide.desc}
        </p>

        {/* Progress dots */}
        <div style={{ display: "flex", gap: 8, marginBottom: 28 }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? 28 : 8,
                height: 8,
                borderRadius: 4,
                background: i === current ? slide.accent : "#E0E0E0",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0,
              }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={goNext}
          style={{
            width: "100%",
            height: 54,
            background: "#1D9E75",
            color: "#FFFFFF",
            border: "none",
            borderRadius: 14,
            fontSize: 16,
            fontWeight: 600,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          {current === slides.length - 1 ? "Mulai Sekarang" : "Selanjutnya"}
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
