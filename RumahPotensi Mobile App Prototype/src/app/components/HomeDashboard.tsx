import { Bell, BookOpen, MessageCircle, Users, ChevronRight, Play } from "lucide-react";

type Screen = "home" | "pelatihan" | "konseling" | "komunitas" | "profil" | "onboarding" | "auth" | "test" | "modul" | "progress";

interface HomeDashboardProps {
  onNavigate: (screen: Screen) => void;
}

const courses = [
  {
    title: "UI/UX Design Dasar",
    category: "Desain",
    categoryColor: "#E07B39",
    progress: 65,
    duration: "12 jam",
    emoji: "🎨",
    bgColor: "#FFF3E8",
  },
  {
    title: "Coding HTML & CSS",
    category: "Teknologi",
    categoryColor: "#1D9E75",
    progress: 30,
    duration: "18 jam",
    emoji: "💻",
    bgColor: "#E8F7F1",
  },
];

const psychologists = [
  {
    name: "dr. Sari Dewi, M.Psi",
    specialty: "Psikologi Klinis",
    available: true,
    rating: 4.9,
    emoji: "👩‍⚕️",
    color: "#E8F7F1",
  },
  {
    name: "dr. Budi Santoso, M.Psi",
    specialty: "Konseling Karier",
    available: true,
    rating: 4.8,
    emoji: "👨‍⚕️",
    color: "#F0EDFF",
  },
];

