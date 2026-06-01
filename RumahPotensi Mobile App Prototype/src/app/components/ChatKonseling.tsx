import { useState, useRef, useEffect } from "react";
import { ArrowLeft, Send, Lock, Phone, Video, MoreVertical } from "lucide-react";

type Screen = "home" | "pelatihan" | "konseling" | "komunitas" | "profil" | "onboarding" | "auth" | "test" | "modul" | "progress";

interface ChatKonselingProps {
  onNavigate: (screen: Screen) => void;
}

interface Message {
  id: number;
  text: string;
  sender: "user" | "psikolog";
  time: string;
}

const initialMessages: Message[] = [
  { id: 1, sender: "psikolog", text: "Halo Aliya, selamat datang di sesi konseling kita. Bagaimana perasaanmu hari ini? 😊", time: "10:00" },
  { id: 2, sender: "user", text: "Halo dr. Sari. Hari ini saya merasa sedikit cemas, terutama soal rencana karier saya ke depan.", time: "10:02" },
  { id: 3, sender: "psikolog", text: "Saya memahami perasaanmu. Kecemasan soal karier adalah hal yang sangat wajar. Bisa ceritakan lebih lanjut apa yang membuat kamu cemas?", time: "10:03" },
  { id: 4, sender: "user", text: "Saya khawatir apakah perusahaan akan menerima saya meskipun saya memiliki disabilitas.", time: "10:05" },
  { id: 5, sender: "psikolog", text: "Kekhawatiran itu valid, dan banyak yang merasakannya. Yang penting adalah kita fokus pada potensi dan kemampuan yang kamu miliki. Kamu sudah menyelesaikan 65% modul UI/UX ya? Itu pencapaian luar biasa! 🎉", time: "10:07" },
];

export function ChatKonseling({ onNavigate }: ChatKonselingProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMsg: Message = {
      id: messages.length + 1,
      sender: "user",
      text: input.trim(),
      time: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages((prev) => [...prev, newMsg]);
    setInput("");

    setTimeout(() => {
      const reply: Message = {
        id: messages.length + 2,
        sender: "psikolog",
        text: "Terima kasih sudah berbagi. Saya di sini untuk mendukungmu sepenuhnya. Ingat, perjalanan ini adalah milikmu dan kamu tidak sendirian. 💪",
        time: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, reply]);
    }, 1500);
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
          padding: "52px 16px 14px",
          borderBottom: "1px solid #EEEEEE",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button
            onClick={() => onNavigate("home")}
            style={{
              width: 38,
              height: 38,
              borderRadius: 10,
              border: "1.5px solid #EEEEEE",
              background: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            <ArrowLeft size={18} color="#2C2C2A" />
          </button>

          {/* Psychologist info */}
          <div style={{ position: "relative", flexShrink: 0 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 13,
                background: "#E8F7F1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
              }}
            >
              👩‍⚕️
            </div>
            <div
              style={{
                position: "absolute",
                bottom: 2,
                right: 2,
                width: 11,
                height: 11,
                borderRadius: "50%",
                background: "#1D9E75",
                border: "2px solid #fff",
              }}
            />
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ fontSize: 15, fontWeight: 700, color: "#2C2C2A", margin: "0 0 2px" }}>dr. Sari Dewi, M.Psi</p>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#1D9E75" }} />
              <span style={{ fontSize: 12, color: "#1D9E75", fontWeight: 500 }}>Online · Psikologi Klinis</span>
            </div>
          </div>

          <div style={{ display: "flex", gap: 10 }}>
            <button style={{ width: 38, height: 38, borderRadius: 10, border: "1.5px solid #EEEEEE", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
              <Phone size={16} color="#888780" />
            </button>
            <button style={{ width: 38, height: 38, borderRadius: 10, border: "1.5px solid #EEEEEE", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
              <Video size={16} color="#888780" />
            </button>
          </div>
        </div>

        {/* Security notice */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            background: "#E8F7F1",
            borderRadius: 8,
            padding: "7px 12px",
            marginTop: 12,
          }}
        >
          <Lock size={12} color="#1D9E75" />
          <span style={{ fontSize: 11, color: "#1D9E75", fontWeight: 500 }}>
            Percakapan ini bersifat rahasia dan terenkripsi.
          </span>
        </div>
      </div>

      {/* Messages */}
      <div
        style={{
          flex: 1,
          overflowY: "auto" as const,
          padding: "16px 16px 0",
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        {/* Date separator */}
        <div style={{ textAlign: "center" as const, margin: "4px 0" }}>
          <span style={{ fontSize: 11, color: "#888780", background: "#EEEEEE", padding: "3px 12px", borderRadius: 20 }}>
            Senin, 1 Juni 2026
          </span>
        </div>

        {messages.map((msg) => {
          const isUser = msg.sender === "user";
          return (
            <div
              key={msg.id}
              style={{
                display: "flex",
                flexDirection: isUser ? "row-reverse" : "row",
                alignItems: "flex-end",
                gap: 8,
              }}
            >
              {!isUser && (
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    background: "#E8F7F1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                    flexShrink: 0,
                  }}
                >
                  👩‍⚕️
                </div>
              )}
              <div style={{ maxWidth: "75%", display: "flex", flexDirection: "column", alignItems: isUser ? "flex-end" : "flex-start" }}>
                <div
                  style={{
                    background: isUser ? "#1D9E75" : "#fff",
                    color: isUser ? "#fff" : "#2C2C2A",
                    padding: "10px 14px",
                    borderRadius: isUser ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                    fontSize: 14,
                    lineHeight: 1.5,
                    boxShadow: "0 1px 6px rgba(0,0,0,0.08)",
                  }}
                >
                  {msg.text}
                </div>
                <span style={{ fontSize: 10, color: "#888780", marginTop: 4 }}>{msg.time}</span>
              </div>
            </div>
          );
        })}
        <div ref={bottomRef} />
      </div>

      {/* Input area */}
      <div
        style={{
          background: "#fff",
          padding: "12px 16px 28px",
          borderTop: "1px solid #EEEEEE",
          display: "flex",
          gap: 10,
          alignItems: "center",
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ketik pesanmu..."
          style={{
            flex: 1,
            height: 48,
            borderRadius: 24,
            border: "1.5px solid #E8E8E8",
            background: "#F5F5F5",
            padding: "0 18px",
            fontSize: 14,
            color: "#2C2C2A",
            outline: "none",
            fontFamily: "inherit",
          }}
        />
        <button
          onClick={sendMessage}
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: input.trim() ? "#1D9E75" : "#E0E0E0",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: input.trim() ? "pointer" : "default",
            transition: "background 0.2s ease",
            flexShrink: 0,
          }}
        >
          <Send size={18} color="#fff" />
        </button>
      </div>
    </div>
  );
}
