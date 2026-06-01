import { useState, useRef, useEffect } from "react";
import { Palette, X, RotateCcw } from "lucide-react";
import {
  useTheme,
  PRESET_THEMES,
  DEFAULT_THEME,
} from "./ThemeContext";

export function ThemeToggle({ isLight }: { isLight: boolean }) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();
  const [custom, setCustom] = useState(theme);

  useEffect(() => {
    setCustom(theme);
  }, [theme]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handler);
    return () =>
      document.removeEventListener("mousedown", handler);
  }, [open]);

  const applyCustom = (
    key: keyof typeof custom,
    value: string,
  ) => {
    const next = { ...custom, [key]: value };
    setCustom(next);
    setTheme(next);
  };

  // 弹窗样式，根据isLight状态变化
  const panelBg = isLight
    ? "rgba(255,255,255,0.95)"
    : "linear-gradient(160deg, #0d0d1a 0%, #0a0a14 100%)";

  const panelBorder = isLight
    ? "1px solid rgba(0,0,0,0.1)"
    : `1px solid rgba(var(--c1),0.2)`;

  const panelShadow = isLight
    ? "0 20px 60px rgba(0,0,0,0.1), 0 0 40px rgba(0,0,0,0.05)"
    : `0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(var(--c1),0.08)`;

  const headerTextColor = isLight
    ? "#1a1a2e"
    : "rgba(255,255,255,0.8)";

  const buttonBg = isLight
    ? "rgba(0,0,0,0.05)"
    : "rgba(255,255,255,0.06)";

  const buttonColor = isLight
    ? "rgba(0,0,0,0.4)"
    : "rgba(255,255,255,0.4)";

  const presetButtonBg = (isActive: boolean) =>
    isLight
      ? isActive
        ? "rgba(0,0,0,0.1)"
        : "rgba(0,0,0,0.03)"
      : isActive
        ? "rgba(255,255,255,0.1)"
        : "rgba(255,255,255,0.03)";

  const presetButtonBorder = (isActive: boolean) =>
    isLight
      ? isActive
        ? "1px solid rgba(0,0,0,0.2)"
        : "1px solid rgba(0,0,0,0.06)"
      : isActive
        ? `1px solid rgba(var(--c1),0.4)`
        : "1px solid rgba(255,255,255,0.06)";

  const presetButtonTextColor = (isActive: boolean) =>
    isLight
      ? isActive
        ? "#1a1a2e"
        : "rgba(0,0,0,0.45)"
      : isActive
        ? "rgba(255,255,255,0.9)"
        : "rgba(255,255,255,0.45)";

  const dividerBg = isLight
    ? "linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent)"
    : "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)";

  const sectionTitleColor = isLight
    ? "rgba(0,0,0,0.4)"
    : "rgba(255,255,255,0.4)";

  const labelColor = isLight
    ? "rgba(0,0,0,0.5)"
    : "rgba(255,255,255,0.5)";

  const valueColor = isLight
    ? "rgba(0,0,0,0.3)"
    : "rgba(255,255,255,0.3)";

  const colorPickerBorder = isLight
    ? "1.5px solid rgba(0,0,0,0.15)"
    : "1.5px solid rgba(255,255,255,0.15)";

  return (
    <div className="relative" ref={panelRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-300 hover:scale-110"
        style={
          isLight
            ? {
                background: "transparent",
                color: "#1a1a2e",
                fontWeight: 500,
                border: "0.5px solid rgba(0,0,0,0.22)",
                boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
                transition: "all 0.3s",
              }
            : {
                background:
                  "linear-gradient(135deg, rgba(var(--c1),0.25) 0%, rgba(var(--c2),0.15) 100%)",
                color: "rgba(255,255,255,0.95)",
                fontWeight: 600,
                border: "0.5px solid rgba(var(--c1),0.4)",
                boxShadow:
                  "0 0 30px rgba(var(--c1),0.25), 0 0 15px rgba(var(--c2),0.15)",
                transition: "all 0.3s",
              }
        }
        title="切换主题色"
      >
        <Palette size={16} />
      </button>

      {open && (
        <div
          className="absolute right-0 top-12 w-72 rounded-xl p-4 z-[100]"
          style={{
            background: panelBg,
            border: panelBorder,
            boxShadow: panelShadow,
            backdropFilter: "blur(20px)",
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <span
              style={{
                fontSize: "0.85rem",
                fontWeight: 600,
                color: headerTextColor,
                letterSpacing: "0.05em",
              }}
            >
              🎨 主题配色
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => {
                  setTheme(DEFAULT_THEME);
                  setCustom(DEFAULT_THEME);
                }}
                className="w-6 h-6 rounded-md flex items-center justify-center transition-colors"
                style={{
                  background: buttonBg,
                  color: buttonColor,
                }}
                title="重置默认"
              >
                <RotateCcw size={12} />
              </button>
              <button
                onClick={() => setOpen(false)}
                className="w-6 h-6 rounded-md flex items-center justify-center transition-colors"
                style={{
                  background: buttonBg,
                  color: buttonColor,
                }}
              >
                <X size={12} />
              </button>
            </div>
          </div>

          {/* Preset themes */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {PRESET_THEMES.map((preset) => {
              const isActive =
                preset.colors.cyan === theme.cyan &&
                preset.colors.purple === theme.purple &&
                preset.colors.pink === theme.pink;
              return (
                <button
                  key={preset.name}
                  onClick={() => setTheme(preset.colors)}
                  className="rounded-lg p-2 transition-all duration-200 hover:scale-105"
                  style={{
                    background: presetButtonBg(isActive),
                    border: presetButtonBorder(isActive),
                  }}
                >
                  <div className="flex gap-1 justify-center mb-1.5">
                    {[
                      preset.colors.cyan,
                      preset.colors.purple,
                      preset.colors.pink,
                    ].map((c, i) => (
                      <div
                        key={i}
                        className="w-4 h-4 rounded-full"
                        style={{
                          background: c,
                          boxShadow: `0 0 6px ${c}66`,
                        }}
                      />
                    ))}
                  </div>
                  <span
                    style={{
                      fontSize: "0.65rem",
                      color: presetButtonTextColor(isActive),

                      fontWeight: isActive ? 600 : 400,
                    }}
                  >
                    {preset.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Divider */}
          <div
            className="h-px mb-3"
            style={{
              background: dividerBg,
            }}
          />

          {/* Custom color pickers */}
          <div
            style={{
              fontSize: "0.7rem",
              fontWeight: 500,
              color: sectionTitleColor,
              letterSpacing: "0.08em",
              marginBottom: "8px",
            }}
          >
            自定义颜色
          </div>
          <div className="space-y-2">
            {(
              [
                {
                  key: "cyan" as const,
                  label: "主色 (霓虹青)",
                },
                {
                  key: "purple" as const,
                  label: "辅色 (紫罗兰)",
                },
                { key: "pink" as const, label: "点缀 (粉玫)" },
                { key: "bg" as const, label: "背景色" },
              ] as const
            ).map(({ key, label }) => (
              <div
                key={key}
                className="flex items-center gap-2.5"
              >
                <label
                  className="relative w-7 h-7 rounded-lg overflow-hidden cursor-pointer flex-shrink-0"
                  style={{
                    border: colorPickerBorder,
                    boxShadow: `0 0 8px ${custom[key]}44`,
                  }}
                >
                  <input
                    type="color"
                    value={custom[key]}
                    onChange={(e) =>
                      applyCustom(key, e.target.value)
                    }
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  <div
                    className="w-full h-full"
                    style={{ background: custom[key] }}
                  />
                </label>
                <span
                  style={{
                    fontSize: "0.72rem",
                    color: labelColor,
                    flex: 1,
                  }}
                >
                  {label}
                </span>
                <span
                  style={{
                    fontSize: "0.65rem",
                    color: valueColor,
                    fontFamily: "monospace",
                  }}
                >
                  {custom[key].toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}