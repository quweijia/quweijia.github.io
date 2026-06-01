import { useRef, useEffect, useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Download,
  ExternalLink,
  MapPin,
  Send,
  ArrowRight,
  PhoneCall,
  Copy,
  Check,
  X,
} from "lucide-react";
import { useTheme } from "./ThemeContext";
import { PasswordDialog } from "./PasswordDialog";
import { Portal } from "./Portal";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import wechatQRCode from "../../imports/cd928feb81fb8ff325ac41aaef07a759.jpg";

const WeChat = ({ size = 20, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="#07C160"
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* 微信官方标准轮廓 */}
    <path d="M10.0014 14.6757C10.0011 14.6551 10.001 14.6345 10.001 14.6138C10.001 12.1055 12.0175 9.99564 14.7539 9.38092C14.3904 7.07873 11.9602 5.19995 8.90098 5.19995C5.58037 5.19995 3.00098 7.41344 3.00098 9.9793C3.00098 10.9487 3.36131 11.88 4.04082 12.6781C4.0728 12.7157 4.12443 12.7717 4.19342 12.8427C4.78537 13.4517 5.13709 14.2457 5.19546 15.0805C5.90857 14.6683 6.74285 14.5123 7.55832 14.6392C7.72416 14.665 7.85986 14.6847 7.96345 14.6982C8.27111 14.7383 8.58419 14.7586 8.90098 14.7586C9.27825 14.7586 9.64595 14.7301 10.0014 14.6757ZM10.4581 16.627C9.95467 16.7133 9.43399 16.7586 8.90098 16.7586C8.49441 16.7586 8.09502 16.7323 7.70499 16.6815C7.58312 16.6656 7.4317 16.6436 7.25073 16.6154C6.87693 16.5572 6.49436 16.6321 6.1713 16.8268L4.26653 17.9745C4.12052 18.0646 3.94891 18.1057 3.77733 18.0916C3.33814 18.0554 3.01178 17.6744 3.04837 17.2405L3.19859 15.4596C3.23664 15.0086 3.07664 14.5632 2.75931 14.2367C2.66182 14.1364 2.5814 14.0491 2.51802 13.9747C1.56406 12.8542 1.00098 11.4732 1.00098 9.9793C1.00098 6.23517 4.53793 3.19995 8.90098 3.19995C12.9601 3.19995 16.3041 5.82699 16.7504 9.20788C20.1225 9.36136 22.801 11.723 22.801 14.6138C22.801 15.8068 22.3448 16.9097 21.572 17.8044C21.5206 17.8639 21.4555 17.9336 21.3765 18.0137C21.1194 18.2744 20.9898 18.6301 21.0206 18.9903L21.1423 20.4125C21.172 20.759 20.9076 21.0632 20.5518 21.0921C20.4128 21.1034 20.2738 21.0706 20.1555 20.9986L18.6124 20.0821C18.3506 19.9266 18.0407 19.8668 17.7379 19.9133C17.5913 19.9358 17.4686 19.9533 17.3699 19.966C17.0539 20.0066 16.7303 20.0277 16.401 20.0277C13.7074 20.0277 11.4025 18.6201 10.4581 16.627ZM17.4346 17.9364C18.0019 17.8494 18.5793 17.911 19.1105 18.1111C19.2492 17.5503 19.5373 17.0304 19.9524 16.6094C20.0027 16.5585 20.0388 16.5198 20.0584 16.4971C20.5467 15.9318 20.801 15.2839 20.801 14.6138C20.801 12.8095 18.8983 11.2 16.401 11.2C13.9037 11.2 12.001 12.8095 12.001 14.6138C12.001 16.4181 13.9037 18.0277 16.401 18.0277C16.6424 18.0277 16.8809 18.0124 17.115 17.9823C17.1957 17.972 17.3029 17.9566 17.4346 17.9364Z"></path>
  </svg>
);

/* ─── reveal ─── */
function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const ob = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => setVis(true), delay);
          ob.disconnect();
        }
      },
      { threshold: 0.04 },
    );
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, [delay]);
  return { ref, vis };
}

