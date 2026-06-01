import { useState } from "react";
import { ArrowLeft, Play, Pause, Subtitles, BookOpen, HelpCircle, MessageSquare, ChevronRight } from "lucide-react";

type Screen = "home" | "pelatihan" | "konseling" | "komunitas" | "profil" | "onboarding" | "auth" | "test" | "modul" | "progress";

interface ModulPelatihanProps {
  onNavigate: (screen: Screen) => void;
}

const tabs = ["Materi", "Kuis", "Diskusi"];

const materials = [
  { title: "1. Pengenalan UI/UX Design", duration: "12 menit", done: true },
  { title: "2. Prinsip Desain Inklusif", duration: "18 menit", done: true },
  { title: "3. Riset Pengguna Disabilitas", duration: "22 menit", done: false, active: true },
  { title: "4. Wireframing & Prototyping", duration: "25 menit", done: false },
  { title: "5. Presentasi Desain", duration: "15 menit", done: false },
];

export function ModulPelatihan({ onNavigate }: ModulPelatihanProps) {
  const [activeTab, setActiveTab] = useState("Materi");
  const [playing, setPlaying] = useState(false);
  const [ccOn, setCcOn] = useState(true);
  const [progress, setProgress] = useState(35);

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
      {/* Video Player area */}
      <div
        style={{
          background: "#1A1A1A",
          position: "relative",
          paddingTop: 52,
        }}
      >
        {/* Back button */}
        <button
          onClick={() => onNavigate("pelatihan")}
          style={{
            position: "absolute",
            top: 52,
            left: 16,
            width: 36,
            height: 36,
            borderRadius: 10,
            background: "rgba(255,255,255,0.15)",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 10,
          }}
        >
          <ArrowLeft size={18} color="#fff" />
        </button>

        {/* Video area */}
        <div
          style={{
            width: "100%",
            height: 200,
            background: "#2C2C2A",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background grid */}
          <div style={{ position: "absolute", inset: 0, opacity: 0.1 }}>
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} style={{ position: "absolute", left: `${i * 20}%`, top: 0, bottom: 0, width: 1, background: "#fff" }} />
            ))}
          </div>

          {/* Play button */}
          <button
            onClick={() => setPlaying(!playing)}
            style={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              background: "rgba(29,158,117,0.9)",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 1,
            }}
          >
            {playing ? <Pause size={24} color="#fff" fill="#fff" /> : <Play size={24} color="#fff" fill="#fff" />}
          </button>

          {/* CC subtitle */}
          {ccOn && (
            <div
              style={{
                position: "absolute",
                bottom: 12,
                left: 20,
                right: 20,
                background: "rgba(0,0,0,0.7)",
                color: "#fff",
                fontSize: 12,
                padding: "6px 12px",
                borderRadius: 6,
                textAlign: "center" as const,
              }}
            >
              "Riset pengguna membantu kita memahami kebutuhan pengguna disabilitas..."
            </div>
          )}

          {/* Duration label */}
          <div style={{ position: "absolute", top: 12, right: 12, background: "rgba(0,0,0,0.6)", color: "#fff", fontSize: 11, padding: "3px 8px", borderRadius: 6 }}>
            22:14
          </div>
        </div>

        {/* Scrubber */}
        <div style={{ padding: "12px 16px 0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
            <span style={{ fontSize: 11, color: "#888780" }}>7:46</span>
            <span style={{ fontSize: 11, color: "#888780" }}>22:14</span>
          </div>
          <div
            style={{ height: 4, borderRadius: 2, background: "#3A3A3A", cursor: "pointer", position: "relative" }}
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const pct = ((e.clientX - rect.left) / rect.width) * 100;
              setProgress(Math.min(100, Math.max(0, pct)));
            }}
          >
            <div style={{ width: `${progress}%`, height: "100%", background: "#1D9E75", borderRadius: 2 }} />
            <div
              style={{
                position: "absolute",
                left: `${progress}%`,
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "#1D9E75",
                border: "2px solid #fff",
              }}
            />
          </div>
        </div>

        {/* Controls row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 16px 14px" }}>
          <span style={{ fontSize: 12, color: "#888780" }}>Modul 3 dari 5</span>
          <button
            onClick={() => setCcOn(!ccOn)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              background: ccOn ? "rgba(29,158,117,0.2)" : "rgba(255,255,255,0.1)",
              border: "none",
              borderRadius: 8,
              padding: "6px 12px",
              cursor: "pointer",
              color: ccOn ? "#1D9E75" : "#888780",
              fontSize: 12,
              fontWeight: 600,
            }}
          >
            <Subtitles size={14} />
            CC {ccOn ? "ON" : "OFF"}
          </button>
        </div>
      </div>

      {/* Title */}
      <div style={{ background: "#fff", padding: "16px 20px", borderBottom: "1px solid #EEEEEE" }}>
        <div
          style={{
            display: "inline-block",
            background: "#FFF3E8",
            color: "#E07B39",
            fontSize: 11,
            fontWeight: 600,
            padding: "3px 10px",
            borderRadius: 10,
            marginBottom: 6,
          }}
        >
          Desain
        </div>
        <h2 style={{ fontSize: 16, fontWeight: 700, color: "#2C2C2A", margin: "0 0 4px" }}>UI/UX Design Dasar</h2>
        <p style={{ fontSize: 13, color: "#888780", margin: 0 }}>oleh Instructor Budi Wahyu · ⭐ 4.9 (238 ulasan)</p>
      </div>

      {/* Tabs */}
      <div style={{ background: "#fff", display: "flex", borderBottom: "1px solid #EEEEEE" }}>
        {tabs.map((tab) => {
          const Icon = tab === "Materi" ? BookOpen : tab === "Kuis" ? HelpCircle : MessageSquare;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                flex: 1,
                height: 44,
                border: "none",
                borderBottom: `2.5px solid ${activeTab === tab ? "#1D9E75" : "transparent"}`,
                background: "transparent",
                color: activeTab === tab ? "#1D9E75" : "#888780",
                fontSize: 13,
                fontWeight: activeTab === tab ? 700 : 500,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
              }}
            >
              <Icon size={15} />
              {tab}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: "auto" as const, padding: "16px 16px 88px" }}>
        {activeTab === "Materi" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {materials.map((mat) => (
              <div
                key={mat.title}
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  padding: "14px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  border: mat.active ? "2px solid #1D9E75" : "2px solid transparent",
                  boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: mat.done ? "#1D9E75" : mat.active ? "#E8F7F1" : "#F5F5F5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {mat.done ? (
                    <span style={{ fontSize: 14 }}>✓</span>
                  ) : mat.active ? (
                    <Play size={12} color="#1D9E75" fill="#1D9E75" />
                  ) : (
                    <Play size={12} color="#C0C0C0" />
                  )}
                </div>
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontSize: 13,
                      fontWeight: mat.active ? 700 : 500,
                      color: mat.done ? "#888780" : "#2C2C2A",
                      margin: "0 0 3px",
                    }}
                  >
                    {mat.title}
                  </p>
                  <p style={{ fontSize: 11, color: "#888780", margin: 0 }}>{mat.duration}</p>
                </div>
                {mat.active && (
                  <div
                    style={{
                      background: "#1D9E75",
                      color: "#fff",
                      fontSize: 10,
                      fontWeight: 700,
                      padding: "3px 8px",
                      borderRadius: 8,
                    }}
                  >
                    Aktif
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === "Kuis" && (
          <div style={{ textAlign: "center" as const, padding: "40px 20px" }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>📝</div>
            <p style={{ fontSize: 15, fontWeight: 600, color: "#2C2C2A", margin: "0 0 8px" }}>Kuis Modul 1 & 2</p>
            <p style={{ fontSize: 13, color: "#888780", margin: "0 0 20px" }}>Selesaikan modul terlebih dahulu sebelum mengerjakan kuis.</p>
            <div style={{ background: "#E8F7F1", borderRadius: 12, padding: 16, textAlign: "left" as const }}>
              <p style={{ fontSize: 13, color: "#1D9E75", fontWeight: 600, margin: "0 0 4px" }}>✓ Kuis Modul 1 — Selesai (85%)</p>
              <p style={{ fontSize: 13, color: "#1D9E75", fontWeight: 600, margin: 0 }}>✓ Kuis Modul 2 — Selesai (90%)</p>
            </div>
          </div>
        )}

        {activeTab === "Diskusi" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { name: "Rina P.", time: "2 jam lalu", msg: "Apakah ada contoh nyata desain inklusif yang bisa kita jadikan referensi?", likes: 5 },
              { name: "Dani S.", time: "5 jam lalu", msg: "Materi modul 2 sangat membantu sekali! Terima kasih instrukturnya 🙌", likes: 12 },
            ].map((post) => (
              <div key={post.name} style={{ background: "#fff", borderRadius: 12, padding: 14, boxShadow: "0 1px 6px rgba(0,0,0,0.05)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#E8F7F1", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>
                    👤
                  </div>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 600, color: "#2C2C2A", margin: 0 }}>{post.name}</p>
                    <p style={{ fontSize: 11, color: "#888780", margin: 0 }}>{post.time}</p>
                  </div>
                </div>
                <p style={{ fontSize: 13, color: "#2C2C2A", margin: "0 0 10px", lineHeight: 1.5 }}>{post.msg}</p>
                <div style={{ display: "flex", gap: 16 }}>
                  <button style={{ background: "none", border: "none", color: "#888780", fontSize: 12, cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}>
                    👍 {post.likes}
                  </button>
                  <button style={{ background: "none", border: "none", color: "#1D9E75", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                    Balas
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Sticky bottom button */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "12px 20px 24px", background: "#fff", borderTop: "1px solid #EEEEEE" }}>
        <button
          style={{
            width: "100%",
            height: 52,
            background: "#1D9E75",
            color: "#fff",
            border: "none",
            borderRadius: 14,
            fontSize: 15,
            fontWeight: 700,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          Kerjakan Kuis <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