export function HomeDashboard({ onNavigate }: HomeDashboardProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        background: "#F5F5F5",
        fontFamily: "Inter, system-ui, sans-serif",
        overflowY: "auto" as const,
        paddingBottom: 80,
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "#1D9E75",
          padding: "52px 24px 32px",
          borderBottomLeftRadius: 28,
          borderBottomRightRadius: 28,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", margin: "0 0 4px" }}>Selamat datang kembali 👋</p>
            <h1 style={{ fontSize: 24, fontWeight: 700, color: "#fff", margin: 0 }}>Halo, Aliya!</h1>
          </div>
          <button
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "rgba(255,255,255,0.2)",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              position: "relative",
            }}
          >
            <Bell size={22} color="#fff" />
            <div
              style={{
                position: "absolute",
                top: 8,
                right: 8,
                width: 10,
                height: 10,
                background: "#E07B39",
                borderRadius: "50%",
                border: "2px solid #1D9E75",
              }}
            />
          </button>
        </div>

        {/* Quick stats */}
        <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
          {[
            { label: "Modul Aktif", value: "2", icon: BookOpen, color: "rgba(255,255,255,0.2)" },
            { label: "Sesi Konseling", value: "1", icon: MessageCircle, color: "rgba(255,255,255,0.2)" },
            { label: "Anggota", value: "120", icon: Users, color: "rgba(255,255,255,0.2)" },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                style={{
                  flex: 1,
                  background: "rgba(255,255,255,0.15)",
                  borderRadius: 14,
                  padding: "12px 10px",
                  textAlign: "center" as const,
                }}
              >
                <Icon size={18} color="rgba(255,255,255,0.9)" style={{ marginBottom: 6 }} />
                <p style={{ fontSize: 20, fontWeight: 700, color: "#fff", margin: "0 0 2px" }}>{stat.value}</p>
                <p style={{ fontSize: 10, color: "rgba(255,255,255,0.75)", margin: 0, lineHeight: 1.3 }}>{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ padding: "24px 20px", display: "flex", flexDirection: "column", gap: 24 }}>
        {/* Lanjutkan Pelatihan */}
        <section>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <h2 style={{ fontSize: 17, fontWeight: 700, color: "#2C2C2A", margin: 0 }}>Lanjutkan Pelatihan</h2>
            <button
              onClick={() => onNavigate("pelatihan")}
              style={{
                background: "none",
                border: "none",
                color: "#1D9E75",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              Lihat semua <ChevronRight size={14} />
            </button>
          </div>
          <div style={{ display: "flex", gap: 12, overflowX: "auto" as const, paddingBottom: 4, scrollbarWidth: "none" as const }}>
            {courses.map((course) => (
              <button
                key={course.title}
                onClick={() => onNavigate("modul")}
                style={{
                  minWidth: 200,
                  background: "#fff",
                  borderRadius: 16,
                  border: "none",
                  padding: 16,
                  cursor: "pointer",
                  textAlign: "left" as const,
                  boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: 90,
                    borderRadius: 12,
                    background: course.bgColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 12,
                    fontSize: 36,
                  }}
                >
                  {course.emoji}
                </div>
                <div
                  style={{
                    display: "inline-block",
                    background: course.bgColor,
                    color: course.categoryColor,
                    fontSize: 11,
                    fontWeight: 600,
                    padding: "3px 10px",
                    borderRadius: 20,
                    marginBottom: 8,
                  }}
                >
                  {course.category}
                </div>
                <p style={{ fontSize: 14, fontWeight: 600, color: "#2C2C2A", margin: "0 0 10px", lineHeight: 1.4 }}>
                  {course.title}
                </p>
                <div style={{ marginBottom: 6 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                    <span style={{ fontSize: 11, color: "#888780" }}>{course.duration}</span>
                    <span style={{ fontSize: 11, fontWeight: 600, color: "#1D9E75" }}>{course.progress}%</span>
                  </div>
                  <div style={{ height: 5, borderRadius: 3, background: "#EEE", overflow: "hidden" }}>
                    <div style={{ width: `${course.progress}%`, height: "100%", background: "#1D9E75", borderRadius: 3 }} />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    color: "#1D9E75",
                    fontSize: 12,
                    fontWeight: 600,
                    marginTop: 10,
                  }}
                >
                  <Play size={12} fill="#1D9E75" />
                  Lanjutkan
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Psikolog Tersedia */}
        <section>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <h2 style={{ fontSize: 17, fontWeight: 700, color: "#2C2C2A", margin: 0 }}>Psikolog Tersedia</h2>
            <button
              onClick={() => onNavigate("konseling")}
              style={{
                background: "none",
                border: "none",
                color: "#1D9E75",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              Lihat semua <ChevronRight size={14} />
            </button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {psychologists.map((psy) => (
              <div
                key={psy.name}
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  padding: 16,
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: psy.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 26,
                    flexShrink: 0,
                  }}
                >
                  {psy.emoji}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "#2C2C2A", margin: "0 0 3px" }}>{psy.name}</p>
                  <p style={{ fontSize: 12, color: "#888780", margin: "0 0 6px" }}>{psy.specialty}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    {psy.available && (
                      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                        <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#1D9E75" }} />
                        <span style={{ fontSize: 11, color: "#1D9E75", fontWeight: 600 }}>Online</span>
                      </div>
                    )}
                    <span style={{ fontSize: 11, color: "#888780" }}>⭐ {psy.rating}</span>
                  </div>
                </div>
                <button
                  onClick={() => onNavigate("konseling")}
                  style={{
                    background: "#E8F7F1",
                    color: "#1D9E75",
                    border: "none",
                    borderRadius: 10,
                    padding: "8px 14px",
                    fontSize: 12,
                    fontWeight: 600,
                    cursor: "pointer",
                    whiteSpace: "nowrap" as const,
                  }}
                >
                  Chat Sekarang
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Banner komunitas */}
        <button
          onClick={() => onNavigate("komunitas")}
          style={{
            width: "100%",
            background: "#E07B39",
            borderRadius: 16,
            padding: "18px 20px",
            border: "none",
            cursor: "pointer",
            textAlign: "left" as const,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p style={{ fontSize: 16, fontWeight: 700, color: "#fff", margin: "0 0 4px" }}>
              👥 Gabung Komunitas
            </p>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", margin: 0 }}>
              120 anggota aktif siap mendukungmu
            </p>
          </div>
          <ChevronRight size={22} color="rgba(255,255,255,0.9)" />
        </button>
      </div>
    </div>
  );
}
