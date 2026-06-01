import { useRef, useEffect, useState } from "react";
import { Mouse, ChevronDown } from "lucide-react";
import spriteUrl from "../../imports/sprite_9900x4800_70.png";

// --- 配置参数 ---
const SPRITE_COLS = 9;
const SPRITE_ROWS = 8;
const TOTAL_FRAMES = 70;
const SCROLL_VH = 400;
const SCRUB_END = 0.96;

/**
 * 自定义滚动函数
 * @param element 滚动的容器
 * @param to 目标位置 (scrollTop)
 * @param duration 持续时间 (ms)
 */
const animateScroll = (
  element: HTMLElement,
  to: number,
  duration: number,
) => {
  const start = element.scrollTop;
  const change = to - start;
  const startTime = performance.now();

  const animate = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // 缓动函数：让滚动先快后慢 (easeOutQuad)
    const ease = progress * (2 - progress);

    element.scrollTop = start + change * ease;

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
};

// 每一帧的原始像素尺寸 (根据你的数据: 9900/9=1100, 4800/8=600)
const FRAME_W = 1100;
const FRAME_H = 600;
const FRAME_ASPECT = FRAME_W / FRAME_H;

export function ScrollVideo() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const btnContainerRef = useRef<HTMLDivElement>(null);

  const [ready, setReady] = useState(false);
  const [done, setDone] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // 记录当前帧，以便在 resize 时保持当前帧位置
  const frameRef = useRef(0);

  // --- 核心修复：带居中补偿的定位函数 ---
  const updateFrame = (frame: number) => {
    const img = imgRef.current;
    const container = containerRef.current;
    if (!img || !container) return;
    frameRef.current = frame;

    const winW = window.innerWidth;
    const winH = window.innerHeight;

    // --- 核心：强制宽度撑开 ---
    const scale = winW / FRAME_W;

    // 计算当前帧在雪碧图中的行列
    const col = frame % SPRITE_COLS;
    const row = Math.floor(frame / SPRITE_COLS);

    // 计算缩放后的单帧尺寸
    const scaledFrameH = FRAME_H * scale;

    // 1. 强制容器高度等于单帧缩放后的高度（防止露出下一行）
    container.style.height = `${scaledFrameH}px`;
    container.style.width = `${winW}px`;

    // 2. 计算位移（此时只需要位移 X 轴，Y 轴通过行列定位偏移）
    // offsetX: 居中对齐当前帧
    const offsetX =
      winW / 2 - (col * FRAME_W + FRAME_W / 2) * scale;
    // offsetY: 每一行起始点的负偏移，确保容器顶端对准当前行的顶端
    const offsetY = -(row * FRAME_H * scale);

    // 3. 应用样式
    img.style.width = `${FRAME_W * SPRITE_COLS * scale}px`;
    img.style.height = `${FRAME_H * SPRITE_ROWS * scale}px`;
    img.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
  };

  // 监听窗口缩放
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      updateFrame(frameRef.current);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    if (!done) document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "auto";
    };
  }, [done, isMobile]);

  // 预加载
  useEffect(() => {
    const img = new Image();
    img.src = spriteUrl;
    img.onload = () => {
      setReady(true);
      // 延迟一丢丢确保 DOM 渲染完成
      requestAnimationFrame(() => updateFrame(0));
    };
  }, []);

  // 滚动监听
  const handleScroll = () => {
    const el = overlayRef.current;
    if (!el || done) return;

    const scrollTop = el.scrollTop;
    const scrollHeight = el.scrollHeight - el.clientHeight;
    const progress = Math.min(
      1,
      Math.max(0, scrollTop / scrollHeight),
    );

    if (progress <= SCRUB_END) {
      const p = progress / SCRUB_END;
      const targetFrame = Math.floor(p * (TOTAL_FRAMES - 1));
      updateFrame(targetFrame);

      if (containerRef.current) {
        containerRef.current.style.transform = `scale(1)`;
        containerRef.current.style.opacity = "1";
      }
    } else {
      updateFrame(TOTAL_FRAMES - 1);
      // const k = (progress - SCRUB_END) / (1 - SCRUB_END);
      // if (containerRef.current) {
      //   // 这里的缩放是基于屏幕中心的
      //   containerRef.current.style.transform = `scale(${1 + k * 1.5})`;
      //   containerRef.current.style.opacity = (
      //     1 -
      //     k * 1.2
      //   ).toString();
      // }
      // --- 修改后：缩小效果 ---
      const k = (progress - SCRUB_END) / (1 - SCRUB_END);
      if (containerRef.current) {
        // 方案 A：完全缩小到 0
        // containerRef.current.style.transform = `scale(${1 - k})`;

        // 方案 B：缩小到原始尺寸的一半 (建议，视觉更平滑)
        const shrinkScale = 1 - k * 0.5; // 从 1 变到 0.5

        containerRef.current.style.transformOrigin = "top left";

        containerRef.current.style.transform = `scale(${shrinkScale})`;

        // 透明度通常保持不变，让它在缩小的同时淡出
        containerRef.current.style.opacity = (1 - k).toString();
      }
      if (k >= 0.99) setDone(true);
    }
  };

  if (done) return null;

  return (
    <div
      ref={overlayRef}
      onScroll={handleScroll}
      className="scroll-video-overlay"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        overflowY: "auto",
        overflowX: "hidden",
        background: "#000",
        scrollbarWidth: "none",
      }}
    >
      <style>{`
  /* 1. 隐藏滚动条 */
  .scroll-video-overlay::-webkit-scrollbar { display: none; }

  /* 2. 文字呼吸动画 */
  @keyframes pulse-soft {
    0%, 100% { opacity: 0.3; transform: scale(0.95); letter-spacing: 0.2em; }
    50% { opacity: 1; transform: scale(1); letter-spacing: 0.4em; }
  }
  .loading-text {
    animation: pulse-soft 2s infinite ease-in-out;
  }

  /* 3. 装饰横线扫光动画 (这是你之前缺少的) */
  @keyframes shimmer-move {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  .animate-shimmer-run {
    animation: shimmer-move 1.5s infinite linear;
  }
`}</style>

      <div
        style={{
          height: `${SCROLL_VH}vh`,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            width: "100%",
            overflow: "hidden",
            background: "#000",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center", // 垂直居中
              justifyContent: "center", // 水平居中
              marginTop: isMobile ? "-100px" : "0",
            }}
          >
            {/* 序列帧裁剪层 - 这一层高度会被 JS 动态修改为单帧高度 */}
            <div
              ref={containerRef}
              style={{
                position: "relative",
                overflow: "hidden", // 关键：裁剪掉单帧以外的所有内容（防止多行）
                willChange: "transform, opacity",
              }}
            >
              <img
                ref={imgRef}
                src={spriteUrl}
                alt="intro-sprite"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  maxWidth: "none",
                  display: "block",
                  willChange: "transform",
                  pointerEvents: "none",
                  opacity: ready ? 1 : 0,
                }}
              />
            </div>
          </div>

          {!ready && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "#000",
                zIndex: 100,
              }}
            >
              {/* 文字部分：确保类名 loading-text 正确 */}
              <div
                className="loading-text"
                style={{
                  color: "white",
                  fontSize: "12px",
                  fontWeight: 300,
                  textTransform: "uppercase",
                }}
              >
                Loading
              </div>

              {/* 装饰性的小横线 */}
              <div
                style={{
                  width: "70px", // 稍微加长一点更有质感
                  height: "1.5px",
                  background: "rgba(255,255,255,0.15)",
                  marginTop: "6px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  className="animate-shimmer-run" // 👈 对应 CSS 里的动画名
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
                  }}
                />
              </div>
            </div>
          )}

          <div
            ref={btnContainerRef}
            style={{
              position: "absolute",
              bottom: "8vh",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              zIndex: 10,
            }}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                const el = overlayRef.current;
                if (!el) return;
                const target =
                  el.scrollHeight - el.clientHeight;
                animateScroll(el, target, 2800);
              }}
              className={`
    relative z-10 flex items-center gap-3 px-[32px] py-[12px] 
    text-[14px] font-semibold uppercase tracking-[0.15em]
    text-white border border-white/40 rounded-[34px] 
    bg-black/30 backdrop-blur-sm overflow-hidden
    transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]
    
    /* Hover 状态按钮自身变化 */
    hover:scale-110 hover:text-[#212121] hover:border-[#C1A362]
    hover:shadow-[0_0px_20px_rgba(193,163,98,0.4)]
    active:scale-100

    /* 使用 before 伪元素实现中心扩散背景 */
    before:content-[''] before:absolute before:inset-0 before:m-auto
    before:w-[50px] before:h-[50px] before:rounded-full
    before:bg-white before:z-[-1] before:scale-0
    before:transition-all before:duration-700 before:ease-[cubic-bezier(0.23,1,0.32,1)]
    
    /* Hover 时背景圆圈放大 */
    hover:before:scale-[6]
  `}
            >
              <Mouse
                size={18}
                className="transition-colors duration-300"
              />
              <span className="relative z-10">SCROLL</span>
              <ChevronDown
                size={18}
                className="animate-bounce transition-colors duration-300"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}