/* ─── Magnetic Button ─── */
function MagBtn({
  children,
  onClick,
  primary,
  color,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  primary?: boolean;
  color?: string;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hov, setHov] = useState(false);
  return (
    <button
      ref={ref}
      className="relative flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm overflow-hidden"
      style={{
        background: primary
          ? "linear-gradient(135deg, rgb(var(--c1)), rgba(var(--c1), 0.85))"
          : "transparent",
        border: primary
          ? "none"
          : "1px solid rgba(var(--c1), 0.3)",
        color: primary ? "var(--bg)" : "rgba(var(--c1)",
        fontWeight: primary ? 700 : 500,
        transform: `translate(${pos.x}px,${pos.y}px)`,
        transition: hov
          ? "transform 0.2s ease-out,box-shadow 0.2s"
          : "transform 0.5s cubic-bezier(0.23,1,0.32,1),box-shadow 0.2s",
        boxShadow:
          hov && primary
            ? "0 0 35px rgba(var(--c1), 0.4)"
            : "none",
        cursor: "default",
      }}
      onMouseMove={(e) => {
        const rect = ref.current!.getBoundingClientRect();
        setPos({
          x: (e.clientX - rect.left - rect.width / 2) * 0.4,
          y: (e.clientY - rect.top - rect.height / 2) * 0.4,
        });
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => {
        setHov(false);
        setPos({ x: 0, y: 0 });
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

const socials = [
  {
    icon: <Mail size={15} />,
    label: "Email",
    value: "quweijia@vip.qq.com",
    href: "mailto:quweijia@vip.qq.com",
    color: "rgb(var(--c1))",
  },
  {
    icon: <PhoneCall size={15} />,
    label: "PhoneCall",
    value: "156-6279-6885",
    href: " ",
    color: "#f0f4f8",
  },
  {
    icon: <WeChat size={15} />,
    label: "WeChat",
    value: "vic-qu",
    href: " ",
    color: "#07C160",
  },
  {
    icon: <Twitter size={15} />,
    label: "X / Twitter",
    value: "@vicqu_design",
    href: "https://twitter.com",
    color: "#7c6ff7",
  },
];

const facts = [
  {
    label: "Response Rate",
    value: "97%",
    color: "rgb(var(--c1))",
  },
  { label: "Reply Time", value: "< 24h", color: "#7c6ff7" },
  { label: "Remote OK", value: "Yes", color: "#f472b6" },
  {
    label: "Availability",
    value: "On",
    color: "#34d399",
  },
];

/* ─── Social row ─── */
function SocialRow({
  s,
  onQRCodeClick
}: {
  s: (typeof socials)[0];
  onQRCodeClick?: () => void;
}) {
  const [h, setH] = useState(false);
  const [copied, setCopied] = useState(false);
  const isEmail = s.label === "Email";
  const isPhone = s.label === "PhoneCall";
  const isWeChat = s.label === "WeChat";
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const handleClick = async (e: React.MouseEvent) => {
    if (isEmail) {
      e.preventDefault();
      const email = "quweijia@vip.qq.com";
      try {
        // Try modern Clipboard API first
        await navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        // Fallback to legacy method
        try {
          const textArea = document.createElement("textarea");
          textArea.value = email;
          textArea.style.position = "fixed";
          textArea.style.left = "-999999px";
          textArea.style.top = "-999999px";
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          const successful = document.execCommand("copy");
          document.body.removeChild(textArea);

          if (successful) {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }
        } catch (fallbackErr) {
          console.error("Failed to copy email:", fallbackErr);
        }
      }
    } else if (isPhone) {
      if (isMobile) {
        // Mobile: dial phone
        window.location.href = "tel:15662796885";
      } else {
        // PC: copy phone number
        e.preventDefault();
        const phone = "15662796885";
        try {
          await navigator.clipboard.writeText(phone);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch (err) {
          try {
            const textArea = document.createElement("textarea");
            textArea.value = phone;
            textArea.style.position = "fixed";
            textArea.style.left = "-999999px";
            textArea.style.top = "-999999px";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            const successful = document.execCommand("copy");
            document.body.removeChild(textArea);

            if (successful) {
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }
          } catch (fallbackErr) {
            console.error("Failed to copy phone:", fallbackErr);
          }
        }
      }
    } else if (isWeChat) {
      e.preventDefault();
      // 点击弹出二维码
      if (onQRCodeClick) {
        onQRCodeClick();
      }

      // Mobile: try to open WeChat
      if (isMobile) {
        setTimeout(() => {
          window.location.href = "weixin://";
        }, 100);
      }
    }
  };

  return (
    <a
      href={isPhone && isMobile ? "tel:15662796885" : s.href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 p-4 rounded-xl transition-all duration-200"
      style={{
        background: h
          ? "rgba(255,255,255,0.08)"
          : "rgba(255,255,255,0.06)",
        border: h
          ? `1px solid ${s.color}25`
          : "1px solid rgba(255,255,255,0.12)",
        transform: h ? "translateX(6px)" : "none",
        textDecoration: "none",
        cursor: isEmail || isPhone || isWeChat ? "pointer" : "default",
      }}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      onClick={handleClick}
    >
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200"
        style={{
          background: `${s.color}10`,
          border: `1px solid ${s.color}18`,
          color: s.color,
          boxShadow: h ? `0 0 14px ${s.color}20` : "none",
        }}
      >
        {s.icon}
      </div>
      <div className="flex-1 min-w-0">
        <p
          style={{
            fontSize: "0.8125rem",
            fontWeight: 600,
            color: "#f0f4f8",
          }}
        >
          {s.label}
        </p>
        <p
          className="text-xs mt-1.5 truncate"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          {s.value}
        </p>
      </div>
      {isEmail || (isPhone && !isMobile) || isWeChat ? (
        copied ? (
          <Check
            size={11}
            style={{
              color: s.color,
              opacity: 1,
              transition: "opacity 0.2s",
              flexShrink: 0,
            }}
          />
        ) : (
          <Copy
            size={11}
            style={{
              color: "rgba(255,255,255,0.2)",
              opacity: h ? 1 : 0,
              transition: "opacity 0.2s",
              flexShrink: 0,
            }}
          />
        )
      ) : (
        <ExternalLink
          size={11}
          style={{
            color: "rgba(255,255,255,0.2)",
            opacity: h ? 1 : 0,
            transition: "opacity 0.2s",
            flexShrink: 0,
          }}
        />
      )}
    </a>
  );
}

export function Contact() {
  const { ref, vis } = useReveal(0.04);
  const { theme } = useTheme();
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [showEmailBubble, setShowEmailBubble] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [showWeChatQR, setShowWeChatQR] = useState(false);

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

  const handleSend = () => {
    if (!msg.trim()) return;

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // 移动端：跳转到短信应用
      const smsBody = encodeURIComponent(msg);
      window.location.href = `sms:15662796885${/iPhone|iPad|iPod/i.test(navigator.userAgent) ? '&' : '?'}body=${smsBody}`;

      // 清空输入框
      setTimeout(() => {
        setMsg("");
      }, 500);
    } else {
      // PC 端：弹出微信二维码
      setShowWeChatQR(true);
    }
  };

  const handleCopyEmail = async () => {
    const email = "quweijia@vip.qq.com";
    try {
      // Try modern Clipboard API first
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      setTimeout(() => {
        setEmailCopied(false);
      }, 2000);
    } catch (err) {
      // Fallback to legacy method
      try {
        const textArea = document.createElement("textarea");
        textArea.value = email;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand("copy");
        document.body.removeChild(textArea);

        if (successful) {
          setEmailCopied(true);
          setTimeout(() => {
            setEmailCopied(false);
          }, 2000);
        }
      } catch (fallbackErr) {
        console.error("Failed to copy email:", fallbackErr);
      }
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden"
      style={{
        background: "var(--bg)",
        padding: "180px 0 20px",
      }}
    >
      {/* Top border */}
      <div
        className="absolute inset-x-0 top-0 h-px pointer-events-none"
        style={{
          background: `linear-gradient(90deg,transparent 5%,${theme.cyan}2e 50%,transparent 95%)`,
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-64 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse,${theme.cyan}4d 0%,transparent 70%)`,
          filter: "blur(30px)",
        }}
      />

      {/* Giant bg name */}
      <div
        className="absolute inset-x-0 top-0 flex items-start justify-center overflow-hidden pointer-events-none select-none"
        style={{ paddingTop: "360px" }}
      >
        <span
          style={{
            fontSize: "clamp(50px,16vw,200px)",
            fontWeight: 900,
            letterSpacing: "0.05em",
            color: "rgba(255,255,255,0.018)",
            whiteSpace: "nowrap",
          }}
        >
          Vic Qu
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* ── Centred hero text ── */}
        <div
          className="text-center transition-all duration-700 mx-[0px] mt-6 mb-[80px]"
          style={{
            opacity: vis ? 1 : 0,
            transform: vis
              ? "translateY(0)"
              : "translateY(30px)",
          }}
        >
          <p
            className="text-xs mb-5 tracking-widest"
            style={{
              color: theme.cyan,
              letterSpacing: "0.22em",
              fontWeight: 600,
            }}
          >
            GET IN TOUCH
          </p>

          <h2
            style={{
              fontSize: "clamp(2.8rem,7vw,5.5rem)",
              fontWeight: 900,
              lineHeight: 1.2,
              letterSpacing: "0em",
              color: "#f0f4f8",
            }}
          >
            一起创造
            <br />
            <span
              style={{
                background: `linear-gradient(135deg, rgb(var(--c1)) 0%, rgb(var(--c2)) 25%, rgb(var(--c3)) 50%, rgb(var(--c2)) 75%, rgb(var(--c1)) 100%)`,
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "inline-block",
                animation: "flowGradient 6s ease infinite",
              }}
            >
              卓越的设计
            </span>
          </h2>

          {/* Divider wave */}
          <svg
            viewBox="0 0 400 20"
            className="mx-auto mt-5 mb-5"
            style={{ width: "min(400px,80%)", opacity: 0.15 }}
          >
            <path
              d="M0 10 C40 2 80 18 120 10 S200 2 240 10 S320 18 360 10 S390 4 400 10"
              fill="none"
              stroke={theme.cyan}
              strokeWidth="1.5"
            />
          </svg>

          <p
            className="max-w-md mx-auto"
            style={{
              fontSize: "1rem",
              color: "rgba(255,255,255,0.35)",
              lineHeight: 1.85,
            }}
          >
            岗位意向：UI/UX 设计主管职位
            <br />
            欢迎探讨设计项目合作或咨询机会
          </p>

          {/* Location */}
          <div
            className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <MapPin
              size={11}
              style={{ color: "rgba(255,255,255,0.3)" }}
            />
            <span
              className="text-xs"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              济南 · 中国，接受全球远程机会
            </span>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {/* Email button with bubble */}
            <div className="relative">
              <MagBtn
                primary
                onClick={() => setShowEmailBubble(!showEmailBubble)}
              >
                <Mail size={14} /> 发送邮件
              </MagBtn>

              {/* Email bubble */}
              {showEmailBubble && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2.5 rounded-xl"
                  style={{
                    bottom: "calc(100% + 12px)",
                    background: "rgba(20, 20, 25, 0.95)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(var(--c1), 0.3)",
                    boxShadow:
                      "0 8px 32px rgba(0,0,0,0.4), 0 0 20px rgba(var(--c1), 0.15)",
                    whiteSpace: "nowrap",
                    zIndex: 50,
                    animation: "fadeInUp 0.3s ease-out",
                  }}
                >
                  <span
                    className="text-sm select-all"
                    style={{
                      color: "#f0f4f8",
                      fontWeight: 500,
                      fontFamily: "monospace",
                    }}
                  >
                    quweijia@vip.qq.com
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center justify-center w-7 h-7 rounded-lg transition-all duration-200 hover:scale-110"
                    style={{
                      background: emailCopied
                        ? "rgba(var(--c1), 0.2)"
                        : "rgba(255,255,255,0.1)",
                      border: emailCopied
                        ? "1px solid rgba(var(--c1), 0.4)"
                        : "1px solid rgba(255,255,255,0.15)",
                      color: emailCopied
                        ? "rgb(var(--c1))"
                        : "rgba(255,255,255,0.6)",
                    }}
                  >
                    {emailCopied ? <Check size={13} /> : <Copy size={13} />}
                  </button>

                  {/* Triangle pointer */}
                  <div
                    className="absolute left-1/2 -translate-x-1/2"
                    style={{
                      bottom: "-6px",
                      width: 0,
                      height: 0,
                      borderLeft: "6px solid transparent",
                      borderRight: "6px solid transparent",
                      borderTop: "6px solid rgba(var(--c1), 0.3)",
                    }}
                  />
                  <div
                    className="absolute left-1/2 -translate-x-1/2"
                    style={{
                      bottom: "-5px",
                      width: 0,
                      height: 0,
                      borderLeft: "5px solid transparent",
                      borderRight: "5px solid transparent",
                      borderTop: "5px solid rgba(20, 20, 25, 0.95)",
                    }}
                  />
                </div>
              )}
            </div>

            <MagBtn onClick={() => setShowPasswordDialog(true)}>
              <Download size={14} /> 下载 PDF 简历
            </MagBtn>
          </div>
        </div>

        {/* ── 4-fact strip ── */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-14 transition-all duration-700"
          style={{
            opacity: vis ? 1 : 0,
            transform: vis
              ? "translateY(0)"
              : "translateY(20px)",
            transitionDelay: "100ms",
          }}
        >
          {facts.map((f, i) => (
            <div
              key={f.label}
              className="rounded-2xl p-5 text-center group cursor-default select-none transition-all duration-200 hover:scale-[1.02]"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                transitionDelay: `${i * 50}ms`,
              }}
            >
              <div
                style={{
                  fontSize: "1.625rem",
                  fontWeight: 900,
                  color: f.color,
                  lineHeight: 1,
                }}
              >
                {f.value}
              </div>
              <p
                className="mt-1.5 text-xs"
                style={{
                  color: "rgba(255,255,255,0.3)",
                  letterSpacing: "0.06em",
                }}
              >
                {f.label}
              </p>
            </div>
          ))}
        </div>

        {/* ── 3-col layout ── */}
        <div className="grid lg:grid-cols-3 gap-6 mb-20">
          {/* Socials */}
          <div
            className="transition-all duration-700"
            style={{
              opacity: vis ? 1 : 0,
              transform: vis
                ? "translateX(0)"
                : "translateX(-20px)",
              transitionDelay: "150ms",
            }}
          >
            <p
              className="text-xs mb-5 tracking-widest"
              style={{
                color: "rgba(255,255,255,0.5)",
                letterSpacing: "0.16em",
              }}
            >
              CONNECT
            </p>
            <div className="space-y-2.5">
              {socials.map((s) => (
                <SocialRow
                  key={s.label}
                  s={s}
                  onQRCodeClick={
                    s.label === "WeChat" ? () => setShowWeChatQR(true) : undefined
                  }
                />
              ))}
            </div>
          </div>

          {/* Resume card */}
          <div
            className="transition-all duration-700"
            style={{
              opacity: vis ? 1 : 0,
              transform: vis
                ? "translateY(0)"
                : "translateY(20px)",
              transitionDelay: "220ms",
            }}
          >
            <p
              className="text-xs mb-5 tracking-widest"
              style={{
                color: "rgba(255,255,255,0.5)",
                letterSpacing: "0.16em",
              }}
            >
              RESUME
            </p>
            <div
              className="relative overflow-hidden rounded-2xl p-6 h-[calc(100%-40px)]"
              style={{
                background:
                  "linear-gradient(135deg,rgba(0,240,200,0.08) 0%,rgba(124,111,247,0.05) 100%)",
                border: "1px solid rgba(0,240,200,0.12)",
              }}
            >
              {/* Grid decoration */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                style={{ opacity: 0.04 }}
              >
                {[15, 30, 45, 60, 75, 90].map((y) => (
                  <line
                    key={y}
                    x1="0"
                    y1={y}
                    x2="100"
                    y2={y}
                    stroke="rgb(var(--c1))"
                    strokeWidth="0.5"
                  />
                ))}
                {[15, 30, 45, 60, 75, 90].map((x) => (
                  <line
                    key={x}
                    x1={x}
                    y1="0"
                    x2={x}
                    y2="100"
                    stroke="rgb(var(--c1))"
                    strokeWidth="0.5"
                  />
                ))}
              </svg>
              {/* Glow orb */}
              <div
                className="absolute -top-10 -right-10 w-36 h-36 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle,rgba(0,240,200,0.1) 0%,transparent 70%)",
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-1">
                  <div
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{
                      background: "rgb(var(--c1))",
                      boxShadow: "0 0 6px rgb(var(--c1))",
                    }}
                  />
                  <span
                    className="text-xs"
                    style={{
                      color: "rgb(var(--c1))",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                    }}
                  >
                    RESUME · 简历
                  </span>
                </div>
                <h3
                  className="mt-3 mb-1"
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 800,
                    color: "#f0f4f8",
                  }}
                >
                  曲维甲 · Vic Qu
                </h3>
                <p
                  className="text-xs mb-5"
                  style={{
                    color: "rgb(var(--c1))",
                    fontWeight: 500,
                  }}
                >
                  ENFJ · Full-Stack UI/UX Designer
                </p>
                <p
                  className="mb-5"
                  style={{
                    fontSize: "0.8125rem",
                    color: "rgba(255,255,255,0.4)",
                    lineHeight: 1.8,
                  }}
                >
                  PDF简历：个人信息、求职意向、教育背景、工作经历、技能清单等。
                </p>
                <div className="flex gap-6 mb-6">
                  {[
                    ["10+", "年经验"],
                    ["60+", "项目"],
                    ["20+", "AI工具"],
                  ].map(([v, l]) => (
                    <div key={l}>
                      <div
                        style={{
                          fontSize: "1.125rem",
                          fontWeight: 800,
                          color: "#f0f4f8",
                          lineHeight: 1.5,
                        }}
                      >
                        {v}
                      </div>
                      <div
                        className="text-xs mt-0.5"
                        style={{
                          color: "rgba(255,255,255,0.28)",
                        }}
                      >
                        {l}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setShowPasswordDialog(true)}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm transition-all hover:scale-[1.03]"
                    style={{
                      background:
                        "linear-gradient(135deg, rgb(var(--c1)), rgba(var(--c1), 0.85))",
                      color: "var(--bg)",
                      fontWeight: 700,
                      boxShadow:
                        "0 0 20px rgba(var(--c1), 0.2)",
                    }}
                  >
                    <Download
                      size={13}
                      style={{ color: "var(--bg)" }}
                    />{" "}
                    下载 PDF
                  </button>
                  <button
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm transition-all hover:scale-[1.02]"
                    style={{
                      border: "1px solid rgba(var(--c1), 0.3)",
                      color: "rgb(var(--c1))",
                      background: "rgba(var(--c1), 0.08)",
                    }}
                  >
                    <ExternalLink
                      size={13}
                      style={{ color: "rgb(var(--c1))" }}
                    />{" "}
                    在线版
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick message */}
          <div
            className="transition-all duration-700"
            style={{
              opacity: vis ? 1 : 0,
              transform: vis
                ? "translateX(0)"
                : "translateX(20px)",
              transitionDelay: "290ms",
            }}
          >
            <p
              className="text-xs mb-5 tracking-widest"
              style={{
                color: "rgba(255,255,255,0.5)",
                letterSpacing: "0.16em",
              }}
            >
              QUICK MESSAGE
            </p>

            <div
              className="rounded-2xl p-5 mb-4"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <textarea
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                rows={5}
                placeholder="你好 Vic！我对你的设计作品很感兴趣，希望能进一步交流..."
                className="w-full resize-none outline-none text-sm mb-3"
                style={{
                  background: "transparent",
                  color: "#f0f4f8",
                  lineHeight: 1.7,
                }}
              />
              <button
                onClick={handleSend}
                disabled={!msg.trim()}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm transition-all duration-200"
                style={{
                  background: !msg.trim()
                    ? "rgba(255, 255, 255, 0.05)"
                    : sent
                    ? "rgba(var(--c1), 0.1)"
                    : "linear-gradient(135deg, rgb(var(--c1)), rgba(var(--c1), 0.85))",
                  color: !msg.trim()
                    ? "rgba(255, 255, 255, 0.3)"
                    : sent
                    ? "rgb(var(--c1))"
                    : "var(--bg)",
                  fontWeight: 700,
                  border: !msg.trim()
                    ? "1px solid rgba(255, 255, 255, 0.1)"
                    : sent
                    ? "1px solid rgba(var(--c1), 0.3)"
                    : "none",
                  cursor: !msg.trim() ? "not-allowed" : "pointer",
                  opacity: !msg.trim() ? 0.5 : 1,
                }}
              >
                {sent ? (
                  <>
                    <span>✓</span> 已发送！
                  </>
                ) : (
                  <>
                    <Send
                      size={13}
                      style={{ color: !msg.trim() ? "rgba(255, 255, 255, 0.3)" : "var(--bg)" }}
                    />{" "}
                    发送消息
                  </>
                )}
              </button>
            </div>

            {/* Availability badge */}
            <div
              className="rounded-xl p-4 flex items-start gap-3"
              style={{
                background: "rgba(0,240,200,0.04)",
                border: "1px solid rgba(0,240,200,0.1)",
              }}
            >
              <div
                className="shrink-0 mt-0.5 w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: "rgba(0,240,200,0.08)" }}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full animate-pulse"
                  style={{
                    background: "rgb(var(--c1))",
                    boxShadow: "0 0 10px rgb(var(--c1))",
                  }}
                />
              </div>
              <div>
                <p
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "#f0f4f8",
                  }}
                >
                  目前接受新机会
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{
                    color: "rgba(255,255,255,0.3)",
                    lineHeight: 1.6,
                  }}
                >
                  全职设计师 · 项目合作 · 设计咨询
                  <br />
                  回复率 97% · 通常 24 小时内响应
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Footer strip ── */}
        <div
          className="pt-7 flex flex-wrap items-center justify-between gap-4"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.04)",
          }}
        >
          <div className="flex items-center gap-3">
            <p
              className="text-xs"
              style={{ color: "rgba(255,255,255,0.2)" }}
            >
              © 2026 · Vic Qu · Designed by Figma{" "}
              <span style={{ color: "rgb(var(--c1))" }}>&</span>
              TRAE CN
            </p>
          </div>
          <p
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            React · Tailwind · Motion · AI-Augmented · Github
          </p>
        </div>
      </div>

      {/* Password Dialog */}
      <PasswordDialog
        isOpen={showPasswordDialog}
        onClose={() => setShowPasswordDialog(false)}
        onConfirm={handleDownloadResume}
      />

      {/* WeChat QR Code Modal */}
      {showWeChatQR && (
        <Portal>
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{
              background: "rgba(0, 0, 0, 0.85)",
              backdropFilter: "blur(12px)",
            }}
            onClick={() => setShowWeChatQR(false)}
          >
            <div
              className="relative max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setShowWeChatQR(false)}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  color: "rgba(255, 255, 255, 0.9)",
                }}
              >
                <X size={20} />
              </button>

              {/* QR Code Image */}
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "white",
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",
                }}
              >
                <ImageWithFallback
                  src={wechatQRCode}
                  alt="WeChat QR Code - 长按识别二维码"
                  className="w-full h-auto"
                  style={{
                    display: "block",
                  }}
                />
              </div>

              {/* Hint text */}
              <p
                className="text-center mt-4"
                style={{
                  color: "rgba(255, 255, 255, 0.7)",
                  fontSize: "0.875rem",
                }}
              >
                长按图片保存或识别二维码
              </p>
            </div>
          </div>
        </Portal>
      )}
    </section>
  );
}