// 导入React核心钩子：引用、副作用、状态管理
import { useRef, useEffect, useState } from "react";
// 导入Lucide图标库：用于页面中的图标展示
import {
  GraduationCap, // 毕业帽图标 - 教育经历
  Award, // 奖章图标 - 认证证书
  Zap, // 闪电图标 - 进行中项目
  CheckCircle2, // 对勾图标 - 荣誉标签
} from "lucide-react";
import { useTheme } from "./ThemeContext";

// ==============================
// 全局常量定义（主题配色）
// ==============================
const DARK = "#0c0b18"; // 深色主题主色
const LIGHT_BG = "#f0eef9"; // 浅色背景色（教育模块专用）

// ==============================
// 自定义Hook：useReveal
// 核心功能：监听元素滚动到可视区域，延迟显示动画
// 参数：delay - 动画延迟时间（毫秒）
// ==============================
function useReveal(delay = 0) {
  // 创建DOM引用，绑定需要监听滚动的元素
  const ref = useRef<HTMLDivElement>(null);
  // 状态：控制元素是否可见（触发入场动画）
  const [vis, setVis] = useState(false);

  // 副作用：监听元素滚动
  useEffect(() => {
    // IntersectionObserver：浏览器原生API，监听元素是否进入视口
    const ob = new IntersectionObserver(
      ([e]) => {
        // 元素进入可视区域
        if (e.isIntersecting) {
          // 延迟后设置为可见，触发动画
          setTimeout(() => setVis(true), delay);
          // 动画执行后断开监听，提升性能
          ob.disconnect();
        }
      },
      { threshold: 0.04 }, // 触发阈值：元素4%进入视口就执行
    );

    // 绑定监听元素
    if (ref.current) ob.observe(ref.current);
    // 组件销毁时清理监听
    return () => ob.disconnect();
  }, [delay]);

  // 返回：DOM引用 + 可见状态
  return { ref, vis };
}

// ==============================
// 证书数据数组
// 存储6个专业认证的信息：名称、颁发机构、年份、主题色、图标
// ==============================
const certs = [
  {
    name: "精英校友奖",
    issuer: "集团招聘宣讲会",
    year: "2019",
    color: "#00b896",
    icon: "G",
  },
  {
    name: "十佳优秀员工",
    issuer: "山东爱城市网科技有限公司",
    year: "2020",
    color: "#7c6ff7",
    icon: "S",
  },
  {
    name: "集团 Logo 设计一等奖",
    issuer: "浪潮集团",
    year: "2020",
    color: "#f472b6",
    icon: "L",
  },
  {
    name: "创新人才奖",
    issuer: "浪潮集团",
    year: "2022",
    color: "#34d399",
    icon: "C",
  },
  {
    name: "山东省中级工程师职称",
    issuer: "山东省人社厅",
    year: "2024",
    color: "#fb923c",
    icon: "M",
  },
  {
    name: "已授权发明专利 4 项",
    issuer: "国家知识产权局",
    year: "2025",
    color: "#38bdf8",
    icon: "Z",
  },
];

// ==============================
// 技能关键词数组
// 用于底部「专业技能标签云」展示
// ==============================
const keywords = [
  "App Design",
  "Mobile Design",
  "Saas Design",
  "OA Design",
  "Visual Design",
  "Large Screen",
  "Design Systems",
  "Component Library",
  "AI Workflow",
  "Prototyping",
  "Logo Design",
  "Brand Identity",
  "Motion Design",
  "Front-End",
  "BI / Data Vis",
  "HTML+CSS",
  "Lotties",
  "设计提效",
  "政务服务",
  "TMS System",
  "能碳管控",
  "智慧园区",
  "智慧工地",
  "产品发布会PPT",
];

