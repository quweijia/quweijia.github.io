import { useState, useEffect } from "react";
import { X, Lock, AlertCircle } from "lucide-react";
import { Portal } from "./Portal";

interface PasswordDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function PasswordDialog({
  isOpen,
  onClose,
  onConfirm,
}: PasswordDialogProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const CORRECT_PASSWORD = "vicqu";

  useEffect(() => {
    if (isOpen) {
      setPassword("");
      setError("");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      onConfirm();
      onClose();
    } else {
      setError("密码错误，请重试");
      setPassword("");
    }
  };

  if (!isOpen) return null;

  return (
    <Portal>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        backdropFilter: "blur(8px)",
        background: "rgba(0, 0, 0, 0.6)",
      }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl p-8 shadow-2xl"
        style={{
          background: "var(--bg)",
          border: "1px solid rgba(var(--c1), 0.2)",
          boxShadow:
            "0 0 40px rgba(var(--c1), 0.15), 0 20px 60px rgba(0, 0, 0, 0.5)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg transition-all duration-200 hover:rotate-90"
          style={{
            color: "rgba(255, 255, 255, 0.5)",
            background: "rgba(var(--c1), 0.1)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(var(--c1), 0.2)";
            e.currentTarget.style.color = "rgb(var(--c1))";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(var(--c1), 0.1)";
            e.currentTarget.style.color = "rgba(255, 255, 255, 0.5)";
          }}
        >
          <X size={20} />
        </button>

        {/* Icon */}
        <div
          className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-6"
          style={{
            background: `linear-gradient(135deg, rgba(var(--c1), 0.15), rgba(var(--c1), 0.05))`,
            border: "1px solid rgba(var(--c1), 0.3)",
          }}
        >
          <Lock size={32} style={{ color: "rgb(var(--c1))" }} />
        </div>

        {/* Title */}
        <h2
          className="text-2xl font-bold text-center mb-2"
          style={{ color: "rgba(255, 255, 255, 0.9)" }}
        >
          请输入密码
        </h2>

        {/* Subtitle */}
        <p
          className="text-center mb-6 text-sm"
          style={{ color: "rgba(255, 255, 255, 0.5)" }}
        >
          请联系 15662796885 获取
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              placeholder="输入密码"
              className="w-full px-4 py-3 rounded-xl text-base outline-none transition-all duration-200"
              style={{
                background: "rgba(var(--c1), 0.05)",
                border: error
                  ? "1px solid rgba(239, 68, 68, 0.5)"
                  : "1px solid rgba(var(--c1), 0.2)",
                color: "rgba(255, 255, 255, 0.9)",
                boxShadow: error
                  ? "0 0 0 3px rgba(239, 68, 68, 0.1)"
                  : "none",
              }}
              onFocus={(e) => {
                if (!error) {
                  e.currentTarget.style.borderColor = "rgba(var(--c1), 0.4)";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 3px rgba(var(--c1), 0.1)";
                }
              }}
              onBlur={(e) => {
                if (!error) {
                  e.currentTarget.style.borderColor = "rgba(var(--c1), 0.2)";
                  e.currentTarget.style.boxShadow = "none";
                }
              }}
              autoFocus
            />
            {error && (
              <div
                className="mt-2 flex items-center gap-2 text-sm"
                style={{ color: "rgb(239, 68, 68)" }}
              >
                <AlertCircle size={16} />
                <span>{error}</span>
              </div>
            )}
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 hover:scale-[1.02]"
              style={{
                background: "rgba(var(--c1), 0.1)",
                color: "rgba(255, 255, 255, 0.7)",
                border: "1px solid rgba(var(--c1), 0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(var(--c1), 0.15)";
                e.currentTarget.style.color = "rgba(255, 255, 255, 0.9)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(var(--c1), 0.1)";
                e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)";
              }}
            >
              取消
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-3 rounded-xl text-base font-bold transition-all duration-200 hover:scale-[1.02]"
              style={{
                background:
                  "linear-gradient(135deg, rgb(var(--c1)), rgba(var(--c1), 0.85))",
                color: "var(--bg)",
                border: "none",
                boxShadow: "0 0 20px rgba(var(--c1), 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 30px rgba(var(--c1), 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(var(--c1), 0.3)";
              }}
            >
              确认
            </button>
          </div>
        </form>
      </div>
    </div>
    </Portal>
  );
}
