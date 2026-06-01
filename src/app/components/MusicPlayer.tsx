import { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  SkipBack,
  SkipForward,
  Disc3,
  ChevronDown,
  BarChart3,
  Activity,
  Radio,
} from "lucide-react";

interface Track {
  name: string;
  artist: string;
  url: string;
}

type VisualizerStyle = "bars" | "wave" | "circle" | "spectrum";

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  // 🔥 默认绝不静音
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(60);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [visualizerStyle, setVisualizerStyle] =
    useState<VisualizerStyle>("bars");
  // 模拟音频数据（不影响声音，纯可视化）
  const [audioData, setAudioData] = useState<number[]>(
    new Array(64).fill(0),
  );
  const audioRef = useRef<HTMLAudioElement>(null);
  const animationRef = useRef<number | null>(null);

  // 测试用播放列表
  const playlist: Track[] = [
    {
      name: "Deep Space Drift",
      artist: "Vic Qu · Ambient",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    {
      name: "Neon Dreams",
      artist: "Vic Qu · Electronic",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    {
      name: "Urban Flow",
      artist: "Vic Qu · Chill",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    },
  ];

  const currentTrack = playlist[currentTrackIndex];

  // 原生音频：音量 + 静音 强制生效
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
      audioRef.current.muted = isMuted;
    }
  }, [volume, isMuted]);

  // 音频进度监听
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      if (currentTrackIndex < playlist.length - 1) {
        setCurrentTrackIndex(currentTrackIndex + 1);
      } else {
        setIsPlaying(false);
      }
    };
    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);
    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener(
        "loadedmetadata",
        updateDuration,
      );
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentTrackIndex, playlist.length]);

  // 切歌自动播放
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.load();
    if (isPlaying) {
      audio.play().catch(console.log);
    }
  }, [currentTrackIndex, isPlaying]);

  // 🔥 模拟可视化（不碰音频流，绝不影响声音）
  useEffect(() => {
    if (isPlaying) {
      const animate = () => {
        setAudioData(
          Array.from(
            { length: 64 },
            () => Math.random() * 0.8 + 0.2,
          ),
        );
        animationRef.current = requestAnimationFrame(animate);
      };
      animate();
    } else {
      if (animationRef.current)
        cancelAnimationFrame(animationRef.current);
      setAudioData(new Array(64).fill(0.1));
    }
    return () => {
      if (animationRef.current)
        cancelAnimationFrame(animationRef.current);
    };
  }, [isPlaying]);

  // 播放/暂停（纯原生，无任何拦截）
  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (err) {
        console.log("播放失败：", err);
      }
    }
  };

  const toggleExpanded = () => setIsExpanded(!isExpanded);
  const toggleMute = () => setIsMuted(!isMuted);

  const handleVolumeChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setVolume(Number(e.target.value));
  };

  const handleProgressClick = (
    e: React.MouseEvent<HTMLDivElement>,
  ) => {
    if (!audioRef.current || !duration) return;
    const percent =
      (e.clientX -
        e.currentTarget.getBoundingClientRect().left) /
      e.currentTarget.offsetWidth;
    audioRef.current.currentTime = percent * duration;
  };

  const prevTrack = () => {
    if (currentTrackIndex > 0) {
      setCurrentTrackIndex(currentTrackIndex - 1);
    }
  };

  const nextTrack = () => {
    if (currentTrackIndex < playlist.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const m = Math.floor(time / 60);
    const s = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  };

  const cycleVisualizerStyle = () => {
    const styles: VisualizerStyle[] = [
      "bars",
      "wave",
      "circle",
      "spectrum",
    ];
    setVisualizerStyle(
      styles[
        (styles.indexOf(visualizerStyle) + 1) % styles.length
      ],
    );
  };

  // 4种可视化渲染（完全模拟，不影响音频）
  const renderVisualizer = () => {
    const barCount = 32;
    const step = Math.floor(audioData.length / barCount);
    switch (visualizerStyle) {
      case "bars":
        return (
          <div className="flex items-end justify-center gap-1 h-24 px-2">
            {Array.from({ length: barCount }).map((_, i) => {
              const v = audioData[i * step] || 0.1;
              const h = isPlaying ? Math.max(4, v * 80) : 4;
              return (
                <div
                  key={i}
                  className="flex-1 rounded-t-full transition-all"
                  style={{
                    height: `${h}px`,
                    background: `linear-gradient(to top, rgb(var(--c1)), rgb(var(--c2)))`,
                  }}
                />
              );
            })}
          </div>
        );
      case "wave":
        return (
          <svg className="w-full h-24" viewBox="0 0 320 50">
            <path
              d={
                "M0 30 " +
                Array.from({ length: barCount })
                  .map(
                    (_, i) =>
                      `L${(i / barCount) * 320} ${48 - (audioData[i * step] || 0) * 40}`,
                  )
                  .join(" ")
              }
              fill="none"
              stroke={`rgb(var(--c1))`}
              strokeWidth="1"
            />
          </svg>
        );
      case "circle":
        return (
          <div className="relative w-full h-24 flex items-center justify-center">
            {Array.from({ length: 24 }).map((_, i) => {
              const v =
                audioData[
                  Math.floor((i / 24) * audioData.length)
                ] || 0.2;
              const r = isPlaying ? 20 + v * 25 : 20;
              return (
                <div
                  key={i}
                  className="absolute w-0.5 rounded-full"
                  style={{
                    height: `${r}px`,
                    background: `rgb(var(--c2))`,
                    transform: `rotate(${i * 15}deg) translateY(-${r / 2}px)`,
                  }}
                />
              );
            })}
          </div>
        );
      default:
        return (
          <div className="h-24 flex items-center justify-center text-white">
            🎵
          </div>
        );
    }
  };

  const getVisualizerIcon = () => {
    switch (visualizerStyle) {
      case "bars":
        return <BarChart3 size={14} />;
      case "wave":
        return <Activity size={14} />;
      case "circle":
        return <Radio size={14} />;
      default:
        return <Radio size={14} />;
    }
  };

  return (
    <>
      {/* 🔥 纯原生音频标签，无任何修改，100%出声 */}
      <audio
        ref={audioRef}
        src={currentTrack.url}
        preload="auto"
      />

      <div
        className="fixed z-50 transition-all duration-500"
        style={{
          bottom: "calc(1.5rem / var(--screen-scale))",
          right: "calc(1.5rem / var(--screen-scale))",
          transform: "scale(var(--screen-scale))",
          transformOrigin: "bottom right",
        }}
      >
        {!isExpanded && (
          <button
            onClick={toggleExpanded}
            className="w-14 h-14 rounded-full flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, rgb(var(--c1)), rgb(var(--c2)))`,
            }}
          >
            <Disc3
              size={24}
              className={`text-white ${isPlaying ? "animate-spin" : ""}`}
            />
          </button>
        )}

        {isExpanded && (
          <div className="w-[360px] p-5 rounded-2xl bg-black/85 backdrop-blur-xl border border-white/10">
            {/* 歌曲信息 */}
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, rgb(var(--c1)), rgb(var(--c2)))`,
                }}
              >
                <Disc3
                  size={20}
                  className={`text-white ${isPlaying ? "animate-spin" : ""}`}
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white text-sm truncate">
                  {currentTrack.name}
                </div>
                <div className="text-white/60 text-xs truncate">
                  {currentTrack.artist}
                </div>
              </div>
              <button
                onClick={toggleExpanded}
                className="w-8 h-8 rounded-full hover:bg-white/10"
              >
                <ChevronDown
                  size={18}
                  className="text-white/60"
                />
              </button>
            </div>

            {/* 可视化 */}
            <div className="relative rounded-lg bg-white/5 mb-3">
              {renderVisualizer()}
              <button
                onClick={cycleVisualizerStyle}
                className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/30 flex items-center justify-center text-white"
              >
                {getVisualizerIcon()}
              </button>
            </div>

            {/* 进度条 */}
            <div className="mb-2">
              <div
                className="h-1.5 bg-white/10 rounded-full cursor-pointer"
                onClick={handleProgressClick}
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[rgb(var(--c1))] to-[rgb(var(--c2))]"
                  style={{
                    width: `${(currentTime / duration) * 100 || 0}%`,
                  }}
                />
              </div>
              <div className="flex justify-between text-xs text-white/50 mt-1">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* 播放控制 */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <button
                onClick={prevTrack}
                disabled={currentTrackIndex === 0}
                className="w-10 h-10 rounded-full hover:bg-white/10"
              >
                <SkipBack size={18} className="text-white" />
              </button>
              <button
                onClick={togglePlay}
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, rgb(var(--c1)), rgb(var(--c2)))`,
                }}
              >
                {isPlaying ? (
                  <Pause size={20} className="text-white" />
                ) : (
                  <Play
                    size={20}
                    className="text-white ml-0.5"
                  />
                )}
              </button>
              <button
                onClick={nextTrack}
                disabled={
                  currentTrackIndex === playlist.length - 1
                }
                className="w-10 h-10 rounded-full hover:bg-white/10"
              >
                <SkipForward size={18} className="text-white" />
              </button>
            </div>

            {/* 音量 */}
            <style>
              {`
  /* 基础样式重置 */
  .volume-slider {
    -webkit-appearance: none;
    appearance: none;
    outline: none;
    border-radius: 999px;
  }
  /* 滑块样式（已生效的小圆点） */
  .volume-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: rgb(var(--c1));
    cursor: pointer;
  }
  .volume-slider::-moz-range-thumb {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: rgb(var(--c1));
    cursor: pointer;
    border: none;
  }
`}
            </style>
            <div className="flex items-center gap-3">
              <button
                onClick={toggleMute}
                className="w-8 h-8 rounded-full hover:bg-white/10"
              >
                {isMuted ? (
                  <VolumeX size={16} className="text-white" />
                ) : (
                  <Volume2 size={16} className="text-white" />
                )}
              </button>

              {/* 🔥 核心：动态渐变实现填充色（100%生效） */}
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={handleVolumeChange}
                className="flex-1 h-1.5 rounded-full volume-slider"
                style={{
                  // 已填充 = 主题色，未填充 = 白色半透明
                  background: `linear-gradient(to right, rgb(var(--c1)) ${volume}%, rgba(255,255,255,0.2) ${volume}%)`,
                }}
              />

              <span className="text-xs text-white w-10 text-right">
                {volume}%
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}