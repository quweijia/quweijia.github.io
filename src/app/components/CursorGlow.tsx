import { useEffect, useRef } from "react";

// 定义烟花粒子的类型
type Spark = {
  x: number;
  y: number;
  angle: number;
  startTime: number;
  color: string; // 👈 新增颜色属性
};

export function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // 光标位置状态
  const pos = useRef({ x: -200, y: -200 });
  const ringPos = useRef({ x: -200, y: -200 });

  // 烟花状态
  const sparksRef = useRef<Spark[]>([]);
  const raf = useRef<number>(0);
  const isInHero = useRef(false);

  // 烟花配置参数
  const sparkColor = "rgb(var(--c1))"; // 匹配你的光标颜色
  const sparkSize = 10;
  const sparkRadius = 25;
  const sparkCount = 8;
  const duration = 400;
  const extraScale = 1.0;

  useEffect(() => {
    // ---- 1. 基础事件监听 ----
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const handleEnterHero = () => (isInHero.current = true);
    const handleLeaveHero = () => (isInHero.current = false);

    // ---- 2. Canvas 尺寸自适应 ----
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas(); // 初始化尺寸

    // ---- 3. 鼠标点击触发烟花 ----
    const onClick = (e: MouseEvent) => {
      // 动态读取 CSS 变量 (获取 :root 下的 --c1)
      const rootStyles = getComputedStyle(
        document.documentElement,
      );
      const c1Value = rootStyles
        .getPropertyValue("--c1")
        .trim();
      // 如果读取到了，就拼接成 rgb，否则使用默认色兜底
      const currentColor = c1Value
        ? `rgb(${c1Value})`
        : "#00f0c8";

      const now = performance.now();
      const newSparks = Array.from(
        { length: sparkCount },
        (_, i) => ({
          x: e.clientX,
          y: e.clientY,
          angle: (2 * Math.PI * i) / sparkCount,
          startTime: now,
          color: currentColor, // 👈 记录当前颜色
        }),
      );
      sparksRef.current.push(...newSparks);
    };
    window.addEventListener("click", onClick);

    // 缓动函数 (ease-out)
    const easeOut = (t: number) => t * (2 - t);

    // ---- 4. 统一的动画循环 ----
    const animate = (timestamp: DOMHighResTimeStamp) => {
      // (1) 更新圆环位置
      ringPos.current.x +=
        (pos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y +=
        (pos.current.y - ringPos.current.y) * 0.12;

      // (2) 渲染中心点
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`;
        dotRef.current.style.opacity = isInHero.current
          ? "1"
          : "0";
      }

      // (3) 渲染外圆环
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x - 20}px, ${ringPos.current.y - 20}px)`;
        ringRef.current.style.opacity = isInHero.current
          ? "1"
          : "0";
      }

      // (4) 渲染烟花 (Canvas)
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        sparksRef.current = sparksRef.current.filter(
          (spark) => {
            const elapsed = timestamp - spark.startTime;
            if (elapsed >= duration) return false; // 动画结束，移除粒子

            const progress = elapsed / duration;
            const eased = easeOut(progress);

            const distance = eased * sparkRadius * extraScale;
            const lineLength = sparkSize * (1 - eased);

            const x1 =
              spark.x + distance * Math.cos(spark.angle);
            const y1 =
              spark.y + distance * Math.sin(spark.angle);
            const x2 =
              spark.x +
              (distance + lineLength) * Math.cos(spark.angle);
            const y2 =
              spark.y +
              (distance + lineLength) * Math.sin(spark.angle);

            ctx.strokeStyle = spark.color;
            ctx.lineWidth = 2;
            ctx.lineCap = "round";
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();

            return true; // 保持粒子存活
          },
        );
      }

      raf.current = requestAnimationFrame(animate);
    };

    // 启动监听与动画
    window.addEventListener("mousemove", onMove);
    raf.current = requestAnimationFrame(animate);

    const hero = document.getElementById("hero");
    if (hero) {
      hero.addEventListener("mouseenter", handleEnterHero);
      hero.addEventListener("mouseleave", handleLeaveHero);
    }

    // ---- 5. 清理函数 ----
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClick);
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(raf.current);

      if (hero) {
        hero.removeEventListener("mouseenter", handleEnterHero);
        hero.removeEventListener("mouseleave", handleLeaveHero);
      }
    };
  }, []);

  return (
    <>
      {/* 烟花 Canvas 层 (层级设在光标下方) */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 pointer-events-none z-[9995]"
        style={{ width: "100vw", height: "100vh" }}
      />

      {/* 光标中心点 */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9997] transition-opacity duration-200"
        style={{
          background: "rgb(var(--c1))",
          boxShadow:
            "0 0 8px rgba(0,240,200,0.9), 0 0 20px rgba(0,240,200,0.4)",
          willChange: "transform",
          opacity: 0,
        }}
      />

      {/* 光标外圆环 */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9996] transition-opacity duration-200"
        style={{
          border: "1px solid rgba(var(--c1),0.35)", // 👈 更新这里
          willChange: "transform",
          opacity: 0,
        }}
      />
    </>
  );
}