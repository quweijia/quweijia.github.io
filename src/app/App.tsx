import { ThemeProvider } from "./components/ThemeContext";
import { CursorGlow } from "./components/CursorGlow";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Portfolio } from "./components/Portfolio";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { MusicPlayer } from "./components/MusicPlayer";
import { ScrollVideo } from "./components/ScrollVideo";
import { useScreenScale } from "./hooks/useScreenScale";
import { PasswordDialog } from "./components/PasswordDialog";
import { useState, useEffect } from "react";

export default function App() {
  // 4K 屏幕自适应缩放
  useScreenScale();
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPasswordDialog, setShowPasswordDialog] = useState(true);

  useEffect(() => {
    const stored = sessionStorage.getItem("portfolio_authenticated");
    if (stored === "true") {
      setIsAuthenticated(true);
      setShowPasswordDialog(false);
    }
  }, []);

  const handlePasswordConfirm = () => {
    setIsAuthenticated(true);
    setShowPasswordDialog(false);
    sessionStorage.setItem("portfolio_authenticated", "true");
  };

  const handlePasswordClose = () => {
    setShowPasswordDialog(false);
  };

  return (
    <ThemeProvider>
      {/* 所有使用 fixed 定位的组件必须在缩放容器外部，避免被 transform 影响 */}
      <ScrollVideo />
      <Navbar />
      <MusicPlayer />
      <div className="hidden md:block">
        <CursorGlow />
      </div>

      <div
        className="min-h-screen screen-scaled-root"
        style={{
          background: "var(--bg, #05050a)",
          color: "#f0f4f8",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Portfolio />
          <Education />
          <Contact />
        </main>
      </div>

      <PasswordDialog
        isOpen={showPasswordDialog && !isAuthenticated}
        onClose={handlePasswordClose}
        onConfirm={handlePasswordConfirm}
      />
    </ThemeProvider>
  );
}