// ==============================
// 子组件：CertCard
// 核心功能：单个证书卡片组件，带滚动入场+鼠标悬浮动画
// 参数：c - 单条证书数据，delay - 动画延迟
// ==============================
function CertCard({
  c,
  delay,
}: {
  c: (typeof certs)[0];
  delay: number;
}) {
  // 状态：鼠标悬浮状态
  const [hov, setHov] = useState(false);
  // DOM引用：卡片元素
  const ref = useRef<HTMLDivElement>(null);
  // 状态：卡片是否可见
  const [vis, setVis] = useState(false);

  // 滚动监听：卡片进入视口后触发入场动画
  useEffect(() => {
    const ob = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => setVis(true), delay);
          ob.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, [delay]);

  return (
    // 卡片外层容器：核心样式+动画+悬浮交互
    <div
      ref={ref}
      className="flex items-center gap-3 p-4 rounded-2xl cursor-default select-none transition-all duration-250"
      style={{
        // 背景：悬浮变白，默认半透明白
        background: hov ? "white" : "rgba(255,255,255,0.5)",
        // 边框：悬浮显示主题色边框
        border: hov
          ? `1px solid ${c.color}25`
          : "1px solid rgba(12,11,24,0.06)",
        // 位移+缩放：悬浮上移放大，默认入场动画
        transform: hov
          ? "translateY(-3px) scale(1.01)"
          : vis
            ? "translateY(0) scale(1)"
            : "translateY(12px) scale(0.97)",
        // 透明度：不可见时透明
        opacity: vis ? 1 : 0,
        // 过渡动画：统一动画曲线+延迟
        transition: `all 0.4s cubic-bezier(0.34,1.2,0.64,1) ${delay}ms`,
        // 阴影：悬浮显示彩色阴影
        boxShadow: hov
          ? `0 8px 28px rgba(0,0,0,0.1), 0 0 20px ${c.color}10`
          : "none",
      }}
      // 鼠标悬浮/离开切换状态
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* 证书图标容器：带主题色背景 */}
      <div
        className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center text-sm transition-all duration-200"
        style={{
          background: hov ? `${c.color}18` : `${c.color}0e`,
          border: `1px solid ${c.color}20`,
          color: c.color,
          fontWeight: 800,
          boxShadow: hov ? `0 0 12px ${c.color}20` : "none",
        }}
      >
        {c.icon}
      </div>

      {/* 证书名称+颁发机构 */}
      <div className="flex-1 min-w-0">
        <p
          style={{
            fontSize: "0.8125rem",
            fontWeight: 600,
            color: DARK,
            lineHeight: 1.3,
          }}
        >
          {c.name}
        </p>
        <p
          className="text-xs mt-0.5 truncate"
          style={{ color: "rgba(12,11,24,0.38)" }}
        >
          {c.issuer}
        </p>
      </div>

      {/* 证书年份：主题色高亮 */}
      <span
        className="text-xs shrink-0"
        style={{ color: c.color, fontWeight: 700 }}
      >
        {c.year}
      </span>
    </div>
  );
}

