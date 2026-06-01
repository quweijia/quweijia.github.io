import { useEffect, useRef, useState } from "react";
import { useTheme } from "./ThemeContext";

/* ==============================
   🔧 优化1：全局复用 IntersectionObserver，避免重复创建10+个观察者
============================== */
const globalObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // @ts-ignore
        entry.target.__onVisible?.();
        globalObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);

/* ==============================
   滚动显示动画钩子（复用全局观察者）
============================== */
function useReveal(threshold = 0.08) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // @ts-ignore
    el.__onVisible = () => setVis(true);
    globalObserver.observe(el);
    return () => globalObserver.unobserve(el);
  }, []);

  return { ref, vis };
}

/* ==============================
   🔧 优化2：进度条组件 - 去掉重绘阴影 + 开启GPU加速
============================== */
function ProgressBar({
  pct,
  color,
  delay = 0,
  light = false,
}: {
  pct: number;
  color: string;
  delay?: number;
  light?: boolean;
}) {
  const [w, setW] = useState(0);
  const r = useRef<HTMLDivElement>(null);
  const [animDone, setAnimDone] = useState(false);

  useEffect(() => {
    const el = r.current;
    if (!el) return;
    // @ts-ignore
    el.__onVisible = () => {
      setTimeout(() => setW(pct), delay);
      // 动画完成后再显示发光（避免动画过程中重绘）
      setTimeout(() => setAnimDone(true), delay + 800);
    };
    globalObserver.observe(el);
    return () => globalObserver.unobserve(el);
  }, [pct, delay]);

  return (
    <div
      ref={r}
      className="relative h-[6px] rounded-full"
      style={{
        background: light
          ? "rgba(0,0,0,0.08)"
          : "rgba(255,255,255,0.06)",
        willChange: "auto",
      }}
    >
      {/* 进度条填充：开启GPU加速 */}
      <div
        className="absolute inset-y-0 left-0 rounded-full"
        style={{
          width: `${w}%`,
          transition: `width 0.8s cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
          background: `linear-gradient(90deg,${color}60,${color})`,
          // 🔧 动画过程中不显示发光，完成后再显示（核心优化！）
          boxShadow:
            animDone && !light
              ? `0 0 8px ${color}80, 0 0 4px ${color}`
              : "none",
          willChange: "width",
          transform: "translateZ(0)", // 强制GPU加速
        }}
      />

      {/* 发光圆点：动画完成后再显示 */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          left: `${w}%`,
          width: 12,
          height: 12,
          borderRadius: "50%",
          background: color,
          boxShadow: animDone
            ? `0 0 0 3px ${color}30, 0 0 14px 4px ${color}90, 0 0 28px 8px ${color}40`
            : "none",
          transition: `left 0.8s cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
          opacity: animDone ? 1 : 0,
          willChange: "left, opacity",
          transform: "translateZ(0)",
        }}
      />
    </div>
  );
}

