import { useState } from "react";
import { ArrowLeft, Check } from "lucide-react";

type Screen = "home" | "pelatihan" | "konseling" | "komunitas" | "profil" | "onboarding" | "auth" | "test" | "modul" | "progress";

interface TestPotensiProps {
  onNavigate: (screen: Screen) => void;
}

const questions = [
  {
    q: "Bidang apa yang paling menarik minatmu?",
    options: ["🎨 Desain", "💻 Teknologi", "📈 Bisnis", "🎭 Seni", "✨ Lainnya"],
  },
  {
    q: "Seberapa nyaman kamu bekerja dengan orang lain?",
    options: ["Sangat nyaman", "Cukup nyaman", "Kadang-kadang", "Lebih suka sendiri", "Tergantung situasi"],
  },
  {
    q: "Apa tujuan utama kamu bergabung di RumahPotensi?",
    options: ["Belajar skill baru", "Mencari pekerjaan", "Mengembangkan bisnis", "Dukungan komunitas", "Konseling psikologi"],
  },
  {
    q: "Berapa jam dalam sehari kamu bisa belajar?",
    options: ["Kurang dari 1 jam", "1–2 jam", "2–3 jam", "Lebih dari 3 jam", "Fleksibel"],
  },
  {
    q: "Perangkat apa yang biasa kamu gunakan?",
    options: ["Smartphone", "Laptop/PC", "Tablet", "Kombinasi keduanya", "Tergantung koneksi"],
  },
];

export function TestPotensi({ onNavigate }: TestPotensiProps) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [answers, setAnswers] = useState<string[]>([]);

  const progress = ((current + 1) / questions.length) * 100;
  const q = questions[current];

  const handleNext = () => {
    if (!selected) return;
    const newAnswers = [...answers, selected];
    setAnswers(newAnswers);
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      onNavigate("home");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        background: "#F5F5F5",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "#fff",
          padding: "52px 24px 20px",
          borderBottom: "1px solid #EEEEEE",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <button
            onClick={() => onNavigate("auth")}
            style={{
              width: 40,
              height: 40,
              borderRadius: 12,
              border: "1.5px solid #EEEEEE",
              background: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <ArrowLeft size={20} color="#2C2C2A" />
          </button>
          <div>
            <h1 style={{ fontSize: 18, fontWeight: 700, color: "#2C2C2A", margin: 0 }}>Tes Potensi Diri</h1>
            <p style={{ fontSize: 13, color: "#888780", margin: 0 }}>Bantu kami mengenalmu lebih baik</p>
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              flex: 1,
              height: 8,
              borderRadius: 4,
              background: "#E8E8E8",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${progress}%`,
                background: "#1D9E75",
                borderRadius: 4,
                transition: "width 0.4s ease",
              }}
            />
          </div>
          <span style={{ fontSize: 13, fontWeight: 600, color: "#1D9E75", minWidth: 36 }}>
            {current + 1}/{questions.length}
          </span>
        </div>
      </div>

      {/* Question card */}
      <div style={{ padding: "24px 20px", flex: 1, overflowY: "auto" as const }}>
        <div
          style={{
            background: "#fff",
            borderRadius: 20,
            padding: "24px 20px",
            marginBottom: 16,
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "#E8F7F1",
              color: "#1D9E75",
              fontSize: 12,
              fontWeight: 600,
              padding: "4px 12px",
              borderRadius: 20,
              marginBottom: 16,
            }}
          >
            Pertanyaan {current + 1}
          </div>
          <p
            style={{
              fontSize: 17,
              fontWeight: 600,
              color: "#2C2C2A",
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            {q.q}
          </p>
        </div>

        {/* Options */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {q.options.map((option) => {
            const isSelected = selected === option;
            return (
              <button
                key={option}
                onClick={() => setSelected(option)}
                style={{
                  width: "100%",
                  minHeight: 56,
                  borderRadius: 14,
                  border: `2px solid ${isSelected ? "#1D9E75" : "#E8E8E8"}`,
                  background: isSelected ? "#E8F7F1" : "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 18px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  textAlign: "left" as const,
                }}
              >
                <span
                  style={{
                    fontSize: 15,
                    fontWeight: isSelected ? 600 : 400,
                    color: isSelected ? "#1D9E75" : "#2C2C2A",
                  }}
                >
                  {option}
                </span>
                {isSelected && (
                  <div
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background: "#1D9E75",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Check size={14} color="#fff" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom button */}
      <div style={{ padding: "16px 20px 32px", background: "#fff", borderTop: "1px solid #EEEEEE" }}>
        <button
          onClick={handleNext}
          disabled={!selected}
          style={{
            width: "100%",
            height: 54,
            background: selected ? "#1D9E75" : "#E0E0E0",
            color: selected ? "#fff" : "#888780",
            border: "none",
            borderRadius: 14,
            fontSize: 16,
            fontWeight: 600,
            cursor: selected ? "pointer" : "not-allowed",
            transition: "all 0.2s ease",
          }}
        >
          {current === questions.length - 1 ? "Lihat Hasil" : "Lanjutkan →"}
        </button>
      </div>
    </div>
  );
}
