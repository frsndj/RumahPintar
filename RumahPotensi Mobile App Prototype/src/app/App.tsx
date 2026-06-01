import { useState } from "react";
import { Onboarding } from "./components/Onboarding";
import { AuthScreen } from "./components/AuthScreen";
import { TestPotensi } from "./components/TestPotensi";
import { HomeDashboard } from "./components/HomeDashboard";
import { KatalogPelatihan } from "./components/KatalogPelatihan";
import { ModulPelatihan } from "./components/ModulPelatihan";
import { ChatKonseling } from "./components/ChatKonseling";
import { ForumKomunitas } from "./components/ForumKomunitas";
import { ProgressTracker } from "./components/ProgressTracker";
import { BottomNav } from "./components/BottomNav";

type Screen =
  | "onboarding"
  | "auth"
  | "test"
  | "home"
  | "pelatihan"
  | "modul"
  | "konseling"
  | "komunitas"
  | "profil"
  | "progress";

const MAIN_SCREENS: Screen[] = ["home", "pelatihan", "konseling", "komunitas", "profil"];

export default function App() {
  const [screen, setScreen] = useState<Screen>("onboarding");

  const navigate = (s: Screen) => setScreen(s);

  const showBottomNav = MAIN_SCREENS.includes(screen) || screen === "progress";

  const renderScreen = () => {
    switch (screen) {
      case "onboarding":
        return <Onboarding onNavigate={navigate} />;
      case "auth":
        return <AuthScreen onNavigate={navigate} />;
      case "test":
        return <TestPotensi onNavigate={navigate} />;
      case "home":
        return <HomeDashboard onNavigate={navigate} />;
      case "pelatihan":
        return <KatalogPelatihan onNavigate={navigate} />;
      case "modul":
        return <ModulPelatihan onNavigate={navigate} />;
      case "konseling":
        return <ChatKonseling onNavigate={navigate} />;
      case "komunitas":
        return <ForumKomunitas onNavigate={navigate} />;
      case "progress":
      case "profil":
        return <ProgressTracker onNavigate={navigate} />;
      default:
        return <HomeDashboard onNavigate={navigate} />;
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Inter, system-ui, sans-serif",
        padding: "20px 16px 100px",
      }}
    >
      {/* Phone frame */}
      <div
        style={{
          width: 375,
          height: 812,
          background: "#fff",
          borderRadius: 44,
          overflow: "hidden",
          position: "relative",
          boxShadow:
            "0 0 0 10px #1A1A1A, 0 0 0 13px #333333, 0 40px 100px rgba(0,0,0,0.6), 0 8px 32px rgba(0,0,0,0.3)",
          flexShrink: 0,
        }}
      >
        {/* Status bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 44,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 28px",
            zIndex: 100,
            pointerEvents: "none",
          }}
        >
          <span style={{ fontSize: 13, fontWeight: 700, color: screen === "modul" ? "#fff" : "#2C2C2A" }}>
            9:41
          </span>
          {/* Dynamic island */}
          <div
            style={{
              width: 124,
              height: 34,
              borderRadius: 20,
              background: "#000",
              position: "absolute",
              top: 5,
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
          <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
            <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
              <rect x="0" y="4" width="3" height="8" rx="1" fill={screen === "modul" ? "#fff" : "#2C2C2A"} opacity="0.4"/>
              <rect x="4.5" y="2.5" width="3" height="9.5" rx="1" fill={screen === "modul" ? "#fff" : "#2C2C2A"} opacity="0.6"/>
              <rect x="9" y="1" width="3" height="11" rx="1" fill={screen === "modul" ? "#fff" : "#2C2C2A"} opacity="0.8"/>
              <rect x="13.5" y="0" width="3" height="12" rx="1" fill={screen === "modul" ? "#fff" : "#2C2C2A"}/>
            </svg>
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <rect x="1" y="1" width="14" height="10" rx="2" stroke={screen === "modul" ? "#fff" : "#2C2C2A"} strokeWidth="1.2"/>
              <rect x="2.5" y="2.5" width="9" height="7" rx="1" fill={screen === "modul" ? "#fff" : "#2C2C2A"}/>
              <path d="M15 4.5V7.5" stroke={screen === "modul" ? "#fff" : "#2C2C2A"} strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* Screen content */}
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          {renderScreen()}
        </div>

        {/* Bottom nav overlay */}
        {showBottomNav && (
          <BottomNav
            active={screen === "progress" ? "profil" : (screen as any)}
            onNavigate={(s) => {
              if (s === "profil") navigate("progress");
              else navigate(s);
            }}
          />
        )}
      </div>

      {/* Screen navigation pills */}
      <div
        style={{
          position: "fixed",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 6,
          background: "rgba(255,255,255,0.12)",
          backdropFilter: "blur(12px)",
          padding: "10px 14px",
          borderRadius: 40,
          border: "1px solid rgba(255,255,255,0.2)",
          flexWrap: "wrap" as const,
          justifyContent: "center",
          maxWidth: "calc(100vw - 24px)",
          zIndex: 200,
        }}
      >
        {(
          [
            ["onboarding", "Onboarding"],
            ["auth", "Login"],
            ["test", "Tes Potensi"],
            ["home", "Dashboard"],
            ["pelatihan", "Katalog"],
            ["modul", "Modul"],
            ["konseling", "Chat"],
            ["komunitas", "Forum"],
            ["progress", "Progress"],
          ] as [Screen, string][]
        ).map(([id, label]) => (
          <button
            key={id}
            onClick={() => navigate(id)}
            style={{
              padding: "5px 13px",
              borderRadius: 20,
              border: "none",
              background: screen === id ? "#1D9E75" : "rgba(255,255,255,0.15)",
              color: screen === id ? "#fff" : "rgba(255,255,255,0.8)",
              fontSize: 11,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s ease",
              whiteSpace: "nowrap" as const,
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
