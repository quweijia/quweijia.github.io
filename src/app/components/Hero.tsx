import { useEffect, useRef, useState } from "react";
import {
  Download,
  ArrowRight,
  Zap,
  Layers,
  Cpu,
  Component,
  HatGlasses,
  WandSparkles,
  LayoutDashboard,
  Palette,
  Presentation,
  Trophy,
} from "lucide-react";
import { PasswordDialog } from "./PasswordDialog";
import LiquidEther from "./LiquidEther";
// import imgPreview from "figma:asset/35b88eaaad7b267fb61266b65824bae832bf3fc4.png";

/* ==============================================
   1. 粒子网络背景动画（全屏交互式粒子连线）
   作用：页面背景的动态粒子、鼠标交互、连线效果
=============================================== */
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // 鼠标位置追踪，初始定位到屏幕外
  const mouse = useRef({ x: -999, y: -999 });

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let W = 0,
      H = 0,
      raf = 0;

    // 粒子对象类型定义
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      opacity: number;
    }
    let particles: Particle[] = [];

    // 初始化：设置画布尺寸、生成粒子
    const init = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      // 高清屏适配
      canvas.width = W * devicePixelRatio;
      canvas.height = H * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);

      // 🔥 粒子数量计算公式（可修改）
      const COUNT = Math.floor((W * H) / 9000);
      // 生成粒子，最大数量110个
      particles = Array.from(
        { length: Math.min(COUNT, 110) },
        () => ({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.45, // 粒子水平速度
          vy: (Math.random() - 0.5) * 0.45, // 粒子垂直速度
          r: Math.random() * 1.6 + 0.4, // 粒子大小
          opacity: Math.random() * 0.6 + 0.2, // 粒子透明度
        }),
      );
    };

    // 🔥 粒子连线最大距离（可修改）
    const CONN = 140;

    // 绘制动画帧
    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // 更新并绘制粒子
      particles.forEach((p) => {
        // 粒子移动
        p.x += p.vx;
        p.y += p.vy;
        // 边界反弹
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;

        // 鼠标排斥效果
        const dx = p.x - mouse.current.x;
        const dy = p.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          const force = (100 - dist) / 100;
          p.x += dx * force * 0.025;
          p.y += dy * force * 0.025;
        }

        // 鼠标靠近时粒子放大变色
        const nearMouse = dist < 80;
        ctx.beginPath();
        ctx.arc(
          p.x,
          p.y,
          nearMouse ? p.r * 2 : p.r,
          0,
          Math.PI * 2,
        );
        ctx.fillStyle = nearMouse
          ? `rgba(${getComputedStyle(document.documentElement).getPropertyValue("--c1").trim() || "0,240,200"},${p.opacity * 1.8})`
          : `rgba(${getComputedStyle(document.documentElement).getPropertyValue("--c1").trim() || "0,240,200"},${p.opacity * 0.6})`;
        ctx.fill();
      });

      // 粒子之间连线
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < CONN) {
            const alpha = (1 - d / CONN) * 0.25;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${getComputedStyle(document.documentElement).getPropertyValue("--c1").trim() || "0,240,200"},${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      // 粒子与鼠标连线
      particles.forEach((p) => {
        const dx = p.x - mouse.current.x;
        const dy = p.y - mouse.current.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 130) {
          const alpha = (1 - d / 130) * 0.5;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.current.x, mouse.current.y);
          ctx.strokeStyle = `rgba(${getComputedStyle(document.documentElement).getPropertyValue("--c1").trim() || "0,240,200"},${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      });

      raf = requestAnimationFrame(draw);
    };

    init();
    draw();

    // 鼠标移动监听
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };
    // 鼠标离开重置位置
    const onLeave = () => {
      mouse.current = { x: -999, y: -999 };
    };

    window.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    // 窗口大小变化重新初始化
    const ro = new ResizeObserver(init);
    ro.observe(canvas);

    // 清理副作用
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-5"
    />
  );
}

/* ==============================================
   2. 打字机效果组件（循环打字、删除、闪烁光标）
   作用：文字逐打印/删除，配合闪烁竖线
=============================================== */
function Typewriter({ words }: { words: string[] }) {
  const [idx, setIdx] = useState(0); // 当前文字索引
  const [text, setText] = useState(""); // 显示文字
  const [deleting, setDeleting] = useState(false); // 是否删除状态

  useEffect(() => {
    const word = words[idx % words.length];
    // 文字打完，等待2秒后删除
    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(t);
    }
    // 文字删完，切换下一个
    if (deleting && text === "") {
      setDeleting(false);
      setIdx((i) => i + 1);
      return;
    }
    // 🔥 打字速度：删除50ms，打字90ms（可修改）
    const speed = deleting ? 50 : 90;
    const t = setTimeout(() => {
      setText(
        deleting
          ? word.slice(0, text.length - 1)
          : word.slice(0, text.length + 1),
      );
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, idx, words]);

  return (
    <span style={{ color: "rgb(var(--c1))" }}>
      {text}
      {/* 闪烁光标 */}
      <span
        className="animate-pulse"
        style={{ color: "rgb(var(--c1))", marginLeft: 2 }}
      >
        |
      </span>
    </span>
  );
}

/* ==============================================
   3. 数字滚动计数组件（滚动到目标数字）
   作用：页面数据统计滚动动画，可见时触发
=============================================== */
function Counter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // 监听元素可见性
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          let start = 0;
          const step = target / 60; // 步长
          // 🔥 每20ms更新一次数字（可修改速度）
          const t = setInterval(() => {
            start = Math.min(start + step, target);
            setCount(Math.floor(start));
            if (start >= target) clearInterval(t);
          }, 20);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }, // 元素50%可见触发
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ==============================================
   4. 3D倾斜轮播卡片组件（自动切换+鼠标倾斜）
   作用：图片轮播、3D倾斜、自动切换、指示器
=============================================== */
function TiltCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0); // 当轮播页
  const [paused, setPaused] = useState(false); // 鼠标悬浮暂停
  const [transitioning, setTransitioning] = useState(false); // 切换状态
  const [imageErrors, setImageErrors] = useState<
    Record<number, boolean>
  >({}); // 图片加载错误状态

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mobileBreakpoint = 640; // 屏幕断点，可改 768
    const checkScreen = () =>
      setIsMobile(window.innerWidth <= mobileBreakpoint);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () =>
      window.removeEventListener("resize", checkScreen);
  }, []);

  // 轮播图数据（可修改图片/文字/颜色）
  const slides = [
    {
      img: "https://i.postimg.cc/mDfSM6Gx/1-she-ji-gui-fan.png",
      label: "Design Systems",
      accent: "#7c6ff7",
      accentBg: "rgba(124,111,247,0.12)",
      accentBorder: "rgba(124,111,247,0.28)",
      Icon: Component,
    },
    {
      img: "https://i.postimg.cc/sDMgYGNh/2_设计分享.png",
      // img: "https://gitee.com/quweijia/img-bed/blob/master/2026/banner2.png",
      label: "团队分享会-设计赋能",
      accent: "#FE952C",
      accentBg: "rgba(254, 149, 44, 0.12)",
      accentBorder: "rgba(254, 149, 44, 0.30)",
      Icon: Presentation,
    },
    {
      img: "https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/banner3.png",
      label: "设计复盘",
      accent: "#456CFF",
      accentBg: "rgba(69, 108, 255, 0.12)",
      accentBorder: "rgba(69, 108, 255, 0.30)",
      Icon: Layers,
    },
    {
      img: "https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/banner4.png",
      label: "设计扩展",
      accent: "#f472b6",
      accentBg: "rgba(244,114,182,0.12)",
      accentBorder: "rgba(244,114,182,0.28)",
      Icon: Palette,
    },
    {
      img: "https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/banner5.png",
      label: "设计获奖",
      accent: "#FFEB12",
      accentBg: "rgba(255,235,18,0.12)",
      accentBorder: "rgba(255,235,18,0.28)",
      Icon: Trophy,
    },
  ];

  // 手动切换轮播
  const goTo = (idx: number) => {
    if (transitioning || idx === current) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(idx);
      setTransitioning(false);
    }, 350); // 切换动画延迟350ms
  };

  // 🔥 自动轮播逻辑（核心时间修改处）
  useEffect(() => {
    if (paused) return;
    // 每3800ms（3.8秒）自动切换一次（可修改）
    const id = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % slides.length);
        setTransitioning(false);
      }, 320);
    }, 3800);
    return () => clearInterval(id);
  }, [paused, slides.length]);

  // 鼠标3D倾斜效果
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current!.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cardRef.current!.style.transform = `perspective(900px) rotateY(${x * 12}deg) rotateX(${-y * 10}deg) scale3d(1.02,1.02,1.02)`;
  };
  // 鼠标离开重置
  const onLeave = () => {
    if (cardRef.current)
      cardRef.current.style.transform =
        "perspective(900px) rotateY(0) rotateX(0) scale3d(1,1,1)";
    setPaused(false);
  };

  const slide = slides[current];
  const SlideIcon = slide.Icon;

  const bannerAspectRatio = isMobile ? "16/9" : "16/10";

  return (
    <div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={onLeave}
      // 替换为 👇 （自定义比例：桌面16/10，平板16/9，手机1/1）
      className="relative rounded-2xl overflow-hidden cursor-pointer w-full !min-w-0 aspect-[16/10] md:aspect-[16/9] sm:aspect-[1/1]"
      style={{
        transition: "transform 0.15s ease-out",
        transformStyle: "preserve-3d",
        boxShadow: `0 0 60px rgba(0,240,200,0.1), 0 30px 80px rgba(0,0,0,0.5)`,
        border: "1px solid rgba(0,240,200,0.12)",
        background: "rgba(255,255,255,0.02)",
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
        aspectRatio: bannerAspectRatio,
        isolation: "isolate",
        clipPath: "inset(0 round 16px)",
      }}
    >
      {/* 轮播图片 — 淡入淡出切换 */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 w-full h-full"
          style={{
            opacity:
              i === current ? (transitioning ? 0 : 1) : 0,
            transition: "opacity 0.3s ease",
          }}
        >
          {imageErrors[i] ? (
            /* 图片加载失败时的缺省状态 */
            <div
              className="absolute inset-0 flex flex-col items-center justify-center p-8"
              style={{
                background: `linear-gradient(135deg, ${s.accent}18 0%, #05050a 100%)`,
              }}
            >
              <p
                className="text-sm text-center"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                图片加载失败
              </p>
              <p
                className="text-xs text-center mt-2"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                请换个 WiFi 或使用自己的热点
              </p>
            </div>
          ) : (
            <img
              src={s.img}
              alt={s.label}
              className="absolute inset-0 w-full h-full object-cover"
              onError={() => {
                setImageErrors((prev) => ({
                  ...prev,
                  [i]: true,
                }));
              }}
            />
          )}
        </div>
      ))}

      {/* 高光遮罩 — 点击切换下一张 */}
      <div
        className="absolute inset-0 z-10 cursor-pointer"
        onClick={(e) => {
          if (transitioning) return;
          const rect = e.currentTarget.getBoundingClientRect();
          const clickX = e.clientX - rect.left;
          const isLeftHalf = clickX < rect.width / 2;

          if (isLeftHalf) {
            // 点击左侧：上一页
            goTo((current - 1 + slides.length) % slides.length);
          } else {
            // 点击右侧：下一页
            goTo((current + 1) % slides.length);
          }
        }}
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 50%, rgba(0,240,200,0.04) 100%)",
        }}
      />

      {/* 顶部窗口按钮栏 */}
      {!isMobile && (
        <div
          className="absolute top-0 left-0 right-0 z-20 flex items-center gap-2 px-4 py-3"
          style={{
            background: "rgba(0,0,0,0.28)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {["#ff5f56", "#ffbd2e", "#27c93f"].map((c) => (
            <div
              key={c}
              className="w-3 h-3 rounded-full"
              style={{ background: c, opacity: 0.85 }}
            />
          ))}
        </div>
      )}

      {/* 底部信息栏 */}

      <div
        className={`absolute bottom-0 left-0 right-0 z-20 flex items-center ${isMobile ? "justify-center" : "justify-between"} px-3.5 py-2.5`}
        style={{
          background: "rgba(0,0,0,0.28)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {/* 标签 */}
        {!isMobile && (
          <div
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg"
            style={{
              background: slide.accentBg,
              border: `1px solid ${slide.accentBorder}`,
              transition: "background 0.4s, border 0.4s",
            }}
          >
            <SlideIcon
              size={12}
              style={{ color: slide.accent }}
            />
            <span
              className="text-xs"
              style={{ color: slide.accent, fontWeight: 600 }}
            >
              {slide.label}
            </span>
          </div>
        )}
        {/* 轮播指示器 */}
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="relative overflow-hidden"
              style={{
                width: i === current ? 26 : 6,
                height: 6,
                borderRadius: 9999,
                background:
                  i === current
                    ? "rgba(255,255,255,0.2)"
                    : "rgba(255,255,255,0.3)",
                border: "none",
                padding: 0,
                transition:
                  "width 0.35s ease, background 0.35s ease",
                cursor: "pointer",
              }}
            >
              {i === current && (
                <span
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: slide.accent,
                    width: "0%",
                    animation:
                      "progressFlow 3.6s linear forwards",
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Main Hero ─── */
export function Hero() {
  const [showPasswordDialog, setShowPasswordDialog] =
    useState(false);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href =
      "https://raw.githubusercontent.com/quweijia/file/main/1%E3%80%81UI%20%E4%B8%BB%E7%AE%A1-%E6%9B%B2%E7%BB%B4%E7%94%B2-15662796885.pdf";
    link.download = "曲维甲-UI主管-简历.pdf";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      className="relative flex items-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 100% 80% at 60% 10%, rgba(0,240,200,0.05) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(124,111,247,0.06) 0%, transparent 60%), #05050a",
        minHeight: "calc(100vh / var(--screen-scale))",
      }}
    >
      {/* Liquid Ether 流体背景效果 */}
      <LiquidEther
        colors={["#00f0c8", "#7c6ff7", "#ff9ffc"]}
        mouseForce={25}
        cursorSize={120}
        resolution={0.5}
        autoDemo={true}
        autoSpeed={0.3}
        autoIntensity={1.5}
      />

      <ParticleCanvas />

      {/* Horizontal scan line */}
      <div
        className="absolute left-0 right-0 h-px pointer-events-none z-10 opacity-30"
        style={{
          top: "35%",
          background:
            "linear-gradient(90deg,transparent,rgba(0,240,200,0.4),transparent)",
          animation: "scanline 6s ease-in-out infinite",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,240,200,1) 1px,transparent 1px),linear-gradient(90deg,rgba(0,240,200,1) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div
        className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10 w-full"
        style={{
          paddingTop: "calc(6rem / var(--screen-scale))",
          paddingBottom: "calc(4rem / var(--screen-scale))",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
          {/* ── Left ── */}
          <div>
            {/* Status */}
            <div
              className="inline-flex items-center gap-2 mb-7 px-4 py-2 rounded-full"
              style={{
                background: "rgba(0,240,200,0.06)",
                border: "1px solid rgba(0,240,200,0.18)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{
                  background: "rgb(var(--c1))",
                  boxShadow: "0 0 8px rgb(var(--c1))",
                }}
              />
              <span
                className="text-xs tracking-widest"
                style={{
                  color: "rgb(var(--c1))",
                  letterSpacing: "0.16em",
                  fontWeight: 500,
                }}
              >
                LOOKING FOR GOOD JOB · 期待您的联系
              </span>
            </div>

            {/* Name */}
            <h1
              className="mb-4"
              style={{
                fontSize: "clamp(3.2rem, 7vw, 5.5rem)",
                fontWeight: 800,
                lineHeight: 1.2, // 🔥 加宽行高，彻底避免挤压
                letterSpacing: "-0.03em",
                color: "#f0f4f8",
              }}
            >
              Vic Qu
              <br />
              <span
                style={{
                  // 核心渐变不变
                  background:
                    "linear-gradient(135deg, rgb(var(--c1)) 0%, rgb(var(--c2)) 25%, rgb(var(--c3)) 50%, rgb(var(--c2)) 75%, rgb(var(--c1)) 100%)",
                  backgroundSize: "200% 200%",
                  // 🔥 关键修复：禁止背景重复 + 只渲染文字区域
                  backgroundRepeat: "no-repeat",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  // 🔥 删除所有多余定位/块级属性，纯行内元素
                  display: "inline",
                  animation: "flowGradient 6s ease infinite",
                }}
              >
                Full-Stack
              </span>
              <br />
              <span
                style={{
                  color: "rgba(255,255,255,0.15)",
                  WebkitTextStroke: "1px rgba(255,255,255,0.2)",
                }}
              >
                Designer
              </span>
            </h1>

            {/* Typewriter */}
            <p
              className="mb-6"
              style={{
                fontSize: "1.0625rem",
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.7,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "clip",
              }}
            >
              ENFJ · 全栈设计师 · 专注{" "}
              <Typewriter
                words={[
                  "UI/UX Design",
                  "Design Systems",
                  "AI Design Workflow",
                  "Information Visualization",
                  "Full-Stack Implementation",
                  "Collaboration Enablement",
                ]}
              />
              <br />
              AI 能力深度融入设计全链路
            </p>

            {/* Tags */}
            <div
              className="flex gap-3 overflow-x-auto pb-2 mb-10 flex-nowrap"
              style={{
                // 隐藏滚动条（美观）
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {/* 隐藏滚动条样式已通过 Tailwind 和内联样式处理 */}
              {[
                {
                  icon: <Component size={11} />,
                  label: "原子组件规范落地",
                },
                {
                  icon: <LayoutDashboard size={11} />,
                  label: "响应式设计",
                },
                {
                  icon: <WandSparkles size={11} />,
                  label: "AI 设计赋能 ",
                },
              ].map((t) => (
                <span
                  key={t.label}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm flex-shrink-0"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  <span style={{ color: "rgb(var(--c1))" }}>
                    {t.icon}
                  </span>
                  {t.label}
                </span>
              ))}
            </div>

            {/* CTAs */}
            {/* ============================================== */}
            {/* 🔥 修改位置：新增 Flex 父容器，实现横向排列 */}
            {/* ============================================== */}
            <div className="flex flex-wrap items-center gap-4">
              {/* 按钮1：查看作品（原样保留，仅外层结构调整） */}
              <div className="btn-wrapper">
                <button
                  onClick={() =>
                    document
                      .getElementById("portfolio")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="btn"
                >
                  <svg
                    className="btn-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                    ></path>
                  </svg>

                  <div className="txt-wrapper">
                    <div
                      className="txt-1 pl-[0px] pr-[12px] py-[0px]"
                      style={{
                        color: "rgba(var(--c1)",
                        opacity: 1,
                        visibility: "visible",
                        fontSize: "16px",
                        lineHeight: "1.5",
                        display: "block",
                        position: "relative",
                        zIndex: 10,
                      }}
                    >
                      <span
                        className="btn-letter"
                        style={{
                          color: "rgba(var(--c1)",
                          opacity: 1,
                          fontSize: "16px",
                          display: "inline-block",
                        }}
                      >
                        查
                      </span>
                      <span
                        className="btn-letter"
                        style={{
                          color: "rgba(var(--c1)",
                          opacity: 1,
                          fontSize: "16px",
                          display: "inline-block",
                        }}
                      >
                        看
                      </span>
                      <span
                        className="btn-letter"
                        style={{
                          color: "rgba(var(--c1)",
                          opacity: 1,
                          fontSize: "16px",
                          display: "inline-block",
                        }}
                      >
                        作
                      </span>
                      <span
                        className="btn-letter"
                        style={{
                          color: "rgba(var(--c1)",
                          opacity: 1,
                          fontSize: "16px",
                          display: "inline-block",
                        }}
                      >
                        品
                      </span>
                    </div>
                    <div className="txt-2">
                      <span className="btn-letter">查</span>
                      <span className="btn-letter">看</span>
                      <span className="btn-letter">作</span>
                      <span className="btn-letter">品</span>
                    </div>
                  </div>
                  {/* <ArrowRight size={18} className="btn-svg" /> */}
                </button>
              </div>

              {/* 按钮2：简历 PDF（完全原样保留） */}
              <button
                onClick={() => setShowPasswordDialog(true)}
                className="group flex items-center gap-2 px-6 py-2 rounded-3xl text-base transition-all duration-300 hover:scale-[1.02]"
                style={{
                  border: "1px solid rgba(var(--c1),0.3)",
                  color: "rgba(255,255,255,0.65)",
                  background: "rgba(var(--c1),0.15)",
                  boxShadow:
                    "0 0 25px rgba(var(--c1),0.15), 0 5px 15px rgba(0,0,0,0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(var(--c1),0.5)";
                  e.currentTarget.style.background =
                    "rgba(var(--c1),0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(var(--c1),0.3)";
                  e.currentTarget.style.background =
                    "rgba(var(--c1),0.15)";
                }}
              >
                <Download
                  size={14}
                  className="group-hover:animate-bounce group-hover:translate-y-0.5 transition-transform duration-300"
                  style={{ color: "rgb(var(--c1))" }}
                />
                <span
                  className="transition-colors duration-300"
                  style={{
                    color: "rgb(var(--c1))",
                  }}
                >
                  简历 PDF
                </span>
              </button>
            </div>
          </div>

          {/* ── Right ── */}
          <div className="mt-10 md:mt-0">
            {/* Floating orb behind card */}
            <div
              className="absolute -z-10 w-96 h-96 rounded-full"
              style={{
                background:
                  "radial-gradient(circle,rgba(0,240,200,0.08) 0%,transparent 70%)",
                filter: "blur(50px)",
                right: 0,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />

            <TiltCard />

            {/* Floating chips */}
            {/* <div
              className="absolute -left-6 top-1/4 px-4 py-2.5 rounded-xl text-xs"
              style={{
                background: "rgba(5,5,12,0.9)",
                border: "1px solid rgba(0,240,200,0.2)",
                color: "#00f0c8",
                backdropFilter: "blur(12px)",
                boxShadow: "0 0 20px rgba(0,240,200,0.08)",
              }}
            >
              <Zap size={12} style={{ color: "#00f0c8" }} />
              <div>
                <div style={{ fontWeight: 700 }}>UX Audit</div>
                <div
                  style={{
                    color: "rgba(255,255,255,0.4)",
                    marginTop: 2,
                  }}
                >
                  ↑ 34% DAU
                </div>
              </div>
            </div> */}
            {/* <div
              className="absolute -right-4 bottom-1/4 px-4 py-2.5 rounded-xl text-xs"
              style={{
                background: "rgba(5,5,12,0.9)",
                border: "1px solid rgba(124,111,247,0.25)",
                color: "#7c6ff7",
                backdropFilter: "blur(12px)",
                boxShadow: "0 0 20px rgba(124,111,247,0.08)",
              }}
            >
              <Cpu size={12} style={{ color: "#7c6ff7" }} />
              <div>
                <div style={{ fontWeight: 700 }}>
                  AI Workflow
                </div>
                <div
                  style={{
                    color: "rgba(255,255,255,0.4)",
                    marginTop: 2,
                  }}
                >
                  3× Faster
                </div>
              </div>
            </div> */}
          </div>
        </div>
        {/* Stats */}
        <div className="flex flex-wrap w-full mx-auto justify-between mt-12 mb-0 gap-y-12">
          {[
            { v: 10, s: "+", label: "年设计经验" },
            { v: 60, s: "+", label: "上线产品" },
            { v: 5, s: "+", label: "企业级设计系统" },
            { v: 50, s: "+", label: "可视化大屏" },
            { v: 12, s: "+", label: "图标库" },
            { v: 32, s: "+", label: "团队赋能" },
          ].map((s) => (
            <div
              key={s.label}
              className="w-[120px] text-center"
            >
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 800,
                  color: "#f0f4f8",
                  lineHeight: 1,
                }}
              >
                <Counter target={s.v} suffix={s.s} />
              </div>
              <div
                className="text-xm mt-1"
                style={{
                  color: "rgba(255,255,255,0.6)",
                  letterSpacing: "0.06em",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: "linear-gradient(transparent,#05050a)",
        }}
      />

      {/* Password Dialog */}
      <PasswordDialog
        isOpen={showPasswordDialog}
        onClose={() => setShowPasswordDialog(false)}
        onConfirm={handleDownloadResume}
      />

      <style>{`
      /* 全局隐藏滚动条 */
        ::-webkit-scrollbar {
          display: none !important;
        }
        html, body {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
          overflow-x: hidden;
        }
        @keyframes scanline {
          0%,100% { top:15%; opacity:0; }
          30% { opacity:0.3; }
          50% { top:75%; opacity:0.15; }
          70% { opacity:0; }
        }
        @keyframes flowGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes progressFlow {
          0% { width: 0%; }
          100% { width: 100%; }
        }

/* ============================================== */
/* 🔥 最终版：悬停文字变白 + 动效超强强化 */
/* ============================================== */
.btn-wrapper {
  position: relative;
  display: inline-block;
}

.btn {
  --border-radius: 24px;
  --padding: 0px;
  --transition: 0.3s;
  --button-color: "rgba(var(--c1),0.15)";

  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.6em 1.2em;
  font-family: "Poppins", "Inter", "Segoe UI", sans-serif;
  font-size: 1em;
  font-weight: 600;

  background-color: var(--button-color);
  box-shadow:
    inset 0px 1px 1px rgba(255, 255, 255, 0.2),
    inset 0px 2px 2px rgba(255, 255, 255, 0.15),
    inset 0px 4px 4px rgba(255, 255, 255, 0.1),
    0px -1px 1px rgba(0, 0, 0, 0.02),
    0px -2px 2px rgba(0, 0, 0, 0.03);

  border: solid 1px rgba(var(--c1), 0.3);
  border-radius: var(--border-radius);
  cursor: pointer;
  transition:
    box-shadow var(--transition),
    border var(--transition),
    background-color var(--transition);
}

.btn::before {
  content: "";
  position: absolute;
  top: calc(0px - var(--padding));
  left: calc(0px - var(--padding));
  width: calc(100% + var(--padding) * 2);
  height: calc(100% + var(--padding) * 2);
  border-radius: calc(var(--border-radius) + var(--padding));
  pointer-events: none;
  background-image: linear-gradient(0deg, rgba(var(--c1), 0.2), rgba(var(--c1), 0.1));
  z-index: -1;
  transition: box-shadow var(--transition);
  
}

.btn::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  pointer-events: none;
  background-image: linear-gradient(
    0deg,
    #fff,
    rgba(var(--c1), 0.5),
    rgba(var(--c1), 0.2),
    transparent
  );
  opacity: 0;
  transition: opacity var(--transition);
}

/* ===================== 核心：文字动效超强强化 ===================== */
.btn-letter {
  position: relative;
  display: inline-block;
  color: rgb(var(--c1)); /* 基础色 */
  animation: letter-anim 1.5s ease-in-out infinite alternate;
  padding: 0 1px;
  transition: all var(--transition), color 0.3s ease !important;
}

@keyframes letter-anim {
  0% {
    text-shadow: 0 0 2px rgba(var(--c1), 0.02);
    transform: scale(1);
  }
  50% {
    text-shadow: 0 0 8px rgba(var(--c1), 0.06), 0 0 16px rgba(var(--c1), 0.05);
    color: rgba(var(--c1), 0.6);
    transform: scale(0.9);
  }
  100% {
    text-shadow: 0 0 2px rgba(var(--c1), 0.02);
    transform: scale(1);
  }
}

.btn-svg {
  width: 20px;
  height: 20px;
  fill: rgb(var(--c1));
  animation: flicker 1.5s linear infinite alternate;
  filter: drop-shadow(0 0 3px rgba(var(--c1), 0.6));
  transition: all var(--transition);
  margin-right: 0.5rem;
}
@keyframes flicker {
  50% {
    opacity: 0.5;
    filter: drop-shadow(0 0 6px rgba(var(--c1), 0.8));
  }
}

.txt-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5em;
  height: 24px;
  white-space: nowrap !important;
  overflow: hidden;
}
.txt-1, .txt-2 {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
}

.txt-1 { animation: appear-anim 1s forwards; }
.txt-2 { opacity: 0; }
@keyframes appear-anim { 0%{opacity:0} 100%{opacity:1} }

.btn-letter:nth-child(1){ animation-delay: 0s; }
.btn-letter:nth-child(2){ animation-delay: 0.06s; }
.btn-letter:nth-child(3){ animation-delay: 0.12s; }
.btn-letter:nth-child(4){ animation-delay: 0.18s; }

/* ===================== 交互动效强化 ===================== */
.btn:hover {
  border-color: rgba(var(--c1), 0.8);
  background-color: rgba(var(--c1), 0.1);
}
.btn:hover .btn-letter {
  color: #ffffff !important; /* 🔥 核心修改：文字变白色 */
  animation-duration: 0.6s;
  text-shadow: 
    0 0 12px rgba(var(--c1), 0.6), 
    0 0 24px rgba(var(--c1), 0.5),
    0 0 32px rgba(var(--c1), 0.3);
  transform: scale(1.15);
}
.btn:hover::after { opacity: 0.8; }
.btn:hover .btn-svg {
  fill: #ffffff; /* 🔥 图标也变白 */
  filter: drop-shadow(0 0 8px rgba(var(--c1), 1));
}

.btn:active {
  border-color: rgba(var(--c1), 1);
  background-color: rgba(var(--c1), 0.15);
}
.btn:active .btn-letter {
  color: #ffffff !important;
  text-shadow: 0 0 15px rgba(var(--c1), 1), 0 0 30px rgba(var(--c1), 0.9);
  animation: none;
  transform: scale(1.2);
}

.btn:focus .btn-letter {
  animation: focused-letter-anim 1s ease-in-out forwards;
}
@keyframes focused-letter-anim {
  50% {
    transform: scale(1.4);
    filter: blur(2px) brightness(200%);
    text-shadow: 0 0 20px rgb(var(--c1)), 0 0 40px rgb(var(--c1));
  }
}
      `}</style>
    </section>
  );
}