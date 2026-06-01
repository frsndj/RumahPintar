import { useState } from "react";
import { Eye, EyeOff, ChevronDown } from "lucide-react";

type Screen = "home" | "pelatihan" | "konseling" | "komunitas" | "profil" | "onboarding" | "auth" | "test" | "modul" | "progress";

interface AuthScreenProps {
  onNavigate: (screen: Screen) => void;
}

export function AuthScreen({ onNavigate }: AuthScreenProps) {
  const [tab, setTab] = useState<"daftar" | "masuk">("daftar");
  const [showPassword, setShowPassword] = useState(false);
  const [disability, setDisability] = useState("");
  const [role, setRole] = useState("");

  const inputStyle = {
    width: "100%",
    height: 52,
    borderRadius: 12,
    border: "1.5px solid #E8E8E8",
    background: "#F5F5F5",
    padding: "0 16px",
    fontSize: 15,
    color: "#2C2C2A",
    outline: "none",
    fontFamily: "Inter, system-ui, sans-serif",
    boxSizing: "border-box" as const,
  };

  const labelStyle = {
    fontSize: 13,
    fontWeight: 600,
    color: "#2C2C2A",
    marginBottom: 6,
    display: "block" as const,
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        background: "#FFFFFF",
        fontFamily: "Inter, system-ui, sans-serif",
        overflowY: "auto" as const,
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "#1D9E75",
          padding: "52px 28px 36px",
          borderBottomLeftRadius: 28,
          borderBottomRightRadius: 28,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontSize: 18 }}>🏠</span>
          </div>
          <span style={{ fontSize: 20, fontWeight: 800, color: "#fff" }}>RumahPotensi</span>
        </div>
        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", marginTop: 4 }}>
          Platform inklusif untuk teman disabilitas
        </p>
      </div>

      {/* Tabs */}
      <div style={{ padding: "24px 24px 0" }}>
        <div
          style={{
            display: "flex",
            background: "#F5F5F5",
            borderRadius: 12,
            padding: 4,
            marginBottom: 24,
          }}
        >
          {(["daftar", "masuk"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                flex: 1,
                height: 44,
                borderRadius: 10,
                border: "none",
                background: tab === t ? "#1D9E75" : "transparent",
                color: tab === t ? "#fff" : "#888780",
                fontSize: 15,
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {t === "daftar" ? "Daftar" : "Masuk"}
            </button>
          ))}
        </div>

        {tab === "daftar" ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <label style={labelStyle}>Nama Lengkap</label>
              <input style={inputStyle} placeholder="Masukkan nama lengkap" />
            </div>
            <div>
              <label style={labelStyle}>Email</label>
              <input style={inputStyle} type="email" placeholder="email@contoh.com" />
            </div>
            <div>
              <label style={labelStyle}>Password</label>
              <div style={{ position: "relative" }}>
                <input
                  style={{ ...inputStyle, paddingRight: 48 }}
                  type={showPassword ? "text" : "password"}
                  placeholder="Minimal 8 karakter"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    right: 14,
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 4,
                  }}
                >
                  {showPassword ? <EyeOff size={18} color="#888780" /> : <Eye size={18} color="#888780" />}
                </button>
              </div>
            </div>
            <div>
              <label style={labelStyle}>Jenis Disabilitas</label>
              <div style={{ position: "relative" }}>
                <select
                  value={disability}
                  onChange={(e) => setDisability(e.target.value)}
                  style={{
                    ...inputStyle,
                    appearance: "none" as const,
                    paddingRight: 44,
                    color: disability ? "#2C2C2A" : "#888780",
                  }}
                >
                  <option value="" disabled>Pilih jenis disabilitas</option>
                  <option value="tuna_wicara">Tuna Wicara</option>
                  <option value="tuna_rungu">Tuna Rungu</option>
                  <option value="tuna_netra">Tuna Netra</option>
                  <option value="tuna_daksa">Tuna Daksa</option>
                  <option value="lainnya">Lainnya</option>
                </select>
                <ChevronDown size={18} color="#888780" style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} />
              </div>
            </div>
            <div>
              <label style={labelStyle}>Peran Saya</label>
              <div style={{ position: "relative" }}>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  style={{
                    ...inputStyle,
                    appearance: "none" as const,
                    paddingRight: 44,
                    color: role ? "#2C2C2A" : "#888780",
                  }}
                >
                  <option value="" disabled>Pilih peran</option>
                  <option value="pengguna">Pengguna</option>
                  <option value="mentor">Mentor</option>
                  <option value="psikolog">Psikolog</option>
                </select>
                <ChevronDown size={18} color="#888780" style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} />
              </div>
            </div>
            <button
              onClick={() => onNavigate("test")}
              style={{
                width: "100%",
                height: 54,
                background: "#1D9E75",
                color: "#fff",
                border: "none",
                borderRadius: 14,
                fontSize: 16,
                fontWeight: 600,
                cursor: "pointer",
                marginTop: 4,
              }}
            >
              Buat Akun
            </button>
            <p style={{ textAlign: "center", fontSize: 13, color: "#888780", marginTop: 4, paddingBottom: 32 }}>
              Dengan mendaftar, kamu setuju dengan{" "}
              <span style={{ color: "#1D9E75", fontWeight: 600 }}>Syarat & Ketentuan</span>
            </p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <label style={labelStyle}>Email</label>
              <input style={inputStyle} type="email" placeholder="email@contoh.com" defaultValue="aliya@email.com" />
            </div>
            <div>
              <label style={labelStyle}>Password</label>
              <div style={{ position: "relative" }}>
                <input
                  style={{ ...inputStyle, paddingRight: 48 }}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password kamu"
                  defaultValue="password123"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    right: 14,
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 4,
                  }}
                >
                  {showPassword ? <EyeOff size={18} color="#888780" /> : <Eye size={18} color="#888780" />}
                </button>
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <button style={{ background: "none", border: "none", color: "#1D9E75", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
                Lupa Password?
              </button>
            </div>
            <button
              onClick={() => onNavigate("home")}
              style={{
                width: "100%",
                height: 54,
                background: "#1D9E75",
                color: "#fff",
                border: "none",
                borderRadius: 14,
                fontSize: 16,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Masuk
            </button>
            <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "8px 0" }}>
              <div style={{ flex: 1, height: 1, background: "#EEEEEE" }} />
              <span style={{ fontSize: 13, color: "#888780" }}>atau masuk dengan</span>
              <div style={{ flex: 1, height: 1, background: "#EEEEEE" }} />
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              {["🟢 Google", "🔵 Facebook"].map((provider) => (
                <button
                  key={provider}
                  style={{
                    flex: 1,
                    height: 50,
                    border: "1.5px solid #E8E8E8",
                    borderRadius: 12,
                    background: "#fff",
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#2C2C2A",
                    cursor: "pointer",
                  }}
                >
                  {provider}
                </button>
              ))}
            </div>
            <p style={{ textAlign: "center", fontSize: 14, color: "#888780", paddingBottom: 32 }}>
              Belum punya akun?{" "}
              <button
                onClick={() => setTab("daftar")}
                style={{ background: "none", border: "none", color: "#1D9E75", fontWeight: 600, cursor: "pointer", fontSize: 14 }}
              >
                Daftar Sekarang
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