// ==============================
// 主组件：Education
// 核心功能：教育&认证页面主容器，整合所有子模块
// ==============================
export function Education() {
  const { ref, vis } = useReveal(0.03);
  const { theme } = useTheme();

  return (
    // 页面根节点：ID=education用于导航跳转，浅色背景
    <section
      id="education"
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: LIGHT_BG, padding: "80px 0 140px" }}
    >
      {/* 背景噪点纹理：提升页面质感，纯装饰 */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "160px",
        }}
      />

      {/* 超大背景文字：EDU - 页面装饰，不影响交互 */}
      <div
        className="absolute right-0 top-0 select-none pointer-events-none overflow-hidden hidden lg:block"
        style={{
          fontSize: "clamp(50px,16vw,200px)",
          fontWeight: 900,
          color: "rgba(12,11,24,0.03)",
          lineHeight: 1,
          letterSpacing: "0.05em",
        }}
      >
        EDUCATION
      </div>

      {/* 页面内容容器：居中布局+最大宽度+内边距 */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* ==============================
            页面头部：标题+副标题
            滚动入场动画：透明度+位移
        ============================== */}
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
            {/* 小标题：BACKGROUND + 装饰线 */}
            <div className="flex items-center gap-4 mx-[0px] mt-[0px] mb-[8px]">
              <span
                className="text-xm tracking-widest"
                style={{
                  color: theme.purple,
                  letterSpacing: "0.2em",
                  fontWeight: 600,
                }}
              >
                BACKGROUND
              </span>
              <div
                className="flex-1 h-px"
                style={{
                  background: `linear-gradient(90deg,${theme.purple}66,transparent)`,
                }}
              />
            </div>
            {/* 主标题：教育 & 认证 */}
            <h2
              style={{
                fontSize: "clamp(2.0rem,5vw,3.0rem)",
                fontWeight: 900,
                color: DARK,
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
              }}
            >
              教育 &amp; 认证
            </h2>
          </div>
          {/* 副标题描述 */}
          <div className="lg:max-w-xs">
            <p
              style={{
                fontSize: "0.9375rem",
                color: "rgba(12,11,24,0.42)",
                lineHeight: 1.85,
              }}
            >
              参加系统培训 UI/UX 设计
              <br />
              持续学习 AI 与新兴技术
              <br />
              多项专业认证
            </p>
          </div>
        </div>

        {/* ==============================
            双栏布局：左侧=时间线，右侧=证书+关键词
        ============================== */}
        <div className="grid lg:grid-cols-[1fr_1px_1fr] gap-0">
          {/* ==============================
              左侧栏：教育经历时间线
          ============================== */}
          <div className="pr-0 lg:pr-12">
            {/* 模块标题：EDUCATION */}
            <div className="flex items-center gap-2 mb-8">
              <GraduationCap
                size={13}
                style={{ color: "#7c6ff7" }}
              />
              <span
                className="text-xs tracking-widest"
                style={{
                  color: "rgba(12,11,24,0.3)",
                  letterSpacing: "0.16em",
                }}
              >
                EDUCATION
              </span>
            </div>

            {/* 1. 大学教育经历：带时间轴+入场动画 */}
            <div
              className="relative flex gap-5 mb-2 transition-all duration-700"
              style={{
                opacity: vis ? 1 : 0,
                transform: vis
                  ? "translateX(0)"
                  : "translateX(-20px)",
              }}
            >
              {/* 时间轴导轨：图标+竖线 */}
              <div
                className="flex flex-col items-center shrink-0"
                style={{ width: 40 }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center z-10"
                  style={{
                    background: "rgba(124,111,247,0.1)",
                    border: "2px solid #7c6ff7",
                    boxShadow: "0 0 20px rgba(124,111,247,0.2)",
                  }}
                >
                  <GraduationCap
                    size={15}
                    style={{ color: "#7c6ff7" }}
                  />
                </div>
                <div
                  className="w-px mt-2 flex-1"
                  style={{
                    background: "rgba(12,11,24,0.1)",
                    minHeight: 24,
                  }}
                />
              </div>
              {/* 教育经历内容 */}
              <div className="pb-6">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <h3
                      style={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: DARK,
                      }}
                    >
                      中国石油大学（华东） · 储运与建筑学院
                    </h3>
                    <p
                      className="text-sm mt-0.5"
                      style={{
                        color: "#7c6ff7",
                        fontWeight: 600,
                      }}
                    >
                      建筑环境与能源应用工程 · 本科学位
                    </p>
                  </div>
                  <div className="text-right">
                    <span
                      className="text-xs"
                      style={{ color: "rgba(12,11,24,0.35)" }}
                    >
                      2011 — 2015
                    </span>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: "rgba(12,11,24,0.3)" }}
                    >
                      GPA 4.3 / 5.0
                    </p>
                  </div>
                </div>
                <p
                  className="mb-4"
                  style={{
                    fontSize: "0.8125rem",
                    color: "rgba(12,11,24,0.48)",
                    lineHeight: 1.85,
                  }}
                >
                  自主深耕 UI/UX
                  设计与数据可视化领域，将工程逻辑与用户体验设计结合，主导多个
                  B 端可视化与移动端项目，形成 “工程思维 +
                  设计落地” 的独特优势。
                </p>
                {/* 荣誉标签网格 */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    "专业前 10%",
                    "优秀学生干部",
                    "校级奖学金 ×3",
                  ].map((h) => (
                    <div
                      key={h}
                      className="rounded-xl p-2.5 text-center"
                      style={{
                        background: "rgba(124,111,247,0.06)",
                        border:
                          "1px solid rgba(124,111,247,0.12)",
                      }}
                    >
                      <Award
                        size={12}
                        className="mx-auto mb-1"
                        style={{ color: "#7c6ff7" }}
                      />
                      <span
                        style={{
                          fontSize: "0.6875rem",
                          color: "rgba(12,11,24,0.5)",
                          lineHeight: 1.4,
                          display: "block",
                        }}
                      >
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. Google认证经历（结构同上） */}
            <div
              className="relative flex gap-5 mb-2 transition-all duration-700"
              style={{
                opacity: vis ? 1 : 0,
                transform: vis
                  ? "translateX(0)"
                  : "translateX(-20px)",
                transitionDelay: "120ms",
              }}
            >
              {/* 代码逻辑同上，省略重复注释 */}
              <div
                className="flex flex-col items-center shrink-0"
                style={{ width: 40 }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center z-10"
                  style={{
                    background: "rgba(0,240,200,0.08)",
                    border: "2px solid rgba(0,240,200,0.5)",
                  }}
                >
                  <Award
                    size={14}
                    style={{ color: "#00b896" }}
                  />
                </div>
                <div
                  className="w-px mt-2 flex-1"
                  style={{
                    background: "rgba(12,11,24,0.1)",
                    minHeight: 24,
                  }}
                />
              </div>
              <div className="pb-6">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <h3
                      style={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: DARK,
                      }}
                    >
                      Google UX Design Certificate
                    </h3>
                    <p
                      className="text-sm mt-0.5"
                      style={{
                        color: "#11AF95",
                        fontWeight: 600,
                      }}
                    >
                      专业认证 · Coursera
                    </p>
                  </div>
                  <span
                    className="text-xs"
                    style={{ color: "rgba(12,11,24,0.35)" }}
                  >
                    2017
                  </span>
                </div>
                <p
                  className="mb-4"
                  style={{
                    fontSize: "0.8125rem",
                    color: "rgba(12,11,24,0.48)",
                    lineHeight: 1.85,
                  }}
                >
                  系统学习 UI/UX 设计全链路技能，覆盖
                  PS、AI、AE、C4D 视觉设计工具，Axure、Sketch
                  原型交互工具，以及 HTML+CSS
                  前端基础与用户研究方法论，完成从视觉到交互的完整设计能力构建。
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    "全栈设计工具掌握",
                    "Google 官方认证",
                    "团队项目第一名",
                  ].map((h) => (
                    <div
                      key={h}
                      className="rounded-xl p-2.5 text-center"
                      style={{
                        background: "rgba(0,240,200,0.08)",
                        border: "1px solid rgba(0,240,200,0.2)",
                      }}
                    >
                      <CheckCircle2
                        size={12}
                        className="mx-auto mb-1"
                        style={{ color: "#00b896" }}
                      />
                      <span
                        style={{
                          fontSize: "0.6875rem",
                          color: "rgba(12,11,24,0.5)",
                          lineHeight: 1.4,
                          display: "block",
                        }}
                      >
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. 进行中学习项目：动态脉冲动画 */}
            <div
              className="relative flex gap-5 transition-all duration-700"
              style={{
                opacity: vis ? 1 : 0,
                transform: vis
                  ? "translateX(0)"
                  : "translateX(-20px)",
                transitionDelay: "200ms",
              }}
            >
              <div
                className="shrink-0 flex items-s't"
                style={{ width: 40 }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center z-10"
                  style={{
                    background: "rgba(251,146,60,0.08)",
                    border: "2px dashed rgba(251,146,60,0.3)",
                  }}
                >
                  <Zap size={14} style={{ color: "#fb923c" }} />
                </div>
              </div>
              <div
                className="flex-1 rounded-2xl p-4"
                style={{
                  background: "rgba(251,146,60,0.05)",
                  border: "1px solid rgba(251,146,60,0.14)",
                }}
              >
                <div className="flex items-center gap-2 mb-1">
                  {/* 脉冲动画：表示进行中 */}
                  <div
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{
                      background: "#fb923c",
                      boxShadow: "0 0 8px #fb923c",
                    }}
                  />
                  <span
                    className="text-xs"
                    style={{
                      color: "#fb923c",
                      fontWeight: 700,
                    }}
                  >
                    进行中
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: DARK,
                  }}
                >
                  Advanced AI for UX
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "rgba(12,11,24,0.38)" }}
                >
                  Stanford Online · 持续学习中…
                </p>
              </div>
            </div>
          </div>

          {/* ==============================
              中间竖线：PC端显示，移动端隐藏
          ============================== */}
          <div
            className="hidden lg:block my-4"
            style={{
              background:
                "linear-gradient(180deg,transparent,rgba(12,11,24,0.1) 20%,rgba(12,11,24,0.1) 80%,transparent)",
            }}
          />

          {/* ==============================
              右侧栏：证书卡片 + 技能关键词
          ============================== */}
          <div className="pl-0 lg:pl-12 mt-12 lg:mt-0">
            {/* 模块标题：CERTIFICATIONS */}
            <div className="flex items-center gap-2 mb-8">
              <Award size={13} style={{ color: "#f472b6" }} />
              <span
                className="text-xs tracking-widest"
                style={{
                  color: "rgba(12,11,24,0.3)",
                  letterSpacing: "0.16em",
                }}
              >
                CERTIFICATIONS
              </span>
            </div>

            {/* 证书卡片网格：2列布局，循环渲染证书数据 */}
            <div className="grid sm:grid-cols-2 gap-2.5 mb-12">
              {certs.map((c, i) => (
                <CertCard key={c.name} c={c} delay={65} />
              ))}
            </div>

            {/* 技能关键词标签云 */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#f472b6" }}
                />
                <span
                  className="text-xs tracking-widest"
                  style={{
                    color: "rgba(12,11,24,0.3)",
                    letterSpacing: "0.16em",
                  }}
                >
                  EXPERTISE KEYWORDS
                </span>
              </div>
              {/* 标签云容器：悬浮变色交互 */}
              <div className="flex flex-wrap gap-2">
                {keywords.map((s, i) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-lg text-xs cursor-default select-none transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.6)",
                      border: "1px solid rgba(12,11,24,0.08)",
                      color: "rgba(12,11,24,0.5)",
                      opacity: vis ? 1 : 0,
                      transform: vis
                        ? "scale(1)"
                        : "scale(0.88)",
                      transition:
                        "opacity 0.4s, transform 0.4s, background 0s, border-color 0s, color 0s",
                      transitionDelay: "0ms",
                    }}
                    // 鼠标悬浮：随机主题色高亮
                    onMouseEnter={(e) => {
                      const colors = [
                        "#00b896",
                        "#7c6ff7",
                        "#f472b6",
                        "#34d399",
                        "#fb923c",
                        "#38bdf8",
                      ];
                      const c = colors[i % colors.length];
                      (
                        e.currentTarget as HTMLElement
                      ).style.background = `${c}12`;
                      (
                        e.currentTarget as HTMLElement
                      ).style.borderColor = `${c}22`;
                      (
                        e.currentTarget as HTMLElement
                      ).style.color = c;
                    }}
                    // 鼠标离开：恢复默认样式
                    onMouseLeave={(e) => {
                      (
                        e.currentTarget as HTMLElement
                      ).style.background =
                        "rgba(255,255,255,0.6)";
                      (
                        e.currentTarget as HTMLElement
                      ).style.borderColor =
                        "rgba(12,11,24,0.08)";
                      (
                        e.currentTarget as HTMLElement
                      ).style.color = "rgba(12,11,24,0.5)";
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}