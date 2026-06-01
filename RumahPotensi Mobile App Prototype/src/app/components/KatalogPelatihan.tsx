import { useState } from "react";
import { Search, Clock, ChevronRight } from "lucide-react";

type Screen = "home" | "pelatihan" | "konseling" | "komunitas" | "profil" | "onboarding" | "auth" | "test" | "modul" | "progress";

interface KatalogPelatihanProps {
  onNavigate: (screen: Screen) => void;
}

const filters = ["Semua", "Desain", "Teknologi", "Bisnis", "Seni"];

const courses = [
  { title: "UI/UX Design Dasar", category: "Desain", duration: "12 jam", progress: 65, emoji: "🎨", bgColor: "#FFF3E8", catColor: "#E07B39", badge: "Populer" },
  { title: "Coding HTML & CSS", category: "Teknologi", duration: "18 jam", progress: 30, emoji: "💻", bgColor: "#E8F7F1", catColor: "#1D9E75", badge: null },
  { title: "Public Speaking untuk Disabilitas", category: "Seni", duration: "8 jam", progress: 0, emoji: "🎤", bgColor: "#F0EDFF", catColor: "#7C5CFC", badge: "Baru" },
  { title: "Kewirausahaan Digital", category: "Bisnis", duration: "15 jam", progress: 0, emoji: "📈", bgColor: "#FFF3E8", catColor: "#E07B39", badge: null },
  { title: "Desain Grafis Dasar", category: "Desain", duration: "10 jam", progress: 0, emoji: "🖌️", bgColor: "#FFF3E8", catColor: "#E07B39", badge: null },
  { title: "Python untuk Pemula", category: "Teknologi", duration: "20 jam", progress: 0, emoji: "🐍", bgColor: "#E8F7F1", catColor: "#1D9E75", badge: "Baru" },
];

export function KatalogPelatihan({ onNavigate }: KatalogPelatihanProps) {
  const [activeFilter, setActiveFilter] = useState("Semua");
  const [search, setSearch] = useState("");

  const filtered = courses.filter((c) => {
    const matchFilter = activeFilter === "Semua" || c.category === activeFilter;
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

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
      <div style={{ background: "#fff", padding: "52px 20px 16px", borderBottom: "1px solid #EEEEEE" }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, color: "#2C2C2A", margin: "0 0 16px" }}>Katalog Pelatihan</h1>

        {/* Search */}
        <div style={{ position: "relative", marginBottom: 14 }}>
          <Search
            size={18}
            color="#888780"
            style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }}
          />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari pelatihan..."
            style={{
              width: "100%",
              height: 48,
              borderRadius: 12,
              border: "1.5px solid #E8E8E8",
              background: "#F5F5F5",
              paddingLeft: 44,
              paddingRight: 16,
              fontSize: 14,
              color: "#2C2C2A",
              outline: "none",
              fontFamily: "inherit",
              boxSizing: "border-box" as const,
            }}
          />
        </div>

        {/* Filter chips */}
        <div style={{ display: "flex", gap: 8, overflowX: "auto" as const, scrollbarWidth: "none" as const, paddingBottom: 2 }}>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                height: 36,
                padding: "0 16px",
                borderRadius: 20,
                border: `1.5px solid ${activeFilter === f ? "#1D9E75" : "#E0E0E0"}`,
                background: activeFilter === f ? "#1D9E75" : "#fff",
                color: activeFilter === f ? "#fff" : "#888780",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                whiteSpace: "nowrap" as const,
                transition: "all 0.2s ease",
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Course grid */}
      <div
        style={{
          flex: 1,
          overflowY: "auto" as const,
          padding: "16px 16px 88px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 12,
          alignContent: "start",
        }}
      >
        {filtered.map((course) => (
          <button
            key={course.title}
            onClick={() => onNavigate("modul")}
            style={{
              background: "#fff",
              borderRadius: 16,
              border: "none",
              padding: 14,
              cursor: "pointer",
              textAlign: "left" as const,
              boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Thumbnail */}
            <div
              style={{
                width: "100%",
                height: 80,
                borderRadius: 10,
                background: course.bgColor,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 10,
                fontSize: 32,
                position: "relative",
              }}
            >
              {course.emoji}
              {course.badge && (
                <div
                  style={{
                    position: "absolute",
                    top: 6,
                    right: 6,
                    background: course.badge === "Baru" ? "#1D9E75" : "#E07B39",
                    color: "#fff",
                    fontSize: 9,
                    fontWeight: 700,
                    padding: "2px 7px",
                    borderRadius: 10,
                  }}
                >
                  {course.badge}
                </div>
              )}
            </div>

            {/* Category */}
            <div
              style={{
                display: "inline-block",
                background: course.bgColor,
                color: course.catColor,
                fontSize: 10,
                fontWeight: 700,
                padding: "2px 9px",
                borderRadius: 10,
                marginBottom: 6,
                alignSelf: "flex-start",
              }}
            >
              {course.category}
            </div>

            {/* Title */}
            <p
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: "#2C2C2A",
                margin: "0 0 8px",
                lineHeight: 1.4,
              }}
            >
              {course.title}
            </p>

            {/* Duration */}
            <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 8 }}>
              <Clock size={11} color="#888780" />
              <span style={{ fontSize: 11, color: "#888780" }}>{course.duration}</span>
            </div>

            {/* Progress */}
            {course.progress > 0 ? (
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{ fontSize: 10, color: "#888780" }}>Progress</span>
                  <span style={{ fontSize: 10, fontWeight: 600, color: "#1D9E75" }}>{course.progress}%</span>
                </div>
                <div style={{ height: 4, borderRadius: 2, background: "#EEE", overflow: "hidden" }}>
                  <div style={{ width: `${course.progress}%`, height: "100%", background: "#1D9E75", borderRadius: 2 }} />
                </div>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  color: "#1D9E75",
                  fontSize: 12,
                  fontWeight: 600,
                }}
              >
                Mulai Sekarang <ChevronRight size={12} />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
