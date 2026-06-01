import { Home, BookOpen, MessageCircle, Users, User } from "lucide-react";

type Screen = "home" | "pelatihan" | "konseling" | "komunitas" | "profil" | "onboarding" | "auth" | "test" | "modul" | "progress";

interface BottomNavProps {
  active: Screen;
  onNavigate: (screen: Screen) => void;
}

const navItems = [
  { id: "home" as Screen, label: "Home", icon: Home },
  { id: "pelatihan" as Screen, label: "Pelatihan", icon: BookOpen },
  { id: "konseling" as Screen, label: "Konseling", icon: MessageCircle },
  { id: "komunitas" as Screen, label: "Komunitas", icon: Users },
  { id: "profil" as Screen, label: "Profil", icon: User },
];

export function BottomNav({ active, onNavigate }: BottomNavProps) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        background: "#FFFFFF",
        borderTop: "1px solid #EEEEEE",
        display: "flex",
        paddingBottom: 16,
        paddingTop: 8,
        zIndex: 50,
      }}
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = active === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              background: "none",
              border: "none",
              cursor: "pointer",
              minHeight: 48,
              padding: "4px 0",
            }}
            aria-label={item.label}
          >
            <Icon
              size={22}
              color={isActive ? "#1D9E75" : "#888780"}
              strokeWidth={isActive ? 2.5 : 1.8}
            />
            <span
              style={{
                fontSize: 10,
                fontWeight: isActive ? 600 : 400,
                color: isActive ? "#1D9E75" : "#888780",
                fontFamily: "Inter, system-ui, sans-serif",
              }}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
