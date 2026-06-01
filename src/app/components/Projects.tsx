import { useRef, useEffect, useState } from "react";
import {
  ArrowUpRight,
  Sparkles,
  ChevronRight,
  X,
  ExternalLink,
} from "lucide-react";
import { useTheme } from "./ThemeContext";
import { Portal } from "./Portal";

/* ==============================================
   1. 滚动显示动画 Hook
   功能：元素滚到屏幕可视区域 → 自动显示（淡入 + 上移）
   参数：delay 延迟显示时间（毫秒）
   返回：ref 绑定元素 / vis 是否可见
================================================= */
function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    // 监听元素是否进入视口
    const ob = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          // 延迟后显示元素
          setTimeout(() => setVis(true), delay);
          ob.disconnect(); // 显示后停止监听，优化性能
        }
      },
      { threshold: 0.06 }, // 元素露出 6% 就触发
    );

    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, [delay]);

  return { ref, vis };
}

/* ==============================================
   2. 数字滚动动画组件
   功能：滚动到可视区域 → 数字从 from 滚到 to
   参数：from 起始数字 / to 目标数字 / suffix 单位后缀
================================================= */
function Count({
  from = 0,
  to,
  suffix = "",
}: {
  from?: number;
  to: number;
  suffix?: string;
}) {
  const [n, setN] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ob = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          let v = from;
          const step = (to - from) / 55; // 每次增加的步长

          const iv = setInterval(() => {
            v = Math.min(
              v + Math.abs(step),
              Math.max(from, to),
            );
            setN(Math.round(v));

            // 到达目标值 → 停止动画
            if (Math.abs(v - to) < 0.5) {
              setN(to);
              clearInterval(iv);
            }
          }, 22); // 每 22ms 更新一次数字

          ob.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, [from, to]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

/* ==============================================
   3. 设计流程步骤标签组件
   功能：展示 ["用户研究", "交互设计"...] 流程标签 + 箭头
   参数：steps 步骤数组 / color 主题色
================================================= */
function Flow({
  steps,
  color,
}: {
  steps: string[];
  color: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-1">
      {steps.map((s, i) => (
        <div key={s} className="flex items-center gap-1">
          {/* 单个步骤标签 */}
          <span
            className="px-2.5 py-1 rounded text-xs"
            style={{
              background: `${color}10`,
              border: `1px solid ${color}18`,
              color,
              fontWeight: 500,
            }}
          >
            {s}
          </span>

          {/* 最后一步不加箭头 */}
          {i < steps.length - 1 && (
            <ChevronRight
              size={10}
              style={{ color: "rgba(0,0,0,0.2)" }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

/* ==============================================
   4. 数据指标卡片（浅色版）
   功能：展示项目数据（+34%、4.8/5、91% 等）
================================================= */
function LightMetric({
  value,
  unit,
  label,
  color,
}: {
  value: string;
  unit?: string;
  label: string;
  color: string;
}) {
  return (
    <div
      className="rounded-2xl p-4 flex flex-col gap-1"
      style={{
        background: "white",
        border: "1px solid rgba(0,0,0,0.06)",
        boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
      }}
    >
      {/* 数值 + 单位 */}
      <div className="flex items-baseline gap-0.5">
        <span
          style={{
            fontSize: "1.75rem",
            fontWeight: 900,
            color: "#0c0b18",
            lineHeight: 1,
          }}
        >
          {value}
        </span>
        {unit && (
          <span
            style={{
              fontSize: "0.875rem",
              fontWeight: 700,
              color,
            }}
          >
            {unit}
          </span>
        )}
      </div>

      {/* 指标说明文字 */}
      <p
        style={{
          fontSize: "0.8rem",
          color: "rgba(12,11,24,0.38)",
          letterSpacing: "0.06em",
          lineHeight: 1.4,
        }}
      >
        {label}
      </p>
    </div>
  );
}

/* ==============================================
   5. SVG 抽象可视化图形
   功能：每个项目卡片顶部的装饰图表（城市/柱状图/网络节点）
   参数：type 图表类型 / color 主题色
================================================= */
function AbstractViz({
  type,
  color,
}: {
  type: "city" | "chart" | "net";
  color: string;
}) {
  // 城市路线图
  if (type === "city")
    return (
      <svg
        viewBox="0 0 320 200"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="cv1" cx="60%" cy="40%" r="60%">
            <stop
              offset="0%"
              stopColor={color}
              stopOpacity="0.12"
            />
            <stop
              offset="100%"
              stopColor={color}
              stopOpacity="0"
            />
          </radialGradient>
        </defs>
        <rect width="320" height="200" fill="url(#cv1)" />
        {[30, 70, 110, 150, 190, 230, 270, 310].map((x) => (
          <line
            key={x}
            x1={x}
            y1="0"
            x2={x}
            y2="200"
            stroke={color}
            strokeOpacity="0.07"
            strokeWidth="1"
          />
        ))}
        {[25, 55, 85, 115, 145, 175].map((y) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2="320"
            y2={y}
            stroke={color}
            strokeOpacity="0.07"
            strokeWidth="1"
          />
        ))}
        <path
          d="M20 170 C60 130 110 110 160 100 S240 70 300 40"
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeOpacity="0.7"
          strokeDasharray="7 4"
        />
        {[
          [20, 170],
          [160, 100],
          [300, 40],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle
              cx={x}
              cy={y}
              r="14"
              fill={color}
              fillOpacity="0.08"
              stroke={color}
              strokeOpacity="0.35"
              strokeWidth="1.5"
            />
            <circle cx={x} cy={y} r="4" fill={color} />
          </g>
        ))}
        <rect
          x="190"
          y="48"
          width="44"
          height="76"
          rx="8"
          fill="none"
          stroke={color}
          strokeOpacity="0.25"
          strokeWidth="1.5"
        />
        {[56, 64, 72, 80, 88, 96, 104].map((y) => (
          <rect
            key={y}
            x="196"
            y={y}
            width={y === 56 ? 30 : 22}
            height="4"
            rx="2"
            fill={color}
            fillOpacity="0.12"
          />
        ))}
      </svg>
    );

  // UI 设计系统组件库图表
  if (type === "chart")
    return (
      <svg
        viewBox="0 0 320 200"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="cv2" cx="40%" cy="30%" r="60%">
            <stop
              offset="0%"
              stopColor={color}
              stopOpacity="0.12"
            />
            <stop
              offset="100%"
              stopColor={color}
              stopOpacity="0"
            />
          </radialGradient>
        </defs>
        <rect width="320" height="200" fill="url(#cv2)" />

        {/* 网格背景 */}
        {[20, 60, 100, 140, 180, 220, 260, 300].map((x) => (
          <line
            key={x}
            x1={x}
            y1="0"
            x2={x}
            y2="200"
            stroke={color}
            strokeOpacity="0.06"
            strokeWidth="1"
          />
        ))}
        {[20, 60, 100, 140, 180].map((y) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2="320"
            y2={y}
            stroke={color}
            strokeOpacity="0.06"
            strokeWidth="1"
          />
        ))}

        {/* 按钮组件 */}
        <g>
          {/* 主按钮 */}
          <rect
            x="30"
            y="30"
            width="80"
            height="36"
            rx="8"
            fill={color}
            fillOpacity="0.25"
            stroke={color}
            strokeOpacity="0.5"
            strokeWidth="1.5"
          />
          <rect
            x="36"
            y="42"
            width="40"
            height="3"
            rx="1.5"
            fill={color}
            fillOpacity="0.8"
          />

          {/* 次要按钮 */}
          <rect
            x="30"
            y="85"
            width="70"
            height="32"
            rx="6"
            fill="none"
            stroke={color}
            strokeOpacity="0.4"
            strokeWidth="1.5"
          />
          <rect
            x="36"
            y="95"
            width="35"
            height="2.5"
            rx="1.25"
            fill={color}
            fillOpacity="0.6"
          />
        </g>

        {/* 卡片组件 */}
        <g>
          <rect
            x="135"
            y="30"
            width="100"
            height="80"
            rx="12"
            fill="none"
            stroke={color}
            strokeOpacity="0.35"
            strokeWidth="1.5"
          />
          {/* 卡片头部 */}
          <rect
            x="135"
            y="30"
            width="100"
            height="28"
            rx="12"
            fill={color}
            fillOpacity="0.15"
          />
          <circle
            cx="150"
            cy="44"
            r="4"
            fill={color}
            fillOpacity="0.7"
          />
          <circle
            cx="162"
            cy="44"
            r="4"
            fill={color}
            fillOpacity="0.4"
          />
          <circle
            cx="174"
            cy="44"
            r="4"
            fill={color}
            fillOpacity="0.25"
          />
          {/* 卡片内容 */}
          <rect
            x="142"
            y="68"
            width="50"
            height="3"
            rx="1.5"
            fill={color}
            fillOpacity="0.5"
          />
          <rect
            x="142"
            y="78"
            width="70"
            height="3"
            rx="1.5"
            fill={color}
            fillOpacity="0.3"
          />
          <rect
            x="142"
            y="88"
            width="60"
            height="3"
            rx="1.5"
            fill={color}
            fillOpacity="0.3"
          />
        </g>

        {/* 组件变体展示 */}
        <g>
          {/* 圆角大小对比 */}
          <circle
            cx="260"
            cy="45"
            r="8"
            fill="none"
            stroke={color}
            strokeOpacity="0.5"
            strokeWidth="1.5"
          />
          <circle
            cx="260"
            cy="75"
            r="12"
            fill="none"
            stroke={color}
            strokeOpacity="0.4"
            strokeWidth="1.5"
          />
          <circle
            cx="260"
            cy="110"
            r="16"
            fill="none"
            stroke={color}
            strokeOpacity="0.3"
            strokeWidth="1.5"
          />

          {/* 大小对比 */}
          <rect
            x="245"
            y="135"
            width="30"
            height="30"
            rx="6"
            fill="none"
            stroke={color}
            strokeOpacity="0.5"
            strokeWidth="1.5"
          />
          <rect
            x="250"
            y="140"
            width="20"
            height="20"
            rx="4"
            fill="none"
            stroke={color}
            strokeOpacity="0.4"
            strokeWidth="1.5"
          />
          <rect
            x="255"
            y="145"
            width="10"
            height="10"
            rx="2"
            fill={color}
            fillOpacity="0.4"
          />
        </g>

        {/* 连接线 - 组件关系 */}
        <path
          d="M115 48 L135 48"
          fill="none"
          stroke={color}
          strokeOpacity="0.4"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
        <path
          d="M235 70 L245 70"
          fill="none"
          stroke={color}
          strokeOpacity="0.3"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
        <path
          d="M185 110 L245 110"
          fill="none"
          stroke={color}
          strokeOpacity="0.25"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />

        {/* 装饰圆点 */}
        {[
          [55, 170],
          [160, 175],
          [270, 165],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle
              cx={x}
              cy={y}
              r="10"
              fill={color}
              fillOpacity="0.08"
              stroke={color}
              strokeOpacity="0.3"
              strokeWidth="1.5"
            />
            <circle
              cx={x}
              cy={y}
              r="3"
              fill={color}
              fillOpacity="0.7"
            />
          </g>
        ))}
      </svg>
    );

  // 可视化大屏相关
  return (
    <svg
      viewBox="0 0 320 200"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="cv3" cx="50%" cy="50%" r="60%">
          <stop
            offset="0%"
            stopColor={color}
            stopOpacity="0.12"
          />
          <stop
            offset="100%"
            stopColor={color}
            stopOpacity="0"
          />
        </radialGradient>
      </defs>
      <rect width="320" height="200" fill="url(#cv3)" />

      {/* 顶部标题栏 */}
      <rect
        x="16"
        y="16"
        width="288"
        height="28"
        rx="6"
        fill={color}
        fillOpacity="0.1"
        stroke={color}
        strokeOpacity="0.25"
        strokeWidth="1"
      />
      <rect
        x="30"
        y="24"
        width="80"
        height="12"
        rx="3"
        fill={color}
        fillOpacity="0.5"
      />
      <rect
        x="240"
        y="24"
        width="50"
        height="12"
        rx="3"
        fill={color}
        fillOpacity="0.3"
      />

      {/* 中间内容区 - 均匀分布的6个模块 */}
      <g>
        {/* 左上模块 - 柱状图 */}
        <g>
          <rect
            x="16"
            y="52"
            width="90"
            height="60"
            rx="6"
            fill={color}
            fillOpacity="0.06"
            stroke={color}
            strokeOpacity="0.25"
            strokeWidth="1"
          />
          <rect
            x="28"
            y="95"
            width="12"
            height="12"
            rx="2"
            fill={color}
            fillOpacity="0.35"
          />
          <rect
            x="44"
            y="82"
            width="12"
            height="25"
            rx="2"
            fill={color}
            fillOpacity="0.45"
          />
          <rect
            x="60"
            y="68"
            width="12"
            height="39"
            rx="2"
            fill={color}
            fillOpacity="0.55"
          />
          <rect
            x="76"
            y="58"
            width="12"
            height="49"
            rx="2"
            fill={color}
            fillOpacity="0.65"
          />
        </g>

        {/* 中上模块 - 圆形仪表盘 */}
        <g>
          <rect
            x="115"
            y="52"
            width="90"
            height="60"
            rx="6"
            fill={color}
            fillOpacity="0.06"
            stroke={color}
            strokeOpacity="0.25"
            strokeWidth="1"
          />
          <circle
            cx="160"
            cy="82"
            r="22"
            fill="none"
            stroke={color}
            strokeOpacity="0.25"
            strokeWidth="1.5"
          />
          <circle
            cx="160"
            cy="82"
            r="16"
            fill="none"
            stroke={color}
            strokeOpacity="0.35"
            strokeWidth="2"
            strokeDasharray="60 40"
          />
          <circle
            cx="160"
            cy="82"
            r="5"
            fill={color}
            fillOpacity="0.7"
          />
        </g>

        {/* 右上模块 - 折线图 */}
        <g>
          <rect
            x="214"
            y="52"
            width="90"
            height="60"
            rx="6"
            fill={color}
            fillOpacity="0.06"
            stroke={color}
            strokeOpacity="0.25"
            strokeWidth="1"
          />
          <path
            d="M228 100 L242 88 L256 92 L270 72 L284 76 L298 58"
            fill="none"
            stroke={color}
            strokeOpacity="0.6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {[
            [228, 100],
            [242, 88],
            [256, 92],
            [270, 72],
            [284, 76],
            [298, 58],
          ].map(([x, y], i) => (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="3"
              fill={color}
              fillOpacity="0.75"
            />
          ))}
        </g>

        {/* 左下模块 - 进度条 */}
        <g>
          <rect
            x="16"
            y="122"
            width="90"
            height="60"
            rx="6"
            fill={color}
            fillOpacity="0.06"
            stroke={color}
            strokeOpacity="0.25"
            strokeWidth="1"
          />
          <rect
            x="30"
            y="135"
            width="62"
            height="6"
            rx="3"
            fill={color}
            fillOpacity="0.15"
          />
          <rect
            x="30"
            y="135"
            width="45"
            height="6"
            rx="3"
            fill={color}
            fillOpacity="0.6"
          />
          <rect
            x="30"
            y="150"
            width="62"
            height="6"
            rx="3"
            fill={color}
            fillOpacity="0.15"
          />
          <rect
            x="30"
            y="150"
            width="52"
            height="6"
            rx="3"
            fill={color}
            fillOpacity="0.5"
          />
          <rect
            x="30"
            y="165"
            width="62"
            height="6"
            rx="3"
            fill={color}
            fillOpacity="0.15"
          />
          <rect
            x="30"
            y="165"
            width="35"
            height="6"
            rx="3"
            fill={color}
            fillOpacity="0.4"
          />
        </g>

        {/* 中下模块 - 环形图 */}
        <g>
          <rect
            x="115"
            y="122"
            width="90"
            height="60"
            rx="6"
            fill={color}
            fillOpacity="0.06"
            stroke={color}
            strokeOpacity="0.25"
            strokeWidth="1"
          />
          <circle
            cx="160"
            cy="152"
            r="18"
            fill="none"
            stroke={color}
            strokeOpacity="0.2"
            strokeWidth="4"
          />
          <circle
            cx="160"
            cy="152"
            r="18"
            fill="none"
            stroke={color}
            strokeOpacity="0.5"
            strokeWidth="4"
            strokeDasharray="70 43"
          />
          <circle
            cx="160"
            cy="152"
            r="8"
            fill={color}
            fillOpacity="0.12"
          />
          <rect
            x="150"
            y="148"
            width="20"
            height="3"
            rx="1.5"
            fill={color}
            fillOpacity="0.6"
          />
        </g>

        {/* 右下模块 - 数据卡片 */}
        <g>
          <rect
            x="214"
            y="122"
            width="90"
            height="60"
            rx="6"
            fill={color}
            fillOpacity="0.06"
            stroke={color}
            strokeOpacity="0.25"
            strokeWidth="1"
          />
          <rect
            x="224"
            y="132"
            width="70"
            height="10"
            rx="3"
            fill={color}
            fillOpacity="0.12"
            stroke={color}
            strokeOpacity="0.2"
            strokeWidth="1"
          />
          <rect
            x="230"
            y="135"
            width="30"
            height="4"
            rx="2"
            fill={color}
            fillOpacity="0.5"
          />
          <rect
            x="224"
            y="148"
            width="70"
            height="10"
            rx="3"
            fill={color}
            fillOpacity="0.12"
            stroke={color}
            strokeOpacity="0.2"
            strokeWidth="1"
          />
          <rect
            x="230"
            y="151"
            width="40"
            height="4"
            rx="2"
            fill={color}
            fillOpacity="0.45"
          />
          <rect
            x="224"
            y="164"
            width="70"
            height="10"
            rx="3"
            fill={color}
            fillOpacity="0.12"
            stroke={color}
            strokeOpacity="0.2"
            strokeWidth="1"
          />
          <rect
            x="230"
            y="167"
            width="25"
            height="4"
            rx="2"
            fill={color}
            fillOpacity="0.4"
          />
        </g>
      </g>

      {/* 装饰性角落 */}
      <g>
        <circle
          cx="20"
          cy="20"
          r="4"
          fill={color}
          fillOpacity="0.4"
        />
        <circle
          cx="300"
          cy="20"
          r="4"
          fill={color}
          fillOpacity="0.4"
        />
        <circle
          cx="20"
          cy="180"
          r="4"
          fill={color}
          fillOpacity="0.4"
        />
        <circle
          cx="300"
          cy="180"
          r="4"
          fill={color}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}
/* ==============================================
   6. 项目数据（3 个完整案例）
   包含：项目信息、颜色、描述、流程、数据指标、AI 应用说明
================================================= */
const projects = [
  {
    idx: "01",
    color: "#015BC9",
    bg: "#BBDDFE",
    vizType: "city" as const,
    name: "移动端&PC端-历城控股 OA",
    role: "Lead UI/UX Designer",
    // period: "2023.12 — 2024.09",
    tags: ["iOS/Android", "Web PC", "企业管理"],
    desc: "历城控股集团 OA 办公系统移动端&PC 端全新升级改版，统一信息架构与视觉语言，面向集团 2000 + 内部员工的一站式办公管理平台，覆盖假勤、工资单、报销、审批等核心办公场景，优化流程后审批平均耗时减少 40%，移动端使用率提升至 85%。",
    images: [
      "https://raw.githubusercontent.com/quweijia/img-bed/main/lckg1.png",
      "https://raw.githubusercontent.com/quweijia/img-bed/main/lckg2.png",
      "https://raw.githubusercontent.com/quweijia/img-bed/main/lckg3.png",
      "https://raw.githubusercontent.com/quweijia/img-bed/main/lckg4.png",
      "https://raw.githubusercontent.com/quweijia/img-bed/main/lckg5.png",
    ],
    process: [
      "需求调研",
      "竞品分析",
      "信息架构",
      "交互设计",
      "视觉规范",
      "开发对接",
      "迭代上线",
    ],
    aiNote:
      "依托 Eva Design System 构建全链路色彩体系，自动生成色值梯度库，并通过 WCAG 对比度规范自动校验；批量产出移动端启动页与 PC 端登录页的动态视觉资产，同步输出浅色 / 深色双模式适配；通过 Midjourney + PS/Figma 协同产出 Banner 和运营海报；利用 AI 辅助生成 Logo 创意方向，实现高效的多端视觉与品牌资产落地。",
    metrics: [
      { value: "-40", unit: "%", label: "审批平均耗时" },
      { value: "85", unit: "%", label: "移动端使用率" },
      { value: "+50", unit: "%", label: "报销提交效率" },
      { value: "4.7", unit: "/5", label: "员工满意度评分" },
    ],
  },
  {
    idx: "02",
    color: "#3366ff",
    bg: "#f0eeff",
    vizType: "chart" as const,
    name: "UI设计规范-浪潮智慧建筑 原子组件库",
    role: "Design System Lead",
    // period: "2021.06 — 2022.02",
    tags: ["B端", "SaaS", "变体设计", "Auto-Layout"],
    desc: "基于原子设计理论（Atomic Design） 体系化搭建企业级 PC 端组件库，累计沉淀 200+ 业务组件，覆盖智慧园区、智慧工地、建筑节能三大核心产品线，形成统一、可扩展、可落地的设计规范与交互标准。组件库提供多状态、多主题、多尺寸的丰富变体配置，支持自动布局、响应式适配、权限联动等原型化能力，产品经理原型复用率提升至 91%。",
    images: [
      "https://raw.githubusercontent.com/quweijia/img-bed/main/sjgf1.png",
      "https://raw.githubusercontent.com/quweijia/img-bed/main/sjgf2.png",
      "https://raw.githubusercontent.com/quweijia/img-bed/main/sjgf3.png",
      "https://raw.githubusercontent.com/quweijia/img-bed/main/sjgf4.png",
      "https://raw.githubusercontent.com/quweijia/img-bed/main/sjgf5.png",
    ],
    process: [
      "组件梳理",
      "原子拆分",
      "变体设计",
      "自动布局",
      "文档输出",
      "团队赋能",
      "持续迭代",
    ],
    aiNote:
      "GitHub Copilot 辅助梳理 Figma 组件类型；使用 Vibma + Cursor MCP 自动检查校验组件样式、命名、状态统一性，快速排查漏洞，后期维护成本大幅降低；AI 批量生成线性 / 面性图标，统一视觉风格，再微调落地，告别逐个绘制，图标库搭建提速 80%。",
    metrics: [
      { value: "200", unit: "+", label: "自动布局组件" },
      { value: "91", unit: "%", label: "产品复用率" },
      {
        value: "-65",
        unit: "%",
        label: "原型制作耗时",
      },
      { value: "2.5", unit: "×", label: "交付效率提升" },
    ],
  },
  {
    idx: "03",
    color: "#11AF95",
    bg: "#97F9E5",
    vizType: "net" as const,
    name: "数据可视化大屏-设计体系",
    role: "Data Visualization Designer",
    // period: "2020.09 — 2021.05",
    tags: [
      "Large Screen",
      "Design System",
      "Experience Sharing",
    ],
    desc: "基于 30+ 政企与金融级可视化大屏项目的实战沉淀，系统性梳理并提炼了非常规尺寸自适应适配、专用数字字体设计、高质感动效设计等领域的核心方法论与最佳实践。针对超宽屏、非标拼接屏、异形分辨率、多设备协同等复杂场景，形成完整的大屏设计工程化解决方案，并输出标准化设计指南、组件规范与典型踩坑案例库，发表并授权相关专利 4 篇。",
    images: [
      "https://raw.githubusercontent.com/quweijia/img-bed/main/dap1.gif",
      "https://raw.githubusercontent.com/quweijia/img-bed/main/dap2.png",
      "https://raw.githubusercontent.com/quweijia/img-bed/main/dap3.png",
      "https://raw.githubusercontent.com/quweijia/img-bed/main/dap4.png",
      "https://raw.githubusercontent.com/quweijia/img-bed/main/dap5.png",
    ],
    process: [
      "项目复盘",
      "规律提炼",
      "要点总结",
      "文档输出",
      "团队分享",
      "迭代优化",
    ],
    aiNote:
      "用 AI 一键生成科技感 / 政务风 / 金融风大屏配色方案，自动生成深色模式渐变、霓虹光效色卡，同步校验大屏远距离可视性，省去反复调试色值的时间，风格探索效率提升 60%；AI 快速输出多版布局草案，解决大屏排版难、信息失衡问题，布局设计周期缩短 50%。",
    metrics: [
      { value: "30", unit: "+", label: "覆盖项目数量" },
      { value: "-35", unit: "%", label: "大屏交付周期" },
      { value: "95", unit: "%", label: "设计一致性" },
      { value: " 6", unit: "+", label: "团队分享会" },
    ],
  },
];

/* ==============================================
   6.5. 项目详情弹窗组件
   功能：点击项目卡片的按钮 → 弹出全屏详情页
   包含：项目信息、图片占位、流程、数据、AI 应用
================================================= */
function ProjectModal({
  project,
  onClose,
}: {
  project: (typeof projects)[0] | null;
  onClose: () => void;
}) {
  // 弹窗打开时，禁止页面滚动
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  if (!project) return null;

  return (
    <Portal>
      {/* 弹窗遮罩层：全屏半透明背景 */}
      <div
        className="fixed inset-0 z-50 flex items-center sm:items-center justify-center px-6 sm:px-8 pt-8 sm:pt-12 pb-8"
        style={{
          background: "rgba(5,5,12,0.70)",
          backdropFilter: "blur(16px)",
        }}
        onClick={onClose}
      >
        {/* 弹窗主体卡片 */}
        <div
          className="relative w-full sm:max-w-4xl max-h-[88vh] overflow-y-auto rounded-2xl"
          style={{
            background: "white",
            border: "1px solid rgba(0,0,0,0.08)",
            boxShadow: `0 20px 100px rgba(0,0,0,0.3)`,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* 弹窗顶部：装饰背景 + 关闭按钮 */}
          {/* 关闭按钮 - 固定在弹窗顶部，不随滚动移动 */}
          <div
            className="sticky top-4 z-20 flex justify-end px-[16px] py-[0px]"
            style={{ background: "transparent" }}
          >
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full flex items-center justify-center pt-transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.95)",
                border: "1px solid rgba(0,0,0,0.1)",
                color: "#0c0b18",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              <X size={16} />
            </button>
          </div>
          <div
            className="relative overflow-hidden -mt-16"
            style={{
              height: "clamp(150px, 30vh, 600px)",
              background: project.bg,
            }}
          >
            <AbstractViz
              type={project.vizType}
              color={project.color}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg,transparent 40%,rgba(255,255,255,0.9) 100%)",
              }}
            />
          </div>

          {/* 弹窗内容区域 */}
          <div className="px-[20px] sm:px-[40px] pt-[16px] pb-[20px]">
            {/* 项目标题 */}
            <div className="flex items-start gap-4 mb-6">
              <span
                className="hidden md:inline-block"
                style={{
                  fontSize: "3.5rem",
                  fontWeight: 900,
                  color: `${project.color}18`,
                  lineHeight: 1,
                  letterSpacing: "-0.05em",
                }}
              >
                {project.idx}
              </span>
              <div className="flex-1">
                <h2
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 800,
                    color: "#0c0b18",
                    lineHeight: 1.2,
                    marginBottom: "0.5rem",
                  }}
                >
                  {project.name}
                </h2>
                <p
                  style={{
                    fontSize: "1rem",
                    color: project.color,
                    fontWeight: 600,
                  }}
                >
                  {project.role}
                </p>
              </div>
            </div>

            {/* 标签 */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="text-sm px-3 py-1.5 rounded-lg"
                  style={{
                    background: `${project.color}12`,
                    border: `1px solid ${project.color}25`,
                    color: project.color,
                    fontWeight: 600,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* 项目描述 */}
            <p
              className="mb-8"
              style={{
                fontSize: "1rem",
                color: "rgba(12,11,24,0.6)",
                lineHeight: 1.85,
              }}
            >
              {project.desc}
            </p>
            {/* 设计流程 */}
            <div className="mb-8 hidden sm:block">
              <h3
                className="mb-4"
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  color: "#0c0b18",
                }}
              >
                设计流程
              </h3>
              <Flow
                steps={project.process}
                color={project.color}
              />
            </div>

            {/* 核心数据 */}
            <div className="mb-8">
              <h3
                className="mb-4"
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  color: "#0c0b18",
                }}
              >
                核心数据
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.metrics.map((m) => (
                  <LightMetric
                    key={m.label}
                    value={m.value}
                    unit={m.unit}
                    label={m.label}
                    color={project.color}
                  />
                ))}
              </div>
            </div>

            {/* AI 应用 */}
            <div
              className="rounded-2xl p-6 mb-8  hidden sm:block"
              style={{
                background: `${project.color}12`,
                border: `1px solid ${project.color}25`,
              }}
            >
              <div
                className="flex items-center gap-2 mb-3"
                style={{ color: project.color }}
              >
                <Sparkles size={16} />
                <h3
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 700,
                  }}
                >
                  AI 应用
                </h3>
              </div>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "rgba(12,11,24,0.6)",
                  lineHeight: 1.85,
                }}
              >
                {project.aiNote}
              </p>
            </div>
            {/* 图片占位区域 */}
            {project.images && project.images.length > 0 && (
              <div className="mb-8">
                <h3
                  className="mb-4"
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    color: "#0c0b18",
                  }}
                >
                  项目展示
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.images.map((imgUrl, i) => (
                    <div
                      key={i}
                      className="rounded-2xl overflow-hidden relative"
                      style={{
                        background: `linear-gradient(135deg, ${project.color}08, ${project.color}15)`,
                        border: `1px solid ${project.color}20`,
                        aspectRatio: "16/9",
                        gridColumn: i === 0 ? "1 / -1" : "auto",
                      }}
                    >
                      <img
                        src={imgUrl}
                        alt={`${project.name} - 项目展示 ${i + 1}`}
                        className="w-full h-full object-cover"
                        style={{
                          display: "block",
                        }}
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.style.display = "none";
                          const parent = target.parentElement;
                          if (
                            parent &&
                            !parent.querySelector(
                              ".img-error-fallback",
                            )
                          ) {
                            const fallback =
                              document.createElement("div");
                            fallback.className =
                              "img-error-fallback absolute inset-0 flex items-center justify-center";
                            fallback.style.cssText = `
                            background: linear-gradient(135deg, ${project.color}08, ${project.color}15);
                            color: rgba(12,11,24,0.4);
                            font-size: 0.875rem;
                            text-align: center;
                            padding: 1rem;
                          `;
                            fallback.textContent =
                              "图片加载失败，请换个 WiFi 或使用自己的热点";
                            parent.appendChild(fallback);
                          }
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://github.com/quweijia/file/blob/main/lckgoa.html"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full group flex items-center justify-center gap-2 rounded-xl text-sm transition-colors px-[24px] py-[12px]"
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${project.color}50`; // 加深10%
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = `${project.color}30`; // 恢复原色
                }}
                style={{
                  background: `${project.color}30`,
                  color: project.color,
                  fontWeight: 600,
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Figma 原稿
                <ExternalLink
                  size={14}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
}

/* ==============================================
   7. 单个项目卡片组件
   功能：渲染 1 个完整项目（左侧详情 + 右侧图表+数据）
   参数：p 项目数据 / rev 是否左右翻转（偶数项使用） / onOpenModal 打开弹窗回调
================================================= */
function CaseCard({
  p,
  rev,
  index,
  onOpenModal,
}: {
  p: (typeof projects)[0];
  rev: boolean;
  index: number;
  onOpenModal: () => void;
}) {
  const { ref, vis } = useReveal(0);
  const [hov, setHov] = useState(false);
  const dark = "#0c0b18";

  return (
    <div
      ref={ref}
      className="rounded-2xl overflow-hidden transition-all duration-700"
      style={{
        background: "white",
        // 鼠标悬浮放大阴影
        boxShadow: hov
          ? "0 24px 80px rgba(0,0,0,0.13), 0 8px 24px rgba(0,0,0,0.07)"
          : "0 4px 24px rgba(0,0,0,0.06)",
        // 滚动显示动画
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(32px)",
        border: "1px solid rgba(0,0,0,0.05)",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* 布局：电脑端左右两栏，支持翻转 */}
      <div
        className={`grid 
          ${
            index === 1
              ? "lg:grid-cols-[3fr_7fr]" // 第二个反转卡片：5:5
              : "lg:grid-cols-[7fr_3fr]" // 正常卡片：7:3
          } 
          ${rev ? "lg:[grid-template-areas:'right_left']" : ""}
        `}
      >
        {/* ── 左侧：项目详细信息 ── */}
        <div
          className={`${rev ? "lg:[grid-area:left]" : ""} p-[32px]`}
          style={{
            borderRight: rev
              ? "none"
              : "1px solid rgba(0,0,0,0.05)",
            borderLeft: rev
              ? "1px solid rgba(0,0,0,0.05)"
              : "none",
          }}
        >
          {/* 顶部：编号 + 项目名 + 角色 + 展开按钮 */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <span
                style={{
                  fontSize:
                    window.innerWidth < 768 ? "1.8rem" : "3rem",
                  fontWeight: 900,
                  color: `${p.color}20`,
                  lineHeight: 1,
                  letterSpacing: "-0.05em",
                  display:
                    window.innerWidth < 768 ? "none" : "inline", // 👈 加这行
                }}
              >
                {p.idx}
              </span>
              <div>
                <h3
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 800,
                    color: dark,
                    lineHeight: 1.2,
                  }}
                >
                  {p.name}
                </h3>
                <p
                  className="mt-0.5"
                  style={{
                    fontSize: "0.8125rem",
                    color: p.color,
                    fontWeight: 600,
                  }}
                >
                  {p.role}
                </p>
              </div>
            </div>
            {/* 右上角跳转按钮 */}
            <button
              className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
              style={{
                background: hov
                  ? `${p.color}12`
                  : "rgba(0,0,0,0.04)",
                border: `1px solid ${hov ? `${p.color}25` : "rgba(0,0,0,0.07)"}`,
              }}
              onClick={onOpenModal}
            >
              <ArrowUpRight
                size={14}
                style={{
                  color: hov ? p.color : "rgba(0,0,0,0.3)",
                }}
              />
            </button>
          </div>

          {/* 时间 + 标签 */}
          <div className="flex flex-wrap gap-2 mb-5">
            {/* <span
              className="text-xs px-2 py-0.5 rounded"
              style={{
                background: "rgba(0,0,0,0.04)",
                color: "rgba(12,11,24,0.4)",
              }}
            >
              {p.period}
            </span> */}
            {p.tags.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-0.5 rounded"
                style={{
                  background: `${p.color}0e`,
                  border: `1px solid ${p.color}20`,
                  color: p.color,
                  fontWeight: 500,
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* 项目描述 */}
          <p
            className="mb-6"
            style={{
              fontSize: "0.875rem",
              color: "rgba(12,11,24,0.55)",
              lineHeight: 1.85,
            }}
          >
            {p.desc}
          </p>

          {/* 设计流程 */}
          <div className="mb-5 hidden sm:block">
            <p
              className="text-xs mb-2.5 tracking-wider"
              style={{
                color: "rgba(12,11,24,0.3)",
                letterSpacing: "0.12em",
              }}
            >
              DESIGN PROCESS
            </p>
            <Flow steps={p.process} color={p.color} />
          </div>

          {/* AI 应用说明 */}
          <div
            className="rounded-xl p-4"
            style={{
              background: `${p.color}12`,
              border: `1px solid ${p.color}16`,
            }}
          >
            <div
              className="flex items-center gap-2 mb-2"
              style={{ color: p.color }}
            >
              <Sparkles size={11} />
              <span
                className="text-xs tracking-wider"
                style={{
                  letterSpacing: "0.1em",
                  fontWeight: 700,
                }}
              >
                AI APPLICATION
              </span>
            </div>
            <p
              style={{
                fontSize: "0.8125rem",
                color: "rgba(12,11,24,0.5)",
                lineHeight: 1.8,
              }}
            >
              {p.aiNote}
            </p>
          </div>
        </div>

        {/* ── 右侧：SVG 图表 + 数据指标 ── */}
        <div
          className={`flex flex-col ${rev ? "lg:[grid-area:right]" : ""}`}
        >
          {/* 顶部 SVG 装饰图 */}
          <div
            className="relative overflow-hidden hidden lg:block"
            style={{ height: 220, background: p.bg }}
          >
            <AbstractViz type={p.vizType} color={p.color} />
            {/* 渐变遮罩 */}
            <div
              className="absolute inset-0 pointer-events-none hidden lg:block"
              style={{
                background:
                  "linear-gradient(180deg,transparent 60%,rgba(255,255,255,0.8) 100%)",
              }}
            />
          </div>

          {/* 底部 4 个数据卡片 */}
          <div className="grid grid-cols-2 gap-3 flex-1 items-center justify-center place-content-center p-[24px]">
            <p
              className="col-span-2 text-xs mb-1 tracking-wider text-center"
              style={{
                color: "rgba(12,11,24,0.25)",
                letterSpacing: "0.12em",
              }}
            >
              KEY METRICS
            </p>
            {p.metrics.map((m) => (
              <LightMetric
                key={m.label}
                value={m.value}
                unit={m.unit}
                label={m.label}
                color={p.color}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==============================================
   8. 项目展示页面主组件
   功能：渲染整个项目区块（标题 + 3 个项目卡片 + 弹窗）
================================================= */
export function Projects() {
  const { ref, vis } = useReveal(0.03);
  const { theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <>
      <section
        id="projects"
        ref={ref}
        className="relative overflow-hidden"
        style={{
          background: "#f3f0eb",
          padding: "80px 0 140px",
        }}
      >
        {/* 噪点纹理背景 */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: "180px",
          }}
        />

        {/* 超大背景文字 WORK */}
        <div
          className="absolute left-0 top-6 select-none pointer-events-none overflow-hidden hidden lg:block"
          style={{
            fontSize: "clamp(50px,16vw,200px)",
            fontWeight: 900,
            color: "rgba(12,11,24,0.03)",
            lineHeight: 1,
            letterSpacing: "0.05em",
            whiteSpace: "nowrap",
          }}
        >
          PROJECTS
        </div>

        {/* 内容容器 */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          {/* 顶部标题区域 */}
          <div
            className="flex flex-col lg:flex-row lg:items-end gap-8 transition-all duration-700 mx-[0px] mt-[0px] mb-[60px]"
            style={{
              opacity: vis ? 1 : 0,
              transform: vis
                ? "translateY(0)"
                : "translateY(30px)",
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
                  CASE STUDIES
                </span>
                <div
                  className="flex-1 h-px"
                  style={{
                    background: `linear-gradient(90deg,${theme.cyan}66,transparent)`,
                  }}
                />
              </div>
              <h2
                style={{
                  fontSize: "clamp(2.0rem,5vw,3.0rem)",
                  fontWeight: 600,
                  color: "#0c0b18",
                  lineHeight: 1.05,
                  letterSpacing: "-0.04em",
                }}
              >
                主导项目
              </h2>
            </div>
            <div className="lg:max-w-md">
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "rgba(12,11,24,0.42)",
                  lineHeight: 1.85,
                }}
              >
                主导多个从0-1的项目，覆盖移动端、PC端、可视化大屏
                <br />
                每个项目均展示完整设计过程与可量化成果
              </p>
            </div>
          </div>

          {/* 渲染 3 个项目卡片，第 2 个翻转 */}
          <div className="space-y-4">
            {projects.map((p, i) => (
              <CaseCard
                key={p.idx}
                p={p}
                rev={i % 2 === 1}
                index={i}
                onOpenModal={() => setSelectedProject(p)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 渲染项目详情弹窗 */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}