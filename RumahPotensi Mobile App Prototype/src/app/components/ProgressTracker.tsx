import { Award, BookOpen, ChevronRight, TrendingUp } from "lucide-react";

type Screen = "home" | "pelatihan" | "konseling" | "komunitas" | "profil" | "onboarding" | "auth" | "test" | "modul" | "progress";

interface ProgressTrackerProps {
  onNavigate: (screen: Screen) => void;
}

const completed = [
  { title: "Pengenalan Digital Marketing", category: "Bisnis", catColor: "#E07B39", score: 92, emoji: "📊" },
  { title: "Microsoft Office Essentials", category: "Teknologi", catColor: "#1D9E75", score: 88, emoji: "📋" },
];

const ongoing = [
  { title: "UI/UX Design Dasar", progress: 65, total: "12 jam", done: "7.8 jam", emoji: "🎨", color: "#E07B39" },
  { title: "Coding HTML & CSS", progress: 30, total: "18 jam", done: "5.4 jam", emoji: "💻", color: "#1D9E75" },
];

const recommended = [
  { title: "Figma untuk Pemula", category: "Desain", duration: "10 jam", emoji: "✏️", bgColor: "#FFF3E8", catColor: "#E07B39" },
  { title: "React JS Dasar", category: "Teknologi", duration: "22 jam", emoji: "⚛️", bgColor: "#E8F7F1", catColor: "#1D9E75" },
];

function CircularProgress({ value, size = 120 }: { value: number; size?: number }) {
  const radius = (size - 20) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#EEEEEE" strokeWidth={10} />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#1D9E75"
        strokeWidth={10}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        style={{ transition: "stroke-dashoffset 0.5s ease" }}
      />
    </svg>
  );
}

export function ProgressTracker({ onNavigate }: ProgressTrackerProps) {
  const overallProgress = 42;
  const totalXP = 1240;
  const streak = 7;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        background: "#F5F5F5",
        fontFamily: "Inter, system-ui, sans-serif",
        overflowY: "auto" as const,
        paddingBottom: 88,
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "#1D9E75",
          padding: "52px 24px 28px",
          borderBottomLeftRadius: 28,
          borderBottomRightRadius: 28,
        }}
      >
        <h1 style={{ fontSize: 22, fontWeight: 700, color: "#fff", margin: "0 0 4px" }}>Progress Belajar</h1>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", margin: "0 0 24px" }}>Semangat terus, Aliya! 💪</p>

        {/* Circular chart + stats */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ position: "relative", width: 120, height: 120 }}>
            <CircularProgress value={overallProgress} size={120} />
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: 26, fontWeight: 800, color: "#fff" }}>{overallProgress}%</span>
              <span style={{ fontSize: 10, color: "rgba(255,255,255,0.7)" }}>Total</span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
            {[
              { label: "Total XP", value: `${totalXP} XP`, icon: "⚡" },
              { label: "Streak Belajar", value: `${streak} Hari`, icon: "🔥" },
              { label: "Modul Selesai", value: "2 Modul", icon: "✅" },
            ].map((stat) => (
              <div key={stat.label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 18 }}>{stat.icon}</span>
                <div>
                  <p style={{ fontSize: 16, fontWeight: 700, color: "#fff", margin: 0 }}>{stat.value}</p>
                  <p style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", margin: 0 }}>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding: "20px 16px", display: "flex", flexDirection: "column", gap: 20 }}>
        {/* Pelatihan Selesai */}
        <section>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <h2 style={{ fontSize: 16, fontWeight: 700, color: "#2C2C2A", margin: 0 }}>
              <Award size={16} color="#E07B39" style={{ marginRight: 6, verticalAlign: "middle" }} />
              Pelatihan Selesai
            </h2>
            <span style={{ fontSize: 12, color: "#888780" }}>{completed.length} sertifikat</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {completed.map((course) => (
              <div
                key={course.title}
                style={{
                  background: "#fff",
                  borderRadius: 14,
                  padding: "14px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 12,
                    background: "#FFF9E6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 22,
                    flexShrink: 0,
                  }}
                >
                  🏆
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "#2C2C2A", margin: "0 0 4px" }}>{course.title}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div
                      style={{
                        background: course.catColor + "20",
                        color: course.catColor,
                        fontSize: 10,
                        fontWeight: 700,
                        padding: "2px 8px",
                        borderRadius: 10,
                      }}
                    >
                      {course.category}
                    </div>
                    <span style={{ fontSize: 11, color: "#888780" }}>Nilai: {course.score}/100</span>
                  </div>
                </div>
                <div
                  style={{
                    background: "#E8F7F1",
                    color: "#1D9E75",
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "6px 12px",
                    borderRadius: 10,
                  }}
                >
                  Sertifikat
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sedang Berjalan */}
        <section>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <h2 style={{ fontSize: 16, fontWeight: 700, color: "#2C2C2A", margin: 0 }}>
              <TrendingUp size={16} color="#1D9E75" style={{ marginRight: 6, verticalAlign: "middle" }} />
              Sedang Berjalan
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {ongoing.map((course) => (
              <button
                key={course.title}
                onClick={() => onNavigate("modul")}
                style={{
                  background: "#fff",
                  borderRadius: 14,
                  padding: "14px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left" as const,
                  width: "100%",
                }}
              >
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 12,
                    background: course.color + "20",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 22,
                    flexShrink: 0,
                  }}
                >
                  {course.emoji}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "#2C2C2A", margin: "0 0 4px" }}>{course.title}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span style={{ fontSize: 11, color: "#888780" }}>{course.done} / {course.total}</span>
                    <span style={{ fontSize: 11, fontWeight: 700, color: course.color }}>{course.progress}%</span>
                  </div>
                  <div style={{ height: 6, borderRadius: 3, background: "#EEE", overflow: "hidden" }}>
                    <div
                      style={{
                        width: `${course.progress}%`,
                        height: "100%",
                        background: course.color,
                        borderRadius: 3,
                      }}
                    />
                  </div>
                </div>
                <ChevronRight size={16} color="#C0C0C0" />
              </button>
            ))}
          </div>
        </section>

        {/* Rekomendasi Selanjutnya */}
        <section>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <h2 style={{ fontSize: 16, fontWeight: 700, color: "#2C2C2A", margin: 0 }}>
              <BookOpen size={16} color="#7C5CFC" style={{ marginRight: 6, verticalAlign: "middle" }} />
              Rekomendasi Selanjutnya
            </h2>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            {recommended.map((course) => (
              <button
                key={course.title}
                onClick={() => onNavigate("modul")}
                style={{
                  flex: 1,
                  background: "#fff",
                  borderRadius: 14,
                  padding: 14,
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left" as const,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: 72,
                    borderRadius: 10,
                    background: course.bgColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 30,
                    marginBottom: 10,
                  }}
                >
                  {course.emoji}
                </div>
                <div
                  style={{
                    background: course.bgColor,
                    color: course.catColor,
                    fontSize: 10,
                    fontWeight: 700,
                    padding: "2px 8px",
                    borderRadius: 10,
                    display: "inline-block",
                    marginBottom: 6,
                  }}
                >
                  {course.category}
                </div>
                <p style={{ fontSize: 12, fontWeight: 600, color: "#2C2C2A", margin: "0 0 4px", lineHeight: 1.3 }}>
                  {course.title}
                </p>
                <p style={{ fontSize: 11, color: "#888780", margin: 0 }}>⏱ {course.duration}</p>
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
