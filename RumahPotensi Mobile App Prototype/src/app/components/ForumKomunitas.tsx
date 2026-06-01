import { useState } from "react";
import { Heart, MessageSquare, Plus, Search } from "lucide-react";

type Screen = "home" | "pelatihan" | "konseling" | "komunitas" | "profil" | "onboarding" | "auth" | "test" | "modul" | "progress";

interface ForumKomunitasProps {
  onNavigate: (screen: Screen) => void;
}

const categories = ["Semua", "Berbagi Cerita", "Tips Karier", "Kesehatan Mental"];

const posts = [
  {
    id: 1,
    name: "Rina Pratiwi",
    category: "Berbagi Cerita",
    categoryColor: "#E07B39",
    avatar: "👩",
    avatarBg: "#FFF3E8",
    time: "2 jam lalu",
    title: "Perjalananku belajar desain sambil menjadi tuna rungu",
    preview: "Banyak yang bertanya bagaimana saya bisa belajar desain UI/UX tanpa bisa mendengar. Ini cerita perjuangan saya selama 6 bulan...",
    likes: 48,
    comments: 12,
    liked: false,
  },
  {
    id: 2,
    name: "Dani Saputra",
    category: "Tips Karier",
    categoryColor: "#1D9E75",
    avatar: "👨",
    avatarBg: "#E8F7F1",
    time: "5 jam lalu",
    title: "5 Tips Melamar Kerja untuk Teman Disabilitas",
    preview: "Setelah melamar ke 20+ perusahaan dan akhirnya diterima, ini tips yang saya rangkum khusus untuk kita semua...",
    likes: 92,
    comments: 27,
    liked: true,
  },
  {
    id: 3,
    name: "Mega Wulandari",
    category: "Kesehatan Mental",
    categoryColor: "#7C5CFC",
    avatar: "👩‍🦽",
    avatarBg: "#F0EDFF",
    time: "1 hari lalu",
    title: "Cara saya mengatasi burnout sebagai difabel",
    preview: "Burnout bisa menimpa siapa saja. Berikut strategi yang membantu saya melewati masa-masa tersulit tahun ini...",
    likes: 156,
    comments: 44,
    liked: false,
  },
  {
    id: 4,
    name: "Bagas Nugroho",
    category: "Tips Karier",
    categoryColor: "#1D9E75",
    avatar: "👨‍💼",
    avatarBg: "#E8F7F1",
    time: "2 hari lalu",
    title: "Pengalaman interview kerja di perusahaan tech dengan tuna daksa",
    preview: "Saya ingin berbagi pengalaman interview saya di 3 startup besar. Ternyata banyak hal yang perlu dipersiapkan...",
    likes: 73,
    comments: 19,
    liked: false,
  },
  {
    id: 5,
    name: "Anisa Rahma",
    category: "Berbagi Cerita",
    categoryColor: "#E07B39",
    avatar: "👩‍🦯",
    avatarBg: "#FFF3E8",
    time: "3 hari lalu",
    title: "Memulai bisnis online sebagai tuna netra — mungkin!",
    preview: "Dengan bantuan screen reader dan beberapa adaptasi teknologi, saya berhasil membuka toko online yang kini menghasilkan...",
    likes: 204,
    comments: 58,
    liked: true,
  },
];

export function ForumKomunitas({ onNavigate }: ForumKomunitasProps) {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set([2, 5]));

  const filtered = posts.filter(
    (p) => activeCategory === "Semua" || p.category === activeCategory
  );

  const toggleLike = (id: number) => {
    setLikedPosts((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
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
      <div style={{ background: "#fff", padding: "52px 20px 14px", borderBottom: "1px solid #EEEEEE" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <div>
            <h1 style={{ fontSize: 22, fontWeight: 700, color: "#2C2C2A", margin: "0 0 2px" }}>Komunitas</h1>
            <p style={{ fontSize: 13, color: "#888780", margin: 0 }}>120 anggota aktif</p>
          </div>
          <div
            style={{
              background: "#E8F7F1",
              color: "#1D9E75",
              fontSize: 12,
              fontWeight: 700,
              padding: "6px 14px",
              borderRadius: 20,
            }}
          >
            🔥 Bergabung
          </div>
        </div>

        {/* Category filters */}
        <div style={{ display: "flex", gap: 8, overflowX: "auto" as const, scrollbarWidth: "none" as const }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                height: 34,
                padding: "0 14px",
                borderRadius: 20,
                border: `1.5px solid ${activeCategory === cat ? "#1D9E75" : "#E0E0E0"}`,
                background: activeCategory === cat ? "#1D9E75" : "#fff",
                color: activeCategory === cat ? "#fff" : "#888780",
                fontSize: 12,
                fontWeight: 600,
                cursor: "pointer",
                whiteSpace: "nowrap" as const,
                transition: "all 0.2s ease",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Posts */}
      <div
        style={{
          flex: 1,
          overflowY: "auto" as const,
          padding: "14px 16px 100px",
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        {filtered.map((post) => {
          const isLiked = likedPosts.has(post.id);
          return (
            <div
              key={post.id}
              style={{
                background: "#fff",
                borderRadius: 16,
                padding: 16,
                boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
              }}
            >
              {/* Post header */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: post.avatarBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                    flexShrink: 0,
                  }}
                >
                  {post.avatar}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "#2C2C2A", margin: "0 0 2px" }}>{post.name}</p>
                  <p style={{ fontSize: 11, color: "#888780", margin: 0 }}>{post.time}</p>
                </div>
                <div
                  style={{
                    background: post.categoryColor + "20",
                    color: post.categoryColor,
                    fontSize: 10,
                    fontWeight: 700,
                    padding: "3px 9px",
                    borderRadius: 20,
                    flexShrink: 0,
                  }}
                >
                  {post.category}
                </div>
              </div>

              {/* Post content */}
              <p style={{ fontSize: 14, fontWeight: 700, color: "#2C2C2A", margin: "0 0 6px", lineHeight: 1.4 }}>
                {post.title}
              </p>
              <p style={{ fontSize: 13, color: "#888780", margin: "0 0 12px", lineHeight: 1.5 }}>
                {post.preview}
              </p>

              {/* Post footer */}
              <div style={{ display: "flex", alignItems: "center", gap: 16, borderTop: "1px solid #F5F5F5", paddingTop: 12 }}>
                <button
                  onClick={() => toggleLike(post.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  <Heart
                    size={16}
                    color={isLiked ? "#E07B39" : "#888780"}
                    fill={isLiked ? "#E07B39" : "none"}
                  />
                  <span style={{ fontSize: 12, color: isLiked ? "#E07B39" : "#888780", fontWeight: isLiked ? 600 : 400 }}>
                    {isLiked ? post.likes + 1 : post.likes}
                  </span>
                </button>
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  <MessageSquare size={16} color="#888780" />
                  <span style={{ fontSize: 12, color: "#888780" }}>{post.comments}</span>
                </button>
                <button
                  style={{
                    marginLeft: "auto",
                    background: "none",
                    border: "none",
                    color: "#1D9E75",
                    fontSize: 12,
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Baca selengkapnya →
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating Action Button */}
      <button
        style={{
          position: "absolute",
          bottom: 88,
          right: 20,
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: "#E07B39",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 4px 16px rgba(224,123,57,0.4)",
          zIndex: 40,
        }}
      >
        <Plus size={24} color="#fff" />
      </button>
    </div>
  );
}
