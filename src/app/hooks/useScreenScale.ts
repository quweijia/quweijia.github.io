import { useEffect } from 'react';

/**
 * 4K 屏幕自适应缩放 Hook
 * 检测屏幕分辨率并自动应用缩放，使大屏显示效果放大
 * 基准宽度：1920px（1080P标准宽度）
 */
export function useScreenScale() {
  useEffect(() => {
    const calculateScale = () => {
      const width = window.innerWidth;
      const baseWidth = 1920; // 基准宽度：1080P标准宽度

      let scale = 1;

      // 只对大于基准宽度的屏幕进行缩放
      if (width > baseWidth) {
        // 动态计算缩放比例，最大不超过2.5倍
        scale = Math.min(width / baseWidth, 2.5);
      }

      // 设置 CSS 变量
      document.documentElement.style.setProperty('--screen-scale', scale.toString());
    };

    calculateScale();

    // 防抖处理 resize 事件
    let timer: number;
    const handleResize = () => {
      clearTimeout(timer);
      timer = window.setTimeout(calculateScale, 200);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);
}