/* ==============================
   🔧 优化3：数字滚动用 requestAnimationFrame 替代 setInterval（彻底解决掉帧）
============================== */
function CapBand({
  num,
  cat,
  sub,
  pct,
  color,
  tools,
  idx,
}: {
  num: string;
  cat: string;
  sub: string | JSX.Element;
  pct: number;
  color: string;
  tools: string[];
  idx: number;
}) {
  const [highlighted, setHighlighted] = useState(false);
  const [count, setCount] = useState(0);
  const r = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const el = r.current;
    if (!el) return;

    // @ts-ignore
    el.__onVisible = () => {
      const animDelay = idx * 60;
      const animDuration = 800;

      setTimeout(() => {
        let start = 0;
        const startTime = performance.now();

        // 🔧 用 RAF 做数字滚动，和浏览器刷新同步
        const run = (now: number) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / animDuration, 1);
          const ease = 1 - Math.pow(1 - progress, 3); // 缓动更自然
          start = Math.round(pct * ease);
          setCount(start);

          if (progress < 1) {
            animRef.current = requestAnimationFrame(run);
          }
        };
        animRef.current = requestAnimationFrame(run);
      }, animDelay);

      setTimeout(
        () => setHighlighted(true),
        animDelay + animDuration,
      );
    };
    globalObserver.observe(el);

    return () => {
      globalObserver.unobserve(el);
      cancelAnimationFrame(animRef.current); // 清理RAF
    };
  }, [pct, idx]);

  return (
    <div
      ref={r}
      className="relative py-7 transition-all duration-300"
      style={{
        borderTop: "0px solid rgba(255,255,255,0.07)",
        willChange: "auto",
      }}
    >
      <div className="relative flex flex-wrap items-start gap-0 lg:gap-0">
        {/* 左侧技能编号 */}
        {window.innerWidth >= 768 && (
          <div
            className="shrink-0 w-8"
            style={{ paddingTop: 3 }}
          >
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                color: `${color}80`,
                letterSpacing: "0.12em",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {num}
            </span>
          </div>
        )}

        {/* 技能分类名称 + 副标题 */}
        <div className="shrink-0" style={{ width: 180 }}>
          <p
            style={{
              fontSize: "0.9375rem",
              fontWeight: 700,
              color: "#f0f4f8",
              lineHeight: 1.2,
            }}
          >
            {cat}
          </p>
          <p
            className="mt-1"
            style={{
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.3)",
              letterSpacing: "0.04em",
            }}
          >
            {sub}
          </p>
        </div>

        {/* 右侧：进度条 + 百分比数字 + 工具标签 */}
        <div className="flex-1 flex flex-col gap-3 mt-2 min-w-[300px]">
          {/* 进度条 + 数字 */}
          <div className="flex items-center gap-5">
            <div className="flex-1">
              <ProgressBar
                pct={pct}
                color={color}
                delay={idx * 120}
              />
            </div>
            <span
              style={{
                fontSize: "1.0625rem",
                fontWeight: 800,
                color: highlighted
                  ? color
                  : "rgba(255,255,255,0.45)",
                transition: "color 0.6s ease-out",
                minWidth: 38,
                textAlign: "right",
                fontVariantNumeric: "tabular-nums",
                willChange: "color",
              }}
            >
              {count}
            </span>
          </div>

          {/* 工具标签 */}
          <div
            className="flex flex-wrap gap-1.5"
            style={{
              opacity: highlighted ? 1 : 0.4,
              transition: "opacity 0.6s ease-out",
              willChange: "opacity",
            }}
          >
            {tools.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded text-xs"
                style={{
                  background: highlighted
                    ? `${color}10`
                    : "rgba(255,255,255,0.04)",
                  border: `1px solid ${highlighted ? `${color}22` : "rgba(255,255,255,0.06)"}`,
                  color: highlighted
                    ? color
                    : "rgba(255,255,255,0.3)",
                  transition: "all 0.1s ease-out",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==============================
   主组件
============================== */
export function Skills() {
  const { ref: secRef, vis } = useReveal(0.04);
  const { theme } = useTheme();

  const bands = [
    {
      num: "01",
      cat: "UI / UX Design",
      sub: (
        <>
          交互设计
          <br />
          原子组件设计规范
        </>
      ),
      pct: 96,
      color: theme.cyan,
      tools: [
        "Figma",
        "Principle",
        "Sketch",
        "Master Go",
        "Protopie",
        "Hype 4",
        "Framer",
      ],
    },
    {
      num: "02",
      cat: "AI Design Workflow",
      sub: (
        <>
          提示生成
          <br />
          自动化
        </>
      ),
      pct: 90,
      color: theme.purple,
      tools: [
        "Open Claw",
        "Figma MCP",
        "Pencil",
        "Vibma",
        "Stitch",
        "Stable Diffusion",
        "Comfy-UI",
      ],
    },
    {
      num: "03",
      cat: "Visual & Motion",
      sub: (
        <>
          动效设计
          <br />
          Logo
        </>
      ),
      pct: 86,
      color: theme.pink,
      tools: [
        "After Effects",
        "Lotties",
        "Rive",
        "Spline",
        "Blender",
      ],
    },
    {
      num: "04",
      cat: "Front-End Prototyping",
      sub: (
        <>
          产品元件库
          <br />
          原型 Demo
          <br />
          Swift UI
        </>
      ),
      pct: 82,
      color: "#34d399",
      tools: [
        "Axure",
        "Amap GIS",
        "Draw.io",
        "Xcode",
        "TRAE",
        "Cursor",
      ],
    },
    {
      num: "05",
      cat: "Presentation Event",
      sub: (
        <>
          发布会 PPT
          <br />
          设计分享会
          <br />
          专利
        </>
      ),
      pct: 80,
      color: "#fb923c",
      tools: [
        "PowerPoint",
        "Keynote",
        "Launch Design",
        "Power BI",
        "Patent",
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={secRef}
      className="relative overflow-hidden"
      style={{
        background: "var(--bg)",
        padding: "80px 0 0px",
      }}
    >
      {/* 背景超大文字 */}
      <div
        className="absolute right-0 top-0 select-none pointer-events-none overflow-hidden hidden lg:block"
        style={{
          fontSize: "clamp(80px,16vw,200px)",
          fontWeight: 900,
          lineHeight: 1,
          color: "rgba(255,255,255,0.08)",
          letterSpacing: "0.05em",
        }}
      >
        SKILLS
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-[40px] py-[0px]">
        {/* 顶部标题区域 */}
        <div
          className="flex flex-col lg:flex-row lg:items-end gap-8 transition-all duration-700 mx-[0px] mt-[0px] mb-[32px]"
          style={{
            opacity: vis ? 1 : 0,
            transform: vis
              ? "translateY(0)"
              : "translateY(30px)",
            willChange: "opacity, transform",
          }}
        >
          <div className="flex-1">
            <div className="flex items-center gap-4 mx-[0px] mt-[0px] mb-[8px]">
              <span
                className="text-xm tracking-widest"
                style={{
                  color: theme.cyan,
                  letterSpacing: "0.2em",
                  fontWeight: 600,
                }}
              >
                CAPABILITIES
              </span>
              <div
                className="flex-1 h-px"
                style={{
                  background: `linear-gradient(90deg,${theme.cyan}33,transparent)`,
                }}
              />
            </div>
            <h2
              style={{
                fontSize: "clamp(2.0rem,5vw,3.0rem)",
                fontWeight: 900,
                color: "#f0f4f8",
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
              }}
            >
              技能全景
            </h2>
          </div>
          <div className="lg:max-w-xs">
            <p
              style={{
                fontSize: "0.9375rem",
                color: "rgba(255,255,255,0.32)",
                lineHeight: 1.85,
              }}
            >
              10 年全栈设计积累
              <br />
              设计工具 × AI 能力 × 技术深度
              <br />
              三维协同，驱动端到端设计交付
            </p>
          </div>
        </div>

        {/* 渲染5个技能进度条 */}
        <div className="mb-20">
          {bands.map((b, i) => (
            <CapBand key={b.num} {...b} idx={i} />
          ))}
          <div
            style={{
              borderTop: "0px solid rgba(255,255,255,0.07)",
            }}
          />
        </div>
      </div>
    </section>
  );
}