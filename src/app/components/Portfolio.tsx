import { useState, useRef, useEffect } from "react";
import {
  X,
  ArrowRight,
  Sparkles,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";
import { useTheme } from "./ThemeContext";
import { Portal } from "./Portal";

// ==========================
// 滚动淡入动画工具函数
// 功能：元素滚动到屏幕可视区域时，自动执行 淡入+上移 动画
// 参数：delay=动画延迟时间，单位毫秒
// ==========================
function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    if (vis) return;

    const ob = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !vis) {
          setTimeout(() => setVis(true), delay);
          ob.disconnect();
        }
      },
      { threshold: 0.04 },
    );
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, [delay, vis]);

  return { ref, vis };
}
// ==========================
// 卡片顶部 SVG 装饰背景（4种风格）
// 作用：项目卡片的视觉装饰图形，匹配不同项目类型
// ==========================
// 1. 城市路线风格背景（出行类项目）
function BgCity({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 560 320"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="c1" cx="65%" cy="35%" r="65%">
          <stop
            offset="0%"
            stopColor={color}
            stopOpacity="0.22"
          />
          <stop
            offset="100%"
            stopColor={color}
            stopOpacity="0"
          />
        </radialGradient>
        <filter id="gf1">
          <feGaussianBlur stdDeviation="2.5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="560" height="320" fill="url(#c1)" />
      {[40, 100, 160, 220, 280, 340, 400, 460, 520].map((x) => (
        <line
          key={x}
          x1={x}
          y1="0"
          x2={x}
          y2="320"
          stroke={color}
          strokeOpacity="0.05"
          strokeWidth="1"
        />
      ))}
      {[40, 85, 130, 175, 220, 270].map((y) => (
        <line
          key={y}
          x1="0"
          y1={y}
          x2="560"
          y2={y}
          stroke={color}
          strokeOpacity="0.05"
          strokeWidth="1"
        />
      ))}
      <path
        d="M30 280 C110 210 200 170 290 155 S400 120 520 70"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeOpacity="0.6"
        strokeDasharray="9 6"
        filter="url(#gf1)"
      />
      <path
        d="M30 280 C120 250 220 235 320 225 S450 200 530 175"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeOpacity="0.2"
        strokeDasharray="5 4"
      />
      {[
        [30, 280],
        [290, 155],
        [520, 70],
      ].map(([x, y], i) => (
        <g key={i} filter="url(#gf1)">
          <circle
            cx={x}
            cy={y}
            r="18"
            fill={color}
            fillOpacity="0.08"
            stroke={color}
            strokeOpacity="0.35"
            strokeWidth="1.5"
          />
          <circle
            cx={x}
            cy={y}
            r="5.5"
            fill={color}
            fillOpacity="0.9"
          />
        </g>
      ))}
      <rect
        x="350"
        y="60"
        width="55"
        height="96"
        rx="10"
        fill="none"
        stroke={color}
        strokeOpacity="0.22"
        strokeWidth="1.5"
      />
      <rect
        x="356"
        y="68"
        width="43"
        height="70"
        rx="4"
        fill={color}
        fillOpacity="0.04"
      />
      {[73, 81, 89, 97, 105, 113, 121].map((y) => (
        <rect
          key={y}
          x="360"
          y={y}
          width={y % 16 === 1 ? 34 : 24}
          height="4"
          rx="2"
          fill={color}
          fillOpacity="0.1"
        />
      ))}
      <circle
        cx="80"
        cy="60"
        r="38"
        fill="none"
        stroke={color}
        strokeOpacity="0.06"
        strokeWidth="20"
      />
      <circle
        cx="490"
        cy="260"
        r="50"
        fill="none"
        stroke={color}
        strokeOpacity="0.05"
        strokeWidth="28"
      />
    </svg>
  );
}

// 2. 数据柱状图风格背景（数据类项目）
function BgData({ color }: { color: string }) {
  const bars = [
    0.52, 0.78, 0.43, 0.91, 0.35, 0.68, 0.95, 0.52, 0.74, 0.6,
    0.87, 0.41, 0.76, 0.55,
  ];
  return (
    <svg
      viewBox="0 0 560 320"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="c2" cx="50%" cy="25%" r="70%">
          <stop
            offset="0%"
            stopColor={color}
            stopOpacity="0.18"
          />
          <stop
            offset="100%"
            stopColor={color}
            stopOpacity="0"
          />
        </radialGradient>
        <linearGradient id="bg2" x1="0" y1="0" x2="0" y2="1">
          <stop
            offset="0%"
            stopColor={color}
            stopOpacity="0.75"
          />
          <stop
            offset="100%"
            stopColor={color}
            stopOpacity="0.1"
          />
        </linearGradient>
        <filter id="gf2">
          <feGaussianBlur stdDeviation="2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="560" height="320" fill="url(#c2)" />
      {bars.map((v, i) => {
        const h = v * 200,
          bx = 26 + i * 38,
          by = 285 - h;
        return (
          <g key={i}>
            <rect
              x={bx}
              y={by}
              width="26"
              height={h}
              rx="3"
              fill="url(#bg2)"
            />
            <rect
              x={bx}
              y={by}
              width="26"
              height="5"
              rx="2.5"
              fill={color}
              filter="url(#gf2)"
            />
          </g>
        );
      })}
      <polyline
        points={bars
          .map((v, i) => `${39 + i * 38},${285 - v * 200}`)
          .join(" ")}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeOpacity="0.45"
      />
      <line
        x1="22"
        y1="285"
        x2="545"
        y2="285"
        stroke={color}
        strokeOpacity="0.1"
        strokeWidth="1"
      />
      {[80, 160].map((y) => (
        <line
          key={y}
          x1="22"
          y1={285 - y}
          x2="545"
          y2={285 - y}
          stroke={color}
          strokeOpacity="0.05"
          strokeWidth="1"
        />
      ))}
      <rect
        x="420"
        y="30"
        width="120"
        height="65"
        rx="8"
        fill={color}
        fillOpacity="0.06"
        stroke={color}
        strokeOpacity="0.18"
        strokeWidth="1"
      />
      <rect
        x="430"
        y="40"
        width="60"
        height="6"
        rx="3"
        fill={color}
        fillOpacity="0.2"
      />
      <rect
        x="430"
        y="52"
        width="96"
        height="14"
        rx="3"
        fill={color}
        fillOpacity="0.1"
      />
      <rect
        x="430"
        y="72"
        width="48"
        height="5"
        rx="2.5"
        fill={color}
        fillOpacity="0.08"
      />
    </svg>
  );
}

// 3. 网络节点风格背景（协作类项目）
function BgNet({ color }: { color: string }) {
  const nodes: [number, number][] = [
    [280, 155],
    [180, 85],
    [380, 85],
    [140, 210],
    [420, 210],
    [215, 42],
    [345, 42],
  ];
  return (
    <svg
      viewBox="0 0 560 320"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="c3" cx="50%" cy="48%" r="58%">
          <stop
            offset="0%"
            stopColor={color}
            stopOpacity="0.18"
          />
          <stop
            offset="100%"
            stopColor={color}
            stopOpacity="0"
          />
        </radialGradient>
        <filter id="gf3">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="560" height="320" fill="url(#c3)" />
      {nodes.slice(1).map(([x, y], i) => (
        <line
          key={i}
          x1={x}
          y1={y}
          x2={280}
          y2={155}
          stroke={color}
          strokeOpacity="0.18"
          strokeWidth="1.3"
          strokeDasharray="5 4"
        />
      ))}
      <line
        x1={180}
        y1={85}
        x2={140}
        y2={210}
        stroke={color}
        strokeOpacity="0.1"
        strokeWidth="1"
      />
      <line
        x1={380}
        y1={85}
        x2={420}
        y2={210}
        stroke={color}
        strokeOpacity="0.1"
        strokeWidth="1"
      />
      <line
        x1={215}
        y1={42}
        x2={180}
        y2={85}
        stroke={color}
        strokeOpacity="0.1"
        strokeWidth="1"
      />
      <line
        x1={345}
        y1={42}
        x2={380}
        y2={85}
        stroke={color}
        strokeOpacity="0.1"
        strokeWidth="1"
      />
      {[50, 78, 108].map((r) => (
        <circle
          key={r}
          cx={280}
          cy={155}
          r={r}
          fill="none"
          stroke={color}
          strokeOpacity={(0.1 / r) * 40}
          strokeWidth="1"
        />
      ))}
      {nodes.map(([cx, cy], i) => (
        <g key={i} filter="url(#gf3)">
          <circle
            cx={cx}
            cy={cy}
            r={i === 0 ? 22 : 14}
            fill={color}
            fillOpacity={i === 0 ? 0.12 : 0.07}
            stroke={color}
            strokeOpacity={i === 0 ? 0.45 : 0.22}
            strokeWidth="1.5"
          />
          <circle
            cx={cx}
            cy={cy}
            r={i === 0 ? 6 : 3.5}
            fill={color}
            fillOpacity="0.9"
          />
        </g>
      ))}
      <rect
        x="420"
        y="24"
        width="116"
        height="40"
        rx="7"
        fill={color}
        fillOpacity="0.06"
        stroke={color}
        strokeOpacity="0.2"
        strokeWidth="1"
      />
      <rect
        x="430"
        y="32"
        width="72"
        height="6"
        rx="3"
        fill={color}
        fillOpacity="0.22"
      />
      <rect
        x="430"
        y="44"
        width="48"
        height="5"
        rx="2.5"
        fill={color}
        fillOpacity="0.12"
      />
    </svg>
  );
}

// 4. 生态圆环风格背景（电商/品牌类项目）
function BgEco({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 560 320"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="c4" cx="40%" cy="50%" r="65%">
          <stop
            offset="0%"
            stopColor={color}
            stopOpacity="0.18"
          />
          <stop
            offset="100%"
            stopColor={color}
            stopOpacity="0"
          />
        </radialGradient>
        <filter id="gf4">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="560" height="320" fill="url(#c4)" />
      {[
        [150, 150, 80],
        [300, 120, 55],
        [230, 220, 45],
        [410, 200, 62],
        [100, 250, 38],
        [460, 100, 35],
      ].map(([cx, cy, r], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={r}
          fill={color}
          fillOpacity={0.04 + i * 0.01}
          stroke={color}
          strokeOpacity={0.1 + i * 0.02}
          strokeWidth="1.5"
        />
      ))}
      <path
        d="M185 155 C145 105 115 82 165 50 C215 18 268 48 290 100 C312 152 270 182 228 182 C186 182 185 155 185 155Z"
        fill={color}
        fillOpacity="0.08"
        stroke={color}
        strokeOpacity="0.22"
        strokeWidth="1.5"
        filter="url(#gf4)"
      />
      <circle
        cx={430}
        cy={160}
        r={62}
        fill="none"
        stroke={color}
        strokeOpacity="0.08"
        strokeWidth="22"
      />
      <circle
        cx={430}
        cy={160}
        r={62}
        fill="none"
        stroke={color}
        strokeOpacity="0.5"
        strokeWidth="3"
        strokeDasharray="272 120"
        strokeDashoffset="0"
        filter="url(#gf4)"
      />
      <circle
        cx={430}
        cy={160}
        r={7}
        fill={color}
        fillOpacity="0.9"
        filter="url(#gf4)"
      />
      {[
        [250, 60],
        [310, 60],
      ].map(({ 0: x, 1: y }, i) => (
        <g key={i}>
          <rect
            x={x}
            y={y}
            width="50"
            height="88"
            rx="9"
            fill="none"
            stroke={color}
            strokeOpacity="0.22"
            strokeWidth="1.5"
          />
          <rect
            x={x + 4}
            y={y + 8}
            width="42"
            height="64"
            rx="3"
            fill={color}
            fillOpacity="0.04"
          />
          {[14, 22, 30, 38, 46, 54, 62].map((dy) => (
            <rect
              key={dy}
              x={x + 8}
              y={y + dy}
              width={dy === 14 ? 30 : 22}
              height="4"
              rx="2"
              fill={color}
              fillOpacity="0.1"
            />
          ))}
        </g>
      ))}
    </svg>
  );
}

// ==========================
// 🔥 UI 核心修改区：项目数据配置
// 所有项目的标题、颜色、标签、描述、数据都在这里修改
// 4个项目对应页面4张卡片
// ==========================
const items = [
  {
    id: 1,
    color: "rgb(var(--c1))",
    Bg: BgData,
    coverImg:
      "https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/ntgk1.gif",
    year: "2026",
    title: "能碳管控可视化平台",
    sub: "Government Carbon Management Dashboard",
    tags: ["智慧园区", "能碳管控", "智慧工地", "GIS定制"],
    role: "UX Designer · 高德 GIS 地图开发",
    metric: "政府验收评分 9.6/10",
    tools: ["Figma", "Amap Style", "Geojson"],
    desc: "面向省政府机关打造的政务级实时能碳管控大屏，集成GIS地图，实时监控机关事务单位的能耗与碳排数据，支撑节能减排政策执行与预警决策、能耗监测、运维告警、工单管理等多维数据，实现区域能源全生命周期可视化管控与智能决策。",
    highlights: [
      "搭建15+标准化大屏数据模块",
      "支持2D/3D GIS地图切换",
      "多终端自适应展示",
      "管理决策效率提升60%",
    ],
    screenshots: [
      "https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/ntgk2.png",
      "https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/ntgk3.gif",
      "https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/ntgk4.png",
      "https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/ntgk5.png",
      "https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/ntgk6.png",
    ],
    projectLink:
      "https://www.figma.com/proto/q7DqLbfB1uuKfsAVjnzhoF/%E8%8C%8C%E5%B9%B3%E3%80%81%E5%A4%A9%E6%A1%A5%E8%83%BD%E7%A2%B3%E7%AE%A1%E6%8E%A7%E5%B9%B3%E5%8F%B0%E5%8F%AF%E8%A7%86%E5%8C%96%E5%A4%A7%E5%B1%8F%E8%AE%BE%E8%AE%A1?node-id=192-15924&viewport=-406%2C252%2C0.03&t=1MvOD9WdotlUwLNd-1&scaling=contain&content-scaling=fixed&starting-point-node-id=192%3A15924&page-id=5%3A14",
  },
  {
    id: 2,
    color: "#E877FF",
    Bg: BgData,
    coverImg:
      "https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/chpgw1.gif",
    year: "2025",
    title: "浪潮智慧建筑产品官网全案设计",
    sub: "Product Official Website",
    tags: ["品牌官网", "响应式", "动效"],
    role: "Design System Lead",
    metric: "响应式设计",
    tools: ["Figma", "Storybook", "GitHub Copilot"],
    desc: "浪潮智慧建筑以 “数智融合、绿色低碳” 为核心，打造筑瓴智慧建筑全栈式解决方案体系，覆盖智能应用、数字底座、AI 中台、智能硬件四大维度，为建筑全生命周期提供从 “感知 - 分析 - 决策 - 执行” 的全流程智能化支撑，助力行业实现高效、绿色、高质量的数字化转型。",
    highlights: [
      "企业品牌官网全链路设计",
      "跨产品线组件复用",
      "交互原型 Demo 设计",
      "迭代交付效率提升2倍",
    ],
    screenshots: [
      "https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/chpgw2.png",
      "https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/chpgw3.png",
      "https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/chpgw4.png",
      "https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/chpgw5.png",
      "https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/chpgw6.png",
    ],
    projectLink:
      "https://www.figma.com/proto/UwjGPd7UgVQLSN8oE5rdeb/%E4%BC%81%E4%B8%9A%E5%AE%98%E7%BD%91?node-id=91-4991&viewport=-23%2C-1005%2C0.06&t=GIZyLL29GHlGTPVD-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1",
  },
  {
    id: 3,
    color: "#02BA53",
    Bg: BgCity,
    coverImg:
      "https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/sdhs1.gif",
    year: "2023",
    title: "山东高速满易运 App",
    sub: "SDHS Manyiyun Driver App",
    tags: ["物流运输", "货运平台", "MY-TMS"],
    role: "Lead UI/UX · Product Design",
    metric: "线上化率提升 85%",
    tools: ["Figma", "Principle", "Midjourney"],
    desc: "山东高速集团官方货运司机服务平台，提供在线接单、路线规划、高速通行、费用结算、车辆管理、消息通知等全流程功能，帮助货车司机高效完成运输任务，实现货运流程线上化、标准化、智能化。",
    highlights: [
      "搭建完整移动端组件库，提升迭代效率",
      "轻量化信息层级，降低司机操作认知成本",
      "极简交互流程设计，缩短高频操作路径",
      "深色模式适配，满足长途夜间驾驶使用",
    ],
    screenshots: [
      "https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/sdhs2.png",
      "https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/sdhs3.png",
      "https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/sdhs4.png",
      "https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/sdhs5.png",
      "https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/sdhs6.png",
    ],
    projectLink: "https://example.com/icty-app",
  },
  {
    id: 4,
    color: "#FE952C",
    Bg: BgEco,
    coverImg:
      "https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/icity1.gif",
    year: "2018",
    title: "爱城市网 App",
    sub: "iCity — Urban Service App",
    tags: ["城市服务", "政务服务", "民生出行"],
    role: "UI/UX · Product Design · Motion",
    metric: "省级政务标杆产品",
    tools: ["Sketch", "Principle", "After Effects"],
    desc: "省级综合性政务便民服务App，聚焦市民日常办事、民生查询、生活服务核心场景，整合政务办理、社保医保、交通出行、便民缴费、城市资讯、投诉建议等多元功能。统筹全局交互设计逻辑，简化政务操作流程，降低市民使用门槛，打造轻量化、高易用的移动端体验。",
    highlights: [
      "与 UI 设计规范一致，搭建产品原件库",
      "轻量化信息层级，优化民生办事操作路径",
      "高合规政务视觉体系，兼顾严谨性与美观度",
      "统一多业务线视觉体系，保障产品体验一致性",
    ],
    screenshots: [
      "https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/icity2.png",
      "https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/icity3.png",
      "https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/icity4.png",
      "https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/icity5.png",
      "https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/icity6.png",
    ],
    projectLink: "https://example.com/icty-web",
  },
  {
    id: 5,
    color: "#34d399",
    Bg: BgData,
    coverImg:
      "https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/PPT1.png",
    year: "2024",
    title: "PPT 全案设计与演示体系",
    sub: "Visual Communication",
    tags: ["产品发布会", "汇报模板", "设计分享"],
    role: "视觉设计负责人 · 演示体系搭建",
    metric: "影视级幻灯片",
    tools: ["PowerPoint", "Keynote", "ECharts"],
    desc: "面向政企汇报、产品发布、项目复盘的 PPT 设计体系，统一品牌视觉风格、信息层级与演示逻辑，提升内容传递效率与专业呈现质感。",
    highlights: [
      "搭建 60+ 页标准化演示模板体系",
      "品牌视觉与版式规范高度统一",
      "数据图表可视化表达更清晰直观",
      "整体汇报制作效率提升 70%",
    ],
    screenshots: [
      "https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/PPT2.png",
      "https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/PPT3.png",
      "https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/PPT4.png",
      "https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/PPT5.png",
      "https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/PPT6.png",
    ],
    projectLink: "https://example.com/energy-carbon",
  },
  {
    id: 6,
    color: "#FE952C",
    Bg: BgNet,
    coverImg:
      "https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/ai1.gif",
    year: "2026",
    title: "AI-设计赋能",
    sub: "AI-Driven Efficiency",
    tags: ["提效体系", "智能辅助", "设计自动化"],
    role: "AI设计体系搭建 · 提效方案负责人",
    metric: "设计效率提升 65%",
    tools: ["Antigravity", "Cursor", "GitHub Copilot"],
    desc: "基于AI能力构建设计提效工作流，覆盖组件生成、图表可视化、原型快速迭代、设计规范落地等场景，通过智能辅助大幅缩短交付周期，提升团队整体产出质量与效率。",
    highlights: [
      "搭建AI辅助设计标准化流程体系",
      "设计稿迭代周期缩短 50% 以上",
      "组件与图表自动生成覆盖率提升",
      "团队整体设计效率提升 65%",
    ],
    screenshots: [
      "https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/ai2.gif",
      "https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/ai3.gif",
      "https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/ai4.png",
      "https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/ai5.gif",
      "https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/ai6.png",
    ],
    projectLink: "https://example.com/licheng-oa-mobile",
  },
  {
    id: 7,
    color: "#7c6ff7",
    Bg: BgData,
    coverImg:
      "https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/dx1.gif",
    year: "2022",
    title: "交互动效设计",
    sub: "Motion Interactive Experience",
    tags: ["交互动效", "微动画", "Lottie落地", "GIS动画"],
    role: "Product Designer · UX Lead",
    metric: "信息可读性提升 40%",
    tools: ["AE", "Lottie", "Principle", "Hype 4"],
    desc: "搭建全产品线标准化动效设计体系，制定统一的动效规范与落地标准，覆盖微交互、页面转场、状态反馈、组件动画等核心场景，提升产品交互体验与视觉一致性。",
    highlights: [
      "制定完整动效设计规范与组件库",
      "统一全产品线动效语言与视觉节奏",
      "动效交付与研发对接效率提升60%",
      "产品操作反馈与体验质感显著优化",
    ],
    screenshots: [
      "https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/dx2.gif",
      "https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/dx3.gif",
      "https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/dx4.gif",
      "https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/dx5.gif",
      "https://fastly.jsdelivr.net/gh/quweijia/img-bed@main/dx6.gif",
    ],
    projectLink: "https://example.com/licheng-oa-desktop",
  },
];

// ==========================
// 项目详情弹窗组件
// 功能：点击卡片 → 弹出全屏详情页
// 包含：SVG背景、标题、描述、工具、成果、亮点
// ==========================
function Modal({
  item,
  onClose,
}: {
  item: (typeof items)[0] | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (item) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [item]);

  if (!item) return null;
  const Bg = item.Bg;

  return (
    <Portal>
      <div
        className="fixed inset-0 z-50 flex items-center sm:items-center justify-center px-6 sm:px-8 pt-8 sm:pt-12 pb-8"
        style={{
          background: "rgba(0,0,0,0.88)",
          backdropFilter: "blur(16px)",
        }}
        onClick={onClose}
      >
        <div
          className="relative w-full sm:max-w-4xl max-h-[88vh] overflow-y-auto rounded-2xl"
          style={{
            background: "#0c0c18",
            border: "1px solid rgba(255,255,255,0.07)",
            boxShadow: `0 0 100px ${item.color}14`,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="sticky top-4 float-right mr-5 mt-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
            style={{
              background: "rgba(0,0,0,0.65)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.65)",
              backdropFilter: "blur(8px)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "rgba(0,0,0,0.85)";
              e.currentTarget.style.borderColor =
                "rgba(255,255,255,0.2)";
              e.currentTarget.style.color =
                "rgba(255,255,255,0.9)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "rgba(0,0,0,0.65)";
              e.currentTarget.style.borderColor =
                "rgba(255,255,255,0.12)";
              e.currentTarget.style.color =
                "rgba(255,255,255,0.65)";
            }}
          >
            <X size={16} />
          </button>

          <div
            className="relative h-52 overflow-hidden rounded-t-3xl sm:rounded-t-3xl"
            style={{ marginTop: "-52px" }}
          >
            <Bg color={item.color} />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg,transparent 40%,#0c0c18 100%)",
              }}
            />
            <div className="absolute top-4 left-5">
              <span
                className="text-xs px-2.5 py-1 rounded-lg"
                style={{
                  background: "rgba(0,0,0,0.7)",
                  border: `1px solid ${item.color}22`,
                  color: item.color,
                  backdropFilter: "blur(8px)",
                }}
              >
                {item.year}
              </span>
            </div>
          </div>

          <div className="px-7 pb-8">
            <div className="flex items-start justify-between gap-3 mb-1">
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 800,
                  color: "#f0f4f8",
                }}
              >
                {item.title}
              </h3>
              <span
                style={{
                  fontSize: "2rem",
                  fontWeight: 900,
                  color: `${item.color}20`,
                  lineHeight: 1,
                }}
              >
                {item.num}
              </span>
            </div>
            <p
              className="text-sm mb-1"
              style={{ color: item.color }}
            >
              {item.sub}
            </p>
            <p
              className="text-xs mb-5"
              style={{ color: "rgba(255,255,255,0.25)" }}
            >
              {item.role}
            </p>
            <p
              className="mb-5"
              style={{
                fontSize: "0.875rem",
                color: "rgba(255,255,255,0.48)",
                lineHeight: 1.85,
              }}
            >
              {item.desc}
            </p>

            <div className="grid grid-cols-1 gap-4 mb-5">
              <div>
                <p
                  className="text-xs mb-2 tracking-wider"
                  style={{
                    color: "rgba(255,255,255,0.2)",
                    letterSpacing: "0.12em",
                  }}
                >
                  TOOLS
                </p>
                <div className="flex flex-nowrap gap-1.5 overflow-x-auto scrollbar-hide">
                  {item.tools.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs rounded"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border:
                          "1px solid rgba(255,255,255,0.07)",
                        color: "rgba(255,255,255,0.42)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="rounded-xl p-4"
              style={{
                background: `${item.color}07`,
                border: `1px solid ${item.color}16`,
              }}
            >
              <div
                className="flex items-center gap-2 mb-3"
                style={{ color: item.color }}
              >
                <Sparkles size={12} />
                <span
                  className="text-xs tracking-wider"
                  style={{
                    letterSpacing: "0.1em",
                    fontWeight: 600,
                  }}
                >
                  HIGHLIGHTS
                </span>
              </div>
              {item.highlights.map((h) => (
                <div
                  key={h}
                  className="flex items-start gap-2.5 mb-2"
                >
                  <ArrowRight
                    size={11}
                    className="mt-0.5 shrink-0"
                    style={{ color: item.color }}
                  />
                  <span
                    style={{
                      fontSize: "0.8125rem",
                      color: "rgba(255,255,255,0.48)",
                      lineHeight: 1.7,
                    }}
                  >
                    {h}
                  </span>
                </div>
              ))}
            </div>

            {item.screenshots &&
              item.screenshots.length > 0 && (
                <div className="mt-6">
                  <p
                    className="text-xs mb-3 tracking-wider"
                    style={{
                      color: "rgba(255,255,255,0.2)",
                      letterSpacing: "0.12em",
                    }}
                  >
                    PROJECT SCREENSHOTS
                  </p>
                  <div className="grid grid-cols-1 gap-3">
                    {item.screenshots.map((screenshot, idx) => (
                      <div
                        key={idx}
                        className="relative overflow-hidden rounded-lg"
                        style={{
                          background: "rgba(255,255,255,0.02)",
                          border: `1px solid ${item.color}12`,
                          maxWidth: "100%",
                        }}
                      >
                        <img
                          src={screenshot}
                          alt={`${item.title} 截图 ${idx + 1}`}
                          className="w-full h-auto"
                          onError={(e) => {
                            const target = e.currentTarget;
                            target.style.display = "none";
                            const parent = target.parentElement;
                            if (
                              parent &&
                              !parent.querySelector(
                                ".screenshot-error",
                              )
                            ) {
                              const fallback =
                                document.createElement("div");
                              fallback.className =
                                "screenshot-error absolute inset-0 flex items-center justify-center";
                              fallback.style.cssText = `
                            background: rgba(14,14,26,0.9);
                            color: rgba(255,255,255,0.3);
                            font-size: 0.75rem;
                            text-align: center;
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

            {item.projectLink && (
              <div className="mt-6">
                <a
                  href={item.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl text-sm transition-all duration-300"
                  style={{
                    background: `${item.color}`,
                    color: "#05050a",
                    fontWeight: 700,
                    boxShadow: `0 0 30px ${item.color}40`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 40px ${item.color}60`;
                    e.currentTarget.style.transform =
                      "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 30px ${item.color}40`;
                    e.currentTarget.style.transform =
                      "translateY(0)";
                  }}
                >
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                  查看完整项目
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </Portal>
  );
}

// ==========================
// 项目卡片组件（页面展示的小卡片）
// 交互：鼠标悬停 → 3D倾斜、放大、发光、显示查看按钮
// ==========================
function Card({
  item,
  tall,
  imageHeight,
  onOpen,
}: {
  item: (typeof items)[0];
  tall?: boolean;
  imageHeight?: string;
  onOpen: () => void;
}) {
  const [hov, setHov] = useState(false);
  const Bg = item.Bg;

  return (
    <div
      // 🔥 新增：Tailwind 强制防闪烁
      className="group relative rounded-2xl overflow-hidden cursor-pointer will-change-transform"
      style={{
        // 🔥 核心：默认细边框 + 悬停灰色外围描边
        border: hov
          ? "1px solid rgba(255,255,255, 0.9)" // 悬停灰色描边
          : "1px solid rgba(255,255,255,0.06)", // 默认原始边框
        // 🔥 已移除3D效果，仅保留缩放
        transform: hov ? "scale(1.015)" : "scale(1)",
        // 🔥 平滑过渡边框 + 变换效果
        transition:
          "transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), border-color 0.2s ease",
        boxShadow: hov
          ? `0 20px 60px rgba(0,0,0,0.5), 0 0 50px ${item.color}08`
          : "none",
        background: "#0e0e1a",
        // 保留所有防闪烁样式
        outline: "none",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        isolation: "isolate",
        backgroundColor: "#0e0e1a",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => {
        setHov(false);
      }}
      onClick={onOpen}
    >
      <div
        // 🔥 仅顶部圆角，底部直角
        className="relative overflow-hidden rounded-t-2xl"
        style={{
          height: imageHeight || (tall ? 300 : 260),
          // 强制顶部圆角，底部无圆角
          WebkitBorderTopLeftRadius: "16px",
          WebkitBorderTopRightRadius: "16px",
          borderTopLeftRadius: "16px",
          borderTopRightRadius: "16px",
          // 底部强制直角
          WebkitBorderBottomLeftRadius: "0",
          WebkitBorderBottomRightRadius: "0",
          borderBottomLeftRadius: "0",
          borderBottomRightRadius: "0",
        }}
      >
        {item.coverImg && (
          <>
            <img
              src={item.coverImg}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover object-top cover-image"
              style={{
                opacity: 0.85,
                // 悬停放大
                transform: hov ? "scale(1.08)" : "scale(1)",
                transition: "transform 0.3s ease-out",
                // 🔥 GPU加速，仅顶部圆角
                willChange: "transform",
                WebkitBorderTopLeftRadius: "16px",
                WebkitBorderTopRightRadius: "16px",
                borderTopLeftRadius: "16px",
                borderTopRightRadius: "16px",
                borderBottomLeftRadius: "0",
                borderBottomRightRadius: "0",
              }}
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = "none";
                const parent = target.parentElement;
                if (
                  parent &&
                  !parent.querySelector(".img-error-fallback")
                ) {
                  const fallback =
                    document.createElement("div");
                  fallback.className =
                    "img-error-fallback absolute inset-0 flex items-center justify-center";
                  fallback.style.cssText = `background: rgba(14,14,26,0.9); color: rgba(255,255,255,0.3); font-size: 0.75rem; text-align: center; padding: 1rem; z-index: 1;`;
                  fallback.textContent =
                    "图片加载失败，请换个 WiFi 或使用自己的热点";
                  parent.insertBefore(
                    fallback,
                    parent.firstChild,
                  );
                }
              }}
            />
          </>
        )}
        {!item.coverImg && <Bg color={item.color} />}

        {/* 浅色渐变蒙版 + 悬停变亮 */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 md:block hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.2) 100%)",
            opacity: hov ? 0.01 : 0.9,
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
            borderBottomLeftRadius: "0",
            borderBottomRightRadius: "0",
          }}
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg,transparent 0%,rgba(16,16,26,0.01) 80%,rgba(16,16,26,0.01) 100%)",
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
          }}
        />
        <div className="absolute top-4 left-4">
          <span
            className="text-xs px-2.5 py-1 rounded-lg"
            style={{
              background: "rgba(16,16,26,0.8)",
              border: `1px solid ${item.color}22`,
              color: item.color,
              backdropFilter: "blur(8px)",
            }}
          >
            {item.year}
          </span>
        </div>
      </div>

      <div className="p-5 bg-[#60606040] bg-[#60606042] m-[0px]">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <div className="flex items-center gap-0 mb-0.5">
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: `${item.color}50`,
                  letterSpacing: "0.08em",
                }}
              >
                {item.num}
              </span>
              <h3
                style={{
                  fontSize: "0.9375rem",
                  fontWeight: 700,
                  color: "#f0f4f8",
                }}
              >
                {item.title}
              </h3>
            </div>
            <p
              className="text-xs"
              style={{ color: item.color, opacity: 0.75 }}
            >
              {item.sub}
            </p>
          </div>
          <span
            className="shrink-0 text-xs px-2.5 py-1 rounded-lg"
            style={{
              color: item.color,
              fontWeight: 600,
              whiteSpace: "nowrap",
              background: `color-mix(in srgb, ${item.color} 12%, transparent)`,
              border: `1px solid color-mix(in srgb, ${item.color} 14%, transparent)`,
            }}
          >
            {item.metric}
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {item.tags.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-0.5 rounded"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.07)",
                color: "rgba(255,255,255,0.3)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ==========================
// 页面主组件：精选作品 Portfolio
// 布局：深色背景 + 标题区 + Bento网格卡片布局
// ==========================
export function Portfolio() {
  const [sel, setSel] = useState<(typeof items)[0] | null>(
    null,
  );
  const { ref, vis } = useReveal(0);
  const { theme } = useTheme();
  // 🔥 新增：判断PC端/移动端
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section
        id="portfolio"
        ref={ref}
        className="relative overflow-hidden"
        style={{
          background: "var(--bg)",
          padding: "80px 0 140px",
        }}
      >
        <div
          className="absolute inset-x-0 top-0 h-px pointer-events-none"
          style={{
            background: `linear-gradient(90deg,transparent 10%,${theme.purple}33 50%,transparent 90%)`,
          }}
        />

        <div
          className="absolute right-0 top-0 select-none pointer-events-none overflow-hidden"
          style={{
            fontSize: "clamp(50px,16vw,200px)",
            fontWeight: 900,
            lineHeight: 1,
            color: "rgba(255,255,255,0.05)",
            letterSpacing: "0.05em",
          }}
        >
          WORKS
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div
            className="flex flex-col lg:flex-row lg:items-end gap-8 mb-20 transition-all duration-700"
            style={{
              opacity: vis ? 1 : 0,
              transform: vis
                ? "translateY(0)"
                : "translateY(30px)",
            }}
          >
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-5">
                <span
                  className="text-xm tracking-widest"
                  style={{
                    color: theme.purple,
                    letterSpacing: "0.2em",
                    fontWeight: 600,
                  }}
                >
                  SELECTED WORKS
                </span>
                <div
                  className="flex-1 h-px"
                  style={{
                    background: `linear-gradient(90deg,${theme.purple}4d,transparent)`,
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
                其他精选作品
              </h2>
            </div>
            <div className="lg:max-w-xs">
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "rgba(255,255,255,0.28)",
                  lineHeight: 1.85,
                }}
              >
                点击任意卡片查看完整案例
                <br />
                设计过程 · 关键数据 · AI 应用
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-4">
            {/* 🔥 所有卡片统一使用响应式图片高度 */}
            <div
              className="lg:col-span-7 transition-all duration-700"
              style={{
                opacity: vis ? 1 : 0,
                transform: vis
                  ? "translateY(0)"
                  : "translateY(28px)",
                transitionDelay: "60ms",
              }}
            >
              <Card
                item={items[0]}
                tall
                onOpen={() => setSel(items[0])}
                imageHeight={isDesktop ? "320px" : "200px"}
              />
            </div>
            <div
              className="lg:col-span-5 transition-all duration-700"
              style={{
                opacity: vis ? 1 : 0,
                transform: vis
                  ? "translateY(0)"
                  : "translateY(28px)",
                transitionDelay: "130ms",
              }}
            >
              <Card
                item={items[1]}
                tall
                onOpen={() => setSel(items[1])}
                imageHeight={isDesktop ? "320px" : "200px"}
              />
            </div>
            <div
              className="lg:col-span-6 transition-all duration-700"
              style={{
                opacity: vis ? 1 : 0,
                transform: vis
                  ? "translateY(0)"
                  : "translateY(28px)",
                transitionDelay: "200ms",
              }}
            >
              <Card
                item={items[2]}
                onOpen={() => setSel(items[2])}
                imageHeight={isDesktop ? "330px" : "200px"}
              />
            </div>
            <div
              className="lg:col-span-6 transition-all duration-700"
              style={{
                opacity: vis ? 1 : 0,
                transform: vis
                  ? "translateY(0)"
                  : "translateY(28px)",
                transitionDelay: "260ms",
              }}
            >
              <Card
                item={items[3]}
                onOpen={() => setSel(items[3])}
                imageHeight={isDesktop ? "330px" : "200px"}
              />
            </div>
            <div
              className="lg:col-span-4 transition-all duration-700"
              style={{
                opacity: vis ? 1 : 0,
                transform: vis
                  ? "translateY(0)"
                  : "translateY(28px)",
                transitionDelay: "320ms",
              }}
            >
              <Card
                item={items[4]}
                onOpen={() => setSel(items[4])}
                imageHeight={isDesktop ? "220px" : "200px"}
              />
            </div>
            <div
              className="lg:col-span-4 transition-all duration-700"
              style={{
                opacity: vis ? 1 : 0,
                transform: vis
                  ? "translateY(0)"
                  : "translateY(28px)",
                transitionDelay: "380ms",
              }}
            >
              <Card
                item={items[5]}
                onOpen={() => setSel(items[5])}
                imageHeight={isDesktop ? "220px" : "200px"}
              />
            </div>
            <div
              className="lg:col-span-4 transition-all duration-700"
              style={{
                opacity: vis ? 1 : 0,
                transform: vis
                  ? "translateY(0)"
                  : "translateY(28px)",
                transitionDelay: "440ms",
              }}
            >
              <Card
                item={items[6]}
                onOpen={() => setSel(items[6])}
                imageHeight={isDesktop ? "220px" : "200px"}
              />
            </div>
          </div>
        </div>
      </section>

      <Modal item={sel} onClose={() => setSel(null)} />
    </>
  );
}